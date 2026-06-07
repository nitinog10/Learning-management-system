# Learning-management-system - Documentation

## Project Overview

```
The `repo_d524540f5f7f` repository contains the source code for a Learning Management System (LMS) application. The application allows users to sign up, sign in, browse courses, enroll in courses, and track their progress. The primary tech stack includes React for the frontend, Next.js for server-side rendering, and TypeScript for type safety.

The folder structure is organized to separate concerns effectively. The `lms-app` directory contains the core application code, including configuration files like `next.config.js`, `tailwind.config.js`, and `tsconfig.json`. The `actions` directory houses utility functions for fetching data, such as `get-courses.ts` and `get-progress.ts`.

The `app` directory is further divided into subdirectories for authentication (`auth`), course management (`course`), and the dashboard (`dashboard`). Each subdirectory contains its own `layout.tsx` and `page.tsx` files, along with component-specific directories for reusable UI elements.

This LMS application is intended for educational institutions, e-learning platforms, and anyone looking to create a structured learning environment with course enrollment and progress tracking capabilities.
```

## Architecture

```markdown
### Code Organization

The codebase is organized into several key layers and modules:

- **Configuration Files**: These include `next.config.js`, `tsconfig.json`, `tailwind.config.js`, and others. They are responsible for setting up the development environment and build processes.
- **Actions**: Located in the `actions` directory, these files handle data fetching and business logic. Examples include `get-courses.ts` and `get-analytics.ts`.
- **Components**: The `app` directory contains all the React components, organized by feature areas such as `(auth)`, `(course)`, and `(dashboard)`. Each feature area has its own layout and route-specific components.
- **Middleware**: The `middleware.ts` file likely contains middleware functions for handling requests and responses.

### Data Flow

Data flows through the system in the following manner:

1. **Actions**: Data fetching is initiated by action functions in the `actions` directory. These functions communicate with the backend or external APIs to retrieve data.
2. **Components**: The fetched data is then passed down to React components via props or context. Components use this data to render UI and handle user interactions.
3. **Middleware**: Middleware functions may intercept requests or responses to perform additional processing, such as authentication or logging.

### Key Design Patterns

- **Component-Based Architecture**: The application is built using a component-based approach, where each feature area (e.g., authentication, courses, dashboard) has its own set of components.
- **Separation of Concerns**: Business logic is separated from UI components. Actions handle data fetching, while components focus on rendering and user interactions.
- **Layout Components**: Each feature area has a layout component (e.g., `layout.tsx` in `(auth)`, `(course)`, and `(dashboard)`) that provides a consistent structure for its routes.

### Main Entry Points

- **`next.config.js`**: The main configuration file for the Next.js application.
- **`app/layout.tsx`**: The root layout component that wraps the entire application.
- **Feature-Specific Layouts**: Each feature area has its own layout component (e.g., `app/(auth)/layout.tsx`, `app/(course)/layout.tsx`) that serves as the entry point for its routes.
- **Action Functions**: Located in the `actions` directory, these functions are the entry points for data fetching and business logic.
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
└── nitinog10-Learning-management-system-9ad5412/
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

This file configures ESLint for the LMS application, extending the Next.js core web vitals configuration to ensure consistent code quality and adherence to best practices.

#### Dependencies

- **next/core-web-vitals**: This preset includes rules that focus on core web vitals and performance, ensuring that the codebase maintains high performance standards.

#### Configuration

| Configuration | Purpose |
|---------------|---------|
| `extends` | Uses the Next.js core web vitals preset to inherit rules that focus on performance and web vitals. |

#### Notes

- The configuration is minimal, relying on the Next.js preset for comprehensive linting rules.
- Ensure that any custom rules or overrides are added carefully to avoid conflicts with the core web vitals preset.

---

### `lms-app/README.md`
**Language:** Md

#### Overview

# lms-app/README.md

#### Module Overview

This file provides essential information and setup instructions for the LMS application, a Next.js project bootstrapped with `create-next-app`. It includes commands to start the development server, links to learn more about Next.js, and deployment instructions on Vercel.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `next/font` | Optimizes and loads custom Google Fonts, specifically Inter. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `npm run dev` | N/A | N/A | Starts the development server. |
| `yarn dev` | N/A | N/A | Starts the development server. |
| `pnpm dev` | N/A | N/A | Starts the development server. |

#### Configuration

| Configuration | Purpose |
| --- | --- |
| `next/font` | Automatically optimizes and loads the custom Google Font Inter. |

#### Notes

- To see the application in action, open [http://localhost:3000](http://localhost:3000) in your browser.
- Editing `app/page.tsx` will auto-update the page.
- For more details on deployment, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

### `lms-app/components.json`
**Language:** Json

#### Overview

# lms-app/components.json

This file defines the configuration for our component library, specifying styles, imports, and aliases to streamline development within the LMS application.

#### Dependencies

- **$schema**: Defines the JSON schema for validation.
- **tailwind**: Configuration for Tailwind CSS, including the custom configuration file, global CSS file, base color, and CSS variables.

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| N/A | N/A | N/A | N/A |

#### Configuration

| Key | Value | Description |
| --- | --- | --- |
| `$schema` | `https://ui.shadcn.com/schema.json` | Specifies the JSON schema for validation. |
| `style` | `default` | Sets the default style for components. |
| `rsc` | `true` | Enables resource sharing configuration. |
| `tsx` | `true` | Enables TypeScript with JSX support. |
| `tailwind` | N/A | Tailwind CSS configuration. |
| `tailwind.config` | `tailwind.config.js` | Path to the Tailwind CSS configuration file. |
| `css` | `app/globals.css` | Path to the global CSS file. |
| `baseColor` | `slate` | Base color theme for Tailwind CSS. |
| `cssVariables` | `true` | Enables CSS variables for Tailwind CSS. |
| `aliases` | N/A | Aliases for module imports. |
| `components` | `@/components` | Alias for the components directory. |
| `utils` | `@/lib/utils` | Alias for the utilities directory. |

#### Notes

- Ensure that the Tailwind CSS configuration file (`tailwind.config.js`) is correctly set up to avoid styling issues.
- The `aliases` section helps in reducing the complexity of import statements by providing shortcuts to frequently used directories.
- The `baseColor` is set to `slate`, which should be consistent across the application for a uniform look and feel.

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
| `authMiddleware` | Provides the authentication middleware functionality from Clerk's Next.js library. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `authMiddleware` | `{ publicRoutes: string[] }` | `Middleware` | Configures the middleware to protect routes, allowing public access to specified routes. |

#### Configuration

| Key | Value | Description |
| --- | --- | --- |
| `publicRoutes` | `["/api/uploadthing", "/api/webhook"]` | Routes that are publicly accessible without authentication. |
| `matcher` | `['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']` | Pattern to match routes that should be protected by the middleware. |

#### Notes

- The `publicRoutes` array includes routes that should be accessible without authentication.
- The `matcher` configuration ensures that all routes except those listed in `publicRoutes` are protected.
- Ensure to update the `publicRoutes` array as needed to reflect the routes that should remain public.

---

### `lms-app/next.config.js`
**Language:** Javascript

#### Overview

# lms-app/next.config.js

This file configures the Next.js framework for our project. It specifies settings for image loading, including which external domains are allowed for image sources.

#### Dependencies

- **next**: This is the core Next.js configuration file that sets up the framework's behavior.

#### Configuration

| Configuration | Purpose |
|---------------|---------|
| `images.domains` | Specifies external domains from which images can be loaded. |

#### Notes

- The `images.domains` array includes `"utfs.io"`, which is the domain currently allowed for external image sources.
- Ensure any new domains added to this list are secure and trusted to avoid potential security risks.

---

### `lms-app/package.json`
**Language:** Json

#### Overview

```markdown
# `lms-app/package.json`

#### Module Overview

This file is the heart of our project's dependencies and scripts. It defines the project's metadata, scripts for development and production, and all the libraries and tools required to build and run the application.

#### Dependencies

| Library | Purpose |
|---------|---------|
| `@clerk/nextjs` | Authentication for Next.js |
| `@hookform/resolvers` | Validation resolvers for React Hook Form |
| `@mux/mux-node` | Mux API for video handling |
| `@radix-ui/react-*` | UI components from Radix |
| `@tanstack/react-table` | Advanced table handling |
| `axios` | HTTP requests |
| `clsx` | Conditional class names |
| `next` | Framework for building the application |
| `react` | Core React library |
| `react-hook-form` | Form handling and validation |
| `react-icons` | Icon library |
| `stripe` | Payment processing |
| `tailwindcss` | Utility-first CSS framework |
| `zustand` | State management |

#### Scripts

| Script | Command |
|--------|---------|
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `next lint` |

#### Notes

- Ensure all dependencies are up-to-date to avoid compatibility issues.
- The `devDependencies` section includes tools specifically for development, like `prisma` for database management.
- When adding new dependencies, run `npm install` or `yarn install` to update the `node_modules` folder.
```

