# Learning-management-system - Documentation

## Project Overview

This repository contains the source code for an LMS (Learning Management System) application. The app allows users to sign in, sign up, browse courses, view course details, and interact with course chapters. It is built using Next.js, TypeScript, and Tailwind CSS.

The main folder, `lms-app`, contains the core application code. Key files include `next.config.js` for configuring Next.js, `tailwind.config.js` for Tailwind CSS settings, and `tsconfig.json` for TypeScript configuration. The `app` folder houses the React components, organized into sections for authentication, courses, and the dashboard. 

The `actions` folder contains TypeScript files for fetching data, such as course details and user progress. The `components` folder within each course and chapter page holds smaller, reusable components like sidebars and buttons. This structure allows for modular, maintainable code.

The target users of this application are students looking to browse and enroll in courses, as well as teachers who can manage their courses and view analytics. The app provides a comprehensive interface for both roles within the LMS.

## Architecture

```markdown
## Architecture

### Overview

The `lms-app` codebase is structured to support a Learning Management System (LMS) with a clear separation of concerns, leveraging Next.js for server-side rendering and routing. The architecture is designed to be modular, allowing for easy maintenance and scalability.

### Directory Structure

- **`lms-app/`**: Root directory containing configuration files, actions, and the main application code.
  - **`actions/`**: Contains asynchronous data fetching functions (`get-analytics.ts`, `get-chapters.ts`, etc.) that interact with the backend API.
  - **`app/`**: Main application directory with subdirectories for different features (`auth`, `course`, `dashboard`).
    - **`auth/`**: Handles authentication-related routes and components.
    - **`course/`**: Manages course-related pages and components.
    - **`dashboard/`**: Contains dashboard-specific layouts, routes, and components.

### Key Files and Their Roles

- **`next.config.js`**: Configures Next.js settings, including custom routes and server-side rendering options.
- **`tailwind.config.js`**: Configures Tailwind CSS for styling components.
- **`tsconfig.json`**: TypeScript configuration file ensuring type safety across the codebase.
- **`globals.css`**: Defines global CSS styles applied throughout the application.
- **`layout.tsx`**: Main layout component that wraps around pages, providing a consistent structure.

### Data Flow

Data flows through the system primarily via asynchronous actions defined in the `actions/` directory. These actions fetch data from the backend API and pass it down to components via props or context. Components then render the UI based on this data.

### Design Patterns

- **Modularization**: The codebase is divided into distinct modules (`auth`, `course`, `dashboard`), each responsible for a specific feature.
- **Component-Based Architecture**: UI is built using reusable React components, promoting code reuse and maintainability.
- **Server-Side Rendering (SSR)**: Next.js is used to pre-render pages on the server, improving performance and SEO.

### Main Entry Points

- **`app/layout.tsx`**: The main layout component that wraps all pages, providing a consistent structure and global styles.
- **`app/(auth)/(routes)/sign-in/[[...sign-in]]/page.tsx`**: Entry point for the sign-in page.
- **`app/(course)/courses/[courseId]/page.tsx`**: Entry point for course pages.
- **`app/(dashboard)/(routes)/(root)/page.tsx`**: Entry point for the dashboard root page.

### Practical Notes for New Team Members

- **Understanding the Module Structure**: Familiarize yourself with the modular structure to quickly locate and modify specific features.
- **Using Actions for Data Fetching**: Leverage the actions in the `actions/` directory for data fetching to ensure consistency and reduce redundancy.
- **Component Reusability**: Look for opportunities to create reusable components to maintain a clean and efficient codebase.
- **Type Safety**: Utilize TypeScript to ensure type safety and catch errors early in the development process.
```

## Directory Structure

