# Global Image Preview (Lightbox) Implementation Guide

## Overview
A fully centralized, global image preview system using React Context. This allows any component in your application to trigger image previews without duplication.

## Architecture

### 1. **ImagePreviewContext** (`src/contexts/ImagePreviewContext.jsx`)
- Global state management for preview modal
- Manages `isOpen`, `imageUrl` states
- Provides `openPreview(url)` and `closePreview()` functions
- Automatically handles body scroll prevention when modal opens

### 2. **useImagePreview Hook** (`src/hooks/useImagePreview.js`)
- Custom hook to access preview context
- Used in any component that needs preview functionality
- Throws error if used outside ImagePreviewProvider

### 3. **ImagePreviewModal Component** (`src/components/ImagePreviewModal.jsx`)
- Renders the full-screen modal with dark overlay
- Shows large image with close button
- Smooth fade-in animation
- Closes on outside click or close button
- Fully responsive (mobile, tablet, desktop)

### 4. **App.jsx Integration**
- Wrapped with `<ImagePreviewProvider>`
- `<ImagePreviewModal />` component placed at root level

## How to Use

### In any component:

```jsx
import { useImagePreview } from '../hooks/useImagePreview';

export default function MyComponent() {
  const { openPreview } = useImagePreview();

  return (
    <img 
      src="image-url.jpg" 
      onClick={() => openPreview("image-url.jpg")}
      className="cursor-pointer"
    />
  );
}
```

## Features

✅ **Centralized** - One context, one modal, used everywhere
✅ **Reusable** - Just import hook and call `openPreview()`
✅ **Non-Breaking** - Doesn't affect existing layouts or structures
✅ **Responsive** - Works perfectly on mobile, tablet, and desktop
✅ **Smooth** - Fade-in animation and smooth transitions
✅ **Accessible** - Close button, click-outside support
✅ **Performance** - No redundant code or duplicate components
✅ **Body Scroll** - Automatically prevents scrolling when modal is open

## Components Updated

- ✅ **PortfolioGallery.jsx** - Uses global preview
- ✅ **BestSellers.jsx** - Uses global preview
- ✅ **App.jsx** - Provider and Modal integration
- ✅ **tailwind.config.js** - Added fade-in animation

## File Structure

```
src/
├── contexts/
│   └── ImagePreviewContext.jsx    (Global state)
├── hooks/
│   └── useImagePreview.js         (Custom hook)
├── components/
│   ├── ImagePreviewModal.jsx      (Modal component)
│   ├── PortfolioGallery.jsx       (Updated)
│   ├── BestSellers.jsx            (Updated)
│   └── App.jsx                    (Updated)
└── tailwind.config.js             (Updated)
```

## Future Additions

### Optional: Add to other components
Any component can use the preview by:

```jsx
const { openPreview } = useImagePreview();
<img onClick={() => openPreview(url)} ... />
```

### Optional: Extend functionality
- Add keyboard navigation (arrow keys to navigate multiple images)
- Add image counter (e.g., "1 of 10")
- Add download button
- Add share functionality

## Notes

- The modal is rendered once at the app root level
- Context provides centralized state management
- No need to pass props through multiple component levels
- Works with any image source (relative, absolute, or data URLs)
