'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui';
import styles from '../login/login.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'id';
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${locale}/dashboard`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Link href={`/${locale}`} className={styles.logo}>
            ButikTrip.id
          </Link>
          <h1 className={styles.title}>Create a ButikTrip Account</h1>
          <p className={styles.subtitle}>
            Sign up now to enjoy dream trips and exclusive offers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              required
              placeholder="Budi Santoso"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              required
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>WhatsApp Number</label>
            <input
              type="tel"
              required
              placeholder="08123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              required
              placeholder="Minimal 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className={styles.checkbox}
                required
              />
              <span>I agree to ButikTrip Terms and Conditions</span>
            </label>
          </div>

          <Button variant="primary" size="lg" type="submit" fullWidth>
            Sign Up a New Account
          </Button>
        </form>

        <div className={styles.divider}>
          <span>or sign up with</span>
        </div>

        <div className={styles.socialGroup}>
          <button type="button" onClick={() => router.push('/id/dashboard')} className={styles.socialBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.7 1 4 3.5 2.2 7.1l3.6 2.8C6.7 7.3 9.1 5 12 5z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h6.5c-.3 1.5-1.1 2.8-2.4 3.6l3.7 2.9c2.1-2 3.7-4.9 3.7-8.5z"/>
              <path fill="#FBBC05" d="M5.8 14.8c-.3-.8-.4-1.8-.4-2.8s.1-2 .4-2.8L2.2 6.4C1.4 8.1 1 10 1 12s.4 3.9 1.2 5.6l3.6-2.8z"/>
              <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.7-2.9c-1 .7-2.3 1.1-3.6 1.1-2.9 0-5.3-2.3-6.2-5.1L2.2 16.2C4 19.8 7.7 23 12 23z"/>
            </svg>
            Google
          </button>
          <button type="button" onClick={() => router.push('/id/dashboard')} className={styles.socialBtn}>
            <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z"/>
            </svg>
            Facebook
          </button>
        </div>

        <div className={styles.footerText}>
          Already have an account?{' '}
          <Link href={`/${locale}/login`} className={styles.signupLink}>
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
}
