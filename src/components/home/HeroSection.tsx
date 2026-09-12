'use client';

import React from 'react';
import { SearchWidget } from '@/components/search';
import styles from './HeroSection.module.css';

export function HeroSection({ locale }: { locale: string }) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Explore Indonesia, Discover Your Adventure
          </h1>
          <p className={styles.subtitle}>
            Discover the best travel experiences with a trusted tour operator.
          </p>

          <div className={styles.searchWrapper}>
            <SearchWidget variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
