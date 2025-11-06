# Toast Notification Library Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from leading toast libraries (Sonner, React Hot Toast, Radix Toast) and modern design systems. Focus on clarity, accessibility, and delightful micro-interactions.

## Toast Component Design

### Typography
- **Font Family**: System font stack (use browser defaults for optimal performance)
- **Title**: 14px, font-weight 600
- **Message**: 14px, font-weight 400
- **Toast Width**: 356px fixed width for consistency

### Layout & Spacing
**Primary Spacing Units**: Use Tailwind units of 2, 3, 4, and 6
- Toast padding: p-4
- Icon to text gap: gap-3
- Vertical spacing between stacked toasts: space-y-2
- Toast border-radius: rounded-lg

### Toast Variants Structure
Each toast type includes:
- **Icon**: 20px size, positioned left
- **Content Area**: Title (bold) + optional description
- **Dismiss Button**: 16px × icon, positioned top-right
- **Action Button** (optional): Small button in bottom-right of toast

**Variant Styling** (Background, Border, Icon):
- Success: Light green background, green border-left (4px), checkmark icon
- Error: Light red background, red border-left (4px), X circle icon
- Warning: Light amber background, amber border-left (4px), alert triangle icon
- Info: Light blue background, blue border-left (4px), info circle icon
- Loading: Light gray background, blue border-left (4px), animated spinner icon

### Positioning System
Support 6 positions with consistent 24px margin from viewport edges:
- top-left, top-center, top-right
- bottom-left, bottom-center, bottom-right

Stack toasts vertically with 8px gap between items

### Animations
- **Entry**: Slide-in from position side + fade-in (200ms ease-out)
- **Exit**: Slide-out + fade-out (150ms ease-in)
- **Loading Spinner**: Continuous rotation
- Keep animations subtle and performant

## Demo Website Design

### Hero Section (60vh)
- **Centered Layout**: Large heading + interactive demo area
- **Background**: Subtle gradient background
- **Live Demo Box**: Centered card (600px wide) with shadow containing:
  - Grid of toast trigger buttons (2×3 grid layout)
  - Position selector dropdown
  - Duration input slider
  - Each button styled as primary CTA with icon

### Features Section
**3-Column Grid** (grid-cols-1 md:grid-cols-3):
- Feature cards with: Icon (32px), Title (18px bold), Description (14px)
- Features: "Multiple Variants", "Promise API", "Full Customization", "Positions", "TypeScript", "Zero Dependencies"
- Card styling: Subtle border, hover lift effect

### Code Examples Section
**2-Column Layout** (sidebar + content):
- Left: Tab navigation for different examples (Basic, Promise, Custom)
- Right: Syntax-highlighted code blocks with copy button
- Include visual preview next to code

### Installation Section
Centered max-w-2xl:
- npm install command in code block
- CDN import example
- Quick start snippet

### API Reference Section
Table-based layout showing:
- Method signatures
- Parameters with types
- Return values
- Usage examples inline

### Footer
Full-width with 3 columns:
- Links (GitHub, npm, Documentation)
- Community (Discord, Twitter)
- Copyright + version info

## Component Library Specifications

### Core Components
1. **ToastContainer**: Portal wrapper positioned fixed
2. **Toast**: Individual toast with variant styling
3. **ToastIcon**: SVG icons for each variant
4. **ToastDismiss**: X button with hover opacity
5. **ProgressBar** (optional): Auto-dismiss countdown visual

### Accessibility
- Role="alert" for toasts
- aria-live="polite" for non-critical, "assertive" for errors
- Keyboard dismissible (Escape key)
- Focus management for action buttons

### Images
**Hero Section**: No hero image needed - interactive demo is the visual focus

**Feature Icons**: Use Heroicons for feature card icons via CDN

This design prioritizes functional clarity while maintaining visual polish - the toasts themselves are the product, so they must be immediately impressive and easy to use.