'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { ProgressBar, OrderSummary } from '@/components/booking';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

const STEPS = ['Data Pemesan', 'Konfirmasi', 'Pembayaran', 'Selesai'];

export default function CheckoutPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [guestCount, setGuestCount] = useState(2);
  const [hasInsurance, setHasInsurance] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('va-bca');

  const tourData = {
    name: 'Bali Nusa Penida Explorer (3D2N)',
    date: '15 - 17 Agustus 2026',
    basePrice: 2500000,
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(curr => curr + 1);
    } else {
      router.push('/booking/123/success');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(curr => curr - 1);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>ButikTrip.id</div>
      </header>

      <ProgressBar currentStep={currentStep} steps={STEPS} />

      <div className={styles.content}>
        <div className={styles.formArea}>
          {currentStep === 1 && (
            <>
              <Card padding="lg" variant="elevated">
                <h2 className={styles.sectionTitle}>Informasi Pemesan</h2>
                <div className={styles.formGrid}>
                  <div className={styles.fullWidth}>
                    <Input label="Nama Lengkap *" placeholder="Sesuai KTP/Paspor" />
                  </div>
                  <Input label="Email *" type="email" placeholder="email@example.com" />
                  <Input label="Nomor Telepon *" placeholder="+62 812..." />
                  <div className={styles.fullWidth}>
                    <Input label="Catatan Khusus" placeholder="Alergi makanan, permintaan khusus, dll." />
                  </div>
                </div>
              </Card>

              <Card padding="lg" variant="elevated">
                <h2 className={styles.sectionTitle}>Data Peserta</h2>
                {[...Array(guestCount)].map((_, i) => (
                  <div key={i} className={styles.participantCard}>
                    <div className={styles.participantHeader}>
                      <span>Peserta {i + 1}</span>
                      {i > 0 && (
                        <button className={styles.removeBtn} onClick={() => setGuestCount(c => c - 1)}>
                          Hapus
                        </button>
                      )}
                    </div>
                    <div className={styles.formGrid}>
                      <div className={styles.fullWidth}>
                        <Input label="Nama Lengkap *" placeholder="Sesuai KTP/Paspor" />
                      </div>
                    </div>
                  </div>
                ))}
                <button className={styles.addBtn} onClick={() => setGuestCount(c => c + 1)}>
                  + Tambah Peserta
                </button>
              </Card>

              <Card padding="lg" variant="elevated">
                <h2 className={styles.sectionTitle}>Layanan Tambahan</h2>
                <div className={styles.addonBox}>
                  <input 
                    type="checkbox" 
                    id="insurance" 
                    checked={hasInsurance}
                    onChange={(e) => setHasInsurance(e.target.checked)}
                    style={{ marginTop: '4px' }}
                  />
                  <div className={styles.addonInfo}>
                    <label htmlFor="insurance"><h4>Asuransi Perjalanan</h4></label>
                    <p>Perlindungan komprehensif selama perjalanan (+Rp 75.000/orang)</p>
                  </div>
                </div>
              </Card>
            </>
          )}

          {currentStep === 2 && (
            <Card padding="lg" variant="elevated">
              <h2 className={styles.sectionTitle}>Review & Konfirmasi</h2>
              <p>Mohon periksa kembali data pesanan Anda sebelum melanjutkan ke pembayaran.</p>
              {/* Dummy confirmation details could go here */}
              <div style={{ marginTop: '24px' }}>
                <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input type="checkbox" />
                  <span>Saya menyetujui Syarat & Ketentuan yang berlaku.</span>
                </label>
              </div>
            </Card>
          )}

          {currentStep === 3 && (
            <Card padding="lg" variant="elevated">
              <h2 className={styles.sectionTitle}>Pilih Metode Pembayaran</h2>
              <div className={styles.paymentGrid}>
                {['va-bca', 'va-mandiri', 'gopay', 'cc'].map((method) => (
                  <div 
                    key={method}
                    className={`${styles.paymentMethod} ${selectedPayment === method ? styles.selected : ''}`}
                    onClick={() => setSelectedPayment(method)}
                  >
                    <input type="radio" checked={selectedPayment === method} readOnly />
                    <div className={styles.paymentInfo}>
                      <h4>{method.toUpperCase()}</h4>
                      <p>Bayar instan dan aman</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          <div className={styles.actions}>
            {currentStep > 1 ? (
              <Button variant="outline" onClick={handleBack}>Kembali</Button>
            ) : (
              <div></div>
            )}
            <Button variant="primary" onClick={handleNext}>
              {currentStep === 3 ? 'Bayar Sekarang' : 'Lanjutkan'}
            </Button>
          </div>
        </div>

        <OrderSummary 
          tourName={tourData.name}
          date={tourData.date}
          guestCount={guestCount}
          basePrice={tourData.basePrice}
          hasInsurance={hasInsurance}
        />
      </div>
    </div>
  );
}