This should give you a clear understanding of what the `package.json` file does and how it fits into our project. If you have any questions, feel free to ask!

---

### `lms-app/postcss.config.js`
**Language:** Javascript

#### Overview

# lms-app/postcss.config.js

This file configures PostCSS plugins for the project. It sets up Tailwind CSS and Autoprefixer to handle CSS styling and compatibility across different browsers.

#### Dependencies

- `tailwindcss`: A utility-first CSS framework for rapidly building custom user interfaces.
- `autoprefixer`: A postprocessor that adds vendor prefixes to CSS rules using values from `Can I Use`.

#### Configuration

| Configuration | Purpose |
|---------------|---------|
| `tailwindcss` | Integrates Tailwind CSS for utility-first styling. |
| `autoprefixer` | Adds necessary vendor prefixes to ensure compatibility across browsers. |

#### Notes

- Tailwind CSS and Autoprefixer are essential for maintaining a consistent and cross-browser compatible styling approach.
- Ensure that the PostCSS configuration aligns with the project's CSS strategy and requirements.

---

### `lms-app/tailwind.config.js`
**Language:** Javascript

#### Overview

# lms-app/tailwind.config.js

#### Module Overview

This file configures Tailwind CSS for the LMS application, integrating custom utilities and themes to ensure a consistent and responsive design across the app.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `withUt` | A utility from `uploadthing/tw` to enhance Tailwind CSS with additional features. |

#### Configuration

| Key | Value | Description |
| --- | --- | --- |
| `darkMode` | `["class"]` | Enables dark mode based on a class applied to the root element. |
| `content` | Array of file paths | Specifies the files where Tailwind CSS classes should be detected. |
| `theme` | Object | Customizes the default Tailwind CSS theme. |
| `plugins` | Array | Adds additional plugins to Tailwind CSS, such as `tailwindcss-animate` for animations. |

#### Notes

- The `withUt` function is a custom utility that enhances Tailwind CSS with additional features. Ensure it is properly installed and configured in your project.
- The `theme` section includes custom colors, border radii, keyframes, and animations to maintain a consistent look and feel.
- The `content` array should be updated if new directories or file types are added to the project.
- The `plugins` array includes `tailwindcss-animate`, which enables CSS animations using Tailwind's utility classes.

---

### `lms-app/tsconfig.json`
**Language:** Json

#### Overview

# lms-app/tsconfig.json

#### Module Overview

This file configures the TypeScript compiler for the LMS application. It sets various compiler options to ensure the codebase compiles correctly and adheres to best practices for TypeScript development.

#### Dependencies

- **TypeScript**: The primary dependency, used for compiling and type-checking the codebase.
- **Next.js Plugin**: Custom plugin to integrate with Next.js for enhanced module resolution.

#### Configuration

| Setting | Purpose |
|---------|---------|
| `target` | Sets the ECMAScript target version (`es5`). |
| `lib` | Includes DOM and ESNext libraries for type definitions. |
| `allowJs` | Allows JavaScript files to be compiled. |
| `skipLibCheck` | Skips type checking of all declaration files. |
| `strict` | Enables all strict type-checking options. |
| `forceConsistentCasingInFileNames` | Ensures consistent casing in file names. |
| `noEmit` | Prevents the compiler from emitting output files. |
| `esModuleInterop` | Enables interoperability between CommonJS and ES Modules. |
| `module` | Sets the module code generation to ESNext. |
| `moduleResolution` | Uses the bundler for module resolution. |
| `resolveJsonModule` | Allows importing JSON modules. |
| `isolatedModules` | Ensures each file is treated as a module. |
| `jsx` | Preserves JSX syntax. |
| `incremental` | Enables incremental compilation. |
| `paths` | Maps `@/*` to the root directory. |

#### Notes

- `noEmit: true` means this configuration file does not produce any output files; it's meant to be used by the TypeScript compiler.
- `isolatedModules` ensures that each file is treated as a standalone module, which can help with tree-shaking and module bundling.
- The `paths` setting is crucial for resolving aliases, making imports cleaner and more manageable.
- `incremental` enables faster rebuilds by only compiling changed files.

---

### `lms-app/actions/get-analytics.ts`
**Language:** Typescript

#### Overview

# lms-app/actions/get-analytics.ts

#### Module Overview

This file defines the `getAnalytics` function, which fetches course data from the backend and calculates analytics such as total revenue and total sales for a given user.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making requests to the backend API. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getAnalytics` | `userId: string` | `Promise<{ data: Array<{ name: string, total: number }>, totalRevenue: number, totalSales: number }>` | Fetches course data and calculates total revenue and sales for the specified user. |

#### Notes

- The function makes a single GET request to fetch all courses.
- It calculates the total revenue by summing up the number of purchased courses multiplied by their price.
- It calculates total sales by counting the number of purchased courses.
- In case of an error, it returns an empty analytics object with zero values for total revenue and sales.

---

### `lms-app/actions/get-chapters.ts`
**Language:** Typescript

#### Overview

# `lms-app/actions/get-chapters.ts`

#### Module Overview

This file defines the `getChapters` function, which fetches course and chapter data from the backend, including information about whether the user has purchased the course, if the chapter is free, and if the user has completed it. It also retrieves the next chapter and any attachments.

#### Dependencies

| Import | Purpose |
|--------|---------|
| `axios` | Makes HTTP requests to the backend. |
| `console.error` | Logs errors to the console. |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `getChapters` | `{ userId: string, chapterId: string, courseId: string }` | `Promise<{ course: any, chapter: any, muxData: string | null, attachments: string[], nextChapter: {_id: string} | null, isCompleted: boolean | null, purchased: boolean | null }>` | Fetches course and chapter data from the backend and returns an object with the relevant information. |

#### Notes

- The function assumes that `process.env.BACK_END_URL` is set to the correct backend URL.
- If either the course or chapter is not found, the function throws an error and returns default values.
- The `attachments` array is only populated if the user has purchased the course.
- The `nextChapter` is determined by the current chapter's index in the chapters array. If the current chapter is the last one, `nextChapter` will be `null`.

---

### `lms-app/actions/get-courses.ts`
**Language:** Typescript

#### Overview

# `lms-app/actions/get-courses.ts`

This file defines the `getCourses` function, which fetches a list of courses from the backend, optionally filtered by title or category, and enriches each course with progress information.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making requests to the backend. |
| `getProgress` | Function from `get-progress.ts` that fetches progress data for a user and course. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getCourses` | `{ userId: string; title?: string; categoryId?: string }` | `Promise<Array<{ _id: string; purchased: { [key: string]: boolean }; categoryId: string; progress: number; chaptersLength: number; category: string }>>` | Fetches courses from the backend, filters by publication status, and enriches each course with progress and category information. |

#### Notes

- The function uses environment variables to construct the backend URL.
- It assumes that the backend API returns data in a specific format.
- Error handling is minimal; it logs the error and returns an empty array.
- The function makes multiple asynchronous calls to the backend, which could be optimized for performance.

---

### `lms-app/actions/get-dashboard-courses.ts`
**Language:** Typescript

#### Overview

# lms-app/actions/get-dashboard-courses.ts

#### Module Overview

This file defines the `GetDashboardCourses` function, which fetches and processes a user's purchased courses from the backend, categorizing them into completed and in-progress lists.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making requests to the backend. |
| `getProgress` | Utility function to get the progress of a course for a user. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `GetDashboardCourses` | `userId: string` | `Promise<DashboardCourses>` | Fetches and processes a user's purchased courses into completed and in-progress lists. |

#### Notes

- The function relies on environment variables to construct API URLs.
- Error handling logs the error message but returns an empty list of courses in case of failure.
- The `DashboardCourses` type is used to define the shape of the returned data.

---

### `lms-app/actions/get-progress.ts`
**Language:** Typescript

#### Overview

# lms-app/actions/get-progress.ts

#### Module Overview

This file defines a function `getProgress` that calculates a user's progress in a course by fetching published chapters and determining which ones the user has completed.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making requests to the backend API. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getProgress` | `userId: string`, `courseId: string` | `Promise<number[]>` | Fetches published chapters for a given course and calculates the user's progress as a percentage. Returns an array with the total number of chapters and the progress percentage. |

#### Notes

- The function handles errors by logging them and returning default values `[0, 0]`.
- The backend URL is fetched from environment variables.
- The progress percentage is calculated based on completed chapters for the user.

---

### `lms-app/app/globals.css`
**Language:** Css

#### Overview

# `lms-app/app/globals.css`

This file defines the global styles and theming for the LMS application. It sets up base styles, custom properties for theming, and imports necessary styles from external libraries.