```
├── README.md
├── lms-app/
│   ├── .eslintrc.json
│   ├── README.md
│   ├── components.json
│   ├── middleware.ts
│   ├── next.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── actions/
│   │   ├── get-analytics.ts
│   │   ├── get-chapters.ts
│   │   ├── get-courses.ts
│   │   ├── get-dashboard-courses.ts
│   │   └── get-progress.ts
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   └── (routes)/
│   │   │       ├── sign-in/
│   │   │       │   └── [[...sign-in]]/
│   │   │       │       └── page.tsx
│   │   │       └── sign-up/
│   │   │           └── [[...sign-up]]/
│   │   │               └── page.tsx
│   │   ├── (course)/
│   │   │   └── courses/
│   │   │       └── [courseId]/
│   │   │           ├── layout.tsx
│   │   │           ├── page.tsx
│   │   │           ├── _components/
│   │   │           │   ├── course-mobile-sidebar.tsx
│   │   │           │   ├── course-navbar.tsx
│   │   │           │   ├── course-sidebar-item.tsx
│   │   │           │   └── course-sidebar.tsx
│   │   │           └── chapters/
│   │   │               └── [chapterId]/
│   │   │                   ├── page.tsx
│   │   │                   └── _components/
│   │   │                       ├── course-enroll-button.tsx
│   │   │                       ├── course-progress-button.tsx
│   │   │                       └── video-player.tsx
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   ├── (routes)/
│   │   │   │   ├── (root)/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── _components/
│   │   │   │   │       └── info-card.tsx
│   │   │   │   ├── search/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── _components/
│   │   │   │   │       ├── categories.tsx
│   │   │   │   │       └── category-item.tsx
│   │   │   │   └── teacher/
│   │   │   │       ├── analytics/
│   │   │   │       │   ├── page.tsx
│   │   │   │       │   └── _components/
│   │   │   │       │       ├── chart.tsx
│   │   │   │       │       └── data-card.tsx
│   │   │   │       ├── courses/
│   │   │   │       │   ├── page.tsx
│   │   │   │       │   ├── [courseId]/
│   │   │   │       │   │   ├── page.tsx
│   │   │   │       │   │   ├── _components/
│   │   │   │       │   │   │   ├── actions.tsx
│   │   │   │       │   │   │   ├── attachments-form.tsx
│   │   │   │       │   │   │   ├── category-form.tsx
│   │   │   │       │   │   │   ├── chpater-form.tsx
│   │   │   │       │   │   │   ├── chpaters-list.tsx
│   │   │   │       │   │   │   ├── description-form.tsx
│   │   │   │       │   │   │   ├── image-form.tsx
│   │   │   │       │   │   │   ├── price-form.tsx
│   │   │   │       │   │   │   └── title-form.tsx
│   │   │   │       │   │   └── chapters/
│   │   │   │       │   │       └── [chapterId]/
│   │   │   │       │   │           ├── page.tsx
│   │   │   │       │   │           └── _components/
│   │   │   │       │   │               ├── chapter-access-form.tsx
│   │   │   │       │   │               ├── chapter-actions.tsx
│   │   │   │       │   │               ├── chapter-description-form.tsx
│   │   │   │       │   │               ├── chapter-title-form.tsx
│   │   │   │       │   │               └── chapter-video-form.tsx
│   │   │   │       │   └── _components/
│   │   │   │       │       ├── columns.tsx
│   │   │   │       │       └── data-table.tsx
│   │   │   │       └── create/
│   │   │   │           └── page.tsx
│   │   │   └── _components/
│   │   │       ├── logo.tsx
│   │   │       ├── mobile-sidebar.tsx
│   │   │       ├── navbar.tsx
│   │   │       ├── sidebar-item.tsx
│   │   │       ├── sidebar-routes.tsx
│   │   │       └── sidebar.tsx
│   │   └── api/
│   │       ├── courses/
│   │       │   ├── route.ts
│   │       │   └── [courseId]/
│   │       │       ├── route.ts
│   │       │       ├── attachments/
│   │       │       │   ├── route.ts
│   │       │       │   └── [attachmentIdx]/
│   │       │       │       └── route.ts
│   │       │       ├── chapters/
│   │       │       │   ├── route.ts
│   │       │       │   ├── [chapterId]/
│   │       │       │   │   ├── route.ts
│   │       │       │   │   └── progress/
│   │       │       │   │       └── route.ts
│   │       │       │   └── reorder/
│   │       │       │       └── route.ts
│   │       │       └── checkout/
│   │       │           └── route.ts
│   │       ├── uploadthing/
│   │       │   ├── core.ts
│   │       │   └── route.ts
│   │       └── webhook/
│   │           └── route.ts
│   ├── components/
│   │   ├── banner.tsx
│   │   ├── course-card.tsx
│   │   ├── course-progress.tsx
│   │   ├── courses-list.tsx
│   │   ├── editor.tsx
│   │   ├── file-upload.tsx
│   │   ├── icon-bage.tsx
│   │   ├── navbar-routes.tsx
│   │   ├── preview.tsx
│   │   ├── search-input.tsx
│   │   ├── modals/
│   │   │   └── confirm-modal.tsx
│   │   ├── providers/
│   │   │   ├── confetti-provider.tsx
│   │   │   └── toaster-provider.tsx
│   │   └── ui/
│   │       ├── alert-dialog.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── combobox.tsx
│   │       ├── command.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── table.tsx
│   │       └── textarea.tsx
│   ├── hooks/
│   │   ├── use-confetti-store.ts
│   │   └── use-debounce.ts
│   ├── lib/
│   │   ├── format.ts
│   │   ├── stripe.ts
│   │   ├── teacher.ts
│   │   ├── uploadthing.ts
│   │   └── utils.ts
│   └── public/
│       ├── logo.svg
│       ├── next.svg
│       └── vercel.svg
├── lms-backend/
│   ├── app.js
│   ├── package.json
│   ├── controllers/
│   │   ├── category-controller.js
│   │   ├── chapter-controller.js
│   │   ├── course-controller.js
│   │   └── stripeCustomer-controller.js
│   ├── models/
│   │   ├── category-model.js
│   │   ├── chapter-model.js
│   │   ├── course-model.js
│   │   └── stripeCustomer-model.js
│   └── routes/
│       ├── category-route.js
│       ├── chapter-route.js
│       ├── course-route.js
│       └── stripeCustomer-route.js
└── nitinog10-Learning-management-system-ac95fd2/
    ├── README.md
    ├── lms-app/
    │   ├── .eslintrc.json
    │   ├── README.md
    │   ├── components.json
    │   ├── middleware.ts
    │   ├── next.config.js
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── tailwind.config.js
    │   ├── tsconfig.json
    │   ├── actions/
    │   │   ├── get-analytics.ts
    │   │   ├── get-chapters.ts
    │   │   ├── get-courses.ts
    │   │   ├── get-dashboard-courses.ts
    │   │   └── get-progress.ts
    │   ├── app/
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   ├── (auth)/
    │   │   │   ├── layout.tsx
    │   │   │   └── (routes)/
    │   │   │       ├── sign-in/
    │   │   │       │   └── [[...sign-in]]/
    │   │   │       │       └── page.tsx
    │   │   │       └── sign-up/
    │   │   │           └── [[...sign-up]]/
    │   │   │               └── page.tsx
    │   │   ├── (course)/
    │   │   │   └── courses/
    │   │   │       └── [courseId]/
    │   │   │           ├── layout.tsx
    │   │   │           ├── page.tsx
    │   │   │           ├── _components/
    │   │   │           │   ├── course-mobile-sidebar.tsx
    │   │   │           │   ├── course-navbar.tsx
    │   │   │           │   ├── course-sidebar-item.tsx
    │   │   │           │   └── course-sidebar.tsx
    │   │   │           └── chapters/
    │   │   │               └── [chapterId]/
    │   │   │                   ├── page.tsx
    │   │   │                   └── _components/
    │   │   │                       ├── course-enroll-button.tsx
    │   │   │                       ├── course-progress-button.tsx
    │   │   │                       └── video-player.tsx
    │   │   ├── (dashboard)/
    │   │   │   ├── layout.tsx
    │   │   │   ├── (routes)/
    │   │   │   │   ├── (root)/
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   └── _components/
    │   │   │   │   │       └── info-card.tsx
    │   │   │   │   ├── search/
    │   │   │   │   │   ├── page.tsx
    │   │   │   │   │   └── _components/
    │   │   │   │   │       ├── categories.tsx
    │   │   │   │   │       └── category-item.tsx
    │   │   │   │   └── teacher/
    │   │   │   │       ├── analytics/
    │   │   │   │       │   ├── page.tsx
    │   │   │   │       │   └── _components/
    │   │   │   │       │       ├── chart.tsx
    │   │   │   │       │       └── data-card.tsx
    │   │   │   │       ├── courses/
    │   │   │   │       │   ├── page.tsx
    │   │   │   │       │   ├── [courseId]/
    │   │   │   │       │   │   ├── page.tsx
    │   │   │   │       │   │   ├── _components/
    │   │   │   │       │   │   │   ├── actions.tsx
    │   │   │   │       │   │   │   ├── attachments-form.tsx
    │   │   │   │       │   │   │   ├── category-form.tsx
    │   │   │   │       │   │   │   ├── chpater-form.tsx
    │   │   │   │       │   │   │   ├── chpaters-list.tsx
    │   │   │   │       │   │   │   ├── description-form.tsx
    │   │   │   │       │   │   │   ├── image-form.tsx
    │   │   │   │       │   │   │   ├── price-form.tsx
    │   │   │   │       │   │   │   └── title-form.tsx
    │   │   │   │       │   │   └── chapters/
    │   │   │   │       │   │       └── [chapterId]/
    │   │   │   │       │   │           ├── page.tsx
    │   │   │   │       │   │           └── _components/
    │   │   │   │       │   │               ├── chapter-access-form.tsx
    │   │   │   │       │   │               ├── chapter-actions.tsx
    │   │   │   │       │   │               ├── chapter-description-form.tsx
    │   │   │   │       │   │               ├── chapter-title-form.tsx
    │   │   │   │       │   │               └── chapter-video-form.tsx
    │   │   │   │       │   └── _components/
    │   │   │   │       │       ├── columns.tsx
    │   │   │   │       │       └── data-table.tsx
    │   │   │   │       └── create/
    │   │   │   │           └── page.tsx
    │   │   │   └── _components/
    │   │   │       ├── logo.tsx
    │   │   │       ├── mobile-sidebar.tsx
    │   │   │       ├── navbar.tsx
    │   │   │       ├── sidebar-item.tsx
    │   │   │       ├── sidebar-routes.tsx
    │   │   │       └── sidebar.tsx
    │   │   └── api/
    │   │       ├── courses/
    │   │       │   ├── route.ts
    │   │       │   └── [courseId]/
    │   │       │       ├── route.ts
    │   │       │       ├── attachments/
    │   │       │       │   ├── route.ts
    │   │       │       │   └── [attachmentIdx]/
    │   │       │       │       └── route.ts
    │   │       │       ├── chapters/
    │   │       │       │   ├── route.ts
    │   │       │       │   ├── [chapterId]/
    │   │       │       │   │   ├── route.ts
    │   │       │       │   │   └── progress/
    │   │       │       │   │       └── route.ts
    │   │       │       │   └── reorder/
    │   │       │       │       └── route.ts
    │   │       │       └── checkout/
    │   │       │           └── route.ts
    │   │       ├── uploadthing/
    │   │       │   ├── core.ts
    │   │       │   └── route.ts
    │   │       └── webhook/
    │   │           └── route.ts
    │   ├── components/
    │   │   ├── banner.tsx
    │   │   ├── course-card.tsx
    │   │   ├── course-progress.tsx
    │   │   ├── courses-list.tsx
    │   │   ├── editor.tsx
    │   │   ├── file-upload.tsx
    │   │   ├── icon-bage.tsx
    │   │   ├── navbar-routes.tsx
    │   │   ├── preview.tsx
    │   │   ├── search-input.tsx
    │   │   ├── modals/
    │   │   │   └── confirm-modal.tsx
    │   │   ├── providers/
    │   │   │   ├── confetti-provider.tsx
    │   │   │   └── toaster-provider.tsx
    │   │   └── ui/
    │   │       ├── alert-dialog.tsx
    │   │       ├── badge.tsx
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── checkbox.tsx
    │   │       ├── combobox.tsx
    │   │       ├── command.tsx
    │   │       ├── dialog.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── form.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── popover.tsx
    │   │       ├── progress.tsx
    │   │       ├── separator.tsx
    │   │       ├── sheet.tsx
    │   │       ├── table.tsx
    │   │       └── textarea.tsx
    │   ├── hooks/
    │   │   ├── use-confetti-store.ts
    │   │   └── use-debounce.ts
    │   ├── lib/
    │   │   ├── format.ts
    │   │   ├── stripe.ts
    │   │   ├── teacher.ts
    │   │   ├── uploadthing.ts
    │   │   └── utils.ts
    │   └── public/
    │       ├── logo.svg
    │       ├── next.svg
    │       └── vercel.svg
    └── lms-backend/
        ├── app.js
        ├── package.json
        ├── controllers/
        │   ├── category-controller.js
        │   ├── chapter-controller.js
        │   ├── course-controller.js
        │   └── stripeCustomer-controller.js
        ├── models/
        │   ├── category-model.js
        │   ├── chapter-model.js
        │   ├── course-model.js
        │   └── stripeCustomer-model.js
        └── routes/
            ├── category-route.js
            ├── chapter-route.js
            ├── course-route.js
            └── stripeCustomer-route.js
```

## Dependencies

No dependency manifest found.

## File Reference

This section contains detailed documentation for each source file in the repository.

### `README.md`
**Language:** Md

File too large for inline documentation.

---

### `lms-app/.eslintrc.json`
**Language:** Json

#### Overview

# lms-app/.eslintrc.json

#### Module Overview

This file configures ESLint for the `lms-app` module. It extends a predefined set of rules from `next/core-web-vitals`, ensuring consistent code quality and style across the project.

#### Dependencies

- **`next/core-web-vitals`**: Provides a set of ESLint rules focused on core web vitals and best practices for Next.js applications.

#### Configuration

| Configuration | Purpose |
|---------------|---------|
| `extends`     | Uses predefined rules from `next/core-web-vitals`. |

#### Notes

- This configuration ensures that the `lms-app` module adheres to Next.js best practices and maintains consistent code quality.
- No additional customizations are included in this file. If further customization is needed, it should be added directly in this configuration file.

---

### `lms-app/README.md`
**Language:** Md

#### Overview

# lms-app/README.md

#### Module Overview

This file serves as the entry point for our LMS application, providing essential setup instructions, dependencies, and overviews of key components. It's designed to help new developers get up to speed quickly and understand the structure and functionality of the application.

#### Dependencies

| Dependency | Purpose |
|------------|---------|
| `create-next-app` | Bootstraps the Next.js project. |
| `next/font` | Optimizes and loads custom Google Fonts. |

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `runDev` | N/A | N/A | Starts the development server. |

#### Notes

- The development server can be started using `npm run dev`, `yarn dev`, or `pnpm dev`.
- Editing `app/page.tsx` will automatically update the page in the browser.
- The project uses `next/font` to optimize and load the custom Google Font Inter.
- For deployment, Vercel is recommended as it's the platform created by Next.js maintainers.

---

### `lms-app/components.json`
**Language:** Json

#### Overview

# lms-app/components.json

#### Module Overview

This file defines configuration settings for our component library, specifying styles, imports, and aliases used across the LMS application. It ensures consistency and streamlines the development process by centralizing these settings.

#### Dependencies

- **$schema**: Defines the JSON schema for validation.
- **tailwind**: Configuration for Tailwind CSS, including the base color and CSS variable settings.
- **aliases**: Shortcuts for frequently used paths to simplify imports.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|------------|
| N/A   | N/A     | N/A         |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| N/A      | N/A        | N/A     | N/A         |

#### Configuration

| Key              | Value            | Description                  |
|------------------|------------------|------------------------------|
| `$schema`        | URL              | JSON schema for validation   |
| `style`          | `default`        | Default styling configuration|
| `rsc`            | `true`           | Enables resource configuration|
| `tsx`            | `true`           | Enables TypeScript and JSX   |
| `tailwind.config`| `tailwind.config.js` | Tailwind CSS configuration file |
| `css`            | `app/globals.css`| Global CSS file             |
| `baseColor`      | `slate`          | Base color for Tailwind theme|
| `cssVariables`   | `true`           | Enables CSS variables        |

#### Notes

- Ensure that all paths in `aliases` are correctly set to avoid import errors.
- Changes to the `tailwind` configuration will affect all components using Tailwind CSS.
- The `$schema` URL should always be kept up-to-date to ensure validation accuracy.

---

### `lms-app/middleware.ts`
**Language:** Typescript

#### Overview

# lms-app/middleware.ts

#### Module Overview

