'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/lib/dummy-data';
import Link from 'next/link';

type TabType = 'all' | 'upcoming' | 'completed' | 'cancelled';

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const bookings = [
    {
      id: 'BTK-2026-0824-X8YZ',
      tourName: 'Bali Nusa Penida Explorer (3D2N)',
      date: '15 - 17 Agustus 2026',
      guests: 2,
      price: 5150000,
      status: 'upcoming',
    },
    {
      id: 'BTK-2025-1210-A1B2',
      tourName: 'Yogyakarta Culture Trip (4D3N)',
      date: '10 - 13 Desember 2025',
      guests: 4,
      price: 8500000,
      status: 'completed',
    },
    {
      id: 'BTK-2025-0505-C3D4',
      tourName: 'Lombok Gili Trawangan Escape (3D2N)',
      date: '05 - 07 Mei 2025',
      guests: 2,
      price: 4200000,
      status: 'completed',
    },
  ];

  const filteredBookings = bookings.filter(b => activeTab === 'all' || b.status === activeTab);

  return (
    <div>
      <h1 className={styles.title}>Pesanan Saya</h1>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Semua
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'upcoming' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Mendatang
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'completed' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Selesai
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'cancelled' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Dibatalkan
        </button>
      </div>

      {filteredBookings.length > 0 ? (
        <div className={styles.bookingList}>
          {filteredBookings.map((booking) => (
            <div key={booking.id} className={styles.bookingCard}>
              <div className={styles.imageContainer}>Image</div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.tourName}>{booking.tourName}</h3>
                  <Badge variant={
                    booking.status === 'upcoming' ? 'success' : 
                    booking.status === 'completed' ? 'neutral' : 'error'
                  }>
                    {booking.status === 'upcoming' ? 'Mendatang' : 
                     booking.status === 'completed' ? 'Selesai' : 'Dibatalkan'}
                  </Badge>
                </div>
                
                <div className={styles.details}>
                  <span className={styles.detail}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {booking.date}
                  </span>
                  <span className={styles.detail}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                    {booking.guests} Peserta
                  </span>
                </div>
                
                <div className={styles.price}>{formatPrice(booking.price)}</div>
                
                <div className={styles.actions}>
                  <Button variant="outline">Lihat Detail</Button>
                  {booking.status === 'upcoming' && (
                    <Button variant="primary">Download E-Ticket</Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <h3 className={styles.emptyTitle}>Belum ada pesanan</h3>
          <p className={styles.emptyText}>
            {activeTab === 'all' 
              ? 'Anda belum memiliki riwayat pemesanan.' 
              : `Anda belum memiliki pesanan dengan status ${activeTab}.`}
          </p>
          <Button variant="primary" href="/">Cari Paket Tour</Button>
        </div>
      )}
    </div>
  );
}
