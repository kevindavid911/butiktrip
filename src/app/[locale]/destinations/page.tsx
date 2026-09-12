'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { popularDestinations } from '@/lib/dummy-data';
import styles from './destinations.module.css';

export default function DestinationsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'id';

  return (
    <>
      <Header />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Destinasi Pilihan ButikTrip</h1>
          <p className={styles.subtitle}>
            Jelajahi keindahan nusantara dari sabang sampai merauke dengan pengalaman eksklusif dan privat.
          </p>
        </header>

        <div className={styles.grid}>
          {popularDestinations.map((dest) => (
            <Link key={dest.id} href={`/${locale}/search?destination=${encodeURIComponent(dest.name)}`} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={dest.image} alt={dest.name} className={styles.image} />
                <div className={styles.overlay} />
                <div className={styles.badge}>{dest.tour_count}+ Paket Tur</div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.destName}>{dest.name}</h2>
                <p className={styles.destDesc}>{dest.description}</p>
                <span className={styles.exploreBtn}>Jelajahi Paket →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