This file configures authentication middleware for the LMS application using Clerk's Next.js library. It ensures that certain routes are protected, while allowing others to be publicly accessible.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `authMiddleware` | Provides the middleware functionality for authentication. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `authMiddleware` | Configuration object | Middleware function | Configures authentication middleware for protected routes |

#### Configuration

| Key | Value | Description |
| --- | --- | --- |
| `publicRoutes` | `["/api/uploadthing", "/api/webhook"]` | Routes that are publicly accessible without authentication |
| `matcher` | `['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']` | Route patterns to match for middleware application |

#### Notes

- The `publicRoutes` array specifies routes that do not require authentication.
- The `matcher` configuration determines which routes the middleware applies to.
- Comments in the code indicate how to adjust the configuration to allow other routes to be public.

---

### `lms-app/next.config.js`
**Language:** Javascript

#### Overview

# lms-app/next.config.js

This file configures the Next.js framework for our project. It specifies settings for image domains to optimize image loading.

#### Dependencies

- `import('next').NextConfig`: This is the Next.js configuration type.

#### Configuration

| Configuration | Purpose |
|---------------|---------|
| `images.domains` | Specifies allowed domains for image loading. |

#### Notes

- The `images.domains` array includes domains from which images can be loaded. Adding a domain here allows Next.js to optimize images from that source.
- Ensure that any new image domains you add are included in this configuration to benefit from Next.js's image optimization features.

---

### `lms-app/package.json`
**Language:** Json

#### Overview

```markdown
# `lms-app/package.json` Overview

This file defines the project metadata and dependencies for the `lms-app` module. It's essential for managing the project's build, development, and testing processes.

#### Dependencies

| Dependency | Purpose |
|------------|---------|
| `@clerk/nextjs` | Authentication for Next.js applications |
| `@hookform/resolvers` | Validation resolvers for React Hook Form |
| `@mux/mux-node` | Mux API client for Node.js |
| `@radix-ui/react-alert-dialog` | Accessible alert dialog component |
| `@tanstack/react-table` | Headless table component for React |
| `axios` | Promise-based HTTP client |
| `clsx` | Utility for constructing className strings conditionally |
| `next` | Framework for server-rendered React applications |
| `react` | Library for building user interfaces |
| `react-hook-form` | React hooks for managing forms |
| `react-hot-toast` | Simple, accessible toast notifications |
| `stripe` | Payment processing library |
| `tailwindcss` | Utility-first CSS framework |
| `zustand` | State management library for React |

#### Scripts

| Script | Description |
|--------|-------------|
| `dev` | Starts the application in development mode |
| `build` | Builds the application for production |
| `start` | Starts the application in production mode |
| `lint` | Runs ESLint to check for code quality issues |

#### Notes

- Ensure all dependencies are up-to-date to avoid compatibility issues.
- The `devDependencies` section includes tools specifically for development, like `prisma` for database management.
- When adding new dependencies, consider their impact on bundle size and performance.
```

---

### `lms-app/postcss.config.js`
**Language:** Javascript

#### Overview

# lms-app/postcss.config.js

This file configures PostCSS plugins for the project, specifically enabling Tailwind CSS and Autoprefixer.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `tailwindcss` | Integrates Tailwind CSS for utility-first styling. |
| `autoprefixer` | Automatically adds vendor prefixes to CSS rules using values from Can I Use. |

#### Configuration

| Setting | Purpose |
| --- | --- |
| `plugins.tailwindcss` | Enables Tailwind CSS. |
| `plugins.autoprefixer` | Enables Autoprefixer. |

#### Notes

- Tailwind CSS is configured without any options, using its default settings.
- Autoprefixer is also configured without any options, using its default settings.
- This configuration assumes that the project is set up to use PostCSS.

---

### `lms-app/tailwind.config.js`
**Language:** Javascript

#### Overview

# lms-app/tailwind.config.js

This file configures Tailwind CSS for the LMS application, integrating custom utilities and themes to ensure a consistent design system.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `withUt` from `uploadthing/tw` | Utility to integrate Uploadthing with Tailwind CSS |

#### Configuration

| Key | Value | Description |
| --- | --- | --- |
| `darkMode` | `["class"]` | Enables dark mode via class toggling |
| `content` | Array of file paths | Specifies where Tailwind should look for class names |
| `theme` | Object | Customizations to the default theme |
| `plugins` | Array | Plugins to extend Tailwind's functionality |

#### Classes

There are no classes defined in this file.

#### Functions

There are no functions defined in this file.

#### Notes

- The `withUt` function is used to integrate Uploadthing with Tailwind CSS, ensuring that any custom utilities provided by Uploadthing are available in the project.
- The `theme` section allows for extensive customization of the default Tailwind CSS theme, including colors, spacing, and animations.
- Ensure that any custom CSS variables (e.g., `--border`, `--primary`) are defined in your CSS or a global stylesheet to avoid runtime errors.

---

### `lms-app/tsconfig.json`
**Language:** Json

#### Overview

# lms-app/tsconfig.json

#### Module Overview

This file configures the TypeScript compiler for the LMS application. It sets compiler options, module resolution, and includes/excludes specific files for compilation.

#### Dependencies

- **TypeScript**: The primary dependency, used for compiling and type-checking TypeScript files.

#### Configuration

| Setting | Purpose |
| --- | --- |
| `target` | Sets the ECMAScript target version (`es5`). |
| `lib` | Includes library files for DOM, DOM iterable extensions, and ESNext features. |
| `allowJs` | Allows JavaScript files to be compiled. |
| `skipLibCheck` | Skips type checking of all declaration files (`.d.ts`). |
| `strict` | Enables all strict type-checking options. |
| `forceConsistentCasingInFileNames` | Ensures consistent casing in file names. |
| `noEmit` | Prevents the compiler from emitting output files. |
| `esModuleInterop` | Enables interoperability between CommonJS and ES modules. |
| `module` | Sets the module code generation mode (`esnext`). |
| `moduleResolution` | Specifies module resolution preference (`bundler`). |
| `resolveJsonModule` | Allows importing `.json` files. |
| `isolatedModules` | Ensures each file can be transpiled without relying on other files. |
| `jsx` | Sets JSX code generation mode (`preserve`). |
| `incremental` | Enables incremental compilation. |
| `plugins` | Adds custom plugins, such as `next`. |
| `paths` | Sets path mappings for aliases, like `@/*` to `./*`. |

#### Notes

- `noEmit` is set to `true`, meaning this configuration file does not produce any compiled output directly.
- `isolatedModules` ensures that each file is compiled independently, which can help with tree-shaking and module bundling.
- The `paths` setting allows for cleaner imports using aliases, such as `import something from '@/path'`.

---

### `lms-app/actions/get-analytics.ts`
**Language:** Typescript

#### Overview

# lms-app/actions/get-analytics.ts

#### Module Overview

This file defines the `getAnalytics` function, which fetches course data from the backend and calculates analytics like total revenue and total sales for a given user.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making requests to the backend API. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getAnalytics` | `userId: string` | `Promise<{ data: Array<{ name: string, total: number }>, totalRevenue: number, totalSales: number }>` | Fetches course data and calculates total revenue and total sales for the given user. |

#### Notes

- The function fetches course data from the backend and groups it by course title.
- It calculates the total revenue by multiplying the number of purchased instances of each course by its price.
- In case of an error, it returns an empty data array and zero for total revenue and total sales.

---

### `lms-app/actions/get-chapters.ts`
**Language:** Typescript

#### Overview

# File: `lms-app/actions/get-chapters.ts`

#### Module Overview

This file defines an asynchronous function `getChapters` that fetches course and chapter data from the backend. It takes user, chapter, and course identifiers, and returns a structured object containing the course, chapter, and related data.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `axios` | HTTP client for making requests to the backend. |
| `console.error` | For logging errors. |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `getChapters` | `{ userId: string, chapterId: string, courseId: string }` | `Promise<{ course: any, chapter: any, muxData: string | null, attachments: string[], nextChapter: {_id: string} | null, isCompleted: boolean | null, purchased: boolean | null }>` | Fetches and returns course and chapter data based on the provided IDs. |

#### Notes

- The function assumes that the backend environment variable `BACK_END_URL` is set.
- If either the course or chapter is not found, an error is thrown.
- The function handles both free and purchased chapters, providing different data based on the user's purchase status.
- Always handle the returned `null` values for optional properties like `chapter`, `nextChapter`, and `muxData`.

---

### `lms-app/actions/get-courses.ts`
**Language:** Typescript

#### Overview

# `lms-app/actions/get-courses.ts`

#### Module Overview

This file defines the `getCourses` function, which fetches a list of courses from the backend, optionally filtered by category or title, and enriches each course with progress data and chapter length.

#### Dependencies

| Import | Purpose |
|--------|---------|
| `axios` | HTTP client for making requests to the backend. |
| `getProgress` | Function from `get-progress.ts` that calculates the progress of a course for a user. |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `getCourses` | `{ userId: string; title?: string; categoryId?: string }` | `Promise<Array<{ _id: string; purchased: { [key: string]: boolean }; categoryId: string; progress?: number; chaptersLength: number; category: string }>>` | Fetches courses from the backend, enriches them with progress and chapter length data, and returns the list. |

#### Notes

- The function uses environment variables to construct URLs for backend requests.
- Error handling is minimal; it logs the error and returns an empty array.
- The function assumes that the backend is correctly handling requests and returning valid data.
- Progress and chapter length data are only fetched if the user has not purchased the course.

---

### `lms-app/actions/get-dashboard-courses.ts`
**Language:** Typescript

#### Overview

# lms-app/actions/get-dashboard-courses.ts

This file defines an asynchronous function `GetDashboardCourses` that fetches and processes a user's courses from the backend, categorizing them into completed and in-progress courses.

#### Dependencies

| Import | Description |
| --- | --- |
| `axios` | HTTP client for making requests to the backend. |
| `getProgress` | Function to retrieve the progress of a course for a user. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `GetDashboardCourses` | `userId: string` | `Promise<DashboardCourses>` | Fetches and processes the user's courses into completed and in-progress lists. |

#### Types

| Type | Description |
| --- | --- |
| `DashboardCourses` | A type representing the structure of the returned data, containing arrays of completed and in-progress courses. |

#### Notes

- The function relies on environment variables to construct backend URLs.
- Error handling is minimal; it logs the error and returns empty arrays if something goes wrong.
- The `getProgress` function is used to determine the progress of each course for the user.
- The `categories` data is fetched once and used to enrich each course with its category name.

---

### `lms-app/actions/get-progress.ts`
**Language:** Typescript

#### Overview

# lms-app/actions/get-progress.ts

#### Module Overview

This file defines the `getProgress` function, which calculates a user's progress in a given course by querying the backend API for published chapters and determining which ones the user has completed.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making API requests to the backend. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getProgress` | `userId: string`, `courseId: string` | `Promise<number[]>` | Fetches published chapters for a course and calculates the progress percentage based on completed chapters by the user. |

