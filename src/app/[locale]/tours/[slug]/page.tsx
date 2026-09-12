'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import { Button, Badge, Rating } from '@/components/ui';
import { popularTours, formatPrice, calculateDiscount } from '@/lib/dummy-data';
import { 
  FaRegClock, 
  FaMapMarkerAlt, 
  FaStar, 
  FaCheckCircle, 
  FaCheck, 
  FaTimes, 
  FaFileAlt, 
  FaRoute, 
  FaClipboardList, 
  FaUndo, 
  FaComments, 
  FaChevronUp, 
  FaChevronDown, 
  FaCompass, 
  FaRegCalendarAlt, 
  FaUsers, 
  FaUserFriends, 
  FaShoppingCart, 
  FaWhatsapp 
} from 'react-icons/fa';

const itinerary = [
  {
    day: 1,
    title: 'Arrival & Check-in',
    description:
      'Tiba di destinasi dan check-in di hotel. Briefing perjalanan bersama guide lokal.',
    activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'Trip briefing'],
  },
  {
    day: 2,
    title: 'Full Day Adventure',
    description:
      'Hari penuh petualangan menjelajahi destinasi utama dengan guide profesional.',
    activities: ['Sunrise trekking', 'Sarapan tradisional', 'Visit main attractions', 'Local lunch'],
  },
  {
    day: 3,
    title: 'Free Time & Departure',
    description:
      'Waktu bebas untuk eksplorasi mandiri sebelum transfer ke bandara.',
    activities: ['Free exploration', 'Souvenir shopping', 'Airport transfer', 'Departure'],
  },
];

const inclusions = {
  included: [
    'Hotel 2 malam',
    'Makan 3x/hari',
    'Transport lokal',
    'Guide lokal',
    'Tiket masuk wisata',
    'Asuransi perjalanan',
  ],
  excluded: ['Tiket pesawat', 'Tips guide', 'Pengeluaran pribadi', 'Upgrade kamar'],
};

const policies = [
  { description: 'Pembatalan 7+ hari sebelum keberangkatan', refund_percent: 100 },
  { description: 'Pembatalan 3-6 hari sebelum keberangkatan', refund_percent: 50 },
  { description: 'Pembatalan kurang dari 3 hari', refund_percent: 0 },
];

const dummyReviews = [
  { id: '1', name: 'Sarah W.', rating: 5, comment: 'Pengalaman terbaik! Guide-nya sangat profesional dan ramah. Sangat direkomendasikan.', date: '2 minggu lalu' },
  { id: '2', name: 'Michael C.', rating: 5, comment: 'Absolutely amazing experience. The sunrise was breathtaking and well worth the early wake-up call.', date: '1 bulan lalu' },
  { id: '3', name: 'Dewi R.', rating: 4, comment: 'Secara keseluruhan sangat menyenangkan. Hanya saja waktu di beberapa spot agak terburu-buru.', date: '2 bulan lalu' },
];

import { useCurrency } from '@/context/CurrencyContext';

