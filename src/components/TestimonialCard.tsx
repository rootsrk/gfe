import { useState } from "react";

interface TestimonialCardProps {
  className?: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  content: string;
}

export function TestimonialCard({
  className = "",
  imageUrl,
  title,
  subtitle,
  content,
}: TestimonialCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`shadow-md rounded-lg p-4 border border-neutral-200 ${className} max-w-sm p-6`}
    >
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {/* Skeleton placeholder - always present to prevent layout shift */}
          <div
            className={`w-12 h-12 bg-gray-200 rounded-full mr-2 ${
              imageLoaded ? "hidden" : "animate-pulse"
            }`}
          />
          {/* Actual image */}
          <img
            src={imageUrl}
            alt="Profile"
            className={`rounded-full transition-opacity duration-300 ${
              imageLoaded && !imageError ? "opacity-100 mr-2" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {/* Error fallback */}
          {imageError && (
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
              <span className="text-gray-500 text-xs">?</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between mb-2">
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
          <p className="text-sm font-normal">{subtitle}</p>
        </div>
      </div>
      <div className="text-base text-neutral-700">{content}</div>
    </div>
  );
}
