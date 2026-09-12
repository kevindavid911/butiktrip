import React, { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary';
  size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'neutral', size = 'sm', children, ...props }, ref) => {
    const classNames = [styles.badge, styles[variant], styles[`size-${size}`], className]
      .filter(Boolean)
      .join(' ');

    return (
      <span className={classNames} ref={ref} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