#### Notes

- The function returns an array with two elements: the total number of published chapters and the progress percentage.
- If an error occurs during the API request, it logs the error and returns `[0, 0]`.
- The progress percentage is calculated as the ratio of completed chapters to total published chapters, multiplied by 100.

---

### `lms-app/app/globals.css`
**Language:** Css

#### Overview

# `lms-app/app/globals.css`

This file defines the global CSS styles for the LMS application, setting up base styles, color themes, and importing necessary third-party styles.

#### Dependencies

- `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`: These imports bring in the base, components, and utilities provided by Tailwind CSS, a utility-first CSS framework.

- `@import "~@uploadthing/react/styles.css";`: Imports styles from the `@uploadthing/react` package, likely for handling file uploads.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `:root` | Sets global CSS variables for light theme. | N/A |
| `.dark` | Sets global CSS variables for dark theme. | N/A |

#### Configuration

This file uses Tailwind CSS's `@apply` directive to apply utility classes directly in CSS, streamlining the styling process.

#### Notes

- The CSS variables defined in `:root` and `.dark` are used throughout the application to maintain a consistent theme. Changing these variables will update the corresponding styles globally.
- The `@layer base` directive is used to ensure these styles are applied before other styles, providing a solid base for the application's design.
- Ensure any new styles or variables added here are also considered in the light and dark themes to maintain consistency.

---

### `lms-app/app/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/layout.tsx

#### Module Overview

This file defines the root layout component for the application. It sets up the global context providers for authentication and UI notifications, applies a global font, and wraps the children components in necessary providers.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `globals.css` | Global styles for the application. |
| `Metadata` | Type for metadata configuration. |
| `Inter` | Google font provider for the application. |
| `ClerkProvider` | Context provider for authentication. |
| `ToasterProvider` | Context provider for UI notifications. |
| `ConfettiProvider` | Context provider for confetti animations. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `inter` | Instance of the `Inter` font | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `RootLayout` | `children` (`React.ReactNode`) | `JSX.Element` | Renders the root layout with global providers and the provided children. |

#### Configuration

| Configuration | Purpose |
| --- | --- |
| `metadata` | Defines the metadata for the application. |

#### Notes

- The `ClerkProvider` wraps the entire application to provide authentication context.
- The `ToasterProvider` and `ConfettiProvider` are used for UI notifications and animations respectively.
- The global font `Inter` is applied to the body of the HTML.
- The `metadata` object defines the title and description of the application.

---

### `lms-app/app/(auth)/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(auth)/layout.tsx

This file defines a functional component `AuthLayout` that serves as a layout wrapper for authentication-related pages. It centers its children both vertically and horizontally within a full-height div.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `React` | Provides the React library for building the component. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| None | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `AuthLayout` | `{children: React.ReactNode}` | `JSX.Element` | A functional component that renders centered children within a full-height div. |

#### Notes

- The `AuthLayout` component is designed to provide a simple, centered layout for any children components passed to it.
- This layout is specifically intended for use within authentication-related pages, ensuring a consistent and user-friendly interface.

---

### `lms-app/app/(auth)/(routes)/sign-in/[[...sign-in]]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `SignUpPage` component, which renders the sign-in form using the `SignIn` component from the `@clerk/nextjs` library. It exists to provide a user interface for users to sign in to the application.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `@clerk/nextjs` | Provides the `SignIn` component for handling authentication. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `SignUpPage` | The main component for the sign-in page. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `SignUpPage` | None | JSX element | Renders the sign-in form. |

#### Notes

- The `SignIn` component handles all authentication logic, including form submission and state management.
- Ensure that the `@clerk/nextjs` package is installed and configured correctly in the project.
- This component does not contain any custom logic beyond rendering the `SignIn` component.

---

### `lms-app/app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `SignUpPage` component, which renders the sign-up form using the `SignUp` component from the `@clerk/nextjs` library. It exists to provide a user interface for new users to create an account on the platform.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `SignUp` | A pre-built component from `@clerk/nextjs` that handles the sign-up process. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `SignUpPage` | The main functional component that renders the sign-up form. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `SignUpPage` | None | JSX element | Renders the `SignUp` component for user sign-up. |

#### Notes

- The `SignUp` component handles all the logic for user registration, including form validation and API interactions.
- Ensure that the `@clerk/nextjs` package is installed and configured correctly in your project for this component to work.
- This page is part of the authentication routes and should be protected or accessible based on your application's routing and authorization logic.

---

### `lms-app/app/(course)/courses/[courseId]/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(course)/courses/[courseId]/layout.tsx

#### Module Overview

This file defines the layout component for a specific course in the Learning Management System (LMS). It integrates the course sidebar and navbar, fetches course and chapter data, and ensures the user is authenticated before rendering the layout.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `auth` | Authenticates the user using Clerk. |
| `axios` | Makes HTTP requests to fetch course and chapter data. |
| `redirect` | Redirects unauthenticated users to the home page. |
| `CourseSidebar` | Displays the sidebar for the course. |
| `CourseNavbar` | Displays the navigation bar for the course. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseLayout` | Main layout component for a course. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseLayout` | `{ children: React.ReactNode; params: { courseId: string } }` | JSX element | Renders the layout with the sidebar, navbar, and main content area. |

#### Configuration or Constants

| Constant | Purpose |
| --- | --- |
| `process.env.BACK_END_URL` | Base URL for the backend API. |

#### Notes

- Ensure the `userId` is available before fetching course and chapter data to avoid errors.
- The layout conditionally renders the sidebar and navbar based on the viewport size.
- Unauthenticated users are redirected to the home page if no `userId` is present.
- The `CourseNavbar` and `CourseSidebar` components are placeholders for actual components that will be implemented later.

---

### `lms-app/app/(course)/courses/[courseId]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file, `lms-app/app/(course)/courses/[courseId]/page.tsx`, handles the initial navigation for a specific course in the Learning Management System (LMS). When a user accesses a course page, it fetches the published chapters for that course and redirects to the first published chapter.

# Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | Used for making HTTP requests to fetch course chapters. |
| `redirect` | A utility from Next.js to handle client-side navigation. |

# Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| None | N/A | N/A |

# Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseIdPage` | `{ params: { courseId: string } }` | `void` | Fetches published chapters for the given course ID and redirects to the first chapter. |

# Notes

- The file uses environment variables to construct the API URL.
- If no chapters are published for the course, the user is redirected to the home page.
- Ensure that the `BACK_END_URL` environment variable is correctly set in the deployment environment.

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-mobile-sidebar.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(course)/courses/[courseId]/_components/course-mobile-sidebar.tsx`

#### Module Overview

This file defines a React component `CourseMobileSidebar` that renders a mobile-friendly sidebar for course navigation. It uses a slide-out menu (`Sheet`) to display the course sidebar, which lists course chapters and their completion status.

#### Dependencies

| Import | Source | Purpose |
| --- | --- | --- |
| `Menu` | `lucide-react` | Icon used for the sidebar trigger. |
| `Sheet`, `SheetContent`, `SheetTrigger` | `@/components/ui/sheet` | Components for the slide-out menu. |
| `CourseSidebar` | `./course-sidebar` | Subcomponent that displays the course details and chapters. |
| `auth` | `@clerk/nextjs` | Provides the current user's ID. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseMobileSidebar` | Main component for the mobile sidebar. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseMobileSidebar` | `courseMobileSidebarProps` | JSX element | Renders the mobile sidebar with the course and chapters. |

#### Configuration or Constants

- None

#### Notes

- The `Sheet` component is used to create a slide-out menu that is only visible on mobile devices (`md:hidden`).
- The `SheetTrigger` uses the `Menu` icon to toggle the sidebar.
- The `SheetContent` contains the `CourseSidebar` component, which receives the `userId`, `course`, and `chapters` as props.
- The `userId` is fetched using the `auth` hook from `@clerk/nextjs`.

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-navbar.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(course)/courses/[courseId]/_components/course-navbar.tsx`

#### Module Overview

This file defines the `CourseNavbar` component, which renders the navigation bar for a specific course. It includes the mobile sidebar and the navigation routes for the course.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `NavbarRoutes` | Component for rendering navigation routes. |
| `CourseMobileSidebar` | Component for displaying the mobile sidebar for the course. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseNavbar` | Main component for the course navigation bar. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseNavbar` | `course` | N/A | Course object containing title and purchased status. `chapters` | Array of chapters with details like ID, title, completion status, and purchase status. | JSX element | Renders the navigation bar with the mobile sidebar and navigation routes. |

#### Notes

- The `CourseNavbar` component receives `course` and `chapters` as props.
- The `CourseMobileSidebar` component is conditionally rendered within `CourseNavbar`.
- The `NavbarRoutes` component is always rendered within `CourseNavbar`.
- The `progressCount` prop is commented out and not currently used in this component.

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx`

#### Module Overview

This file defines a `CourseSidebarItem` component that represents an individual course item in the sidebar of a course module. It displays an icon, label, and conditionally changes styles based on the course's completion and lock status.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `cn` | Utility function for conditionally joining class names. |
| `CheckCircle`, `Lock`, `PlayCircle` | Icons used to visually represent the course status. |
| `usePathname`, `useRouter` | Hooks for navigation and determining the current pathname. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseSidebarItem` | `_id`, `label`, `isCompleted`, `isLocked`, `courseId` | JSX element | Renders a clickable course item with appropriate styling and navigation. |

#### Configuration or Constants

| Name | Type | Description |
| --- | --- | --- |
| `Icon` | React Component | Conditionally selects an icon based on `isLocked` and `isCompleted` flags. |

#### Notes

- The `Icon` component switches between `Lock`, `CheckCircle`, and `PlayCircle` based on the course's lock and completion status.
- The button's `onClick` handler navigates to the course's chapter list when clicked.
- Conditional classes are applied to change the button's appearance based on its active state, completion status, and lock status.
- The `isActive` flag determines if the current path includes the course's `_id`, indicating the active course item.

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-sidebar.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `course-sidebar.tsx` file defines the `CourseSidebar` component, which is a sidebar component used in the course pages. It displays the course title, a progress bar for completed chapters, and a list of chapters with their completion status.

