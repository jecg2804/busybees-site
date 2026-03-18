interface OrganicBlobProps {
  color?: 'lavender' | 'pink' | 'honey' | 'blue';
  className?: string;
}

const colorMap = {
  lavender: '#D4B8E8',
  pink: '#F2A0B7',
  honey: '#F5A623',
  blue: '#2E86DE',
};

export default function OrganicBlob({ color = 'lavender', className = '' }: OrganicBlobProps) {
  return (
    <div
      className={`animate-blob opacity-10 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ backgroundColor: colorMap[color] }}
    />
  );
}