#### Dependencies

- `@tailwindcss/forms`: Provides form styling utilities.
- `@uploadthing/react/styles.css`: Imports styles for the upload component.

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `:root` | Defines global CSS variables for light theme. | N/A |
| `.dark` | Defines global CSS variables for dark theme. | N/A |

#### Configuration

| Variable | Purpose |
|----------|---------|
| `--background` | Sets the background color. |
| `--foreground` | Sets the text color. |
| `--primary` | Sets the primary color. |
| `--secondary` | Sets the secondary color. |
| `--muted` | Sets the muted color. |
| `--accent` | Sets the accent color. |
| `--destructive` | Sets the destructive color. |
| `--border` | Sets the border color. |
| `--input` | Sets the input field color. |
| `--ring` | Sets the focus ring color. |
| `--radius` | Sets the border radius. |

#### Notes

- The CSS variables defined in `:root` and `.dark` are used throughout the application to maintain consistent theming.
- Ensure that any new components respect these global styles and use the defined CSS variables for theming.
- When adding new styles, consider if they should be added to the global stylesheet or if they are specific enough to be scoped within a component.

---

### `lms-app/app/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/layout.tsx

#### Module Overview

This file defines the root layout component for the application. It sets up the global context providers and applies the default styling using the `Inter` font. It wraps the entire application content in necessary providers for authentication and UI feedback.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `globals.css` | Global styles for the application. |
| `Metadata` | Type for defining metadata for the Next.js application. |
| `Inter` | Google font for the application's default text styling. |
| `ClerkProvider` | Context provider for authentication using Clerk. |
| `ToasterProvider` | Context provider for toast notifications. |
| `ConfettiProvider` | Context provider for confetti animations. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `inter` | Instance of the `Inter` font with specified subsets. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `RootLayout` | `children` (`React.ReactNode`) | `JSX.Element` | Main layout component wrapping the entire application content with necessary providers and default styling. |

#### Configuration

| Configuration | Purpose |
| --- | --- |
| `metadata` | Defines default metadata for the application, including title and description. |

#### Notes

- The `RootLayout` component must be the top-level component in the application to ensure all pages and components receive the necessary context providers.
- The `ClerkProvider` and other context providers should not be nested within any other components to avoid scope issues.
- Ensure that the `children` prop passed to `RootLayout` includes the main content of the application.

---

### `lms-app/app/(auth)/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(auth)/layout.tsx

This file defines a React component, `AuthLayout`, used to layout children elements within a centered flex container. It exists to provide a consistent layout for authentication-related pages.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `React` | Provides the React library for building UI components. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `AuthLayout` | A functional React component that centers its children within a flex container. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `AuthLayout` | `{children: React.ReactNode}` | `JSX.Element` | A functional component that renders its children within a centered flex container. |

#### Notes

- The `AuthLayout` component is designed to center its children both vertically and horizontally.
- It uses Tailwind CSS classes (`h-full`, `flex`, `items-center`, `justify-center`) for styling.
- This component is intended to be used in authentication-related routes to provide a uniform layout.

---

### `lms-app/app/(auth)/(routes)/sign-in/[[...sign-in]]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `SignUpPage` component, which is used for handling user sign-in through the Clerk authentication service. It provides a simple interface for users to sign in to the application.

#### Dependencies

| Import | Purpose | Description |
| --- | --- | --- |
| `SignIn` | Authentication | Component from `@clerk/nextjs` for handling sign-in functionality. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `SignUpPage` | Sign-in page component | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `SignUpPage` | None | JSX element | Renders the `SignIn` component for user authentication. |

#### Notes

- The `SignIn` component handles all the necessary logic for user authentication.
- Ensure that Clerk is correctly configured in your project for this component to work.
- This component does not include any additional logic or styling; it's a straightforward wrapper for the `SignIn` component.

---

### `lms-app/app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `SignUpPage` component, which renders the sign-up form using the `SignUp` component from `@clerk/nextjs`. It exists to handle user sign-up functionality within the application.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `SignUp` | A component from `@clerk/nextjs` for rendering the sign-up form. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `SignUpPage` | The main component for the sign-up page. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `SignUpPage` | None | JSX element | Renders the `SignUp` component. |

#### Notes

- The `SignUp` component handles all sign-up logic internally.
- Ensure that the `@clerk/nextjs` package is installed and configured correctly for this to work.

---

### `lms-app/app/(course)/courses/[courseId]/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(course)/courses/[courseId]/layout.tsx

#### Module Overview

This file defines the layout for a specific course within the Learning Management System (LMS). It integrates the course-specific sidebar and navbar, fetches course and chapter data from the backend, and ensures the user is authenticated before rendering the layout.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `auth` | Authenticates the user using Clerk. |
| `axios` | Makes HTTP requests to the backend API. |
| `redirect` | Redirects unauthenticated users to the home page. |
| `CourseSidebar` | Component for displaying the sidebar with course chapters. |
| `CourseNavbar` | Component for displaying the navigation bar with course details. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseLayout` | `{ children: React.ReactNode; params: { courseId: string } }` | JSX | Renders the layout for a specific course, including the sidebar and navbar, and fetches course and chapter data. |

#### Configuration or Constants

| Variable | Purpose |
| --- | --- |
| `process.env.BACK_END_URL` | Base URL for the backend API. |

#### Notes

- Ensure the `courseId` parameter is correctly passed to the `CourseLayout` component.
- The `userId` is obtained from the `auth()` function and used to fetch chapter data.
- Unauthenticated users are redirected to the home page if `userId` is not present.
- The layout uses fixed positioning for the navbar and sidebar to ensure they remain visible during scrolling.

---

### `lms-app/app/(course)/courses/[courseId]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file, `lms-app/app/(course)/courses/[courseId]/page.tsx`, handles the redirection logic for a specific course. When a user navigates to a course page, it fetches the published chapters for that course and redirects to the first chapter's page.

# Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making API requests. |
| `redirect` | Utility from Next.js to handle client-side redirections. |

# Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

# Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseIdPage` | `{ params: { courseId: string } }` | `void` | Fetches published chapters for a course and redirects to the first chapter's page. |

# Configuration

| Variable | Purpose |
| --- | --- |
| `process.env.BACK_END_URL` | Base URL for the backend API. |

# Notes

- The file uses environment variables to fetch data from the backend.
- If no chapters are published for the course, the user is redirected to the home page.
- Ensure that the `BACK_END_URL` environment variable is correctly set in the deployment environment.

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-mobile-sidebar.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(course)/courses/[courseId]/_components/course-mobile-sidebar.tsx`

#### Module Overview

This file defines the `CourseMobileSidebar` component, which renders a mobile-friendly sidebar for navigating a course in the Learning Management System (LMS). It uses a slide-out sheet to display the course sidebar, accessible via a menu icon.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `Menu` | Icon component from `lucide-react` for the sidebar trigger. |
| `Sheet`, `SheetContent`, `SheetTrigger` | Components from `@/components/ui/sheet` for the slide-out sidebar. |
| `CourseSidebar` | Subcomponent that displays the course details and chapters. |
| `auth` | Hook from `@clerk/nextjs` to get the current user's ID. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseMobileSidebar` | `courseMobileSidebarProps` | JSX element | Renders the mobile sidebar for a course. |

#### Configuration or Constants

| Name | Type | Description |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Notes

- The `Sheet` component is used to create a slide-out sidebar.
- The `SheetTrigger` is a menu icon that only appears on mobile (`md:hidden`).
- The `CourseSidebar` component is passed the current user's ID (`userId`), the course object, and the chapters array.
- The sidebar is positioned on the left side (`side="left"`).
- The `SheetContent` has a fixed width of `w-72` and a white background (`bg-white`).

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-navbar.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(course)/courses/[courseId]/_components/course-navbar.tsx`

#### Module Overview

This file defines the `CourseNavbar` component, which renders the navigation bar for a specific course. It integrates the `CourseMobileSidebar` and `NavbarRoutes` components to provide a cohesive navigation experience for course-related actions.

#### Dependencies

- **`NavbarRoutes`**: A component that provides navigation routes specific to the course.
- **`CourseMobileSidebar`**: A component that renders a mobile sidebar for course navigation.

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseNavbar` | Main component for the course navigation bar | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseNavbar` | `course` (course object), `chapters` (array of chapter objects) | JSX element | Renders the navigation bar with the mobile sidebar and navigation routes |

#### Configuration or Constants

None

#### Notes

- The `CourseNavbar` component expects `course` and `chapters` props to render correctly.
- The `CourseMobileSidebar` component is conditionally rendered but commented out in the current implementation.
- Ensure that the `course` and `chapters` props are correctly passed from the parent component to maintain the navigation context.

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx`

#### Module Overview

