# Development Guidelines

## File Structure
```
/app
  /layout.tsx
  /page.tsx (Home)
  /listings
    /page.tsx
  /property
    /[id]
      /page.tsx
  /globals.css
/components
  /ui (Atomic components: Button, Input, Card)
  /layout (Navbar, Footer)
  /property (PropertyCard, ImageGallery, FilterSidebar)
/lib
  /data.ts (Dummy data generator)
  /utils.ts (Helper functions)
/types
  /index.ts (TypeScript interfaces)
/hooks
  /useFilters.ts
  /useFavorites.ts
/public
  /images (Placeholder assets)
```

## Naming Conventions
- **Files**: `PascalCase.tsx` for components, `kebab-case.ts` for utilities/hooks.
- **Components**: `PascalCase` (e.g., `PropertyCard`, `FilterSidebar`).
- **Functions/Variables**: `camelCase` (e.g., `formatPrice`, `handleSearch`).
- **Constants/Types**: `PascalCase` (e.g., `Property`, `FilterOptions`).
- **CSS Classes**: Standard Tailwind utility classes.

## Coding Standards
- Strict TypeScript configuration (no implicit `any`).
- Functional Components with Hooks (no Class components).
- Environment variables for any configuration (e.g., site URL).
- ESLint and Prettier for code formatting and linting.
- Modular CSS using Tailwind utility classes to avoid massive style files.
- Prop drilling minimized via Context or Composition.

## Testing Strategy
- **Unit Testing**: Use Jest to test utility functions (e.g., price formatting, filter logic).
- **Component Testing**: Use React Testing Library to verify user interactions (clicking buttons, submitting forms).
- **Visual Regression**: Ensure components render correctly across viewports (Chrome DevTools or Storybook).
- **Manual QA**: Checklist for responsiveness and browser compatibility.

## Error Handling
- **Error Boundaries**: Wrap the main component tree to catch unexpected runtime errors and display a friendly fallback UI.
- **Try/Catch Blocks**: Used within data fetching functions to handle network errors (simulated).
- **Loading States**: Use Suspense or conditional rendering to show Skeleton components while data is "fetching".
- **Not Found Pages**: Implement `not-found.tsx` for invalid property routes.

## Dependencies
- `next`: ^14.0.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `typescript`: ^5.0.0
- `tailwindcss`: ^3.3.0
- `autoprefixer`: ^10.4.16
- `postcss`: ^8.4.31
- `lucide-react`: ^0.292.0
- `clsx`: ^2.0.0
- `tailwind-merge`: ^2.0.0

## Configuration
- `tsconfig.json`: Configured with strict mode, path aliases (`@/`).
- `tailwind.config.ts`: Configured with content paths for app and components directories.
- `.eslintrc.json`: Standard Next.js lint rules.
- `next.config.js`: Standard configuration.
