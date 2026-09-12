'use client';

import React from 'react';
import styles from './page.module.css';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
  return (
    <div>
      <h1 className={styles.title}>Profil Saya</h1>
      
      <div className={styles.card}>
        <div className={styles.avatarSection}>
          <div className={styles.avatarWrapper}>
            KV
            <button className={styles.editAvatarBtn} aria-label="Edit Avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </div>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>Format: JPG, PNG. Max 2MB</span>
        </div>

        <h2 className={styles.sectionTitle}>Informasi Pribadi</h2>
        <div className={styles.formGrid}>
          <div className={styles.fullWidth}>
            <Input label="Nama Lengkap" defaultValue="Kevin" />
          </div>
          <Input label="Email" defaultValue="kevin@example.com" disabled />
          <Input label="Nomor Telepon" defaultValue="+62 812 3456 7890" />
          
          <div className={styles.fullWidth}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <label style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Bahasa</label>
              <select style={{ 
                padding: '10px 16px', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid var(--color-neutral-300)',
                fontFamily: 'inherit'
              }}>
                <option value="id">Indonesia</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          
          <div className={styles.fullWidth}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <label style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Mata Uang</label>
              <select style={{ 
                padding: '10px 16px', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid var(--color-neutral-300)',
                fontFamily: 'inherit'
              }}>
                <option value="IDR">IDR - Indonesian Rupiah</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="primary">Simpan Perubahan</Button>
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Ubah Password</h2>
        <div className={styles.formGrid}>
          <div className={styles.fullWidth}>
            <Input label="Password Saat Ini" type="password" />
          </div>
          <div className={styles.fullWidth}>
            <Input label="Password Baru" type="password" />
          </div>
          <div className={styles.fullWidth}>
            <Input label="Konfirmasi Password Baru" type="password" />
          </div>
        </div>
        <div className={styles.actions}>
          <Button variant="primary">Perbarui Password</Button>
        </div>
      </div>
    </div>
  );
}