This file defines a `CourseSidebarItem` component that represents an individual course item in the sidebar of the course management system. It displays an icon, course label, and handles navigation to the course chapters when clicked.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `cn` | Utility function for conditional class names. |
| `CheckCircle`, `Lock`, `PlayCircle` | Icons used to visually represent course states. |
| `usePathname`, `useRouter` | Hooks for pathname and routing functionality. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseSidebarItem` | `_id`, `label`, `isCompleted`, `isLocked`, `courseId` | `JSX.Element` | Renders a clickable course item with appropriate icons and navigation. |

#### Configuration

| Configuration | Description |
| --- | --- |
| `Icon` | Conditionally selects an icon based on `isLocked` and `isCompleted` states. |

#### Notes

- The `CourseSidebarItem` component uses conditional rendering to determine the appearance based on the course state (`isCompleted`, `isLocked`, `isActive`).
- The `onClick` handler navigates to the course chapters page using the `router.push` method.
- The component's styling changes based on the `isActive` and `isCompleted` states to provide visual feedback to the user.

---

### `lms-app/app/(course)/courses/[courseId]/_components/course-sidebar.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `course-sidebar.tsx` file defines the `CourseSidebar` component, which displays a sidebar for a course in the LMS application. It shows the course title, progress bar, and a list of chapters with their completion status.

#### Dependencies

| Import | Description |
| --- | --- |
| `auth` from `@clerk/nextjs` | Provides authentication context. |
| `redirect` from `next/navigation` | Redirects users if they are not authenticated. |
| `CourseSidebarItem` | Component for rendering individual course sidebar items. |
| `CourseProgress` | Component for displaying the course progress. |
| `getPurchasedStatus`, `getCompletedChaptersCount`, `calculateProgress` from `@/utils/course-utils` | Utility functions for calculating course-related data. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseSidebar` | Displays the sidebar for a course. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getPurchasedStatus` | `course`, `userId` | `boolean` | Checks if a course is purchased by the user. |
| `getCompletedChaptersCount` | `chapters`, `userId` | `number` | Counts the number of completed chapters by the user. |
| `calculateProgress` | `completedChapters`, `totalChapters` | `number` | Calculates the progress percentage. |

#### Notes

- Ensure that the `userId` is always available when using this component.
- The `redirect` function will redirect unauthenticated users to the homepage.
- The `CourseProgress` component only displays if the course is purchased.
- The `CourseSidebarItem` component handles the display of individual chapters, including their completion status and whether they are locked.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterIdPage` component, which is a React component for displaying a specific chapter within a course on the Learning Management System (LMS) application. It fetches chapter data, checks user authentication, and conditionally renders various UI elements based on the user's purchase status and chapter completion.

#### Dependencies

| Import | Description |
| --- | --- |
| `getChapters` | Action to fetch chapter data. |
| `Banner` | Component to display status banners. |
| `auth` | Authentication utility from `@clerk/nextjs`. |
| `redirect` | Utility to redirect users from `next/navigation`. |
| `VideoPlayer` | Custom component for playing video content. |
| `CourseEnrollButton` | Custom component for enrolling in a course. |
| `Separator` | UI component for visual separation. |
| `Preview` | Component to preview text content. |
| `File` | Icon from `lucide-react`. |
| `CourseProgressButton` | Custom component for tracking course progress. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `ChapterIdPage` | `{ params: { courseId: string; chapterId: string } }` | JSX Element | Renders the chapter page with video player, enrollment/progress buttons, and chapter details. |

#### Notes

- The component checks if the user is authenticated before proceeding. If not, it redirects to the homepage.
- The `getChapters` action fetches necessary data for the chapter, including whether the chapter is locked or if the user has completed it.
- Conditional rendering is used to show different UI elements based on the user's purchase status and chapter completion.
- The `VideoPlayer` component is responsible for playing the chapter's video content.
- Attachments are displayed as links, opening in a new tab.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines a React component, `CourseEnrollButton`, which renders a button that allows users to enroll in a course. When clicked, it triggers an API call to initiate the enrollment process and redirects the user to the checkout page upon success.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making API requests. |
| `useState` | Hook to manage state within the component. |
| `Button` | UI component for rendering the button. |
| `formatPrice` | Utility function to format the course price. |
| `toast` | Library for displaying toast notifications. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CourseEnrollButton` | Main component for the enroll button. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onClick` | None | None | Handles the button click event, initiates enrollment API call, and manages loading state. |

#### Configuration

None

#### Notes

- The `onClick` function handles both success and error states for the API request.
- The `formatPrice` utility is used to display the course price in a user-friendly format.
- Error messages are logged to the console and a toast notification is shown to the user in case of failure.
- The component uses the `useState` hook to manage the loading state of the button.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-progress-button.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `CourseProgressButton` component, which allows users to mark a chapter as completed or not completed within a course. It provides a button that updates the user's progress and triggers visual feedback.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `Button` | A UI button component from the project's design system. |
| `useConfettiStore` | A custom hook to manage confetti animations. |
| `axios` | A promise-based HTTP client for making requests to the API. |
| `CheckCircle`, `XCircle` | Icons from the `lucide-react` library to indicate completion status. |
| `useRouter` | A hook from Next.js for navigation and URL manipulation. |
| `useState` | A React hook for managing component state. |
| `toast` | A function from `react-hot-toast` for displaying notifications. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseProgressButton` | `chapterId`, `courseId`, `isCompleted`, `nextChapterId` | JSX Element | A button component to mark chapter progress. |

#### Notes

- The `isCompleted` prop determines the button's text and icon.
- The `nextChapterId` prop is used to navigate to the next chapter if it exists.
- The component uses `axios` to send a POST request to update the chapter's progress.
- The `useConfettiStore` hook is used to trigger a confetti animation when a chapter is marked as completed and there is no next chapter.
- The `toast` function provides feedback to the user on the success or failure of the request.

---

### `lms-app/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/video-player.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `video-player.tsx` file defines the `VideoPlayer` component, which is used to play video content within a course chapter. It handles video playback, user interactions, and updates the user's progress upon video completion.

#### Dependencies

| Import | Description |
| --- | --- |
| `axios` | HTTP client for making requests to the backend. |
| `MuxPlayer` | A React component from `@mux/mux-player-react` for video playback. |
| `Loader2`, `Lock` | Icons from `lucide-react` for loading and locked states. |
| `useState` | React hook for managing component state. |
| `cn` | Utility function from `@/lib/utils` for conditional class names. |
| `useRouter` | Hook from `next/navigation` for navigation and routing. |
| `useConfettiStore` | Custom hook from `@/hooks/use-confetti-store` for confetti effects. |
| `toast` | Function from `react-hot-toast` for displaying notifications. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onEnd` | None | None | Handles the logic when the video ends, updating progress and navigating to the next chapter if applicable. |

#### Notes

- The `playbackId` prop is essential for initializing the MuxPlayer.
- The `isLocked` prop determines if the video is locked and should display a lock icon.
- The `completeOnEnd` prop is not used in the current implementation but could be utilized for additional logic.
- Ensure that the API endpoint `/api/courses/${courseId}/chapters/${chapterId}/progress` is correctly set up to handle progress updates.

---

### `lms-app/app/(dashboard)/layout.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/layout.tsx

#### Module Overview

This file defines the layout for the dashboard component of the LMS application. It integrates a `Navbar` and a `Sidebar` into the main layout, ensuring a consistent user interface across the dashboard.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `useEffect`, `useState` | React hooks for lifecycle management and state handling. |
| `Navbar` | A component for the navigation bar at the top of the dashboard. |
| `Sidebar` | A component for the sidebar on the left side of the dashboard. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `DashboardLayout` | The main layout component for the dashboard. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `DashboardLayout` | `{ children: React.ReactNode }` | `JSX.Element` | Renders the dashboard layout with a `Navbar`, `Sidebar`, and the provided children components. |

#### Notes

- The `DashboardLayout` component uses a state variable `domLoaded` to ensure that the layout only renders after the initial DOM load.
- The layout is responsive, hiding the sidebar on smaller screens and displaying it on medium and larger screens.
- The `main` element adjusts its padding and margin based on the presence of the `Navbar` and `Sidebar`.

---

### `lms-app/app/(dashboard)/(routes)/(root)/page.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/(root)/page.tsx

#### Module Overview

This file defines the main dashboard page for the Learning Management System (LMS). It fetches the user's completed and in-progress courses and displays them using the `CoursesList` component. It also shows informational cards indicating the number of courses in progress and completed.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `GetDashboardCourses` | Fetches the user's completed and in-progress courses. |
| `CoursesList` | Displays a list of courses. |
| `auth` | Provides authentication details from Clerk. |
| `CheckCircle`, `Clock` | Icons used in the info cards. |
| `redirect` | Redirects the user if not authenticated. |
| `InfoCard` | Component to display info cards with icons and labels. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| N/A | N/A | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `Dashboard` | N/A | JSX element | Fetches and displays the user's courses and info cards. |

