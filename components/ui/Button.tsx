import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'outline';
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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
