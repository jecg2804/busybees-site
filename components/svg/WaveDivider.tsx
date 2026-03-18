// components/svg/WaveDivider.tsx
// Organic wave section separator from BusyBees brand
// Usage: <WaveDivider from="cream" to="warm" />

interface WaveDividerProps {
  from?: 'cream' | 'warm' | 'white'
  to?: 'cream' | 'warm' | 'white'
  flip?: boolean
  className?: string
}

const bgMap = {
  cream: '#FDF6EA',
  warm: '#FFFBF4',
  white: '#FFFFFF',
}

export function WaveDivider({ from = 'cream', to = 'warm', flip = false, className = '' }: WaveDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
        style={{ display: 'block', background: bgMap[from] }}
      >
        <path
          d="M0,64 C240,100 480,20 720,64 C960,108 1200,28 1440,64 L1440,120 L0,120 Z"
          fill={bgMap[to]}
        />
      </svg>
    </div>
  )
}