#### Notes

- The `Dashboard` function checks if the user is authenticated. If not, it redirects to the home page.
- The `GetDashboardCourses` function is used to fetch the user's completed and in-progress courses.
- The `InfoCard` components display the number of courses in progress and completed.
- The `CoursesList` component combines both completed and in-progress courses for display.

---

### `lms-app/app/(dashboard)/(routes)/(root)/_components/info-card.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/(root)/_components/info-card.tsx`

#### Module Overview

This file defines a reusable `InfoCard` component used to display key information in a compact, visually appealing format. It takes an icon, a label, and a number of items, and optionally a variant, to provide contextual styling.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `IconBadge` | A component that displays an icon with a badge, optionally styled by a variant. |
| `LucideIcon` | A type representing icons from the lucide-react library. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `InfoCard` | Displays a card with an icon, label, and item count. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `InfoCard` | `icon: LucideIcon`, `label: string`, `numberOfItems: number`, `variant: "default" | `JSX` | Renders a card with the provided icon, label, and item count. The variant can optionally change the style of the icon badge. |

#### Configuration or Constants

None.

#### Notes

- The `InfoCard` component conditionally pluralizes the number of items displayed.
- The `variant` prop is optional and defaults to `"default"` if not provided.
- The `IconBadge` component is used to display the icon with a badge, which can be styled by the `variant` prop.

---

### `lms-app/app/(dashboard)/(routes)/search/page.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/search/page.tsx

#### Module Overview

This file defines the `SearchPage` component for the Learning Management System (LMS) application. It handles the search functionality for courses based on user input and category selection. It fetches course data and renders a search input, categories, and a list of courses matching the search criteria.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `axios` | HTTP client for making API requests. |
| `Categories` | Component to display available categories. |
| `SearchInput` | Component for search input. |
| `auth` | Authentication service from Clerk. |
| `redirect` | Utility from Next.js for client-side navigation. |
| `getCourses` | Action to fetch courses based on user ID and search parameters. |
| `CoursesList` | Component to display a list of courses. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `SearchPage` | Main component for search page. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getCourses` | `{ userId: string, title?: string, categoryId: string }` | `Promise<Course[]>` | Fetches courses based on user ID and search parameters. |

#### Configuration or Constants

| Constant | Purpose |
| --- | --- |
| `process.env.BACK_END_URL` | Base URL for backend API requests. |

#### Notes

- Ensure that the `userId` is available before proceeding with the search; otherwise, redirect to the home page.
- The `searchParams` object includes optional `title` and required `categoryId` for filtering courses.
- The `getCourses` function is asynchronous and relies on the `userId` and `searchParams` to fetch relevant course data.
- The `Categories` and `CoursesList` components are used to display categories and filtered course lists, respectively.

---

### `lms-app/app/(dashboard)/(routes)/search/_components/categories.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/search/_components/categories.tsx

#### Module Overview

This file defines a React component `Categories` that renders a list of category items, each associated with a specific icon. It uses a predefined mapping of category names to corresponding icon components from the `react-icons` library.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `FcEngineering`, `FcFilmReel`, `FcMultipleDevices`, `FcMusic`, `FcOldTimeCamera`, `FcSalesPerformance`, `FcSportsMode` | Icon components from the `react-icons` library. |
| `IconType` | Type definition for icon components. |
| `CategoryItem` | Custom component used to render each category item. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `Categories` | Renders a list of category items with corresponding icons. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `iconMap` | Maps category names to icon components. | `IconType` | Static mapping object. |

#### Notes

- The `Categories` component expects a prop `items` which is an array of objects, each containing a `_id` and `name`.
- The `CategoryItem` component is used to render each category, with the icon determined by the `iconMap`.
- The `Categories` component is designed to be flexible and can easily be extended to include new categories by adding them to the `iconMap`.

---

### `lms-app/app/(dashboard)/(routes)/search/_components/category-item.tsx`
**Language:** Typescript

#### Overview

# File Overview

The `category-item.tsx` file defines a `CategoryItem` component, which represents a selectable category item within the LMS application's dashboard. This component is used to filter search results by category and visually indicates whether it is currently selected.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `cn` from `@/lib/utils` | Utility function to concatenate class names conditionally. |
| `usePathname`, `useRouter`, `useSearchParams` from `next/navigation` | Hooks to access and manipulate the current pathname, router, and search parameters. |
| `qs` from `query-string` | Utility library to stringify URL query parameters. |
| `IconType` from `react-icons` | Type definition for icons used in the component. |

#### Classes

| Class | Purpose | Key Methods |
| ----- | -------- | ------------ |
| None | This file does not define any classes. |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `CategoryItem` | `label: string`, `icon?: IconType`, `value?: string` | JSX Element | A React functional component that renders a category item button. |

#### Notes

- The `CategoryItem` component uses the `usePathname`, `useRouter`, and `useSearchParams` hooks to interact with the current URL and update the search parameters when clicked.
- The `qs.stringifyUrl` function is used to construct the new URL with updated query parameters.
- The `cn` utility function is used to conditionally apply CSS classes based on whether the category is selected.
- The `Icon` prop is optional and if provided, it will render the specified icon next to the category label.
- The `onClick` function updates the URL and navigates to the new URL using the `router.push` method.

---

### `lms-app/app/(dashboard)/(routes)/teacher/analytics/page.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/teacher/analytics/page.tsx

#### Module Overview

This file defines the `AnalyticsPage` component, which displays analytics data for teachers. It fetches data from the backend and renders it using `DataCard` and `Chart` components.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `getAnalytics` | Fetches analytics data for a given user ID. |
| `auth` | Provides authentication context, including the current user's ID. |
| `redirect` | Redirects the user to the home page if not authenticated. |
| `DataCard` | Displays data in a card format. |
| `Chart` | Renders a chart based on provided data. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `AnalyticsPage` | Main component for displaying teacher analytics. | None |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getAnalytics` | `userId` | Analytics data | Fetches analytics data for the given user ID. |
| `auth` | None | User ID | Provides the current authenticated user's ID. |
| `redirect` | `path` | Redirects to the specified path | Redirects the user to the home page if no user ID is present. |

#### Notes

- Ensure the user is authenticated before fetching analytics data.
- If `userId` is not available, the user is redirected to the home page.
- The `DataCard` component is used to display total revenue and sales in a formatted manner.
- The `Chart` component visualizes the analytics data provided.

---

### `lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/chart.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/chart.tsx`

#### Module Overview

This file defines a `Chart` component that renders a bar chart using `recharts`. It takes in a `data` prop and displays it in a responsive container wrapped in a `Card` component from our UI library.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `Card` | A UI component for displaying content in a card layout. |
| `Bar`, `BarChart`, `ResponsiveContainer`, `XAxis`, `YAxis` | Components from `recharts` library to render the bar chart. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `Chart` | Renders a bar chart using `recharts`. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `Chart` | `data` | JSX.Element | Renders a bar chart with the provided data. |

#### Configuration

No configuration or constants are defined in this file.

#### Notes

- The `data` prop is expected to be an array of objects with `name` and `total` properties.
- The `YAxis` tick formatter formats the tick values as currency.
- The bar chart is styled with a radius to give it rounded corners.
- The chart is responsive and will adjust its size based on the container's dimensions.

---

### `lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/data-card.tsx`
**Language:** Typescript

#### Overview

# lms-app/app/(dashboard)/(routes)/teacher/analytics/_components/data-card.tsx

#### Module Overview

This file defines a `DataCard` component that displays a card with a label and a value, optionally formatted as a price. It's used in the teacher analytics section of the dashboard to present key metrics in a clean, readable format.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `Card`, `CardContent`, `CardHeader`, `CardTitle` | UI components from a custom component library for structured layout. |
| `formatPrice` | Utility function to format numbers as prices. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `DataCard` | Displays a card with a label and a value | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `formatPrice` | `number` | `string` | Formats a number as a price string. |

#### Configuration or Constants

None

#### Notes

- The `shouldFormat` prop determines if the `value` should be passed through `formatPrice` to be displayed as a formatted price.
- Ensure that the `value` prop is a number to avoid errors when formatting.
- The `label` prop is required to provide a descriptive title for the card content.

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
| `DataTable` | A reusable data table component for displaying tabular data. |
| `columns` | Defines the columns to be displayed in the `DataTable`. |
| `auth` | Provides authentication context from `@clerk/nextjs`. |
| `redirect` | Utility from `next/navigation` to redirect the user. |
| `axios` | HTTP client for making API requests. |

#### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `CoursesPage` | The main component that fetches and displays course data. | N/A |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CoursesPage` | None | JSX element | Fetches course data and renders a `DataTable` with the course list. |

