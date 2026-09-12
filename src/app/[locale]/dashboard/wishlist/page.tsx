'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/dummy-data';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([
    {
      id: 'tour-1',
      name: 'Raja Ampat Diving Expedition',
      location: 'Papua Barat',
      price: 12500000,
    },
    {
      id: 'tour-2',
      name: 'Komodo Island Sailing (Premium)',
      location: 'Nusa Tenggara Timur',
      price: 6800000,
    }
  ]);

  const removeWishlist = (id: string) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1 className={styles.title}>Wishlist Saya</h1>

      {wishlist.length > 0 ? (
        <div className={styles.grid}>
          {wishlist.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.image} />
              <button 
                className={styles.removeBtn} 
                onClick={() => removeWishlist(item.id)}
                aria-label="Remove from wishlist"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              <div className={styles.content}>
                <div className={styles.location}>{item.location}</div>
                <h3 className={styles.tourName}>{item.name}</h3>
                <div className={styles.price}>{formatPrice(item.price)}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <h3 className={styles.emptyTitle}>Belum ada wishlist</h3>
          <p className={styles.emptyText}>
            Simpan paket tour favorit Anda untuk dipesan nanti.
          </p>
          <Button variant="primary" href="/">Cari Paket Tour</Button>
        </div>
      )}
    </div>
  );
}
