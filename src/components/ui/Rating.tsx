import React from 'react';
import styles from './Rating.module.css';

export interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
  readonly?: boolean;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'sm',
  showValue = false,
  reviewCount,
  readonly = true,
  className = '',
}) => {
  const stars = [];
  
  for (let i = 1; i <= max; i++) {
    const isFilled = i <= value;
    const isHalf = !isFilled && i - 0.5 <= value;
    
    stars.push(
      <span
        key={i}
        className={`${styles.star} ${isFilled ? styles.filled : isHalf ? styles.half : styles.empty}`}
        aria-hidden="true"
      >
        ★
      </span>
    );
  }

  return (
    <div 
      className={`${styles.ratingContainer} ${styles[`size-${size}`]} ${className}`}
      aria-label={`Rating: ${value} out of ${max}`}
      role="img"
    >
      <div className={styles.starsWrapper}>
        {stars}
      </div>
      
      {showValue && <span className={styles.value}>{value.toFixed(1)}</span>}
      
      {reviewCount !== undefined && (
        <span className={styles.reviewCount}>({reviewCount})</span>
      )}
    </div>
  );
};