export default function TourDetailPage() {
  const params = useParams();
  const locale = params.locale as string;
  const slug = params.slug as string;
  const { formatPrice } = useCurrency();

  const tour = popularTours.find((t) => t.slug === slug) || popularTours[0];
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [expandedDay, setExpandedDay] = useState(0);

  const totalGuests = adults + children;
  const totalPrice = tour.price * totalGuests;

  const gradients = [
    'linear-gradient(135deg, hsl(200, 80%, 60%), hsl(220, 70%, 40%))',
    'linear-gradient(135deg, hsl(150, 60%, 50%), hsl(170, 70%, 35%))',
    'linear-gradient(135deg, hsl(30, 80%, 55%), hsl(15, 70%, 45%))',
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* BREADCRUMB */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href={`/${locale}`}>Home</Link>
            <span className={styles.separator}>›</span>
            <Link href={`/${locale}/search`}>Paket Tur</Link>
            <span className={styles.separator}>›</span>
            <span className={styles.current}>{tour.title}</span>
          </nav>

          {/* GALLERY */}
          <div className={styles.gallery}>
            <div className={styles.galleryMain}>
              <img src={tour.images[0] || '/images/destinations/bali.jpg'} alt={tour.title} className={styles.galleryImg} />
            </div>
            <div className={styles.gallerySide}>
              <div className={styles.galleryThumb}>
                <img src={tour.images[1] || tour.images[0] || '/images/destinations/komodo.jpg'} alt={tour.title} className={styles.galleryImg} />
              </div>
              <div className={styles.galleryThumb}>
                <img src={tour.images[2] || tour.images[0] || '/images/destinations/raja-ampat.jpg'} alt={tour.title} className={styles.galleryImg} />
                <div className={styles.galleryMoreOverlay}>
                  <span className={styles.galleryMore}>+{tour.images.length} foto</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT + BOOKING CARD */}
          <div className={styles.contentLayout}>
            {/* MAIN CONTENT */}
            <div className={styles.mainContent}>
              {/* HEADER */}
              <div className={styles.tourHeader}>
                <Badge variant="primary" size="md">{tour.category}</Badge>
                <h1 className={styles.tourTitle}>{tour.title}</h1>
                <div className={styles.tourMeta}>
                  <Rating value={tour.rating} reviewCount={tour.review_count} size="md" readonly showValue />
                  <span className={styles.metaDivider}>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <FaRegClock style={{ color: '#2563EB', fontSize: 14 }} /> {tour.duration_days} Hari {tour.duration_nights} Malam
                  </span>
                  <span className={styles.metaDivider}>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <FaMapMarkerAlt style={{ color: '#2563EB', fontSize: 14 }} /> {tour.destination}
                  </span>
                </div>
              </div>

              {/* HIGHLIGHTS */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaStar style={{ color: '#F59E0B' }} /> Highlights
                </h2>
                <ul className={styles.highlightList}>
                  {tour.highlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <FaCheckCircle style={{ color: '#16A34A', flexShrink: 0 }} /> {h}
                    </li>
                  ))}
                </ul>
              </section>

              {/* DESCRIPTION */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaFileAlt style={{ color: '#2563EB' }} /> Deskripsi
                </h2>
                <p className={styles.description}>{tour.description}</p>
              </section>

              {/* ITINERARY */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaRoute style={{ color: '#2563EB' }} /> Rencana Perjalanan
                </h2>
                <div className={styles.timeline}>
                  {itinerary.map((day, idx) => (
                    <div key={idx} className={styles.timelineItem}>
                      <div className={styles.timelineDot} />
                      {idx < itinerary.length - 1 && <div className={styles.timelineLine} />}
                      <button
                        className={`${styles.timelineCard} ${expandedDay === idx ? styles.expanded : ''}`}
                        onClick={() => setExpandedDay(expandedDay === idx ? -1 : idx)}
                      >
                        <div className={styles.timelineHeader}>
                          <h3>Hari {day.day}: {day.title}</h3>
                          <span className={styles.chevron}>
                            {expandedDay === idx ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </div>
                        {expandedDay === idx && (
                          <div className={styles.timelineBody}>
                            <p>{day.description}</p>
                            <ul className={styles.activityList}>
                              {day.activities.map((a, ai) => (
                                <li key={ai}>• {a}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* INCLUDES/EXCLUDES */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaClipboardList style={{ color: '#2563EB' }} /> Termasuk & Tidak Termasuk
                </h2>
                <div className={styles.inclusionGrid}>
                  <div className={styles.inclusionCol}>
                    <h4 className={styles.includedTitle}>Termasuk</h4>
                    {inclusions.included.map((item, i) => (
                      <p key={i} className={styles.includedItem} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <FaCheck style={{ color: '#16A34A', flexShrink: 0 }} /> {item}
                      </p>
                    ))}
                  </div>
                  <div className={styles.inclusionCol}>
                    <h4 className={styles.excludedTitle}>Tidak Termasuk</h4>
                    {inclusions.excluded.map((item, i) => (
                      <p key={i} className={styles.excludedItem} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <FaTimes style={{ color: '#EF4444', flexShrink: 0 }} /> {item}
                      </p>
                    ))}
                  </div>
                </div>
              </section>

              {/* CANCELLATION */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaUndo style={{ color: '#2563EB' }} /> Kebijakan Pembatalan
                </h2>
                {policies.map((p, i) => (
                  <div key={i} className={styles.policyItem}>
                    <span className={styles.policyBadge} data-refund={p.refund_percent > 0 ? 'yes' : 'no'}>
                      {p.refund_percent}%
                    </span>
                    <span>{p.description}</span>
                  </div>
                ))}
              </section>

              {/* REVIEWS */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaComments style={{ color: '#2563EB' }} /> Ulasan ({tour.review_count})
                </h2>
                <div className={styles.reviewSummary}>
                  <div className={styles.reviewBig}>
                    <span className={styles.reviewScore}>{tour.rating}</span>
                    <Rating value={tour.rating} size="lg" readonly />
                    <span className={styles.reviewTotal}>{tour.review_count} ulasan</span>
                  </div>
                </div>
                <div className={styles.reviewList}>
                  {dummyReviews.map((review) => (
                    <div key={review.id} className={styles.reviewCard}>
                      <div className={styles.reviewHeader}>
                        <div className={styles.reviewAvatar}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className={styles.reviewName}>{review.name}</p>
                          <p className={styles.reviewDate}>{review.date}</p>
                        </div>
                        <div className={styles.reviewStars}>
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <FaStar key={i} style={{ color: '#F59E0B', fontSize: 13, marginRight: 2 }} />
                          ))}
                        </div>
                      </div>
                      <p className={styles.reviewComment}>{review.comment}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* RELATED */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaCompass style={{ color: '#2563EB' }} /> Paket Serupa
                </h2>
                <div className={styles.relatedGrid}>
                  {popularTours
                    .filter((t) => t.id !== tour.id)
                    .slice(0, 3)
                    .map((t) => (
                      <Link key={t.id} href={`/${locale}/tours/${t.slug}`} className={styles.relatedCard}>
                        <div className={styles.relatedImage} style={{ background: gradients[parseInt(t.id) % 3] }} />
                        <div className={styles.relatedBody}>
                          <p className={styles.relatedTitle}>{t.title}</p>
                          <p className={styles.relatedPrice}>{formatPrice(t.price)}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
            </div>

            {/* BOOKING CARD */}
            <aside className={styles.bookingCard}>
              <div className={styles.bookingInner}>
                <p className={styles.bookingLabel}>Mulai dari</p>
                <div className={styles.bookingPrice}>
                  {tour.discount_price && (
                    <span className={styles.bookingOriginal}>{formatPrice(tour.discount_price)}</span>
                  )}
                  <span className={styles.bookingCurrent}>{formatPrice(tour.price)}</span>
                  <span className={styles.bookingPer}>/ orang</span>
                  {tour.discount_price && (
                    <Badge variant="error" size="sm">
                      -{calculateDiscount(tour.discount_price, tour.price)}%
                    </Badge>
                  )}
                </div>

                <div className={styles.bookingField}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <FaRegCalendarAlt style={{ color: '#2563EB' }} /> Tanggal
                  </label>
                  <input type="date" className={styles.bookingInput} />
                </div>

                <div className={styles.bookingField}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <FaUsers style={{ color: '#2563EB' }} /> Dewasa
                  </label>
                  <div className={styles.counter}>
                    <button onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
                    <span>{adults}</span>
                    <button onClick={() => setAdults(Math.min(20, adults + 1))}>+</button>
                  </div>
                </div>

                <div className={styles.bookingField}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <FaUserFriends style={{ color: '#2563EB' }} /> Anak
                  </label>
                  <div className={styles.counter}>
                    <button onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
                    <span>{children}</span>
                    <button onClick={() => setChildren(Math.min(10, children + 1))}>+</button>
                  </div>
                </div>

                <div className={styles.bookingDivider} />

                <div className={styles.bookingTotal}>
                  <span>Total</span>
                  <span className={styles.bookingTotalPrice}>{formatPrice(totalPrice)}</span>
                </div>

                <Link href={`/${locale}/checkout?tour=${tour.slug}&adults=${adults}&children=${children}`}>
                  <Button variant="secondary" size="lg" fullWidth>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center', width: '100%' }}>
                      <FaShoppingCart /> Pesan Sekarang
                    </span>
                  </Button>
                </Link>

                <div className={styles.bookingIncludes}>
                  <p className={styles.bookingIncludesTitle}>Termasuk:</p>
                  {inclusions.included.slice(0, 4).map((item, i) => (
                    <p key={i} className={styles.bookingIncludeItem} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <FaCheck style={{ color: '#16A34A', flexShrink: 0 }} /> {item}
                    </p>
                  ))}
                </div>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}
                >
                  <FaWhatsapp style={{ color: '#25D366', fontSize: 18 }} /> Butuh bantuan? Chat via WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* MOBILE BOTTOM BAR */}
        <div className={styles.mobileBar}>
          <div className={styles.mobileBarPrice}>
            <span className={styles.mobilePrice}>{formatPrice(tour.price)}</span>
            <span className={styles.mobilePer}>/ orang</span>
          </div>
          <Link href={`/${locale}/checkout?tour=${tour.slug}&adults=${adults}&children=${children}`}>
            <Button variant="secondary" size="md">Pesan Sekarang</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
