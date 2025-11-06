# Toast Notifications Library

## Overview
A modern, feature-rich toast notification library for React/TypeScript applications. This project provides a comprehensive toast solution that can be distributed via npm and CDN, featuring multiple variants, flexible positioning, promise-based API, and beautiful animations.

## Project Structure

### Library (`/lib/toast`)
The core toast notification library that will be published to npm and CDN.

**Features:**
- Multiple toast variants (success, error, warning, info, loading)
- 6 positioning options (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
- Promise-based API for async operations
- Customizable duration and auto-dismiss
- Smooth slide and fade animations
- Stack management for multiple toasts
- Full TypeScript support
- Rich customization (custom icons, className, style overrides)

### Demo Website (`/client`)
Interactive demo website showcasing all library features with comprehensive documentation.

**Sections:**
- Hero with live interactive toast demo
- Features grid highlighting capabilities
- Installation instructions (npm & CDN)
- Code examples with syntax highlighting
- API reference documentation
- Footer with links

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tools**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (sans), JetBrains Mono (code)

## Design System
- **Primary Color**: Blue (#3B82F6 family)
- **Success**: Green (#22C55E family)
- **Error**: Red (#EF4444 family)
- **Warning**: Amber (#F59E0B family)
- **Info**: Blue (#3B82F6 family)
- **Typography**: Inter for UI, JetBrains Mono for code
- **Spacing**: Consistent padding (p-4, p-6), gap-3, gap-4
- **Border Radius**: rounded-lg for cards and toasts
- **Dark Mode**: Full support with automatic theme switching

## Development Status

### Completed
- ✅ Design guidelines
- ✅ Demo website UI with all sections
- ✅ TypeScript types and interfaces
- ✅ Theme toggle with dark mode support
- ✅ Responsive layout
- ✅ Code block component with copy functionality

### In Progress
- 🔨 Toast library implementation
- 🔨 Build configuration for npm/CDN
- 🔨 Integration and testing

### Planned
- 📋 npm package publishing
- 📋 CDN deployment
- 📋 Documentation site deployment

## API Design

```typescript
// Basic usage
toast.success('Success message!');
toast.error('Error message');
toast.warning('Warning message');
toast.info('Info message');
toast.loading('Loading...');

// Promise API
toast.promise(myPromise, {
  loading: 'Loading...',
  success: 'Done!',
  error: 'Failed',
});

// Custom options
toast.success('Custom toast', {
  duration: 5000,
  position: 'top-center',
  icon: '🎉',
  className: 'custom-class',
});

// Dismiss toasts
toast.dismiss(); // Dismiss all
toast.dismiss(toastId); // Dismiss specific
```

## Installation (Future)

### Via npm
```bash
npm install @your-org/toast-notifications
```

### Via CDN
```javascript
import { toast } from 'https://cdn.jsdelivr.net/npm/@your-org/toast-notifications/dist/index.esm.js';
```

## Recent Changes
- 2024-11-06: Initial project setup with demo website UI
- 2024-11-06: Added design system and TypeScript types
- 2024-11-06: Implemented theme toggle and code block components

## User Preferences
- Professional, polished visual design
- Feature parity with popular toast libraries (react-hot-toast, sonner)
- Distribution via both npm and CDN
- TypeScript-first approach
