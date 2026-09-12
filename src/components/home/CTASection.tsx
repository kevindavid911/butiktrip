import { Button } from '@/components/ui';
import styles from './CTASection.module.css';

export function CTASection({ locale }: { locale: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready for an Unforgettable Adventure?</h2>
          <p className={styles.subtitle}>
            Contact us now and plan your dream trip with ButikTrip.id
          </p>
          <Button variant="outline" size="lg" className={styles.button} href={`/${locale}/contact`}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
