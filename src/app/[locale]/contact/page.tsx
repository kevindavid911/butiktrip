'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact ButikTrip</h1>
          <p className={styles.subtitle}>
            Premium travel consultants are ready to help plan your dream vacation.
          </p>
        </header>

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h2>Contact Information</h2>
            <p>ButikTrip Head Office, Jakarta Selatan</p>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaMapMarkerAlt style={{ color: '#2563EB', fontSize: 20 }} />
              </div>
              <div>
                <strong>Address</strong>
                <p>Jl. Cililin No.11 15, RT.15/RW.6, Petogogan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12170</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaPhoneAlt style={{ color: '#2563EB', fontSize: 18 }} />
              </div>
              <div>
                <strong>Call & WhatsApp</strong>
                <p>+62 812 1314 4604</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaEnvelope style={{ color: '#2563EB', fontSize: 18 }} />
              </div>
              <div>
                <strong>Email Support</strong>
                <p>butiktripinfo@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaClock style={{ color: '#2563EB', fontSize: 18 }} />
              </div>
              <div>
                <strong>Operating Hours</strong>
                <p>Monday - Sunday: 08:00 - 20:00 WIB</p>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <FaCheckCircle style={{ color: '#16A34A', fontSize: 44 }} />
                </div>
              <h2>Message Sent!</h2>
              <p>Thank you for contacting ButikTrip. Our team will respond within 1x24 hours.</p>
              <Button variant="primary" onClick={() => setSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2>Send a Message & Consultation</h2>
              
              <div className={styles.field}>
                <label>Full Name</label>
                <input type="text" placeholder="Budi Santoso" required className={styles.input} />
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label>Email</label>
                  <input type="email" placeholder="budi@example.com" required className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>No. WhatsApp</label>
                  <input type="tel" placeholder="08123456789" required className={styles.input} />
                </div>
              </div>

              <div className={styles.field}>
                <label>Destination / Travel Plan</label>
                <input type="text" placeholder="Bali 4 Day 3 Night for 2 people" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label>Your Message</label>
                <textarea rows={4} placeholder="Write your question or special travel needs..." required className={styles.textarea} />
              </div>

              <Button variant="primary" size="lg" type="submit">Send Message Now</Button>
            </form>
          )}
        </div>
      </div>
    </main>
    <Footer />
  </>
  );
}
