'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { samplePosts } from '../page';
import styles from './post.module.css';

import { Header, Footer } from '@/components/layout';

export default function BlogDetailPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'id';
  const slug = params?.slug as string;

  const post = samplePosts.find((p) => p.slug === slug) || samplePosts[0];

  return (
    <>
      <Header />
      <main className={styles.container}>
        <article>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span>{post.date}</span> • <span>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.author}>Ditulis oleh <strong>{post.author}</strong></p>
          </header>

          <div className={styles.heroImage}>
            <img src={post.image} alt={post.title} />
          </div>

          <div className={styles.content}>
            <p className={styles.lead}>{post.excerpt}</p>
            <hr className={styles.divider} />
            
            <h2>Perencanaan Perjalanan yang Sempurna</h2>
            <p>
              Liburan impian bukan hanya tentang destinasi tujuan, tetapi bagaimana setiap detik momen direncanakan secara presisi dan bermakna. Di ButikTrip, kami memahami pentingnya fleksibilitas, privasi, dan kenyamanan maksimal bagi setiap tamu.
            </p>

            <h3>1. Waktu Terbaik untuk Berkunjung</h3>
            <p>
              Mengetahui musim dan cuaca adalah kunci utama dalam memaksimalkan liburan Anda. Pastikan untuk berkonsultasi dengan travel advisor kami agar rute dan reservasi Anda berjalan dengan optimal.
            </p>

            <h3>2. Pengalaman Kuliner & Budaya Lokal</h3>
            <p>
              Jangan lewatkan santapan khas daerah setempat. Kami menyediakan rekomendasi restoran fine dining hingga kuliner otentik yang telah terverifikasi standar kebersihan dan kualitas suasananya.
            </p>

            <div className={styles.ctaBox}>
              <h3>Siap Memulai Petualangan Anda?</h3>
              <p>Dapatkan penawaran khusus dan itinerary yang dirancang khusus untuk Anda.</p>
              <Link href={`/${locale}/search`} className={styles.ctaBtn}>Jelajahi Paket Tur →</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
