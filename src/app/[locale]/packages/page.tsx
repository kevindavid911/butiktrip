'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { TourCard } from '@/components/tour/TourCard';
import { popularTours } from '@/lib/dummy-data';
import styles from './packages.module.css';

const CATEGORIES = ['Semua', 'Alam', 'Bahari', 'Budaya'];

export default function PackagesPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'id';
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredTours = useMemo(() => {
    if (activeCategory === 'Semua') return popularTours;
    return popularTours.filter((tour) => tour.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <header className={styles.header}>
          <span className={styles.subtitle}>Selected Tour Packages</span>
          <h1 className={styles.title}>Explore the Best Tour Packages</h1>
          <p className={styles.description}>
            The most complete travel packages in all dream destinations in the archipelago with the best facilities, experienced guides, and transparent prices.
          </p>
        </header>

        <div className={styles.filterTabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredTours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} locale={locale} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
