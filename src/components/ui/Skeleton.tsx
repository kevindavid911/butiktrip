import React from 'react';
import styles from './Skeleton.module.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  variant?: 'text' | 'circular' | 'rectangular';
  className?: string;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  variant = 'text',
  className = '',
  count = 1,
}) => {
  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(
      <div
        key={i}
        className={`${styles.skeleton} ${styles[variant]} ${className}`}
        style={{
          width,
          height,
          borderRadius,
        }}
        aria-hidden="true"
      />
    );
  }

  if (count === 1) {
    return <>{elements[0]}</>;
  }

  return <div className={styles.container}>{elements}</div>;
};
