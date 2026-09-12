import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      href,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classNames = [
      styles.button,
      styles[variant],
      styles[`size-${size}`],
      fullWidth ? styles.fullWidth : '',
      loading ? styles.loading : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const innerContent = (
      <>
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        {!loading && icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
        <span className={styles.content}>{children}</span>
        {!loading && icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classNames}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={disabled || loading}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        className={classNames}
        disabled={disabled || loading}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
