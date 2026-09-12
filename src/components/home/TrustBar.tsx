'use client';

import { useEffect, useState, useRef } from 'react';
import { trustStats } from '@/lib/dummy-data';
import styles from './TrustBar.module.css';

export function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.trustBar} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {trustStats.map((stat, index) => (
            <div key={index} className={styles.itemWrapper}>
              {index > 0 && <div className={styles.divider}></div>}
              <div className={styles.stat}>
                <div className={`${styles.value} ${isVisible ? styles.animate : ''}`}>
                  {stat.value}
                </div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
