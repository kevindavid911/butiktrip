'use client';

import React from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export const samplePosts: BlogPost[] = [
  {
    id: '1',
    slug: 'panduan-lengkap-liburan-ke-bali-2026',
    title: 'Panduan Lengkap Liburan Premium ke Bali 2026',
    excerpt: 'Temukan spot-spot tersembunyi, restoran fine dining terbaik, dan tips itinerary terbaik di Pulau Dewata.',
    date: '20 Februari 2026',
    author: 'Tim ButikTrip',
    category: 'Panduan Wisata',
    readTime: '5 menit baca',
    image: '/images/destinations/bali.jpg',
  },
  {
    id: '2',
    slug: 'tips-sailing-trip-taman-nasional-komodo',
    title: 'Tips Memilih Kapal Phinisi & Itinerary Sailing Komodo',
    excerpt: 'Semua yang perlu Anda ketahui sebelum memesan private charter phinisi di Labuan Bajo untuk petualangan seru.',
    date: '15 Februari 2026',
    author: 'Rina Wijaya',
    category: 'Tips Perjalanan',
    readTime: '7 menit baca',
    image: '/images/destinations/komodo.jpg',
  },
  {
    id: '3',
    slug: 'raja-ampat-surga-bawah-laut-dunia',
    title: 'Mengapa Raja Ampat Harus Ada di Bucket List Anda',
    excerpt: 'Eksplorasi keanekaragaman hayati bahari tertinggi di dunia dengan panduan menyelam & island hopping terbaik.',
    date: '10 Februari 2026',
    author: 'Hendra Setiawan',
    category: 'Destinasi Impian',
    readTime: '6 menit baca',
    image: '/images/destinations/raja-ampat.jpg',
  },
];

import { Header, Footer } from '@/components/layout';
import { useParams } from 'next/navigation';

export default function BlogListPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'id';

  return (
    <>
      <Header />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Travel Inspiration</h1>
          <p className={styles.subtitle}>
            Curated articles, destination guides, and travel stories from ButikTrip.
          </p>
        </header>

        <div className={styles.grid}>
          {samplePosts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={post.image} alt={post.title} className={styles.image} />
                <span className={styles.category}>{post.category}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{post.date}</span> • <span>{post.readTime}</span>
                </div>
                <h2 className={styles.postTitle}>
                  <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.footer}>
                  <span className={styles.author}>Oleh {post.author}</span>
                  <Link href={`/${locale}/blog/${post.slug}`} className={styles.readMore}>
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
