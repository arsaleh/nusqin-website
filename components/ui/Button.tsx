import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center uppercase tracking-widest transition-all duration-300 rounded-full';

  const variants = {
    primary:
      'text-white hover:shadow-lg hover:scale-105',
    secondary:
      'text-white hover:shadow-lg hover:scale-105',
    outline:
      'border-2 hover:shadow-md',
  };

  const sizes = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-sm',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const getStyles = () => {
    if (variant === 'primary') {
      return {
        backgroundColor: 'var(--color-primary)',
        fontFamily: 'var(--font-label)',
        letterSpacing: '0.1em',
      };
    }
    if (variant === 'secondary') {
      return {
        backgroundColor: 'var(--color-brown)',
        fontFamily: 'var(--font-label)',
        letterSpacing: '0.1em',
      };
    }
    if (variant === 'outline') {
      return {
        borderColor: 'var(--color-brown)',
        color: 'var(--color-brown)',
        fontFamily: 'var(--font-label)',
        letterSpacing: '0.1em',
        backgroundColor: 'transparent',
      };
    }
  };

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} style={getStyles()} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={getStyles()} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