#### Notes

- The `CoursesPage` checks for a `userId` from the authentication context. If no `userId` is found, it redirects the user to the home page.
- The course data is fetched from the backend using an API call to `${process.env.BACK_END_URL}/api/courses`.
- The `DataTable` component is used to display the course data, with columns defined in the `columns` import.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/page.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/page.tsx`

#### Module Overview

This file defines the `CourseIdPage` component, which displays the course setup page for a specific course identified by `courseId`. It fetches course data, checks user permissions, and renders various forms and components to customize and manage the course.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `IconBadge` | Custom component for displaying icons with badges. |
| `auth` | Authentication utility from `@clerk/nextjs`. |
| `CircleDollarSign`, `File`, `LayoutDashboard`, `ListChecks` | Icons from `lucide-react`. |
| `redirect` | Utility from `next/navigation` for redirecting users. |
| `TitleForm`, `DescriptionForm`, `ImageForm`, `CategoryForm`, `PriceForm`, `AttachmentsForm`, `ChapterForm`, `Banner`, `Actions` | Custom form and utility components. |

#### Classes

There are no classes in this file.

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `CourseIdPage` | `{ params: { courseId: string } }` | `JSX.Element` | Renders the course setup page with various forms and components. |

#### Notes

- The component checks if the user is authenticated and redirects to the homepage if not.
- It fetches course data and categories from the backend and displays a banner indicating the course's publication status.
- The `Actions` component is conditionally disabled based on whether all required fields are filled.
- The `courseChapters` array is fetched and used to display course chapters.
- Ensure the environment variable `BACK_END_URL` is set correctly in your environment.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/actions.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `actions.tsx` file defines the `Actions` component, which provides buttons for publishing or deleting a course in the LMS application. It's part of the teacher's dashboard for managing courses.

#### Dependencies

| Import | Description |
| --- | --- |
| `ConfirmModal` | A modal component for confirming actions like deletion. |
| `Button` | A UI button component. |
| `useConfettiStore` | A hook to manage confetti animations. |
| `axios` | A library for making HTTP requests. |
| `Trash` | An icon for the delete button. |
| `useRouter` | A hook from Next.js for navigation. |
| `useState` | A React hook for managing state. |
| `toast` | A library for displaying notifications. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onDelete` | None | None | Handles the deletion of a course. |
| `onPublish` | None | None | Handles the publishing or unpublishing of a course. |

#### Notes

- The `onDelete` function uses `axios.delete` to remove a course from the server.
- The `onPublish` function uses `axios.patch` to toggle the published status of a course.
- The `ConfirmModal` component is used to confirm the deletion action.
- The `confetti.onOpen` method is called when a course is published, triggering a confetti animation.
- The `router.refresh` method is used to refresh the current page after an action is completed.
- The `isLoading` state is used to manage the loading state of the component.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/attachments-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `attachments-form.tsx` file defines a React component for managing course attachments within the LMS application. It allows teachers to add, view, and delete attachments for a specific course.

#### Dependencies

| Import | Purpose |
|--------|---------|
| `z` | Validation using Zod schema. |
| `axios` | HTTP requests to the backend. |
| `useRouter` | Navigation hooks from Next.js. |
| `useState` | React hook for managing component state. |
| `toast` | Notifications using react-hot-toast. |
| `PlusCircle`, `File`, `Loader2`, `X` | Icons from lucide-react. |
| `Button` | Custom button component. |
| `FileUpload` | Custom file upload component. |

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `AttachmentsForm` | Manages course attachments UI and logic. | `toggleEdit`, `onSubmit`, `onDelete` |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `toggleEdit` | None | void | Toggles the edit mode for the attachments form. |
| `onSubmit` | `values: z.infer<typeof formSchema>` | void | Submits the form data to the backend. |
| `onDelete` | `attachmentIdx: number` | void | Deletes an attachment by its index. |

#### Notes

- The form uses Zod for schema validation.
- The `onSubmit` function handles both successful and error states with toast notifications.
- The `onDelete` function updates the UI with a loader while the deletion request is in progress.
- Ensure the backend API endpoints `/api/courses/[courseId]/attachments` and `/api/courses/[courseId]/attachments/[attachmentIdx]` are correctly implemented.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/category-form.tsx`
**Language:** Typescript

#### Overview

### Module Overview

This file defines the `CategoryForm` component, which allows teachers to edit the category of a specific course. It provides an interface for selecting a category from a list of options and submitting the change.

### Dependencies

| Import | Purpose |
|--------|---------|
| `z` | Validation schema using Zod. |
| `zodResolver` | Resolver for integrating Zod with React Hook Form. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Hook from Next.js for navigation. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditional class names. |
| `Pencil` | Icon from `lucide-react`. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for form elements. |
| `Textarea` | UI component for text input. |
| `Button` | UI component for buttons. |
| `Combobox` | UI component for dropdown selection. |

### Classes

No classes are defined in this file.

### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `CategoryForm` | `intialData`, `courseId`, `options` | JSX element | Component that renders the form for editing a course category. |

### Notes

- The form uses Zod for schema validation to ensure the `categoryId` is not empty.
- The `Combobox` component is used for selecting a category from the provided options.
- The form submission updates the course category via a PATCH request to the API.
- Notifications are shown using `toast` for success or error messages.
- The component toggles between display and edit modes using the `isEditing` state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/chpater-form.tsx`
**Language:** Typescript

#### Overview

# File Overview

The `chapter-form.tsx` file provides a form for creating and managing chapters within a specific course in the LMS application. It allows teachers to add new chapters, edit existing ones, and reorder chapters.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `z` | Validation schema for form inputs. |
| `zodResolver` | Resolver for integrating Zod validation with React Hook Form. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Hook from Next.js for navigation and routing. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Utility for displaying notifications. |
| `cn` | Utility for conditionally combining class names. |
| `Loader2`, `PlusCircle` | Icons from `lucide-react`. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for form elements. |
| `Button`, `Input` | UI components for buttons and input fields. |
| `ChaptersList` | Component for displaying and managing a list of chapters. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onSubmit` | `values: z.infer<typeof formSchema>` | `Promise<void>` | Handles form submission to create a new chapter. |
| `onReorder` | `updatedData: { id: string; position: number }[]` | `Promise<void>` | Handles reordering of chapters. |
| `onEdit` | `chapterId: string` | `void` | Navigates to the edit page for a specific chapter. |

#### Notes

- The form validation schema ensures that the chapter title is not empty.
- The `onSubmit` function handles the creation of a new chapter and updates the UI accordingly.
- The `onReorder` function updates the order of chapters and notifies the user of success or failure.
- The `onEdit` function navigates to the edit page for a specific chapter.
- The component conditionally renders different UI elements based on the state (`isCreating`, `isUpdating`).
- The `ChaptersList` component is used to display and manage existing chapters.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/chpaters-list.tsx`
**Language:** Typescript

#### Overview

# File Overview

The `chapters-list.tsx` file defines a React component that renders a draggable list of chapters for a course. It allows teachers to reorder chapters and edit them directly from the dashboard.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `useEffect`, `useState` from `react` | React hooks for managing state and side effects. |
| `DragDropContext`, `Droppable`, `Draggable`, `DropResult` from `@hello-pangea/dnd` | Components and types from the `react-dnd` library for drag-and-drop functionality. |
| `cn` from `@/lib/utils` | A utility function for conditionally combining class names. |
| `Grip`, `Pencil` from `lucide-react` | Icon components for drag handle and edit button. |
| `Badge` from `@/components/ui/badge` | A UI component for displaying status badges. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `ChaptersList` | `onEdit: (_id: string) => void`, `onReorder: (updateData: { id: string; position: number }[]) => void`, `items: { title: string; _id: string; isPublished: boolean; position: number; isFree: string }[]` | `JSX.Element` | A React component that renders a list of chapters with drag-and-drop functionality. |

#### Notes

- The component uses the `react-dnd` library for drag-and-drop functionality, which requires wrapping the app in a `DragDropContext` provider.
- The `onEdit` and `onReorder` props are callbacks that the parent component must provide to handle editing and reordering of chapters.
- The `items` prop is an array of chapter objects, each with properties like `title`, `_id`, `isPublished`, `position`, and `isFree`.
- The component conditionally applies CSS classes based on the chapter's `isPublished` status to change the appearance of published chapters.
- The `useEffect` hook is used to update the local state when the `items` prop changes, ensuring the list is always in sync with the parent component's state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/description-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines a React component `DescriptionForm` that allows teachers to view and edit the description of a specific course. It uses `react-hook-form` for form handling and validation, `axios` for making HTTP requests, and `zod` for schema validation.

# Dependencies