# Dependencies

| Import | Description |
| --- | --- |
| `auth` from `@clerk/nextjs` | Provides authentication context. |
| `redirect` from `next/navigation` | Redirects users to a different page. |
| `CourseSidebarItem` from `./course-sidebar-item` | A component for displaying individual course sidebar items. |
| `CourseProgress` from `@/components/course-progress` | A component for displaying the course progress bar. |
| `getPurchasedStatus`, `getCompletedChaptersCount`, `calculateProgress` from `@/utils/course-utils` | Utility functions for calculating course-related data. |

# Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseSidebar` | Displays the course sidebar with title, progress, and chapters. | N/A |

# Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getPurchasedStatus` | `course`, `userId` | `boolean` | Checks if the user has purchased the course. |
| `getCompletedChaptersCount` | `chapters`, `userId` | `number` | Counts the number of completed chapters by the user. |
| `calculateProgress` | `completedChapters`, `totalChapters` | `number` | Calculates the progress percentage of completed chapters. |

# Notes

- The `redirect` function is used to redirect unauthenticated users to the homepage.
- The `CourseSidebarItem` component is used to render each chapter in the sidebar.
- The `CourseProgress` component is used to display the progress bar.
- Utility functions from `course-utils.ts` are used to calculate the purchase status, completed chapters count, and progress percentage.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/page.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/page.tsx`

This file defines the page component for a specific chapter within a course in the Learning Management System (LMS). It fetches chapter details, checks user authentication, and conditionally renders chapter content based on user status and course purchase.

#### Dependencies

| Import | Description |
|--------|-------------|
| `getChapters` | Action to fetch chapter details. |
| `Banner` | Component to display status banners. |
| `auth` | Authentication utility from `@clerk/nextjs`. |
| `redirect` | Utility to redirect users from `next/navigation`. |
| `VideoPlayer` | Custom component to play chapter videos. |
| `CourseEnrollButton` | Custom component to enroll in a course. |
| `Separator` | UI component to add visual separation. |
| `Preview` | Component to preview chapter descriptions. |
| `File` | Icon from `lucide-react`. |
| `CourseProgressButton` | Custom component to track course progress. |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `ChapterIdPage` | `{ params: { courseId: string; chapterId: string } }` | JSX | Main component rendering the chapter page. |

#### Notes

- The component checks if the user is authenticated before proceeding. If not, it redirects to the homepage.
- The `getChapters` action fetches necessary data for the chapter, including whether the chapter is free or requires purchase.
- Conditional rendering is used to show different UI elements based on the user's purchase status and chapter completion.
- The `VideoPlayer` component is responsible for playing the chapter video and handles locked content if the user hasn't purchased the course.
- Attachments are displayed if available, with links opening in a new tab.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines a React component, `CourseEnrollButton`, which renders a button that allows users to enroll in a course. When clicked, it triggers an asynchronous API call to initiate the enrollment process and redirects the user to the payment page upon success.

# Dependencies

- **axios**: HTTP client for making API requests.
- **useState**: Hook for managing state within functional components.
- **Button**: UI component for rendering buttons.
- **formatPrice**: Utility function for formatting prices.
- **toast**: Library for displaying toast notifications.

# Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| None | N/A | N/A |

# Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseEnrollButton` | `courseId: string`, `price: number` | N/A | Renders an enroll button for a course. |

# Notes

- The `CourseEnrollButton` component uses `axios` to make a POST request to initiate the enrollment process.
- On success, it redirects the user to the URL provided in the API response.
- On failure, it logs the error and displays a toast notification.
- The button is disabled while the enrollment process is in progress to prevent multiple clicks.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-progress-button.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `CourseProgressButton` component, which allows users to mark a chapter as completed or not completed within a course. It handles the UI interaction, state management, and API calls necessary to update the user's progress.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `Button` | Provides a styled button component. |
| `useConfettiStore` | Manages the confetti effect state. |
| `axios` | Makes HTTP requests to update progress. |
| `CheckCircle`, `XCircle` | Icons to indicate completion status. |
| `useRouter` | Provides navigation capabilities. |
| `useState` | Manages component state. |
| `toast` | Displays success or error messages. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseProgressButton` | `chapterId`, `courseId`, `isCompleted`, `nextChapterId` | JSX Element | Renders a button to mark a chapter as completed or not completed. |

#### Notes

- The `isLoading` state is used to disable the button and show a loading indicator while the API call is in progress.
- The `confetti` effect is triggered if the current chapter is marked as completed and there is no next chapter.
- The `router.push` method navigates to the next chapter if it exists.
- Error handling displays a toast message if the API call fails.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/video-player.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `video-player.tsx` file defines a React component for playing video content within a course chapter. It handles video playback, user progress tracking, and user interface feedback for loading and locked states.

#### Dependencies

| Import | Description |
| --- | --- |
| `axios` | HTTP client for making requests to the backend. |
| `MuxPlayer` | A React component for embedding Mux video player. |
| `Loader2`, `Lock` | Icons from `lucide-react` for loading and locked states. |
| `useState` | React hook for managing component state. |
| `cn` | Utility function from `@/lib/utils` for conditional class names. |
| `useRouter` | Hook from `next/navigation` for programmatic navigation. |
| `useConfettiStore` | Custom hook to manage confetti effects. |
| `toast` | Function from `react-hot-toast` for displaying notifications. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onEnd` | None | None | Handles the end of video playback, updates progress, and navigates to the next chapter if available. |

#### Notes

- The `onEnd` function assumes that the backend endpoint `/api/courses/${courseId}/chapters/${chapterId}/progress` is correctly set up to handle progress updates.
- The component uses `axios` for making HTTP requests, which should be configured to handle CORS and error responses appropriately.
- The `cn` function is used to conditionally apply CSS classes, which helps in managing dynamic styling.
- Ensure that the `playbackId` provided is valid and corresponds to a valid video in the Mux video player.
- The `isLocked` prop determines if the video player should display a locked state or not. If locked, the video cannot be played.

---

### `lms-app/app/(dashboard)/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/layout.tsx

#### Module Overview

This file defines the layout component for the dashboard section of the application. It integrates the `Navbar` and `Sidebar` components into a responsive layout, ensuring that the main content area adapts to the viewport size.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `useEffect`, `useState` | React hooks for managing side effects and state. |
| `Navbar` | A component for the navigation bar at the top of the dashboard. |
| `Sidebar` | A component for the sidebar on the left side of the dashboard. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `DashboardLayout` | The main layout component for the dashboard. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `DashboardLayout` | `{ children: React.ReactNode }` | `JSX.Element` | Renders the dashboard layout with a top `Navbar`, a left `Sidebar`, and a main content area. |

#### Notes

- The `DashboardLayout` component uses a state variable `domLoaded` to ensure that the layout only renders once the DOM is fully loaded.
- The layout uses fixed positioning for the `Navbar` and `Sidebar` to maintain their visibility across different sections of the dashboard.
- The `main` element adjusts its padding and margin based on the presence of the `Navbar` and `Sidebar` to ensure proper content display.

---

### `lms-app/app/(dashboard)/(routes)/(root)/page.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/(root)/page.tsx

#### Module Overview

This file defines the main dashboard page for the Learning Management System (LMS). It fetches the user's courses, displays progress and completion status, and renders a list of courses.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `GetDashboardCourses` | Fetches the user's courses (completed and in progress) from the server. |
| `CoursesList` | A component to display a list of courses. |
| `auth` | Provides authentication information from Clerk. |
| `CheckCircle`, `Clock` | Icons from `lucide-react` used in the `InfoCard` component. |
| `redirect` | Utility from `next/navigation` to redirect users if they are not authenticated. |
| `InfoCard` | A custom component to display information cards with icons and labels. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `Dashboard` | Main component for the dashboard page. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `Dashboard` | None | JSX | Renders the dashboard with progress and completed courses. |

#### Notes

- If `userId` is not available, the user is redirected to the home page.
- The `GetDashboardCourses` function fetches both completed and in-progress courses.
- The `InfoCard` component is used to display the number of courses in progress and completed with appropriate icons.
- The `CoursesList` component combines both completed and in-progress courses for display.

---

### `lms-app/app/(dashboard)/(routes)/(root)/_components/info-card.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/(root)/_components/info-card.tsx`

#### Module Overview

This file defines a reusable `InfoCard` component that displays an icon, a label, and the number of associated items. It's used across the dashboard to provide quick insights into various data sets.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `IconBadge` | A component that renders an icon with an optional badge. |
| `LucideIcon` | A type representing icons from the `lucide-react` library. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `InfoCard` | Displays an info card with an icon, label, and item count. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `InfoCard` | `icon: LucideIcon`, `label: string`, `numberOfItems: number`, `variant: "default" | `JSX` | Renders an info card with the specified icon, label, and item count. |

#### Notes

- The `InfoCard` component uses `IconBadge` to display the icon and an optional variant badge.
- The `numberOfItems` is pluralized correctly based on its value.
- The `variant` prop is optional and defaults to "default". It can be used to style the card differently (e.g., "success").

---

### `lms-app/app/(dashboard)/(routes)/search/page.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/search/page.tsx

#### Module Overview

This file defines the `SearchPage` component, which renders the search results page for the Learning Management System (LMS). It fetches course data based on user input and categories, and displays them using the `SearchInput`, `Categories`, and `CoursesList` components.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making API requests. |
| `Categories` | Component to display category list. |
| `SearchInput` | Component for search input. |
| `auth` | Authentication service from Clerk. |
| `redirect` | Utility from Next.js for client-side navigation. |
| `getCourses` | Action to fetch courses based on user ID and search parameters. |
| `CoursesList` | Component to display a list of courses. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `SearchPage` | Main component for the search page. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getCourses` | `{ userId: string, title?: string, categoryId: string }` | `Promise<Course[]>` | Fetches courses based on user ID and search parameters. |

#### Notes

- The `SearchPage` component checks for a valid user ID before proceeding. If no user ID is found, it redirects to the home page.
- The `categories` data is fetched from the backend API to populate the `Categories` component.
- The `courses` data is fetched using the `getCourses` action, which combines the user ID and search parameters to filter the courses.
- The `SearchInput` component is conditionally rendered for mobile view (`md:hidden`).

---

### `lms-app/app/(dashboard)/(routes)/search/_components/categories.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/search/_components/categories.tsx

