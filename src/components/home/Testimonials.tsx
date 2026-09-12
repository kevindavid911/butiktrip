'use client';

import { Section } from '@/components/layout';
import { Rating } from '@/components/ui';
import { testimonials } from '@/lib/dummy-data';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const getAvatarColor = (index: number) => {
    const hues = [210, 340, 150, 45, 280];
    const hue = hues[index % hues.length];
    return `hsl(${hue}, 70%, 45%)`;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <Section 
      title="Traveler Testimonial" 
      subtitle="What They Say"
      background="light"
    >
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {testimonials.map((item, index) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.quoteIcon}>&quot;</div>
              
              <p className={styles.comment}>{item.comment}</p>
              
              <div className={styles.divider}></div>
              
              <div className={styles.authorArea}>
                <div 
                  className={styles.avatar}
                  style={{ backgroundColor: getAvatarColor(index) }}
                >
                  {getInitials(item.name)}
                </div>
                
                <div className={styles.authorInfo}>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{item.name}</span>
                    <Rating value={item.rating} size="sm" readonly />
                  </div>
                  {item.tour && (
                    <span className={styles.location}>{item.tour}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.indicators}>
          {testimonials.map((_, i) => (
            <div key={i} className={`${styles.dot} ${i === 0 ? styles.active : ''}`}></div>
          ))}
        </div>
      </div>
    </Section>
  );
}
