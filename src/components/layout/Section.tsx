import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'dark';
}

export function Section({ 
  id, 
  subtitle, 
  title, 
  description, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const bgClass = styles[`bg-${background}`];
  
  return (
    <section id={id} className={`${styles.section} ${bgClass} ${className}`}>
      <div className={styles.container}>
        {(title || subtitle || description) && (
          <div className={styles.header}>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
