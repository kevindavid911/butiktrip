'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import styles from './SearchWidget.module.css';

interface SearchWidgetProps {
  variant?: 'hero' | 'inline';
}

export function SearchWidget({ variant = 'hero' }: SearchWidgetProps) {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'id';

  const [destination, setDestination] = useState('Bali, Indonesia');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Adults');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (destination) queryParams.append('q', destination);
    if (date) queryParams.append('date', date);
    if (guests) queryParams.append('guests', guests);

    router.push(`/${locale}/search?${queryParams.toString()}`);
  };

  return (
    <div className={`${styles.widget} ${styles[variant]}`}>
      <form className={styles.form} onSubmit={handleSearch}>
        {/* DESTINATION */}
        <div className={styles.field}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.label}>DESTINATION</span>
            <input
              type="text"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.divider} />

        {/* DATE */}
        <div className={styles.field}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.label}>DATE</span>
            <input
              type="text"
              placeholder="Select dates"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = 'text';
              }}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.divider} />

        {/* GUESTS */}
        <div className={styles.field}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.label}>GUESTS</span>
            <input
              type="text"
              placeholder="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
}
