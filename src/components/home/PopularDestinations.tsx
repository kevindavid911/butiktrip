import Link from 'next/link';
import { Section } from '@/components/layout';
import { popularDestinations } from '@/lib/dummy-data';
import styles from './PopularDestinations.module.css';

export function PopularDestinations({ locale }: { locale: string }) {
  return (
    <Section 
      title="Popular Destinations" 
      subtitle="Discover Your Favorite Places"
    >
      <div className={styles.grid}>
        {popularDestinations.slice(0, 6).map((dest) => (
          <Link 
            key={dest.id} 
            href={`/${locale}/search?destination=${dest.name}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <img 
                src={dest.image} 
                alt={dest.name} 
                className={styles.image} 
              />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <h3 className={styles.name}>{dest.name}</h3>
                <span className={styles.badge}>{dest.tour_count} trips</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
