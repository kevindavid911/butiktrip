import { Section } from '@/components/layout';
import styles from './GallerySection.module.css';

const galleryItems = [
  { id: 1, image: '/images/gallery/gallery-1.jpg', title: 'Ubud, Bali' },
  { id: 2, image: '/images/gallery/gallery-2.jpg', title: 'Pulau Komodo' },
  { id: 3, image: '/images/gallery/gallery-3.jpg', title: 'Raja Ampat' },
  { id: 4, image: '/images/gallery/gallery-4.jpg', title: 'Sunrise Bromo' },
  { id: 5, image: '/images/gallery/gallery-5.jpg', title: 'Pura Ulun Danu' },
  { id: 6, image: '/images/gallery/gallery-6.jpg', title: 'Pantai Pink Komodo' },
];

export function GallerySection() {
  return (
    <Section 
      title="Traveler Gallery" 
      subtitle="Precious Moments"
    >
      <div className={styles.grid}>
        {galleryItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`${styles.item} ${index === 2 ? styles.large : ''}`}
          >
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.overlay}>
              <span className={styles.caption}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
