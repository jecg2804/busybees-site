// components/svg/OrganicBlob.tsx
// Soft morphing blob decoration from BusyBees brand
// Usage: <OrganicBlob color="lavender" className="absolute -top-20 -right-20 w-64 h-64" />

interface OrganicBlobProps {
  color?: 'lavender' | 'pink' | 'honey' | 'blue'
  className?: string
}

const colorMap = {
  lavender: '#D4B8E8',
  pink: '#F2A0B7',
  honey: '#F5A623',
  blue: '#2E86DE',
}

export function OrganicBlob({ color = 'lavender', className = '' }: OrganicBlobProps) {
  return (
    <div
      className={`animate-blob opacity-10 ${className}`}
      style={{ backgroundColor: colorMap[color] }}
      aria-hidden="true"
    />
  )
}