#### Module Overview

This file defines a React component `Categories` that renders a list of category items, each with a label and an icon. The icons are mapped to category names using a predefined `iconMap`.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `FcEngineering`, `FcFilmReel`, `FcMultipleDevices`, `FcMusic`, `FcOldTimeCamera`, `FcSalesPerformance`, `FcSportsMode` | React icons used for visual representation of categories. |
| `IconType` | Type definition for the icons. |
| `CategoryItem` | Component used to render each category item. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `Categories` | Renders a list of category items with corresponding icons. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `iconMap` | None | `Record<{name: string}["name"], IconType>` | Maps category names to corresponding icons. |

#### Configuration or Constants

| Name | Type | Description |
| --- | --- | --- |
| `iconMap` | `Record<{name: string}["name"], IconType>` | Static mapping of category names to icons. |

#### Notes

- The `Categories` component expects a prop `items` which is an array of objects with `_id` and `name` fields.
- The `CategoryItem` component is responsible for rendering each individual category item.
- The `iconMap` is used to dynamically assign icons to categories based on their names.

---

### `lms-app/app/(dashboard)/(routes)/search/_components/category-item.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/search/_components/category-item.tsx`

This file defines a `CategoryItem` component used to represent individual categories in the search dashboard. It allows users to select a category, updating the URL query parameters accordingly.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `cn` | Utility function for conditionally combining class names. |
| `usePathname`, `useRouter`, `useSearchParams` | Hooks from `next/navigation` for accessing and manipulating the current URL. |
| `qs` | Query string manipulation library. |
| `IconType` | Type definition for react-icons. |

#### Classes

There are no classes in this file.

#### Functions

There are no standalone functions in this file.

#### Notes

- The `CategoryItem` component expects a `label` prop, which is the text displayed for the category.
- The `icon` prop is optional and should be a react-icon component if provided.
- The `value` prop is optional and represents the category's identifier.
- The component checks if the current category is selected by comparing the `value` prop with the `categoryId` query parameter.
- The `onClick` function updates the URL query parameters to reflect the selected category, removing the `categoryId` if the same category is clicked again.

---

### `lms-app/app/(dashboard)/(routes)/teacher/analytics/page.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/teacher/analytics/page.tsx

#### Module Overview

This file defines the `AnalyticsPage` component, which displays analytics data for teachers. It fetches analytics data based on the authenticated user's ID and renders it using `DataCard` and `Chart` components.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `getAnalytics` | Fetches analytics data for a given user ID. |
| `auth` | Provides the authenticated user's ID. |
| `redirect` | Redirects the user to the home page if not authenticated. |
| `DataCard` | Displays key metrics in a card format. |
| `Chart` | Renders a chart based on provided data. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `AnalyticsPage` | Main component to display teacher analytics. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getAnalytics` | `userId` | `Promise<{ data: any, totalRevenue: number, totalSales: number }>` | Fetches analytics data for the given user ID. |

#### Notes

- If the user is not authenticated, the component redirects them to the home page.
- The `DataCard` components display total revenue and total sales.
- The `Chart` component visualizes the analytics data passed to it.

---

### `lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/chart.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/chart.tsx`

#### Module Overview

This file defines a React component `Chart` that renders a bar chart using `recharts`. It takes in data as a prop and displays it in a styled card. The chart visualizes total values associated with different names.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `Card` | A UI component for styling the chart container. |
| `Bar`, `BarChart`, `ResponsiveContainer`, `XAxis`, `YAxis` | Components from `recharts` to build the bar chart. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `Chart` | A React component that renders a bar chart. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `Chart` | `{data: chartProps['data']}` | JSX.Element | Renders a bar chart using the provided data. |

#### Configuration or Constants

| Name | Type | Description |
| --- | --- | --- |
| `chartProps` | Interface | Defines the shape of the data prop expected by the `Chart` component. |

#### Notes

- The `tickFormatter` in `YAxis` formats the tick values to include a dollar sign.
- The `Bar` component uses a radius of `[4,4,0,0]` for rounded corners.
- The chart is responsive and adjusts its size to fit its container.

---

### `lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/data-card.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/data-card.tsx

#### Module Overview

This file defines a `DataCard` component, a reusable UI element used to display a single piece of analytics data in a formatted card. It formats the value if specified, and presents it alongside a descriptive label.

#### Dependencies

| Import | Source | Purpose |
| --- | --- | --- |
| `Card`, `CardContent`, `CardHeader`, `CardTitle` | `@/components/ui/card` | UI components for structuring the card layout. |
| `formatPrice` | `@/lib/format` | Utility function to format numeric values as prices. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `DataCard` | `label: string`, `value: number`, `shouldFormat?: boolean` | JSX.Element | Renders a card with a label and formatted or raw value. |

#### Configuration or Constants

| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| N/A | N/A | N/A | N/A |

#### Notes

- The `shouldFormat` prop determines whether the `value` is passed through `formatPrice` or displayed as is.
- Ensure `value` is always a number to avoid errors in formatting.
- The card layout is styled for readability and consistency within the dashboard.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/page.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/teacher/courses/page.tsx

#### Module Overview

This file defines the `CoursesPage` component, which displays a list of courses for a teacher. It fetches course data from the backend and renders it using a `DataTable` component.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `DataTable` | A reusable data table component. |
| `columns` | Configuration for the columns to be displayed in the `DataTable`. |
| `auth` | Authentication hook from `@clerk/nextjs` to get the current user ID. |
| `redirect` | Utility from `next/navigation` to redirect the user. |
| `axios` | HTTP client for making API requests. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CoursesPage` | Main component to fetch and display courses. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CoursesPage` | None | JSX element | Fetches courses for the authenticated teacher and renders them in a `DataTable`. |

#### Configuration or Constants

| Identifier | Purpose |
| --- | --- |
| `process.env.BACK_END_URL` | Base URL for the backend API. |

#### Notes

- The `CoursesPage` component checks if a user ID is present; if not, it redirects the user to the home page.
- The `DataTable` component uses the `columns` configuration to determine which fields to display.
- Ensure that the `BACK_END_URL` environment variable is correctly set to the backend API URL.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/page.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/page.tsx`

This file defines the `CourseIdPage` component, which displays the setup page for a specific course in the LMS application. It allows teachers to customize and manage their course details, including title, description, image, category, chapters, price, and attachments.

#### Dependencies

| Import | Description |
| --- | --- |
| `IconBadge` | Custom component for displaying icons with badges. |
| `auth` | Authentication utility from `@clerk/nextjs`. |
| `CircleDollarSign`, `File`, `LayoutDashboard`, `ListChecks` | Icon components from `lucide-react`. |
| `redirect` | Navigation utility from `next/navigation`. |
| `TitleForm`, `DescriptionForm`, `ImageForm`, `CategoryForm`, `PriceForm`, `AttachmentsForm`, `ChapterForm`, `Banner`, `Actions` | Custom form components for managing course details. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseIdPage` | Main component for the course setup page. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseIdPage` | `{ params: { courseId: string } }` | JSX | Renders the course setup page with necessary forms and data. |

#### Configuration

- `process.env.BACK_END_URL`: The base URL for the backend API.

#### Notes

- The component checks if the user is authenticated and redirects to the homepage if not.
- It fetches course details, categories, and chapters from the backend and displays them in the appropriate forms.
- The component displays a banner indicating whether the course is published or not.
- The `Actions` component is disabled until all required fields are filled out.
- The `courseChapters` array is expected to be sorted by position, but this is commented out in the code.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/actions.tsx`
**Language:** Typescript

#### Overview

# File Overview

The `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/actions.tsx` file provides UI components and functionality for managing courses within the LMS application. It allows teachers to publish or unpublish a course and delete a course.

#### Dependencies

| Import | Description |
| --- | --- |
| `ConfirmModal` | A modal component for confirming actions. |
| `Button` | A button component for UI interactions. |
| `useConfettiStore` | A hook to manage confetti animations. |
| `axios` | A promise-based HTTP client for making requests. |
| `Trash` | An icon for the delete action. |
| `useRouter` | A hook from Next.js for navigation. |
| `useState` | A React hook for managing state. |
| `toast` | A library for displaying toast notifications. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onDelete` | None | None | Handles the deletion of a course. |
| `onPublish` | None | None | Handles the publishing or unpublishing of a course. |

#### Notes

- The `onDelete` function uses `axios.delete` to send a request to the backend API to delete the course.
- The `onPublish` function uses `axios.patch` to toggle the published status of the course.
- The `ConfirmModal` component is used to confirm the deletion action.
- The `Button` component is used for the publish/unpublish and delete actions.
- The `toast` library is used to show success and error messages to the user.
- The `useConfettiStore` hook is used to trigger a confetti animation when a course is published.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/attachments-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `AttachmentsForm` component, which allows teachers to add and delete attachments for a specific course. It provides an interface for uploading files and displays existing attachments with options to delete them.

# Dependencies

| Import | Purpose |
| --- | --- |
| `z` | Validation schema using Zod. |
| `axios` | HTTP client for making requests to the backend. |
| `useRouter` | Hook from Next.js for navigation and refreshing the router. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `PlusCircle`, `File`, `Loader2`, `X` | Icons from `lucide-react`. |
| `Button` | Custom button component from the UI library. |
| `FileUpload` | Custom file upload component. |

# Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `AttachmentsForm` | Main component for handling course attachments. | `toggleEdit`, `onSubmit`, `onDelete` |

# Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `toggleEdit` | None | None | Toggles the edit state of the form. |
| `onSubmit` | `values: z.infer<typeof formSchema>` | None | Submits the form data to the backend and handles success/error notifications. |
| `onDelete` | `attachmentIdx: number` | None | Deletes the attachment at the specified index and handles success/error notifications. |

# Notes

- The form uses Zod for schema validation to ensure the URL is provided.
- The component uses React hooks for state management and side effects.
- Notifications are displayed using the `toast` library.
- The `FileUpload` component is used for uploading new files.
- The `Loader2` icon is displayed while an attachment is being deleted.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/category-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `CategoryForm` component, which allows teachers to edit the category of a specific course. It includes form handling, validation, and UI elements to facilitate this functionality.

#### Dependencies

| Import | Purpose |
|--------|---------|
| `z` | Provides schema validation using Zod. |
| `zodResolver` | Integrates Zod validation with React Hook Form. |
| `axios` | Makes HTTP requests to update course categories. |
| `useRouter` | Provides navigation capabilities within the Next.js app. |
| `useForm` | Hook from React Hook Form to manage form state and validation. |
| `useState` | React hook to manage component state. |
| `toast` | Displays notifications using react-hot-toast. |
| `cn` | Utility function to conditionally combine class names. |
| `Pencil` | Icon from lucide-react for the edit button. |
| Various UI components | Custom form components from the project's UI library. |

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `CategoryForm` | Manages the form for editing a course category. | `toggleEdit`, `onSubmit` |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `CategoryForm` | `intialData`, `courseId`, `options` | JSX for the form component | Renders the form for editing a course category. |

#### Notes

- The form uses Zod for schema validation to ensure the `categoryId` is provided.
- The `Combobox` component is used for selecting a category from the provided options.
- The form's state is managed using React Hook Form, which simplifies form handling and validation.
- Notifications are shown using `toast` for success and error messages.
- The `cn` utility function is used to conditionally apply CSS classes.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/chpater-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterForm` component, which is used to create and manage chapters within a course in the LMS application. It provides a form to add new chapters and displays existing chapters in a list that can be reordered.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `z` | Library for schema validation using Zod. |
| `zodResolver` | Resolver for integrating Zod schemas with React Hook Form. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Hook from Next.js for navigation. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditionally combining class names. |
| `Loader2`, `PlusCircle` | Icons from the `lucide-react` library. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for building forms. |
| `Button`, `Input` | UI components for buttons and input fields. |
| `ChaptersList` | Component for displaying a list of chapters. |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `onSubmit` | `values: z.infer<typeof formSchema>` | `void` | Handles form submission to create a new chapter. |
| `onReorder` | `updatedData: { id: string; position: number }[]` | `void` | Handles reordering of chapters. |
| `onEdit` | `chapterId: string` | `void` | Navigates to the edit page for a specific chapter. |

