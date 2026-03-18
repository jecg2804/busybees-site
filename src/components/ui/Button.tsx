import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    'bg-honey text-white hover:bg-honey-dark',
  secondary:
    'bg-transparent border border-sand text-text hover:border-honey hover:text-honey-dark',
  ghost:
    'bg-transparent text-text hover:text-honey-dark',
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-[15px] transition-colors duration-200 cursor-pointer ${variants[variant]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
