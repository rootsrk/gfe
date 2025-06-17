# Testimonial Card Component

## Overview

This assignment focuses on creating a reusable testimonial card component that displays user testimonials with an image, name, username, and testimonial content.

## Requirements

- Create a responsive testimonial card component
- Support for user image, name, subtitle, and content
- Clean and modern design
- Proper TypeScript types
- Responsive design that works on mobile and desktop

## Learning Objectives

- Component composition in React
- Props and TypeScript interfaces
- CSS styling with Tailwind CSS
- Responsive design principles

## Implementation Details

The component should accept the following props:

- `imageUrl`: URL for the user's profile image
- `title`: User's display name
- `subtitle`: User's username or handle
- `content`: The testimonial text
- `className`: Optional additional CSS classes

## Design Considerations

- Use appropriate spacing and typography
- Ensure good contrast for accessibility
- Consider hover states and interactions
- Make it reusable across different contexts

## Nice to Know

### Image Loading & Error States

Our testimonial card implementation includes several advanced features for handling image loading and error states:

#### Loading States

- **Skeleton/Placeholder**: While the image is loading, we display a subtle gray placeholder with a shimmer effect
- **Graceful Loading**: Images fade in smoothly once they're fully loaded to prevent jarring layout shifts
- **Lazy Loading**: Images are loaded only when they come into viewport using the `loading="lazy"` attribute

#### Error Handling

- **Fallback Avatar**: If an image fails to load, we automatically show a default avatar icon or initials
- **Retry Mechanism**: Failed images can be retried by clicking on the placeholder
- **Alt Text**: Proper alt attributes ensure accessibility even when images fail

#### Implementation Techniques

- **onLoad/onError Handlers**: We use React's `onLoad` and `onError` events to track image state
- **CSS Transitions**: Smooth transitions between different states for better UX
- **Responsive Sizing**: Images maintain proper aspect ratios across different screen sizes

#### Code Example

```tsx
const [imageState, setImageState] = useState<"loading" | "loaded" | "error">(
  "loading"
);

const handleImageLoad = () => setImageState("loaded");
const handleImageError = () => setImageState("error");

// In JSX:
{
  imageState === "loading" && <SkeletonAvatar />;
}
{
  imageState === "error" && <DefaultAvatar />;
}
<img
  onLoad={handleImageLoad}
  onError={handleImageError}
  className={imageState === "loaded" ? "opacity-100" : "opacity-0"}
/>;
```

This approach ensures a professional, polished user experience even when network conditions are poor or images are unavailable.
