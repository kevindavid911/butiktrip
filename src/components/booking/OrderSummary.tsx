import React from 'react';
import styles from './OrderSummary.module.css';
import { Card } from '@/components/ui/Card';
import { useCurrency } from '@/context/CurrencyContext';

interface OrderSummaryProps {
  tourName: string;
  date: string;
  guestCount: number;
  basePrice: number;
  hasInsurance: boolean;
}

export function OrderSummary({ tourName, date, guestCount, basePrice, hasInsurance }: OrderSummaryProps) {
  const { formatPrice } = useCurrency();
  const subtotal = basePrice * guestCount;
  const insurancePrice = 75000;
  const totalInsurance = hasInsurance ? insurancePrice * guestCount : 0;
  const total = subtotal + totalInsurance;

  return (
    <div className={styles.summary}>
      <Card padding="md" variant="elevated">
        <div className={styles.imageContainer} />
        <h3 className={styles.title}>{tourName}</h3>
        
        <div className={styles.details}>
          <div className={styles.detailRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{date}</span>
          </div>
          <div className={styles.detailRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>{guestCount} Peserta</span>
          </div>
        </div>

        <div className={styles.priceRow}>
          <span>{guestCount} × {formatPrice(basePrice)}</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        
        {hasInsurance && (
          <div className={styles.priceRow}>
            <span>Asuransi ({guestCount} × {formatPrice(insurancePrice)})</span>
            <span>{formatPrice(totalInsurance)}</span>
          </div>
        )}

        <div className={styles.totalRow}>
          <span>Total Pembayaran</span>
          <span style={{ color: 'var(--color-primary-600)' }}>{formatPrice(total)}</span>
        </div>

        <div className={styles.secureBadge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Pembayaran Aman & Terenkripsi
        </div>
      </Card>
    </div>
  );
}
