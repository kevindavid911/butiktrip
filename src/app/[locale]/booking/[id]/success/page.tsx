'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function BookingSuccessPage() {
  return (
    <div className={styles.container}>
      <div className={styles.successIcon}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <h1 className={styles.title}>Pemesanan Berhasil!</h1>
      <p className={styles.refNumber}>Ref: BTK-2026-0824-X8YZ</p>

      <Card padding="lg" variant="elevated" className={styles.detailsCard}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Paket Tour</span>
          <span className={styles.detailValue}>Bali Nusa Penida Explorer</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Tanggal</span>
          <span className={styles.detailValue}>15 - 17 Ags 2026</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Peserta</span>
          <span className={styles.detailValue}>2 Orang</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Total Pembayaran</span>
          <span className={styles.detailValue}>Rp 5.150.000</span>
        </div>
      </Card>

      <p className={styles.emailNotice}>
        E-Ticket dan rincian pesanan telah dikirimkan ke email <strong>kevin@example.com</strong>
      </p>

      <div className={styles.actions}>
        <Button variant="primary" fullWidth>Download E-Ticket</Button>
        <Button variant="outline" fullWidth href="/dashboard">Lihat Dashboard</Button>
      </div>

      <a href="https://wa.me/6281234567890" className={styles.helpLink} target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        Butuh Bantuan? Hubungi WhatsApp
      </a>
    </div>
  );
}
