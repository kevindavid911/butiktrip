'use client';

import Link from 'next/link';
import { Rating, Badge } from '@/components/ui';
import { Tour } from '@/types';
import { calculateDiscount } from '@/lib/dummy-data';
import { useCurrency } from '@/context/CurrencyContext';
import { FaRegClock, FaMapMarkerAlt, FaRegHeart } from 'react-icons/fa';
import styles from './TourCard.module.css';

interface TourCardProps {
  tour: Tour;
  locale: string;
  index?: number;
}

export function TourCard({ tour, locale, index = 0 }: TourCardProps) {
  const { formatPrice } = useCurrency();
  const getPlaceholderBg = () => {
    const hues = [200, 160, 40, 320, 260, 10];
    const hue = hues[index % hues.length];
    return `linear-gradient(135deg, hsl(${hue}, 70%, 80%), hsl(${hue}, 60%, 40%))`;
  };

  const hasDiscount = !!tour.discount_price;
  const discount = hasDiscount ? calculateDiscount(tour.discount_price!, tour.price) : 0;

  return (
    <div className={styles.card}>
      <Link href={`/${locale}/tours/${tour.slug}`} className={styles.link}>
        <div className={styles.imageArea}>
          <img src={tour.images[0]} alt={tour.title} className={styles.cardImage} />
          <div className={styles.imageOverlay} />
          <div className={styles.imageTop}>
            <Badge variant="primary">{tour.category}</Badge>
            <button className={styles.wishlistBtn} aria-label="Add to wishlist" onClick={(e) => e.preventDefault()}>
              <FaRegHeart />
            </button>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.ratingRow}>
            <Rating value={tour.rating} reviewCount={tour.review_count} size="sm" showValue readonly />
          </div>
          
          <h3 className={styles.title}>{tour.title}</h3>
          
          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <FaRegClock className={styles.metaIcon} />
              <span className={styles.metaText}>{tour.duration_days}H{tour.duration_nights}M</span>
            </div>
            <div className={styles.metaItem}>
              <FaMapMarkerAlt className={styles.metaIcon} />
              <span className={styles.metaText}>{tour.destination}</span>
            </div>
          </div>
          
          <div className={styles.includedRow}>
            <span className={styles.includedBadge}>Hotel</span>
            <span className={styles.includedBadge}>Meals</span>
            <span className={styles.includedBadge}>Transport</span>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.bottomSection}>
            <div className={styles.priceContainer}>
              {hasDiscount && (
                <div className={styles.discountRow}>
                  <span className={styles.originalPrice}>{formatPrice(tour.discount_price!)}</span>
                  <Badge variant="warning" size="sm">-{discount}%</Badge>
                </div>
              )}
              <div className={styles.currentPrice}>
                {formatPrice(tour.price)} <span className={styles.perPerson}>/ orang</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
