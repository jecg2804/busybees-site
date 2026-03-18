interface WaveDividerProps {
  from?: 'cream' | 'warm';
  to?: 'cream' | 'warm';
  flip?: boolean;
  className?: string;
}

const bgColors = {
  cream: '#FDF6EA',
  warm: '#FFFBF4',
};

export default function WaveDivider({
  from = 'cream',
  to = 'warm',
  flip = false,
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
      style={{ backgroundColor: bgColors[to] }}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 30 C200 60, 400 0, 600 30 C800 60, 1000 0, 1200 30 L1200 0 L0 0 Z"
          fill={bgColors[from]}
        />
      </svg>
    </div>
  );
}
