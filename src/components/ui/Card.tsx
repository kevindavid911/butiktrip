import React, { HTMLAttributes } from 'react';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className = '', variant = 'default', hover = false, padding = 'md', children, ...props },
    ref
  ) => {
    const classNames = [
      styles.card,
      styles[variant],
      styles[`padding-${padding}`],
      hover ? styles.hoverable : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={classNames} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
