# Project To-Do List

## 🚨 High Priority (Core Infrastructure)

- [ ] **Authentication System**
  - [ ] Implement `Passport.js` strategy in `server/index.ts` or `server/auth.ts`.
  - [ ] Create API endpoints: `/api/login`, `/api/logout`, `/api/user`.
  - [ ] Protect admin routes with middleware (ensure only authorized users can post/edit).
- [ ] **Admin Dashboard (CMS)**
  - [ ] Create `/admin` route and protected layout.
  - [ ] **Blog Management:**
    - [ ] UI for listing all posts.
    - [ ] Create/Edit Post form (Rich text editor or Markdown editor).
    - [ ] Connect to `POST /api/blog` (Need to create this endpoint).
  - [ ] **Work/Project Management:**
    - [ ] UI for listing projects.
    - [ ] Create/Edit Project form.
    - [ ] Connect to `POST /api/work` (Need to create this endpoint).
- [ ] **Backend CMS Endpoints**
  - [ ] Add `POST /api/blog` route.
  - [ ] Add `PUT /api/blog/:id` route.
  - [ ] Add `DELETE /api/blog/:id` route.
  - [ ] Add `POST /api/work` route.
  - [ ] Add `PUT /api/work/:id` route.
  - [ ] Add `DELETE /api/work/:id` route.

## 🎨 Frontend & UI/UX

- [ ] **AI Chatbot Integration**
  - [ ] Create `ChatWidget` component.
  - [ ] Connect to `POST /api/chat`.
  - [ ] Implement UI for chat history and loading states.
- [ ] **Portfolio Polish**
  - [ ] Verify `Framer Motion` page transitions.
  - [ ] Test `Embla Carousel` with actual media assets.
  - [ ] ensure `Vaul` drawer works correctly on mobile view.
- [ ] **SEO & Meta**
  - [ ] Add dynamic `<title>` and `<meta>` tags for Blog and Work details pages.

## 📱 Mobile (Capacitor)

- [ ] **Configuration**
  - [ ] Review `capacitor.config.ts`.
  - [ ] Ensure safe area insets are handled in `index.html` or main layout.
- [ ] **Build Pipeline**
  - [ ] Run `npx cap sync` to sync web assets.
  - [ ] Test Android build (if environment allows) or document build steps.

## 🗄️ Database & Content

- [ ] **Seeding**
  - [ ] Create a seed script to populate initial Admin user.
  - [ ] Create dummy data for Blog and Work projects for testing.
- [ ] **E-commerce (Future)**
  - [ ] Design schema for `products` and `orders`.

## ✅ Completed (Verified)

- [x] **Project Setup:** Vite + React + TypeScript + Tailwind.
- [x] **Database Schema:** Users, ContactMessages, BlogPosts, WorkProjects tables defined.
- [x] **Basic Backend:** Express server with Drizzle ORM setup.
- [x] **Public API:** GET routes for Blog and Work.
- [x] **Contact Form:** Implementation with Zod validation and Resend email.
- [x] **Mobile Config:** Capacitor dependencies installed.
- [x] **Deployment:** Dockerfile created with multi-stage build.