| Import | Purpose |
|--------|---------|
| `z` | Schema validation with Zod. |
| `zodResolver` | Resolver for react-hook-form to work with Zod. |
| `axios` | HTTP client for making requests to the API. |
| `useRouter` | Next.js hook for navigation and refreshing the router. |
| `useForm` | Hook from react-hook-form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditionally combining class names. |
| `Pencil` | Icon from lucide-react for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for form layout and styling. |
| `Textarea` | UI component for text input fields. |
| `Button` | UI component for buttons. |

# Classes

There are no classes in this file.

# Functions

There are no standalone functions in this file.

# Configuration

The form schema is defined using Zod to ensure the description is at least one character long.

# Notes

- The form switches between view and edit modes using the `isEditing` state.
- The `onSubmit` function handles form submission, updating the course description via an API call.
- Notifications are displayed using `toast` for success and error messages.
- The `cn` function is used to conditionally apply CSS classes based on the component's state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/image-form.tsx`
**Language:** Typescript

#### Overview

### Module Overview

This file defines the `ImageForm` component, which allows teachers to upload or change the course image for a specific course. It includes form validation, image upload handling, and user feedback through toast notifications.

### Dependencies

| Import | Purpose |
| ------ | ------- |
| `z` | Validation schema using Zod. |
| `axios` | HTTP client for making requests to the backend. |
| `useRouter` | Hook from Next.js for navigation and refreshing the router. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying toast notifications. |
| `ImageIcon`, `Pencil`, `PlusCircle` | Icons from `lucide-react` for UI elements. |
| `Button` | Custom button component from the UI library. |
| `FileUpload` | Custom file upload component. |
| `Image` | Next.js Image component for optimized image loading. |

### Classes

| Class | Purpose | Key Methods |
| ----- | ------- | ----------- |
| `ImageForm` | Main component for handling course image form. | `toggleEdit`, `onSubmit` |

### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `toggleEdit` | None | None | Toggles the editing state of the form. |
| `onSubmit` | `values: z.infer<typeof formSchema>` | None | Handles form submission, updates the course image, and shows notifications. |

### Notes

- The form validation schema ensures that the `imageUrl` is not empty.
- The `FileUpload` component is responsible for handling the actual file upload process.
- The `onSubmit` function sends a PATCH request to update the course image and refreshes the router upon success.
- Error handling is done using `toast.error` to notify the user if something goes wrong during the submission.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/price-form.tsx`
**Language:** Typescript

#### Overview

### Module Overview

This file defines a React component, `PriceForm`, which allows teachers to view and edit the price of a specific course. It uses the `react-hook-form` library for form handling and validation, and `axios` for making API requests.

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
| `cn` | Utility function for conditional class names. |
| `DollarSignIcon`, `Pencil` | Icons from `lucide-react`. |
| `Form`, `FormControl`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for form layout. |
| `Button`, `Input` | UI components for button and input fields. |
| `formatPrice` | Utility function for formatting price. |

### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onSubmit` | `values: z.infer<typeof formSchema>` | `Promise<void>` | Handles form submission, updates the course price, and shows a success or error message. |

### Notes

- The form uses Zod for schema validation to ensure the price is a non-empty string.
- The `formatPrice` function is used to display the price in a user-friendly format.
- The component toggles between view and edit modes, allowing teachers to update the course price.
- Error handling is done using `toast` to show notifications to the user.
- The form submission updates the course price via a PATCH request to the API.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/title-form.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/title-form.tsx`

This file defines a React component, `TitleForm`, which allows teachers to view and edit the title of a course. It uses form validation with `react-hook-form` and `zod` for schema validation.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `z` | Schema validation with `zod`. |
| `zodResolver` | Resolver for `react-hook-form` to work with `zod`. |
| `axios` | HTTP client for making requests to the API. |
| `useRouter` | Hook from `next/navigation` for navigation and routing. |
| `useForm` | Hook from `react-hook-form` to manage form state. |
| `useState` | React hook to manage component state. |
| `toast` | Function from `react-hot-toast` for displaying notifications. |
| `Pencil` | Icon from `lucide-react` for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components from the local `@/components/ui` directory. |
| `Input`, `Button` | UI components from the local `@/components/ui` directory. |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `onSubmit` | `values: z.infer<typeof formSchema>` | `Promise<void>` | Handles form submission, updates the course title, and shows a success or error message. |

#### Notes

- The form uses `zod` for schema validation to ensure the title is not empty.
- The `onSubmit` function sends a PATCH request to update the course title and refreshes the router on success.
- The component toggles between view and edit modes using the `isEditing` state.
- Notifications for success and error are displayed using `react-hot-toast`.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterIdPage` component, which is a page in the LMS application for teachers to manage a specific chapter within a course. It allows teachers to customize the chapter's title, description, access settings, and video content.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `IconBadge` | Custom component for displaying icons with badges. |
| `auth` | Authentication utility from `@clerk/nextjs`. |
| `axios` | HTTP client for making requests to the backend. |
| `ArrowLeft`, `Eye`, `LayoutDashboard`, `Video` | Icons from `lucide-react`. |
| `Link` | Component from `next/link` for navigation. |
| `redirect` | Function from `next/navigation` for redirecting users. |
| `ChapterTitleForm`, `ChapterDescriptionForm`, `ChapterAccessForm`, `ChapterVideoForm` | Custom components for managing chapter details. |
| `Banner` | Custom component for displaying banners. |
| `ChapterActions` | Custom component for chapter-specific actions. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `ChapterIdPage` | `{ params: { courseId: string; chapterId: string } }` | JSX | Renders the chapter management page for a specific chapter. |

#### Notes

- The `ChapterIdPage` component fetches chapter data from the backend and displays it in forms for editing.
- It checks if the user is authenticated and redirects to the homepage if not.
- The component displays a banner indicating whether the chapter is published or not.
- The completion status of required fields (title, description, video URL) is calculated and displayed.
- The `ChapterActions` component is disabled if all required fields are not filled out.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-access-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterAccessForm` component, which allows teachers to toggle the free access status of a specific chapter within a course. It provides a form to update the chapter's access settings.

#### Dependencies

| Import | Purpose |
|--------|---------|
| `z` | Validation schema using Zod. |
| `zodResolver` | Resolver for integrating Zod with React Hook Form. |
| `axios` | HTTP client for making requests to the backend. |
| `useRouter` | Hook from Next.js for navigation and routing. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditionally combining class names. |
| `Pencil` | Icon from `lucide-react` for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `Button`, `Checkbox` | UI components from the project's component library. |

#### Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `ChapterAccessForm` | Component to manage chapter access settings. | `toggleEdit`, `onSubmit` |

#### Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `ChapterAccessForm` | `intialData`, `courseId`, `chapterId` | JSX element | Renders the form for managing chapter access. |

#### Configuration

- `formSchema`: A Zod schema to validate the form data.

#### Notes

- The form uses React Hook Form with Zod for validation.
- The `onSubmit` function sends a PATCH request to update the chapter's access status.
- Notifications are displayed using `react-hot-toast`.
- The component toggles between view and edit modes using the `isEditing` state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-actions.tsx`
**Language:** Typescript

#### Overview

# Module Overview

The `chapter-actions.tsx` file provides UI components and functionality for managing actions related to a specific chapter within a course. It allows teachers to publish or unpublish a chapter and delete a chapter entirely.

#### Dependencies

| Import | Purpose |
| --- | --- |
| `ConfirmModal` | A modal component for confirming actions, used here for deleting a chapter. |
| `Button` | A button component for triggering actions. |
| `axios` | A promise-based HTTP client for making API requests. |
| `Trash` | An icon from `lucide-react` used for the delete button. |
| `useRouter` | A hook from `next/navigation` for programmatic navigation and refreshing. |
| `useState` | A React hook for managing component state. |
| `toast` | A function from `react-hot-toast` for displaying notifications. |

#### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `onDelete` | None | None | Handles the deletion of a chapter, shows a success or error toast, and navigates accordingly. |
| `onPublish` | None | None | Handles the publishing or unpublishing of a chapter, shows a success or error toast, and refreshes the router. |

#### Notes

