// components/svg/HoneycombPattern.tsx
// Subtle honeycomb background decoration from BusyBees brand
// Usage: <HoneycombPattern className="absolute inset-0 opacity-[0.04]" />

export function HoneycombPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb)" />
    </svg>
  )
}
