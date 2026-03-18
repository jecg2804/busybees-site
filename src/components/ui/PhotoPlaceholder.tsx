interface PhotoPlaceholderProps {
  caption?: string;
  className?: string;
  aspectRatio?: string;
}

export default function PhotoPlaceholder({
  caption,
  className = '',
  aspectRatio = 'aspect-[4/3]',
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`bg-cream rounded-2xl border border-dashed border-sand flex flex-col items-center justify-center ${aspectRatio} ${className}`}
    >
      {/* Icono de cámara */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-faint"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      {caption && (
        <span className="text-text-faint text-xs mt-2">{caption}</span>
      )}
    </div>
  );
}
