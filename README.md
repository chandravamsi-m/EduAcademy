# Online Tutoring Academy — HTML Template Blueprint

> **Development Blueprint** | Version 1.0
> Prepared for: TEKNR IT Solutions Pvt. Ltd.
> Stack: HTML · CSS · Vanilla JavaScript (No frameworks)

---

## Table of Contents

1. [Template Overview](#1-template-overview)
2. [Architecture Overview](#2-architecture-overview)
3. [Public Website Pages](#3-public-website-pages)
4. [Homepage Layouts](#4-homepage-layouts)
5. [Authentication Pages](#5-authentication-pages)
6. [Student Dashboard Pages](#6-student-dashboard-pages)
7. [Admin Dashboard Pages](#7-admin-dashboard-pages)
8. [Navigation Structure](#8-navigation-structure)
9. [Component Library](#9-component-library)
10. [Feature Breakdown](#10-feature-breakdown)
11. [Folder Structure](#11-folder-structure)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Animation & Interaction Ideas](#13-animation--interaction-ideas)
14. [SEO & Performance Strategy](#14-seo--performance-strategy)
15. [Development Notes](#15-development-notes)

---

## 1. Template Overview

| Property          | Details                                                              |
| ----------------- | -------------------------------------------------------------------- |
| **Template Name** | EduAcademy — Online Tutoring Academy HTML Template                   |
| **Category**      | Educational / LMS (Learning Management System)                       |
| **Target Audience** | Online tutoring platforms, coaching institutes, e-learning academies, individual tutors, and educational startups |
| **Template Purpose** | A full-featured HTML template for an online tutoring academy that enables prospective students to discover courses and tutors, enroll via a clean marketing website, and then access a dedicated student dashboard for live sessions, study materials, progress tracking, and performance monitoring. |

**Two-Color Brand System (per TEKNR Guidelines)**

- **Primary Color** — Used for main CTAs, active nav states, highlighted pricing plan, progress bars, and key interactive elements.
- **Secondary Color** — Used for secondary buttons, badges, tags, hover accents, and supporting UI elements.
- Additional colors (success green, warning amber, error red) are permitted exclusively for metrics, status indicators, and data visualizations inside the dashboard.

---

## 2. Architecture Overview

The template is divided into three distinct layers, each self-contained but sharing a common design system (CSS variables, typography, icon library, and component styles).

```
┌─────────────────────────────────────────────────────┐
│              PUBLIC MARKETING WEBSITE               │
│  Home · About · Courses · Instructors · Blog · etc. │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│              AUTHENTICATION LAYER                   │
│       Login · Sign Up · Forgot · Reset              │
└─────────────────────────────────────────────────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
┌─────────────────────┐   ┌───────────────────────────┐
│   STUDENT DASHBOARD │   │    ADMIN DASHBOARD        │
│  My Courses · Live  │   │  Users · Courses · Tutor  │
│  Sessions · Progress│   │  Mgmt · Reports · Settings│
└─────────────────────┘   └───────────────────────────┘
```

- **Public Website** — Fully responsive marketing site. No login required. Designed to convert visitors into enrolled students.
- **Student Dashboard** — Private, post-login area. Students access enrolled courses, download study materials, join live sessions, take quizzes, and monitor their learning progress.
- **Admin Dashboard** — Back-office management panel for academy administrators. Manages students, instructors, course listings, payments, and platform analytics.

> **Dashboard layout rule (TEKNR):** No navbar or footer on dashboard, login, or sign-up pages. All dashboard pages use a persistent side navigation bar.

---

## 3. Public Website Pages

### 3.1 Core Pages (Required for All Templates)

| # | Page | File | Purpose |
|---|------|------|---------|
| 1 | Home 1 (Classic) | `index.html` | Primary landing — hero, featured courses, stats, testimonials |
| 2 | Home 2 (Premium) | `home-2.html` | Alternative hero layout with video BG and interactive course explorer |
| 3 | About Us | `about.html` | Academy story, mission, team, achievements |
| 4 | Contact | `contact.html` | Contact form, map embed, office details, social links |
| 5 | 404 Error | `404.html` | Custom error page with course search and navigation options |
| 6 | Coming Soon | `coming-soon.html` | Pre-launch / maintenance page with countdown timer and email capture |

### 3.2 LMS-Specific Pages (Educational Template)

| # | Page | File | Purpose |
|---|------|------|---------|
| 7 | Course Catalog | `courses.html` | Filterable, searchable grid of all available courses |
| 8 | Course Detail | `course-detail.html` | Full course page — curriculum, instructor, reviews, enrollment CTA |
| 9 | Instructors | `instructors.html` | Grid listing of all tutors with subject tags and ratings |
| 10 | Instructor Profile | `instructor-profile.html` | Single tutor page — bio, expertise, active courses, student reviews |
| 11 | Blog / Resources | `blog.html` | Educational articles, study tips, academy news |
| 12 | Blog Post | `blog-post.html` | Single article view with related posts and author info |
| 13 | Pricing | `pricing.html` | Subscription or per-course pricing plans with feature comparison table |
| 14 | FAQ | `faq.html` | Accordion-style frequently asked questions, grouped by category |
| 15 | Events / Webinars | `events.html` | Upcoming live webinars, workshops, and open classes |
| 16 | Event Detail | `event-detail.html` | Single event page with registration form and countdown |
| 17 | Testimonials | `testimonials.html` | Full testimonials page with video reviews and success stories |
| 18 | Certificates | `certificates.html` | Public page explaining certification programs and sample certificates |

---

## 4. Homepage Layouts

### Home 1 — Classic Layout

A structured, content-rich layout that guides the visitor sequentially through the academy's value proposition.

| Section # | Section Name | Description |
|-----------|--------------|-------------|
| 1 | **Hero** | Full-width banner with headline, sub-headline, two CTAs (Primary: "Start Learning", Secondary: "Browse Courses"), and a hero illustration or student image. Search bar overlay for quick course search. |
| 2 | **Stats Bar** | Animated counters — Total Students, Courses Available, Expert Instructors, Certificates Issued. |
| 3 | **Featured Categories** | Icon-grid of subject categories (Maths, Science, Languages, Coding, etc.) — clickable cards that link to filtered course catalog. |
| 4 | **Featured Courses** | Horizontal scrollable or 3-column grid of top-rated courses. Each course card shows thumbnail, title, instructor name, rating, duration, and price. |
| 5 | **How It Works** | 3-step process: Browse Courses → Enroll & Pay → Learn & Get Certified. Icon + short description per step. |
| 6 | **Top Instructors** | Horizontal strip of 4–5 instructor cards with photo, name, subject specialty, and student count. |
| 7 | **Live Sessions Promo** | Section highlighting live tutoring — schedule preview, "Join Live" CTA, and a supporting illustration. |
| 8 | **Testimonials** | Student quote cards with name, course completed, star rating, and photo avatar. |
| 9 | **Pricing Preview** | 3 plan cards (Free, Pro, Premium). Popular plan highlighted with Primary button style; others use Secondary button style per TEKNR guidelines. |
| 10 | **Blog Preview** | 3 latest articles with thumbnail, category tag, date, and read-more link. |
| 11 | **CTA Banner** | Full-width enrollment push — "Start your learning journey today" + Primary CTA button. |
| 12 | **Footer** | Logo, tagline, quick links, course category links, social icons, newsletter signup, copyright. |

---

### Home 2 — Premium Layout

An immersive, modern layout with a bolder visual approach and interactive elements.

| Section # | Section Name | Description |
|-----------|--------------|-------------|
| 1 | **Hero** | Split-screen layout — left: headline + CTA + trust badges (student count, rating); right: interactive course preview card or short looping demo video. |
| 2 | **Trusted By** | Logo strip — featured-in press logos or partner institution logos. |
| 3 | **Interactive Course Explorer** | Tab-based course browser (filter by subject/level) with a card grid that updates dynamically via JavaScript. |
| 4 | **Learning Outcomes** | Two-column layout — left: list of key outcomes with checkmark icons; right: a mockup image of the student dashboard. |
| 5 | **Instructor Spotlight** | Full-width feature on a lead instructor — photo, credentials, video intro button, course list. |
| 6 | **Live Session Timeline** | Weekly schedule preview in a visual timetable format showing upcoming live sessions by subject. |
| 7 | **Progress Showcase** | Student success metrics in a visually styled data block — completion rates, job placements, avg. ratings. |
| 8 | **Testimonials (Video)** | Video testimonial cards — play button overlay, student name, course enrolled, result achieved. |
| 9 | **Comparison Table** | Side-by-side feature comparison between Free, Pro, and Premium plans. |
| 10 | **FAQ Accordion** | Top 5 FAQs collapsed by default with smooth expand animation. |
| 11 | **Newsletter CTA** | Dark-background section with email capture field and "Get Free Study Resources" CTA. |
| 12 | **Footer** | Same branding as Home 1 — layout may differ (e.g., 4-column vs 3-column). |

> **TEKNR Rule:** Both homepages must share the same color system and typography. Only layout and content differ. Home 2 is the "Premium" evolution of Home 1.

---

## 5. Authentication Pages

> **TEKNR Rule:** No navbar or footer on Login, Sign Up, or Dashboard pages. All auth pages use card layouts with the logo inside the card. RTL and Dark Mode icons stay in the top-right corner of the page (outside the card).

| Page | File | Key Elements |
|------|------|-------------|
| **Login** | `auth/login.html` | Email + Password fields (vertical stack), Eye icon for password toggle, "Remember Me" + "Forgot Password" on same line, Primary CTA ("Log In") matching input field width, Social login options (Google, Apple), Link to Sign Up |
| **Sign Up** | `auth/signup.html` | Full Name, Email, Password, Confirm Password (all vertical), Eye icons, CTA width matches inputs, Social sign-up options (Google, Apple), Link to Login. No demo credentials shown |
| **Forgot Password** | `auth/forgot-password.html` | Email input field, "Send Reset Link" CTA, Back to Login link, Confirmation message state (same page, JS toggle) |
| **Reset Password** | `auth/reset-password.html` | New Password + Confirm Password fields, Eye icons on both, "Update Password" CTA, Success state with redirect prompt |

---

## 6. Student Dashboard Pages

> Dashboard uses a persistent **side navigation bar** with no scrolling required to access all sections. Every page includes a top bar with notifications bell, profile icon, and logout option. A welcome message appears on the overview page.

### Side Navigation Items (Student)

```
Dashboard (Overview)
├── My Courses
├── Live Sessions
├── Study Materials
├── Assignments
├── Quiz & Tests
├── Progress & Reports
├── Certificates
├── Payments & Invoices
├── Messages
├── Profile
├── Settings
└── Logout
```

### Page Specifications

| # | Page | File | Key Content & Components |
|---|------|------|--------------------------|
| 1 | **Dashboard Overview** | `dashboard/student/index.html` | Welcome message with student name, enrolled course count, upcoming live session alert, progress summary cards, recent activity feed, quick-access links to continue learning |
| 2 | **My Courses** | `dashboard/student/my-courses.html` | Grid of enrolled course cards — thumbnail, course title, instructor, progress bar (% completed), "Continue" CTA; filter by status (In Progress / Completed / Not Started) |
| 3 | **Course Viewer** | `dashboard/student/course-viewer.html` | Left: collapsible curriculum sidebar (modules + lessons); Center: video player or lesson content area; Right: notes panel. Progress auto-saves on completion of each lesson |
| 4 | **Live Sessions** | `dashboard/student/live-sessions.html` | Upcoming sessions calendar/list view — subject, tutor name, date/time, duration, "Join Now" button (active when session is live), past session recordings access |
| 5 | **Study Materials** | `dashboard/student/study-materials.html` | Organised file library per course — PDFs, slides, worksheets. Filter by course or file type. Download button per file. Search bar at top |
| 6 | **Assignments** | `dashboard/student/assignments.html` | List of active and past assignments — title, due date, status (Pending / Submitted / Graded), submission button, grade and tutor feedback on completed items |
| 7 | **Quiz & Tests** | `dashboard/student/quizzes.html` | Available quizzes per course — title, question count, time limit, best score, attempt count, "Start Quiz" CTA. Results modal after completion |
| 8 | **Progress & Reports** | `dashboard/student/progress.html` | Per-course completion percentage bar charts; overall learning hours graph (weekly/monthly toggle); strong/weak subject breakdown; tutor feedback history timeline |
| 9 | **Certificates** | `dashboard/student/certificates.html` | Grid of earned certificates — course name, issue date, certificate preview thumbnail, "Download PDF" and "Share" buttons |
| 10 | **Payments & Invoices** | `dashboard/student/payments.html` | Active subscription plan badge, payment history table (date / description / amount / status), "Download Invoice" per row, "Upgrade Plan" CTA |
| 11 | **Messages** | `dashboard/student/messages.html` | Two-panel layout: left = conversation list (tutor name, last message, timestamp, unread badge); right = chat thread with message bubbles, text input, and attachment option |
| 12 | **Profile** | `dashboard/student/profile.html` | Avatar upload, full name, email (read-only), phone, bio, education level, preferred subjects; "Save Changes" CTA |
| 13 | **Settings** | `dashboard/student/settings.html` | Sections: Password Change, Notification Preferences (email/SMS toggles), Language Preference, Delete Account (danger zone with confirmation modal) |

---

## 7. Admin Dashboard Pages

> Admin dashboard is a separate layout from the student dashboard. Shares the same design system but with distinct admin-specific navigation and a richer data-heavy interface.

### Side Navigation Items (Admin)

```
Admin Dashboard (Overview)
├── User Management
│   ├── All Students
│   └── All Instructors
├── Course Management
│   ├── All Courses
│   ├── Add New Course
│   └── Course Categories
├── Live Sessions
├── Assignments & Quizzes
├── Payments & Revenue
├── Certificates
├── Blog / Resources
├── Messages
├── Reports & Analytics
├── Site Settings
└── Logout
```

### Page Specifications

| # | Page | File | Key Content & Components |
|---|------|------|--------------------------|
| 1 | **Admin Overview** | `dashboard/admin/index.html` | KPI stat cards (total students, active courses, revenue this month, live sessions today); recent enrollments table; revenue bar chart (monthly); top-performing courses list; recent support messages widget |
| 2 | **All Students** | `dashboard/admin/students.html` | Searchable, sortable data table — student name, email, enrolled courses count, join date, status (Active/Suspended); bulk action support; "View Profile" and "Suspend/Activate" per row |
| 3 | **All Instructors** | `dashboard/admin/instructors.html` | Table of all tutors — name, subject specialties, active courses, avg. rating, total students taught; "Edit Profile", "View Courses", and "Deactivate" actions |
| 4 | **All Courses** | `dashboard/admin/courses.html` | Table with course name, category, instructor, enrolled count, status (Published/Draft), creation date; "Edit", "Unpublish", and "Delete" actions; "Add New Course" primary CTA |
| 5 | **Add / Edit Course** | `dashboard/admin/course-form.html` | Multi-step form: (1) Basic Info — title, category, description, thumbnail upload; (2) Curriculum — add modules and lessons; (3) Pricing & Publishing — price, plan eligibility, publish toggle |
| 6 | **Course Categories** | `dashboard/admin/categories.html` | CRUD table of course categories — name, slug, icon, course count, status; inline "Add Category" form |
| 7 | **Live Sessions** | `dashboard/admin/live-sessions.html` | Upcoming and past sessions table — title, instructor, subject, scheduled datetime, student registrations, status (Scheduled/Live/Ended); "Create Session" and "Cancel" actions |
| 8 | **Assignments & Quizzes** | `dashboard/admin/assignments.html` | Overview table of all assignments/quizzes across courses — linked course, created by (instructor), due date, submission count, avg. score |
| 9 | **Payments & Revenue** | `dashboard/admin/payments.html` | Revenue summary cards (today / this week / this month); transaction table (student, plan/course, amount, date, method, status); export to CSV; refund action per row |
| 10 | **Certificates** | `dashboard/admin/certificates.html` | Issued certificates log — student name, course, date issued; "Revoke" action; certificate template settings link |
| 11 | **Blog / Resources** | `dashboard/admin/blog.html` | Post listing table — title, author, category, publish date, status (Published/Draft); "Add Post", "Edit", "Delete" actions |
| 12 | **Reports & Analytics** | `dashboard/admin/reports.html` | Enrollment trends (line chart), revenue over time (bar chart), subject popularity (pie/donut chart), student retention rate, course completion rates per course; date range filter |
| 13 | **Site Settings** | `dashboard/admin/settings.html` | Sections: General (academy name, logo, contact email), Email Notifications (toggle per event type), Payment Gateway (Stripe/PayPal placeholder config), Certificate Template (logo/signature upload), Maintenance Mode toggle |

---

## 8. Navigation Structure

### 8.1 Public Website Navbar

```
Logo | Home ▾ | Courses | Instructors | Resources | Pricing | [Login] [Sign Up]
```

**Home Dropdown (required per specification):**

```
Home ▾
├── Home 1 — Classic
└── Home 2 — Premium
```

**Navbar Rules (TEKNR):**

- Maximum **two CTAs** in the header: "Login" (Secondary) and "Sign Up" (Primary).
- Dashboard link should be the **last link** when a user is logged in (replaces Login/Sign Up).
- Dark Mode toggle icon + RTL toggle icon — consistent size and alignment on the right end of the navbar.
- Both icons must share the same width and height.
- Hamburger menu on mobile; smooth slide-in drawer navigation.

### 8.2 Student Dashboard Sidebar

```
[Academy Logo]
──────────────
📊 Overview
📚 My Courses
🎥 Live Sessions
📁 Study Materials
📝 Assignments
🧩 Quiz & Tests
📈 Progress & Reports
🏆 Certificates
💳 Payments & Invoices
💬 Messages
──────────────
👤 Profile
⚙️ Settings
🚪 Logout
```

### 8.3 Admin Dashboard Sidebar

```
[Academy Logo] [Admin Badge]
──────────────
📊 Overview
👥 User Management
   ↳ Students
   ↳ Instructors
📚 Course Management
   ↳ All Courses
   ↳ Add New Course
   ↳ Categories
🎥 Live Sessions
📝 Assignments & Quizzes
💳 Payments & Revenue
🏆 Certificates
📝 Blog / Resources
💬 Messages
📈 Reports & Analytics
──────────────
⚙️ Site Settings
🚪 Logout
```

> **TEKNR Dashboard Rule:** No unnecessary scrolling in the sidebar. All sections must be visible or accessible via collapsible sub-menus without layout overflow.

---

## 9. Component Library

All components are built as standalone, reusable HTML + CSS blocks. JavaScript components are initialized via `data-` attributes to avoid tight coupling.

### 9.1 Global Components

| Component | File Reference | Notes |
|-----------|---------------|-------|
| **Navbar** | `components/navbar.html` | Includes logo, nav links, Home dropdown, two CTAs, Dark Mode toggle, RTL toggle |
| **Footer** | `components/footer.html` | 4-column layout — branding, quick links, course categories, contact + social |
| **Dark Mode Toggle** | Shared via `main.js` + `dark-mode.css` | System preference auto-detect on page load; toggle persists via `localStorage` |
| **RTL Toggle** | Shared via `main.js` + `rtl.css` | Flips layout direction; all flex/grid layouts must be direction-aware |
| **Breadcrumbs** | `components/breadcrumbs.html` | Used on inner pages for navigation context |
| **Cookie Banner** | `components/cookie-banner.html` | GDPR-style dismissible bar at bottom of page |

### 9.2 Public Page Components

| Component | Description |
|-----------|-------------|
| **Hero Banner** | Configurable for Home 1 (standard) and Home 2 (split/video) |
| **Course Card** | Thumbnail, title, instructor name, rating stars, duration, price, "Enroll" CTA |
| **Instructor Card** | Photo, name, subject badges, star rating, student count, "View Profile" link |
| **Testimonial Card** | Avatar, student name, enrolled course, star rating, quote text |
| **Pricing Card** | Plan name, price, feature list, CTA button (Popular = Primary, Others = Secondary) |
| **Blog Post Card** | Thumbnail, category tag, date, title, excerpt, "Read More" link |
| **Stats Counter** | Animated number counter — triggers on scroll into viewport |
| **Category Card** | Icon, subject name, course count — links to filtered catalog |
| **Event Card** | Event title, date/time, tutor, topic tags, "Register" CTA |
| **FAQ Accordion** | Expandable question/answer rows, smooth height animation |
| **Search Bar** | Input + search icon button, used in hero and course catalog |
| **Filter Bar** | Tag/chip filters for course level, subject, price range, duration |

### 9.3 Authentication Components

| Component | Description |
|-----------|-------------|
| **Auth Card** | Centered card with logo, form fields, CTA, and social login buttons |
| **Form Input** | Labelled input field with error state, success state, and helper text |
| **Password Input** | Input with Eye icon toggle for visibility |
| **Social Login Button** | Google / Apple branded buttons with proper logos |
| **Alert Message** | Inline success / error alert for form submission feedback |

### 9.4 Dashboard Components

| Component | Description |
|-----------|-------------|
| **Sidebar Nav** | Fixed left sidebar with icon + label items, active state highlight, collapsible sub-menus |
| **Top Bar** | Page title, notification bell (with unread badge), profile avatar dropdown (Profile / Settings / Logout) |
| **Stat Card** | Metric label, large number, trend indicator (↑↓), and optional icon |
| **Progress Bar** | Labelled horizontal bar — course completion percentage |
| **Data Table** | Sortable, searchable table with pagination, action buttons per row, and bulk selection |
| **Chart Widget** | Wrapper div sized for Chart.js or plain SVG charts — bar, line, pie/donut |
| **Course Progress Card** | Dashboard variant of course card with progress bar and "Continue" CTA |
| **Assignment Row** | Compact list item — title, due date, status badge, action button |
| **Quiz Result Modal** | Overlay modal — score, correct/incorrect breakdown, retry or continue CTA |
| **Certificate Card** | Preview thumbnail, course name, date issued, download + share buttons |
| **Chat Message Bubble** | User-sent (right-aligned, primary color) and received (left-aligned, neutral) |
| **Notification Item** | Icon, message text, timestamp, unread dot indicator |
| **Upload Zone** | Drag-and-drop file upload area with progress bar |
| **Status Badge** | Pill-shaped label: Active (green), Pending (amber), Completed (blue), Failed (red) |
| **Modal / Dialog** | Reusable overlay: confirm actions, previews, form submissions |
| **Skeleton Loader** | Gray shimmer placeholder for cards, tables, and content areas during load states |

---

## 10. Feature Breakdown

### 10.1 Public Website Features

| Feature | Implementation Notes |
|---------|---------------------|
| **Course Search** | Live JS filter on catalog page by title keyword; on hero as a quick-access search bar |
| **Course Filtering** | Client-side filter by subject, level (Beginner/Intermediate/Advanced), price (Free/Paid), duration |
| **Course Enrollment CTA** | "Enroll Now" button on course detail page — links to Sign Up (if unauthenticated) or checkout flow |
| **Instructor Discovery** | Subject-tagged instructor grid with individual profile pages and course listings |
| **Live Session Promotion** | "Upcoming Live Sessions" section on homepage with schedule preview |
| **Testimonial Showcase** | Carousel or card grid with student photo, course name, rating, and outcome |
| **Pricing Comparison** | 3-plan pricing table with feature toggle (Monthly/Yearly billing switch) |
| **Event Registration** | Event detail page with simple registration form (name + email) and confirmation state |
| **Newsletter Signup** | Email capture form — Mailchimp/ConvertKit integration-ready placeholder |
| **Contact Form** | Name, email, subject, message — Formspree/Netlify Forms compatible |
| **Google Maps Embed** | Placeholder `<iframe>` block on contact page ready for API key insertion |

### 10.2 Student Dashboard Features

| Feature | Implementation Notes |
|---------|---------------------|
| **Enrolled Course Access** | Filterable course grid with progress state persisted in `localStorage` for prototype |
| **Video Lesson Viewer** | HTML5 `<video>` player with custom controls; lesson completion tracking via JS |
| **Curriculum Sidebar** | Collapsible module tree inside course viewer; lessons marked complete with checkmark |
| **Live Session Join** | Session cards show countdown to start time; "Join Now" button activates when session is live (time-based JS logic) |
| **Study Material Downloads** | File library grouped by course; each file shows type icon and "Download" anchor link |
| **Assignment Submission** | File upload zone + optional text box per assignment; submission confirmation state |
| **Quiz Engine** | Multi-question quiz flow — one question at a time, timer countdown, result screen at end |
| **Progress Charts** | Per-course completion bar and overall weekly hours graph using lightweight charting |
| **Certificate Download** | Certificate rendered as a styled HTML page printable to PDF via browser print dialog |
| **In-App Messaging** | Static chat UI (two-panel layout) with a conversation list and message thread view |
| **Notification Center** | Bell icon with dropdown showing unread notifications; "Mark all read" action |
| **Dark/Light Mode** | Preference persisted in `localStorage`; auto-detected from OS on first visit |

### 10.3 Admin Dashboard Features

| Feature | Implementation Notes |
|---------|---------------------|
| **Platform Analytics** | Enrollment trend charts, revenue over time, subject popularity — using Chart.js or inline SVG charts |
| **User Management** | Full CRUD UI (add/edit/suspend/delete) for both students and instructors |
| **Course Builder UI** | Multi-step form to create/edit courses with curriculum management |
| **Revenue Overview** | Transaction table with filter by date range; export-ready (CSV download via JS Blob API) |
| **Live Session Scheduler** | Form to schedule a new session — title, instructor, date/time, subject, max attendees |
| **Certificate Issuance Log** | Record of all issued certificates with revoke capability |
| **Site-Wide Settings** | Toggle maintenance mode, update branding elements (logo, contact info), configure notification events |

---

## 11. Folder Structure

```
eduacademy-template/
│
├── assets/
│   ├── css/
│   │   ├── style.css             # Global styles, CSS variables, typography
│   │   ├── dark-mode.css         # Dark mode overrides
│   │   ├── rtl.css               # RTL layout overrides
│   │   ├── dashboard.css         # Shared dashboard layout styles
│   │   └── components.css        # Reusable component styles
│   │
│   ├── js/
│   │   ├── main.js               # Global: dark mode, RTL, navbar, scroll effects
│   │   ├── course-filter.js      # Course catalog client-side filtering
│   │   ├── quiz.js               # Quiz engine logic
│   │   ├── progress.js           # Progress tracking (localStorage prototype)
│   │   ├── dashboard.js          # Dashboard sidebar, top bar, notification panel
│   │   ├── charts.js             # Chart initialization for dashboard analytics
│   │   └── plugins/
│   │       └── [minimal plugins only — e.g., Swiper for sliders if needed]
│   │
│   ├── images/
│   │   ├── hero/                 # Hero section images (Home 1, Home 2)
│   │   ├── courses/              # Course thumbnail placeholders
│   │   ├── instructors/          # Instructor/tutor photo placeholders
│   │   ├── students/             # Testimonial student avatar placeholders
│   │   ├── icons/                # Any custom SVG icon assets
│   │   ├── logo.svg              # Template logo (light version)
│   │   ├── logo-dark.svg         # Template logo (dark version)
│   │   └── certificates/         # Certificate design assets
│   │
│   └── fonts/                    # Self-hosted Google Fonts (if needed for offline use)
│
├── pages/
│   ├── index.html                # Home 1 — Classic
│   ├── home-2.html               # Home 2 — Premium
│   ├── about.html
│   ├── courses.html              # Course catalog
│   ├── course-detail.html        # Single course page
│   ├── instructors.html
│   ├── instructor-profile.html
│   ├── blog.html
│   ├── blog-post.html
│   ├── pricing.html
│   ├── faq.html
│   ├── events.html
│   ├── event-detail.html
│   ├── testimonials.html
│   ├── certificates.html
│   ├── contact.html
│   ├── 404.html
│   └── coming-soon.html
│
├── auth/
│   ├── login.html
│   ├── signup.html
│   ├── forgot-password.html
│   └── reset-password.html
│
├── dashboard/
│   ├── student/
│   │   ├── index.html            # Student overview
│   │   ├── my-courses.html
│   │   ├── course-viewer.html
│   │   ├── live-sessions.html
│   │   ├── study-materials.html
│   │   ├── assignments.html
│   │   ├── quizzes.html
│   │   ├── progress.html
│   │   ├── certificates.html
│   │   ├── payments.html
│   │   ├── messages.html
│   │   ├── profile.html
│   │   └── settings.html
│   │
│   └── admin/
│       ├── index.html            # Admin overview
│       ├── students.html
│       ├── instructors.html
│       ├── courses.html
│       ├── course-form.html
│       ├── categories.html
│       ├── live-sessions.html
│       ├── assignments.html
│       ├── payments.html
│       ├── certificates.html
│       ├── blog.html
│       ├── messages.html
│       ├── reports.html
│       └── settings.html
│
├── documentation/
│   ├── installation.md
│   ├── customization.md
│   ├── page-structure.md
│   ├── credits.md
│   └── changelog.md
│
└── README.md                     # This blueprint document
```

---

## 12. Responsive Design Strategy

The template follows a **mobile-first** approach. All layouts are designed for the smallest viewport first, then enhanced progressively for larger screens.

### Breakpoints

```css
/* Mobile   */ @media (max-width: 639px)   { ... }
/* Tablet   */ @media (min-width: 640px)   { ... }
/* Desktop  */ @media (min-width: 1024px)  { ... }
/* Large    */ @media (min-width: 1280px)  { ... }
```

### Behavior Per Viewport

| Element | Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|---------|-----------------|---------------------|---------------------|
| **Navbar** | Hidden links, hamburger menu → full-screen slide drawer | Hamburger or condensed nav | Full horizontal nav with CTAs and toggles |
| **Course Grid** | 1 column | 2 columns | 3–4 columns |
| **Hero Section** | Stacked (image below text), reduced font sizes | Side-by-side or stacked | Full split-screen or full-width with overlay |
| **Dashboard Sidebar** | Hidden by default, toggled via hamburger → overlay drawer | Collapsible icon-only mode | Full sidebar always visible |
| **Data Tables** | Horizontally scrollable or collapsed to card-stack view | Horizontal scroll | Full table display |
| **Stats Bar** | 2×2 grid | 4 in a row | 4 in a row with larger numbers |
| **Pricing Cards** | Stacked (1 column) | 3 columns or 2+1 | 3 columns side by side |
| **Footer** | Single column stacked | 2 columns | 4 columns |
| **Hover Effects** | Replaced with tap states (CSS `:active`) — per TEKNR guidelines | Partial hover support | Full hover effects enabled |
| **Touch Targets** | Minimum 44×44px for all interactive elements | Standard | Standard |
| **Animations** | Reduced or disabled (respect `prefers-reduced-motion`) | Moderate | Full animations |

### Mobile-Specific Requirements

- Hamburger menu replaces full navigation on all screens below 1024px.
- Avoid hover-dependent interactions on course cards and instructor cards — use tap states or persistent visible info instead.
- Dashboard sidebar collapses to a bottom navigation bar or an icon-strip on mobile.
- Image sizes use `srcset` and `sizes` attributes to serve appropriately scaled assets.
- Tables that cannot collapse gracefully get a horizontal scroll wrapper (`overflow-x: auto`).
- Font sizes must remain legible — minimum 16px base font to prevent iOS auto-zoom on inputs.

---

## 13. Animation & Interaction Ideas

All animations must be subtle and purposeful. They should enhance comprehension and feedback — not distract. All animations must respect `prefers-reduced-motion: reduce`.

### Public Website Animations

| Animation | Element | Implementation |
|-----------|---------|----------------|
| **Scroll-Triggered Fade In** | Course cards, feature sections, testimonials | CSS `opacity` + `translateY` transition triggered via `IntersectionObserver` |
| **Animated Stat Counters** | Stats bar numbers | JS counter that increments from 0 on scroll-into-view |
| **Hero Image Parallax** | Home 2 hero background | Subtle `transform: translateY()` on scroll — disabled on mobile |
| **Navbar Sticky Shadow** | Navbar on scroll | CSS `box-shadow` added via JS scroll listener after 80px scroll depth |
| **Course Card Hover** | Course card image zoom + CTA reveal | CSS transform scale on `.course-card:hover .thumbnail` |
| **Category Card Hover** | Icon lift + color fill | CSS `translateY(-4px)` + icon color transition |
| **Pricing Card Highlight** | Popular plan scale-up | CSS `transform: scale(1.05)` on the recommended plan card |
| **FAQ Accordion** | Expand/collapse | `max-height` CSS transition from 0 to auto via JS-set inline height |
| **Smooth Page Scroll** | Anchor links | `scroll-behavior: smooth` on `html` element |

### Dashboard Animations

| Animation | Element | Implementation |
|-----------|---------|----------------|
| **Sidebar Active Indicator** | Active nav item | Animated left-border highlight via CSS transition |
| **Page Transition** | Dashboard content area on nav click | Subtle `opacity` + `translateX` fade-in when switching sections |
| **Stat Card Count-Up** | KPI numbers on overview page | Same JS counter pattern as public stats bar |
| **Progress Bar Fill** | Course progress bars | CSS `width` transition from 0% to value% on load |
| **Chart Draw-In** | Analytics charts | Chart.js built-in animation — bars grow from baseline, lines draw left to right |
| **Notification Slide** | Bell dropdown | CSS `translateY` + `opacity` transition for dropdown reveal |
| **Quiz Option Feedback** | Correct/incorrect answer | Brief green flash for correct, red shake animation for incorrect |
| **Skeleton Loaders** | Content loading states | CSS gradient shimmer animation on placeholder blocks |
| **Modal Entrance** | Confirm/preview overlays | `scale(0.95)` → `scale(1)` + `opacity` fade-in |
| **Toast Notifications** | Action confirmation (save, submit) | Slide-in from top-right, auto-dismiss after 3 seconds |

---

## 14. SEO & Performance Strategy

### On-Page SEO

| Element | Implementation |
|---------|---------------|
| **Title Tags** | Unique per page, max 60 characters. Format: `Page Name — EduAcademy` |
| **Meta Descriptions** | Unique per page, 150–160 characters, action-oriented |
| **H1 Tags** | Exactly one H1 per page, in the hero or page header |
| **Heading Hierarchy** | H1 → H2 → H3 strictly maintained — no skipping levels |
| **Image Alt Text** | All `<img>` tags include descriptive `alt` attributes |
| **Image Format** | WebP as primary format; JPEG/PNG fallback via `<picture>` element |
| **Structured Data** | JSON-LD on homepage (Organization schema) and course pages (Course schema) |
| **Canonical Tags** | `<link rel="canonical">` on all indexable pages |
| **Open Graph Tags** | `og:title`, `og:description`, `og:image` on all public pages for social sharing |
| **XML Sitemap** | `sitemap.xml` template included — lists all public pages |
| **robots.txt** | Production-ready — blocks `/auth/`, `/dashboard/` from indexing |

### Performance Targets

| Metric | Target |
|--------|--------|
| PageSpeed Score | 90+ on both mobile and desktop |
| Largest Contentful Paint (LCP) | < 2.5 seconds |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |

### Performance Implementation

- CSS and JS files are delivered minified in the production build (`style.min.css`, `main.min.js`).
- Render-blocking CSS is inlined for above-the-fold critical styles.
- All JS files are loaded with `defer` attribute to avoid blocking HTML parsing.
- Hero images use `loading="eager"` with explicit `width` and `height` to prevent layout shift.
- All below-fold images use `loading="lazy"`.
- Google Fonts are loaded via `display=swap` and preconnect hints.
- External plugin scripts are minimized — only load what is used on the specific page.
- `prefers-reduced-motion` media query disables all decorative animations for users who prefer it.

---

## 15. Development Notes

### Code Quality Standards

| Standard | Requirement |
|----------|-------------|
| **HTML** | Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Proper heading hierarchy. W3C valid markup. |
| **CSS** | CSS custom properties (variables) for the entire color system, spacing scale, and typography. BEM naming convention recommended for component classes. |
| **JavaScript** | ES6+ syntax. Modular structure — one responsibility per file. No `console.log` statements in production builds. No inline JavaScript in HTML files. |
| **Accessibility** | WCAG 2.1 AA compliance. All interactive elements keyboard-navigable. ARIA labels on icon-only buttons. Sufficient color contrast ratios. Focus-visible outlines. Screen reader tested. |
| **Comments** | Section headers in all HTML files (`<!-- ===== HERO SECTION ===== -->`). JSDoc-style function comments in JS. CSS files divided with comment-based section headers. TODO comments at all customization points. |

### Spacing System

Use an 8px base grid throughout. Recommended scale:

```
4px  — xs (micro gaps, icon padding)
8px  — sm (component internal spacing)
16px — md (default section padding)
24px — lg (card padding, form groups)
32px — xl (section gaps)
48px — 2xl (major section separation)
64px — 3xl (hero padding, large feature blocks)
```

### Color System (CSS Variables)

```css
:root {
  --color-primary:        #[chosen];       /* Main CTAs, active states */
  --color-primary-light:  #[lighter tint]; /* Hover states, backgrounds */
  --color-secondary:      #[chosen];       /* Secondary buttons, accents */
  --color-success:        #22c55e;         /* Status: completed, passed */
  --color-warning:        #f59e0b;         /* Status: pending, in-progress */
  --color-error:          #ef4444;         /* Status: failed, error */
  --color-bg:             #ffffff;         /* Page background (light mode) */
  --color-surface:        #f8fafc;         /* Card/section background */
  --color-text:           #1e293b;         /* Body text */
  --color-text-muted:     #64748b;         /* Secondary text */
  --color-border:         #e2e8f0;         /* Dividers, input borders */
}

[data-theme="dark"] {
  --color-bg:             #0f172a;
  --color-surface:        #1e293b;
  --color-text:           #f1f5f9;
  --color-text-muted:     #94a3b8;
  --color-border:         #334155;
}
```

### Typography

- Use a maximum of **2 font families** (per TEKNR Guidelines).
- Recommended pairing from Google Fonts: one for headings (e.g., Inter, Plus Jakarta Sans) + same or a companion for body.
- Load via `<link rel="preconnect">` + `<link rel="stylesheet">` in `<head>`.

### Icon Library

- Use **Lucide Icons** or **Heroicons** (per TEKNR Guidelines) — avoid colored icons.
- Load via CDN `<script>` tag or reference compiled SVG sprites.
- All icon-only buttons must include `aria-label` attribute.
- Dark Mode and RTL toggle icons must be identical in width and height.

### Dark Mode Implementation

1. On initial load, check `localStorage.getItem('theme')`. If not set, check `window.matchMedia('(prefers-color-scheme: dark)')`.
2. Apply `data-theme="dark"` attribute to the `<html>` element.
3. Toggle class on button click and persist preference in `localStorage`.
4. `dark-mode.css` overrides only the CSS variable values — no layout changes.

### RTL Implementation

1. RTL toggle sets `dir="rtl"` on the `<html>` element.
2. `rtl.css` overrides margin/padding directional properties and flips flex/grid directions.
3. All layouts must use logical CSS properties where possible (`margin-inline-start` over `margin-left`).
4. Sidebar and navbar must mirror correctly under RTL.

### Integrations (Placeholder-Ready)

| Integration | Placeholder Location | Notes |
|-------------|---------------------|-------|
| Contact Form | `contact.html` + `auth/` forms | Formspree `action` URL placeholder |
| Newsletter | Footer + Home 1 CTA section | Mailchimp form `action` URL placeholder |
| Google Maps | `contact.html` | `<iframe>` with `[YOUR_GOOGLE_MAPS_EMBED_URL]` comment |
| Payment Buttons | `pricing.html`, `course-detail.html` | Stripe/PayPal button placeholder divs |
| Video Player | `dashboard/student/course-viewer.html` | HTML5 `<video>` with placeholder `src`; YouTube/Vimeo embed option noted in comment |
| Calendar / Booking | `dashboard/student/live-sessions.html` | Booking system integration point noted in code comments |

### Quality Checklist Before Submission

- [ ] All pages validated with W3C HTML Validator — zero errors
- [ ] No broken internal links (`<a href="">` verified on all pages)
- [ ] Fully responsive on mobile (375px), tablet (768px), and desktop (1440px)
- [ ] Cross-browser tested: Chrome, Firefox, Safari, Edge
- [ ] Dark Mode and Light Mode work correctly on all pages and components
- [ ] RTL layout properly applied and tested
- [ ] All images optimized — WebP format primary, proper `alt` text on every image
- [ ] All forms include client-side validation with clear error messages
- [ ] Keyboard navigation works on all interactive elements
- [ ] ARIA attributes present on all icon-only buttons and interactive components
- [ ] Screen reader testing performed (VoiceOver / NVDA)
- [ ] SEO elements in place on all public pages (title, meta description, og tags, structured data)
- [ ] PageSpeed Insights score verified: 90+ on mobile and desktop
- [ ] No `console.log` statements in production JS
- [ ] Documentation complete and accurate
- [ ] License and third-party credits properly attributed in `documentation/credits.md`
- [ ] Skeleton loaders implemented on all dashboard content areas
- [ ] Dashboard sidebar nav — all sections unique, fully designed and populated with meaningful content
- [ ] Pricing page: Popular plan uses Primary button; other plans use Secondary button
- [ ] Auth pages: No navbar/footer; logo inside card; RTL + Dark Mode icons in top-right corner
- [ ] Home 1 and Home 2 share identical color system — only layout and content differ

---

*Blueprint prepared based on TEKNR IT Solutions Website Design & Development Guidelines and the HTML Template Development Guide.*
*This document is the single source of truth for the EduAcademy template development.*
