import React from 'react';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function DashboardPage() {
  return (
    <div>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Selamat Datang, Kevin!</h1>
        <p className={styles.bannerText}>Siap untuk petualangan selanjutnya?</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Pesanan</span>
          <span className={styles.statValue}>3</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Perjalanan Mendatang</span>
          <span className={styles.statValue}>1</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Perjalanan Selesai</span>
          <span className={styles.statValue}>2</span>
        </div>
      </div>

      <div className={styles.upcomingTrip}>
        <h2 className={styles.sectionTitle}>Perjalanan Mendatang</h2>
        <div className={styles.tripCard}>
          <div className={styles.tripInfo}>
            <h3>Bali Nusa Penida Explorer (3D2N)</h3>
            <div className={styles.tripDetails}>
              <span className={styles.tripDetail}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                15 - 17 Agustus 2026
              </span>
              <span className={styles.tripDetail}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                </svg>
                2 Peserta
              </span>
            </div>
            <div className={styles.countdown}>H-7 Keberangkatan</div>
          </div>
          <div className={styles.tripActions}>
            <Button variant="outline">Lihat Detail</Button>
            <Button variant="primary">Download E-Ticket</Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className={styles.sectionTitle}>Aktivitas Terbaru</h2>
        <Card padding="none" variant="elevated">
          <div style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--color-neutral-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Pemesanan #BTK-2026-0824-X8YZ</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Bali Nusa Penida Explorer (3D2N)</div>
            </div>
            <Badge variant="success">Berhasil</Badge>
          </div>
          <div style={{ padding: 'var(--space-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Pemesanan #BTK-2025-1210-A1B2</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Yogyakarta Culture Trip (4D3N)</div>
            </div>
            <Badge variant="neutral">Selesai</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
