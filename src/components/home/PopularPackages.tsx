import { Section } from '@/components/layout';
import { TourCard } from '@/components/tour/TourCard';
import { popularTours } from '@/lib/dummy-data';
import styles from './PopularPackages.module.css';


export function PopularPackages({ locale }: { locale: string }) {
  return (
    <Section 
      title="Popular Tour Packages" 
      subtitle="Best-Selling Packages"
      background="light"
    >
      <div className={styles.grid}>
        {popularTours.slice(0, 6).map((tour, index) => (
          <TourCard key={tour.id} tour={tour} locale={locale} index={index} />
        ))}
      </div>
    </Section>
  );
}