#### Notes

- The form uses Zod for schema validation to ensure the chapter title is provided.
- The `onSubmit` function sends a POST request to create a new chapter and displays a success or error message.
- The `onReorder` function sends a PATCH request to update the positions of chapters and displays a success or error message.
- The `onEdit` function navigates to the edit page for a specific chapter.
- The component conditionally renders a form to create a new chapter or a list of existing chapters based on the `isCreating` state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/chpaters-list.tsx`
**Language:** Typescript

#### Overview

# File Overview

The `chapters-list.tsx` file provides a draggable and reorderable list of chapters for a course in the LMS application. It allows teachers to rearrange chapters and edit them directly from the dashboard.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `useEffect`, `useState` from `react` | React hooks for managing state and side effects. |
| `DragDropContext`, `Droppable`, `Draggable`, `DropResult` from `@hello-pangea/dnd` | Components and types from the `react-dnd` library for drag-and-drop functionality. |
| `cn` from `@/lib/utils` | A utility function for conditionally combining class names. |
| `Grip`, `Pencil` from `lucide-react` | Icon components for drag handle and edit button. |
| `Badge` from `@/components/ui/badge` | A UI component for displaying badges. |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `ChaptersList` | `{ onEdit: (_id: string) => void, onReorder: (updateData: { id: string; position: number }[]) => void, items: { title: string; _id: string; isPublished: boolean; position: number; isFree: string; }[] }` | `JSX.Element` | A React component that renders a draggable list of chapters. |

#### Notes

- The component relies on the `react-dnd` library for drag-and-drop functionality. Ensure this library is correctly installed and configured in the project.
- The `onEdit` and `onReorder` props are callbacks that need to be provided by the parent component to handle edit and reorder actions.
- The `items` prop should be an array of chapter objects with specific properties (`title`, `_id`, `isPublished`, `position`, `isFree`).
- The component uses conditional class names to style the chapters based on their published status.
- The `useEffect` hooks ensure that the component state is updated when the component mounts and when the `items` prop changes.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/description-form.tsx`
**Language:** Typescript

#### Overview

### Module Overview

This file defines the `DescriptionForm` component, which allows teachers to view and edit the description of a specific course within the LMS application. It uses React Hook Form for form handling and validation, and Zod for schema validation.

### Dependencies

| Import | Purpose |
|--------|---------|
| `z` | Zod library for schema validation. |
| `zodResolver` | Resolver for React Hook Form to integrate with Zod. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Next.js hook for navigation and refreshing the router. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditional class names. |
| `Pencil` | Icon from `lucide-react` for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components from the project's component library. |
| `Textarea`, `Button` | UI components from the project's component library. |

### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `DescriptionForm` | Manages the form for editing a course description. | `toggleEdit`, `onSubmit` |

### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `toggleEdit` | None | None | Toggles the editing state of the form. |
| `onSubmit` | `values: z.infer<typeof formSchema>` | None | Handles form submission, updates the course description, and shows notifications. |

### Notes

- The form validation ensures that the course description is not empty.
- The `toggleEdit` function switches between view and edit modes.
- The form submission updates the course description via a PATCH request to the API.
- Notifications are displayed using `toast` for success and error messages.
- The `cn` function is used for conditional styling based on the form state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/image-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ImageForm` component, which allows teachers to upload or change the course image for a specific course. It handles the UI for toggling between viewing and editing the course image, and manages the form submission to update the course image URL.

#### Dependencies

| Import | Description |
|--------|-------------|
| `z` | Zod library for form validation. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Next.js hook for navigation and refreshing the router. |
| `useState` | React hook for managing component state. |
| `toast` | React-hot-toast library for displaying notifications. |
| `ImageIcon`, `Pencil`, `PlusCircle` | Icons from `lucide-react`. |
| `Button` | Custom button component from the UI library. |
| `FileUpload` | Custom file upload component. |
| `Image` | Next.js Image component for optimized image loading. |

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `ImageForm` | Manages the UI and logic for editing and submitting the course image. | `toggleEdit`, `onSubmit` |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `toggleEdit` | None | void | Toggles the editing state of the image form. |
| `onSubmit` | `values: z.infer<typeof formSchema>` | void | Submits the form data to update the course image. |

#### Notes

- The form validation schema ensures that the `imageUrl` is not empty.
- The `FileUpload` component is used for uploading the new image, and its `onChange` callback triggers the form submission.
- The component uses `react-hot-toast` for user feedback on success or failure of the image upload.
- The `router.refresh()` method is called after a successful image upload to update the course data.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/price-form.tsx`
**Language:** Typescript

#### Overview

### Module Overview

This file defines a React component `PriceForm` that allows teachers to view and edit the price of a specific course. It uses the `react-hook-form` library for form handling and validation, and `axios` for making HTTP requests to update the course price.

### Dependencies

| Import | Purpose |
| --- | --- |
| `z` | Validation schema using Zod. |
| `zodResolver` | Resolver for integrating Zod with `react-hook-form`. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Hook from Next.js for navigation. |
| `useForm` | Hook from `react-hook-form` for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditionally combining class names. |
| `DollarSignIcon`, `Pencil` | Icons from `lucide-react`. |
| `Form`, `FormControl`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for form layout. |
| `Button`, `Input` | UI components for button and input fields. |
| `formatPrice` | Utility function for formatting price. |

### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onSubmit` | `values: z.infer<typeof formSchema>` | `Promise<void>` | Handles form submission, updates the course price, and shows a success or error message. |

### Notes

- The form validation ensures that the price field is not empty.
- The `formatPrice` function is used to display the price in a user-friendly format.
- The component toggles between view and edit modes for the course price.
- Error handling is implemented to show user-friendly messages when the API call fails.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/title-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `TitleForm` component, which allows teachers to view and edit the title of a specific course. It uses React Hook Form for form handling and validation, and Zod for schema validation.

# Dependencies

| Import | Purpose |
| - | - |
| `z` | Zod library for schema validation. |
| `zodResolver` | Resolver for React Hook Form to integrate with Zod. |
| `axios` | HTTP client for making requests to the backend. |
| `useRouter` | Hook from Next.js for navigation and refreshing the router. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Function from react-hot-toast for displaying notifications. |
| `Pencil` | Icon from lucide-react for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components from the project's component library. |
| `Input`, `Button` | UI components from the project's component library. |

# Classes

| Class | Purpose | Key Methods |
| - | - | - |
| `TitleForm` | Manages the form for editing a course title. | `toggleEdit`, `onSubmit` |

# Functions

| Function | Parameters | Returns | Description |
| - | - | - | - |
| `onSubmit` | `values: z.infer<typeof formSchema>` | `void` | Handles form submission, updates the course title, and shows a success or error message. |

# Notes

