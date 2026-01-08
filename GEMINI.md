## Project Overview: Personal Branding Portfolio

**Developer/Creator:** Kaushik Tambe (a.k.a. 'K') (Graphic Designer, Video Editor, and Full-Stack Programmer, Writer)

**Project Goal:** A high-performance, cross-platform portfolio website and mobile app designed to showcase high-fidelity creative work and provide a seamless lead-generation funnel.

## 🎨 Creative Vision & UI/UX

* **Aesthetic:** Sleek, clean, and minimal. The design should feel "modern yet elegant," prioritizing your visual work (video/graphics) without UI clutter.
* **Philosophy:** Functionality-first UX that translates perfectly from a desktop browser to a mobile app.
* **Key UI Components:**
* **Embla Carousel:** For high-end video/graphic sliders.
* **Framer Motion:** For sophisticated, smooth transitions between pages and project views.
* **Vaul & Radix:** Using drawers and primitives to maintain a "native app" feel on mobile.



---

## 🛠 Tech Stack

### Frontend (Web & Mobile)

* **Core:** React v19 + Vite v7 (Next-gen performance).
* **Cross-Platform:** Capacitor v8 (Packaging the web app for iOS/Android).
* **Styling:** Tailwind CSS v4 + PostCSS (Using the latest CSS-first configuration).
* **UI Library:** daisyUI for speed, supplemented by Radix UI for accessible primitives.
* **Routing:** `wouter` (Lightweight alternative to React Router).
* **State & Data:** TanStack Query for efficient server-state management.

### Backend & Database

* **Runtime:** Node.js with Express.
* **Database:** PostgreSQL (Relational data for users, projects, and future merch).
* **ORM:** Drizzle ORM (Type-safe, lightweight, and performant).
* **Authentication:** Passport.js (Local strategy for admin access).
* **Local AI:** Integration with **Ollama** for local LLM features (e.g., automated query sorting or personalized chatbot interactions).

### Communications & Tools

* **Email:** Resend (For sending contact form notifications).
* **Validation:** Zod (Used for both frontend forms and backend schema validation).
* **Icons:** Lucide React.
* **Toasts:** Sonner.

---

## 🚀 Core Features & Workflows

### 1. The "Query Flow" (Lead Gen)

* **Trigger:** Modal-based contact forms built with Radix and React Hook Form.
* **Action:** 1.  User details are validated via **Zod**.
2.  Data is stored in **PostgreSQL** via **Drizzle**.
3.  A notification is sent to the admin via **Resend**.

### 2. Multi-Media Portfolio

* Dedicated sections for **Video Editing** (optimized embeds/players) and **Graphic Design** (high-resolution galleries).
* Programming projects showcased via integrated GitHub stats or technical case studies.

### 3. Future Scalability (E-commerce)

* Architecture is prepped for a "Merch Store" module.
* PostgreSQL schema includes placeholders for product listings and transaction logs.

---

## 📋 Development Standards

* **Language:** Strict TypeScript (via `tsc` and `tsx`).
* **Responsiveness:** Mobile-first approach, ensuring the Capacitor build feels like a native application.
* **Performance:** Utilizing Vite v7 and React 19 features (like Actions and improved transitions) to ensure near-instant load times.