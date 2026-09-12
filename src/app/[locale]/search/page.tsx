'use client';

import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import styles from './page.module.css';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import { SearchWidget } from '@/components/search';
import { Badge } from '@/components/ui';
import { popularTours, formatPrice, calculateDiscount } from '@/lib/dummy-data';
import type { Tour } from '@/types';
import Link from 'next/link';
import { FaSearch, FaRegClock, FaMapMarkerAlt, FaCheck, FaStar } from 'react-icons/fa';

const CATEGORY_FILTERS = ['Alam', 'Budaya', 'Bahari', 'Kuliner', 'Petualangan'];

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Rekomendasi' },
  { value: 'price_asc', label: 'Harga Terendah' },
  { value: 'price_desc', label: 'Harga Tertinggi' },
  { value: 'rating_desc', label: 'Rating Tertinggi' },
  { value: 'newest', label: 'Terbaru' },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const query = searchParams.get('q') || searchParams.get('destination') || '';
  const [sortBy, setSortBy] = useState('recommended');
  const [maxPrice, setMaxPrice] = useState(20000000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredTours = useMemo(() => {
    let tours = [...popularTours];

    if (query) {
      tours = tours.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.destination.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (maxPrice < 20000000) {
      tours = tours.filter((t) => t.price <= maxPrice);
    }

    if (selectedCategories.length > 0) {
      tours = tours.filter((t) => selectedCategories.includes(t.category));
    }

    if (minRating > 0) {
      tours = tours.filter((t) => t.rating >= minRating);
    }

    switch (sortBy) {
      case 'price_asc':
        tours.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        tours.sort((a, b) => b.price - a.price);
        break;
      case 'rating_desc':
        tours.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        tours.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
    }

    return tours;
  }, [query, sortBy, maxPrice, selectedCategories, minRating]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* MODIFIED SEARCH WIDGET: NO BLUE BACKGROUND */}
        <div className={styles.searchBar}>
          <div className={styles.container}>
            <SearchWidget variant="inline" />
          </div>
        </div>

        <div className={styles.container}>
          {/* MODIFIED HEADER TITLE: Showing X tour packages */}
          <div className={styles.resultsHeader}>
            <h1 className={styles.resultsTitle}>
              Showing {filteredTours.length} tour packages{query ? ` for ${query}` : ''}
            </h1>

            <div className={styles.sortWrapper}>
              <label htmlFor="sort" className={styles.sortLabel}>
                Urutkan:
              </label>
              <select
                id="sort"
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            className={styles.mobileFilterBtn}
            onClick={() => setShowMobileFilter(true)}
          >
            ⚙ Filter
          </button>

          <div className={styles.contentLayout}>
            {/* SIDEBAR WITH MODIFIED PRICE RANGE FILTER */}
            <aside
              className={`${styles.sidebar} ${showMobileFilter ? styles.sidebarOpen : ''}`}
            >
              <div className={styles.sidebarHeader}>
                <h3>Filter</h3>
                <button
                  className={styles.closeSidebar}
                  onClick={() => setShowMobileFilter(false)}
                >
                  ✕
                </button>
              </div>

              {/* PRICE RANGE FILTER */}
              <div className={styles.filterSection}>
                <h4 className={styles.filterTitle}>Price Range</h4>
                <div className={styles.priceLabels}>
                  <span>Rp 1jt</span>
                  <span>Rp {Math.round(maxPrice / 1000000)}jt</span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={20000000}
                  step={500000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className={styles.rangeSlider}
                />
              </div>

              {/* KATEGORI */}
              <div className={styles.filterSection}>
                <h4 className={styles.filterTitle}>🎯 Kategori</h4>
                {CATEGORY_FILTERS.map((cat) => (
                  <label key={cat} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* RATING MINIMUM */}
              <div className={styles.filterSection}>
                <h4 className={styles.filterTitle}>⭐ Rating Minimum</h4>
                {[4.5, 4.0, 3.5, 3.0].map((r) => (
                  <label key={r} className={styles.checkboxLabel}>
                    <input
                      type="radio"
                      name="rating"
                      checked={minRating === r}
                      onChange={() => setMinRating(r)}
                    />
                    <span>{r}+ ★</span>
                  </label>
                ))}
                <label className={styles.checkboxLabel}>
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === 0}
                    onChange={() => setMinRating(0)}
                  />
                  <span>Semua</span>
                </label>
              </div>

              <button
                className={styles.clearFilters}
                onClick={() => {
                  setSelectedCategories([]);
                  setMinRating(0);
                  setMaxPrice(20000000);
                  setShowMobileFilter(false);
                }}
              >
                Hapus Semua Filter
              </button>
            </aside>

            {showMobileFilter && (
              <div
                className={styles.overlay}
                onClick={() => setShowMobileFilter(false)}
              />
            )}

            {/* RESULTS */}
            <div className={styles.results}>
              {filteredTours.length === 0 ? (
                <div className={styles.emptyState}>
                  <p className={styles.emptyIcon}><FaSearch /></p>
                  <h3>Tidak ada hasil ditemukan</h3>
                  <p>Coba ubah kata kunci pencarian atau hapus beberapa filter.</p>
                </div>
              ) : (
                <div className={styles.resultsGrid}>
                  {filteredTours.map((tour) => (
                    <SearchResultCard
                      key={tour.id}
                      tour={tour}
                      locale={locale}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { useCurrency } from '@/context/CurrencyContext';

function SearchResultCard({
  tour,
  locale,
}: {
  tour: Tour;
  locale: string;
}) {
  const { formatPrice } = useCurrency();
  return (
    <Link
      href={`/${locale}/tours/${tour.slug}`}
      className={styles.resultCard}
    >
      <div className={styles.cardImage}>
        <img src={tour.images[0]} alt={tour.title} className={styles.imgTag} />
        <div className={styles.imgOverlay} />
        <Badge variant="primary" size="sm" className={styles.badgePos}>
          {tour.category}
        </Badge>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardRating}>
          <span className={styles.stars}>
            {Array.from({ length: Math.floor(tour.rating) }).map((_, i) => (
              <FaStar key={i} style={{ color: '#F59E0B', marginRight: 2 }} />
            ))}
          </span>
          <span className={styles.ratingValue}>{tour.rating}</span>
          <span className={styles.reviewCount}>({tour.review_count})</span>
        </div>

        <h3 className={styles.cardTitle}>{tour.title}</h3>

        <div className={styles.cardMeta}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <FaRegClock style={{ color: '#2563EB', fontSize: 13 }} /> {tour.duration_days}H{tour.duration_nights}M
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <FaMapMarkerAlt style={{ color: '#2563EB', fontSize: 13 }} /> {tour.destination}
          </span>
        </div>

        <div className={styles.cardIncludes}>
          <span className={styles.includeTag}>
            <FaCheck style={{ color: '#16A34A', fontSize: 11, marginRight: 4 }} /> Hotel
          </span>
          <span className={styles.includeTag}>
            <FaCheck style={{ color: '#16A34A', fontSize: 11, marginRight: 4 }} /> Meals
          </span>
          <span className={styles.includeTag}>
            <FaCheck style={{ color: '#16A34A', fontSize: 11, marginRight: 4 }} /> Transport
          </span>
        </div>

        <div className={styles.cardPricing}>
          {tour.discount_price && (
            <span className={styles.originalPrice}>
              {formatPrice(tour.discount_price)}
            </span>
          )}
          <span className={styles.currentPrice}>
            {formatPrice(tour.price)}
          </span>
          <span className={styles.perPerson}>/ orang</span>
          {tour.discount_price && (
            <Badge variant="error" size="sm">
              Hemat {calculateDiscount(tour.discount_price, tour.price)}%
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}