- The `onDelete` function uses a `ConfirmModal` to ensure the user intends to delete the chapter.
- The `onPublish` function toggles the `isPublished` state of the chapter.
- The `isLoading` state is used to manage the loading state of the component, disabling buttons during API calls.
- Error handling is done using `toast.error` to inform the user of any issues.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-description-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterDescriptionForm` component, which allows teachers to view and edit the description of a specific chapter within a course. It uses React Hook Form for form handling and Zod for schema validation.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `z` | Schema validation using Zod. |
| `zodResolver` | Resolver for integrating Zod with React Hook Form. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Hook from Next.js for navigation and routing. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `cn` | Utility function for conditionally combining class names. |
| `Pencil` | Icon from `lucide-react` for the edit button. |
| `Form`, `FormControl`, `FormItem`, `FormLabel`, `FormMessage`, `FormField`, `FormDescription`, `Textarea`, `Button`, `Editor`, `Preview` | UI components from the project's component library. |

#### Classes

| Class | Purpose | Key Methods |
| ----- | ------- | ----------- |
| `ChapterDescriptionForm` | Main component for editing chapter descriptions. | `toggleEdit`, `onSubmit` |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `ChapterDescriptionForm` | `intialData`, `courseId`, `chapterId` | JSX for the form component. | Renders the form for editing chapter descriptions. |

#### Notes

- The form uses Zod for validation to ensure the description is not empty.
- The `Editor` component is used for rich text editing.
- Notifications are displayed using `toast` for success and error messages.
- The component toggles between view and edit modes based on the `isEditing` state.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-title-form.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `ChapterTitleForm` component, which allows teachers to view and edit the title of a specific chapter within a course. It uses React Hook Form for form handling and validation, and Zod for schema validation.

# Dependencies

| Import | Purpose |
|--------|---------|
| `z` | Schema validation with Zod. |
| `zodResolver` | Resolver for integrating Zod with React Hook Form. |
| `axios` | HTTP client for making API requests. |
| `useRouter` | Hook from Next.js for navigation. |
| `useForm` | Hook from React Hook Form for managing form state. |
| `useState` | React hook for managing component state. |
| `toast` | Library for displaying notifications. |
| `Pencil` | Icon from `lucide-react` for the edit button. |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components from the project's component library. |
| `Input`, `Button` | UI components from the project's component library. |

# Classes

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `ChapterTitleForm` | Main component for editing chapter titles. | `toggleEdit`, `onSubmit` |

# Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `onSubmit` | `values: z.infer<typeof formSchema>` | `void` | Handles form submission, updates the chapter title, and shows a notification. |

# Notes

- The form uses Zod for schema validation to ensure the chapter title is not empty.
- The `onSubmit` function makes a PATCH request to update the chapter title and refreshes the router on success.
- The component toggles between view and edit modes using the `isEditing` state.
- Notifications are shown using `toast` for success and error messages.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-video-form.tsx`
**Language:** Typescript

#### Overview

### Module Overview

This file defines the `ChapterVideoForm` component, which is used to manage the video content for a specific chapter within a course. It allows teachers to add, change, or view the video associated with a chapter.

### Dependencies

| Import | Purpose |
| --- | --- |
| `z` | Schema validation using Zod. |
| `axios` | HTTP client for making requests. |
| `useRouter` | Hook from Next.js for navigation. |
| `useState` | React hook for managing state. |
| `toast` | Library for displaying notifications. |
| `Pencil`, `PlusCircle`, `VideoIcon` | Icons from `lucide-react`. |
| `Button` | UI button component. |
| `FileUpload` | Component for uploading files. |
| `MuxPlayer`, `MaxResolution` | Video player component from `@mux/mux-player-react`. |

### Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `ChapterVideoForm` | Manages the form for adding or changing a chapter video. | `toggleEdit`, `onSubmit` |

### Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `toggleEdit` | None | None | Toggles the editing state of the form. |
| `onSubmit` | `values: z.infer<typeof formSchema>` | None | Submits the form data to update the chapter video. |

### Notes

- The form uses Zod for schema validation to ensure the video URL is provided.
- The `onSubmit` function handles both adding and updating the video URL via a PATCH request.
- Notifications are shown using `react-hot-toast` to inform the user of success or failure.
- The `MuxPlayer` component is used to display the video if one is already associated with the chapter.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/columns.tsx`
**Language:** Typescript

#### Overview

# `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/columns.tsx`

This file defines the column structure for the courses table in the teacher's dashboard. It specifies how each column should be displayed, including headers with sorting functionality and cell contents for each course attribute.

#### Dependencies

| Import | Description |
| --- | --- |
| `Button` | UI button component from the custom `ui` package. |
| `ColumnDef` | Type definition for column configurations from `@tanstack/react-table`. |
| `ArrowUpDown`, `MoreHorizontal`, `Pencil` | Icon components from `lucide-react`. |
| `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuTrigger`, `DropdownMenuItem` | Dropdown menu components from the custom `ui` package. |
| `Link` | Next.js component for client-side navigation. |
| `Badge` | UI badge component from the custom `ui` package. |
| `cn` | Utility function for conditional class names from the `lib/utils` module. |

#### Classes

No classes are defined in this file.

#### Functions

No functions are defined in this file.

#### Configuration

No specific configurations are set in this file.

#### Notes

- The `columns` array defines the columns for the courses table, including sorting functionality for the `title` and `price` columns.
- The `cell` property for each column defines how the cell contents should be rendered.
- The `DropdownMenu` component is used to provide an actions menu for each course, allowing the teacher to edit the course.
- The `Badge` component displays the publication status of each course as either "Published" or "Draft".
- Ensure that the `course` type matches the structure of the course data being passed to this component.

---

### `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/data-table.tsx`
**Language:** Typescript

#### Overview

# File Overview

The `lms-app/app/(dashboard)/(routes)/teacher/courses/_components/data-table.tsx` file defines a `DataTable` component for displaying tabular data in a structured and interactive way. It leverages the `@tanstack/react-table` library to manage table state, sorting, filtering, and pagination.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `React` | Provides React functionalities. |
| `@tanstack/react-table` | A library for building powerful and customizable tables. |
| `@/components/ui/table` | Custom table components for UI. |
| `@/components/ui/button` | Custom button component for UI. |
| `@/components/ui/input` | Custom input component for UI. |
| `lucide-react` | Icons for UI elements. |
| `next/link` | Link component for navigation. |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `DataTable` | `columns: ColumnDef<TData, TValue>[], data: TData[]` | JSX.Element | Renders a table with sorting, filtering, and pagination capabilities. |

#### Classes

There are no classes defined in this file.

#### Notes

- The `DataTable` component expects `columns` and `data` props to be passed in. `columns` should be an array of `ColumnDef` objects, and `data` should be an array of data objects that match the structure defined by the columns.
- The `DataTable` component uses state hooks to manage sorting and filtering. These states are updated via the table instance methods.
- The table's pagination controls are rendered at the bottom of the table, allowing users to navigate through pages of data.
- The `Input` component is used for filtering the table data based on the "title" column. This is a simple filter and can be extended for more complex filtering needs.
- Ensure that the `@tanstack/react-table` library is properly installed and configured in your project to use this component effectively.

---

### `lms-app/app/(dashboard)/(routes)/teacher/create/page.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines the `CreatePage` component, which is a form for teachers to create a new course. It uses React Hook Form for form handling and Zod for schema validation. Upon successful submission, it sends the course data to the backend and redirects the user to the newly created course's page.

#### Dependencies

| Import | Purpose |
| ------ | ------- |
| `z` | Zod library for schema validation |
| `axios` | HTTP client for making requests to the backend |
| `zodResolver` | Resolver for integrating Zod with React Hook Form |
| `useForm` | Hook from React Hook Form for managing form state |
| `useRouter` | Hook from Next.js for navigation |
| `Form`, `FormControl`, `FormDescription`, `FormField`, `FormItem`, `FormLabel`, `FormMessage` | UI components for the form layout |
| `Input` | Input component for form fields |
| `Button` | Button component for form actions |
| `Link` | Link component for navigation |
| `toast` | Library for displaying notifications |

#### Functions

| Function | Parameters | Returns | Description |
| -------- | ---------- | ------- | ----------- |
| `onSubmit` | `values: z.infer<typeof formSchema>` | `void` | Handles form submission by sending data to the backend and updating the UI |

#### Notes

- The form uses Zod for validation, ensuring the `title` field is not empty.
- The `onSubmit` function sends a POST request to the `/api/courses` endpoint and handles success and error responses with toast notifications.
- The form's `Cancel` button uses a `Link` component to navigate back to the homepage.
- The `Continue` button is disabled if the form is invalid or if a submission is already in progress.

---

### `lms-app/app/(dashboard)/_components/logo.tsx`
**Language:** Typescript

#### Overview

# Module Overview

This file defines a React component named `Logo` that renders a Next.js `Image` component to display the application's logo as an SVG file.

# Dependencies

| Import | Purpose |
| --- | --- |
| `Image` | Component from Next.js for optimized image rendering. |

# Classes

| Class | Purpose | Key Methods |
| --- | --- | --- |
| `Logo` | Renders the application logo. | None |

# Functions

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `Logo` | None | JSX element | Returns a Next.js `Image` component displaying the logo SVG. |

# Notes

- The `Logo` component uses the `Image` component from Next.js to ensure optimal image loading and rendering.
- The `src` attribute points to the SVG file located at `/public/logo.svg`.
- The `alt` attribute provides alternative text for accessibility purposes.

---

*This documentation was automatically generated and formatted by DocuSense AI.*