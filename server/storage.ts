import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { sql } from "drizzle-orm";
import { 
  type User, 
  type InsertUser, 
  type ContactMessage, 
  type InsertContactMessage,
  type BlogPost,
  type InsertBlogPost,
  type WorkProject,
  type InsertWorkProject,
  users,
  contactMessages,
  blogPosts,
  workProjects
} from "@shared/schema";
import { eq } from "drizzle-orm";

const { Pool } = pg;

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // Blog
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Work
  getWorkProjects(): Promise<WorkProject[]>;
  getWorkProjectBySlug(slug: string): Promise<WorkProject | undefined>;
  createWorkProject(project: InsertWorkProject): Promise<WorkProject>;
}

export class DbStorage implements IStorage {
  private db;

  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    this.db = drizzle(pool);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const result = await this.db.insert(contactMessages).values(message).returning();
    return result[0];
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await this.db.select().from(contactMessages);
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await this.db.select().from(blogPosts).orderBy(sql`${blogPosts.createdAt} DESC`);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await this.db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return result[0];
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await this.db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async getWorkProjects(): Promise<WorkProject[]> {
    return await this.db.select().from(workProjects).orderBy(sql`${workProjects.createdAt} DESC`);
  }

  async getWorkProjectBySlug(slug: string): Promise<WorkProject | undefined> {
    const result = await this.db.select().from(workProjects).where(eq(workProjects.slug, slug));
    return result[0];
  }

  async createWorkProject(project: InsertWorkProject): Promise<WorkProject> {
    const result = await this.db.insert(workProjects).values(project).returning();
    return result[0];
  }
}

export const storage = new DbStorage();