- The form uses Zod for schema validation to ensure the title is not empty.
- The `toggleEdit` function switches between view and edit modes.
- The form submission updates the course title via a PATCH request to the backend.
- Notifications are shown using `react-hot-toast`.
- The component uses the `useRouter` hook from Next.js to refresh the router after a successful update.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterIdPage` component, which is a React component for the chapter page within a course in the LMS application. It allows teachers to view and edit chapter details, including the title, description, access settings, and video.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `IconBadge` | Custom component for displaying icons with badges. |
| `auth` | Authentication utility from `@clerk/nextjs`. |
| `axios` | HTTP client for making requests to the backend. |
| `ArrowLeft`, `Eye`, `LayoutDashboard`, `Video` | Icons from `lucide-react`. |
| `Link` | Component from `next/link` for client-side navigation. |
| `redirect` | Function from `next/navigation` for redirecting users. |
| `ChapterTitleForm`, `ChapterDescriptionForm`, `ChapterAccessForm`, `ChapterVideoForm` | Custom form components for editing chapter details. |
| `Banner` | Custom component for displaying banners. |
| `ChapterActions` | Custom component for chapter-related actions. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `ChapterIdPage` | `{ params: { courseId: string; chapterId: string } }` | JSX | Renders the chapter page with forms and actions for editing chapter details. |

#### Notes

- The `ChapterIdPage` component fetches chapter data from the backend using `axios`.
- It checks if the user is authenticated using `auth()` from `@clerk/nextjs`.
- If the user is not authenticated, it redirects them to the homepage.
- The component displays a banner indicating whether the chapter is published or not.
- It uses custom form components (`ChapterTitleForm`, `ChapterDescriptionForm`, `ChapterAccessForm`, `ChapterVideoForm`) for editing chapter details.
- The `ChapterActions` component is disabled if not all required fields are filled out.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-access-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterAccessForm` component, which allows teachers to toggle the free access status of a specific chapter within a course. It uses React Hook Form for form handling and Zod for schema validation.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `z` | Schema validation with Zod. |
| `zodResolver` | Resolver for integrating Zod with React Hook Form. |
| `axios` | HTTP client for making requests to the backend. |
| `useRouter` | Hook from Next.js for navigation and refreshing the router state. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying toast notifications. |
| `cn` | Utility function for conditionally combining class names. |
| `Pencil` | Icon from `lucide-react` for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem` | Form components from the UI library. |
| `Button` | Button component from the UI library. |
| `Checkbox` | Checkbox component from the UI library. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `ChapterAccessForm` | `intialData`, `courseId`, `chapterId` | JSX Element | Renders the form for toggling chapter access. |

#### Notes

- The form uses Zod for schema validation to ensure the `isFree` field is a boolean.
- The `onSubmit` function sends a PATCH request to update the chapter's access status.
- The component toggles between a read-only state and an editable state using the `isEditing` state.
- Notifications are displayed using `toast` for success and error messages.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-actions.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterActions` component, which provides UI elements for publishing or deleting a chapter within a course. It's part of the LMS application's teacher dashboard, specifically for managing course chapters.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `ConfirmModal` | A modal component for confirming actions, used for deleting chapters. |
| `Button` | A UI button component for triggering actions. |
| `axios` | A promise-based HTTP client for making API requests. |
| `Trash` | An icon from `lucide-react` used in the delete button. |
| `useRouter` | A hook from `next/navigation` for programmatic navigation and refreshing. |
| `useState` | A React hook for managing component state. |
| `toast` | A utility for showing notifications, from `react-hot-toast`. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onDelete` | None | None | Handles the deletion of a chapter, shows a success or error message, and refreshes the router. |
| `onPublish` | None | None | Handles the publishing or unpublishing of a chapter, shows a success or error message, and refreshes the router. |

#### Notes

- The `onDelete` function uses a `ConfirmModal` to ensure the user confirms the deletion before proceeding.
- The `onPublish` function toggles the published status of a chapter.
- The component uses `toast` for user feedback on success or failure of actions.
- The `isLoading` state is used to manage the loading state of the component, disabling buttons during API calls.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-description-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterDescriptionForm` component, which allows teachers to view and edit the description of a specific chapter within a course. The form handles both the display of the current description and the editing process, including validation and submission of changes.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `z` | Validation schema using Zod. |
| `zodResolver` | Resolver for integrating Zod with React Hook Form. |
| `axios` | HTTP client for making requests to the API. |
| `useRouter` | Hook from Next.js for navigation and routing. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditionally combining class names. |
| `Pencil` | Icon component from Lucide. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for form elements. |
| `Textarea` | Textarea component for form inputs. |
| `Button` | Button component for form actions. |
| `Editor` | Rich text editor component. |
| `Preview` | Component for previewing the chapter description. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `ChapterDescriptionForm` | `intialData`, `courseId`, `chapterId` | JSX for the form component | Renders the form for editing the chapter description. |

#### Notes

- The form uses Zod for schema validation to ensure the description is not empty.
- The `Editor` component is used for rich text editing, allowing for more complex formatting.
- Notifications are displayed using `toast` to inform the user of success or failure in updating the chapter description.
- The form state is managed using React Hook Form, which simplifies form handling and validation.
- The `cn` utility function is used to conditionally apply CSS classes based on the component's state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-title-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterTitleForm` component, which allows teachers to view and edit the title of a specific chapter within a course. It uses React Hook Form for form handling and Zod for schema validation.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `z` | Zod library for schema validation. |
| `zodResolver` | Resolver for integrating Zod with React Hook Form. |
| `axios` | HTTP client for making requests to the backend API. |
| `useRouter` | Hook from Next.js for navigation and routing. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `Pencil` | Icon from lucide-react for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components from the project's component library. |
| `Input`, `Button` | UI components from the project's component library. |

#### Classes

| Class | Purpose | Key Methods |
| ----- | ------- | ----------- |
| `ChapterTitleForm` | Main component for editing chapter titles. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `ChapterTitleForm` | `intialData`, `courseId`, `chapterId` | JSX for the form component. | Renders the form for editing chapter titles. |

#### Configuration

| Variable | Type | Description |
| -------- | ---- | ----------- |
| `formSchema` | `z.object` | Zod schema for form validation. |

#### Notes

- The form uses `zodResolver` to validate input against the `formSchema`.
- The `onSubmit` function sends a PATCH request to update the chapter title.
- Notifications are displayed using `toast` for success and error messages.
- The component toggles between view and edit modes using the `isEditing` state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-video-form.tsx`
**Language:** Typescript

#### Overview

### Module Overview

This file defines the `ChapterVideoForm` component, which allows teachers to upload and change videos for a specific chapter within a course. It handles the UI and logic for toggling between viewing and editing states, submitting video URLs, and displaying feedback.

### Dependencies

| Import | Purpose |
| --- | --- |
| `z` | Schema validation using Zod. |
| `axios` | HTTP client for making requests. |
| `useRouter` | Next.js hook for navigation. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `Pencil`, `PlusCircle`, `VideoIcon` | Icons from `lucide-react`. |
| `Button` | Custom button component. |
| `FileUpload` | Component for uploading files. |
| `MuxPlayer` | Video player component from `@mux/mux-player-react`. |

### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `ChapterVideoForm` | Manages the form for uploading and editing chapter videos. | `toggleEdit`, `onSubmit` |

### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `toggleEdit` | None | None | Toggles the editing state of the form. |
| `onSubmit` | `values: z.infer<typeof formSchema>` | None | Submits the video URL to the server and handles the response. |

### Notes

- The form uses Zod for schema validation to ensure the video URL is provided.
- The `FileUpload` component is used for uploading videos, and its `onChange` callback triggers the form submission.
- Notifications are shown using `react-hot-toast` to inform the user of success or failure.
- The `MuxPlayer` component is used to display the video if one is already uploaded.
- Ensure the API endpoint `/api/courses/${courseId}/chapters/${chapterId}` is correctly set up to handle PATCH requests.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/columns.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/columns.tsx`

This file defines the column configurations for the courses table in the teacher's dashboard. It uses `@tanstack/react-table` to manage table state and rendering.

#### Dependencies

| Import | Description |
| --- | --- |
| `Button` | UI button component from `@/components/ui/button` |
| `ColumnDef` | Type definition for column configuration from `@tanstack/react-table` |
| `ArrowUpDown`, `MoreHorizontal`, `Pencil` | Icon components from `lucide-react` |
| `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuTrigger`, `DropdownMenuItem` | Dropdown menu components from `@/components/ui/dropdown-menu` |
| `Link` | Next.js Link component for navigation |
| `Badge` | Badge component from `@/components/ui/badge` |
| `cn` | Utility function for class names from `@/lib/utils` |

#### Columns

| Property | Description |
| --- | --- |
| `columns` | Array of `ColumnDef<course>` objects defining the columns for the courses table |

#### Notes

- The `columns` array defines the structure and behavior of each column in the table.
- Each column has an `accessorKey` that specifies which property of the course object to display.
- The `header` function in each column definition returns a button for sorting.
- The `cell` function in each column definition customizes the content and formatting of the cells.
- The "actions" column includes a dropdown menu for editing courses.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/data-table.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/data-table.tsx`

This file defines a `DataTable` component that renders a customizable data table for displaying course data. It leverages `@tanstack/react-table` for managing table state and functionality.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `React` | Core React library for building UI components. |
| `@tanstack/react-table` | Library for building powerful and customizable tables. |
| `@/components/ui/table` | Custom table components for styling. |
| `@/components/ui/button` | Custom button component for UI consistency. |
| `@/components/ui/input` | Custom input component for UI consistency. |
| `lucide-react` | Icon library for adding icons like `PlusCircle`. |
| `next/link` | Next.js component for client-side navigation. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `DataTable` | `columns: ColumnDef<TData, TValue>[]` <br> `data: TData[]` | `React.ReactElement` | Renders a data table with sorting, filtering, and pagination capabilities. |

#### Notes

- The `DataTable` component expects `columns` and `data` props to be provided. `columns` defines the structure of the table, and `data` is the array of objects to be displayed.
- The table supports sorting, filtering, and pagination out of the box.
- Customization of table headers and cells is achieved through the `flexRender` function, which renders the content based on the provided render functions.
- Ensure that the `columns` prop aligns with the structure of the `data` array objects for proper rendering.

---

### `lms-app/app/(dashboard)/(routes)/teacher/create/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `CreatePage` component, which is a React functional component used to create a new course in the LMS application. It uses `react-hook-form` for form handling and validation, and `axios` for making API requests.

#### Dependencies

| Import | Description |
| --- | --- |
| `z` | A schema declaration and validation library. |
| `axios` | A promise-based HTTP client for making API requests. |
| `zodResolver` | A resolver for `react-hook-form` that integrates with `zod` for schema validation. |
| `useForm` | A hook from `react-hook-form` to manage form state and validation. |
| `useRouter` | A hook from `next/router` to programmatically navigate between pages. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for building forms. |
| `Input` | A UI component for input fields. |
| `Button` | A UI component for buttons. |
| `Link` | A component from `next/link` for navigation. |
| `toast` | A library for displaying toast notifications. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CreatePage` | None | JSX.Element | Renders the form for creating a new course. |

#### Notes

- The form validation schema is defined using `zod` and ensures that the `title` field is not empty.
- The form submission triggers an API call to create a new course and navigates to the course's detail page upon success.
- Error handling for the API request displays a toast notification to the user.
- The form includes a cancel button that navigates back to the homepage.

---

### `lms-app/app/(dashboard)/_components/logo.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `lms-app/app/(dashboard)/_components/logo.tsx` file defines a React component `Logo` that renders a Next.js `Image` component displaying the application's logo SVG.

# Dependencies

| Import | Purpose |
| --- | --- |
| `Image` | A component from Next.js for optimized image rendering. |

# Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `Logo` | Renders the application logo. | None |

# Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `Logo` | None | JSX element | Returns an `Image` component displaying the logo SVG. |

# Notes

- The `Logo` component uses the Next.js `Image` component for optimized and responsive image rendering.
- The logo SVG is located at `/public/logo.svg`.
- Ensure the SVG file is correctly placed in the public directory to avoid broken images.

---

*This documentation was automatically generated and formatted by DocuSense AI.*