interface HoneycombPatternProps {
  className?: string;
}

export default function HoneycombPattern({ className = '' }: HoneycombPatternProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id="honeycomb"
          x="0"
          y="0"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.5)"
        >
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M28 166L0 150L0 116L28 100L56 116L56 150L28 166Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb)" />
    </svg>
  );
}
