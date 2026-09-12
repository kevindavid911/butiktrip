import type { Tour, Destination, Review } from '@/types';

export const popularDestinations: Destination[] = [
  {
    id: '1',
    slug: 'bali',
    name: 'Bali',
    description: 'Pulau Dewata dengan pantai eksotis, pura megah, dan budaya yang kaya',
    image: '/images/destinations/bali.jpg',
    tour_count: 42,
    is_popular: true,
  },
  {
    id: '2',
    slug: 'komodo',
    name: 'Komodo',
    description: 'Rumah bagi komodo, pantai pink, dan spot diving kelas dunia',
    image: '/images/destinations/komodo.jpg',
    tour_count: 18,
    is_popular: true,
  },
  {
    id: '3',
    slug: 'raja-ampat',
    name: 'Raja Ampat',
    description: 'Surga bawah laut dengan keanekaragaman hayati terkaya di dunia',
    image: '/images/destinations/raja-ampat.jpg',
    tour_count: 12,
    is_popular: true,
  },
  {
    id: '4',
    slug: 'bromo',
    name: 'Bromo',
    description: 'Gunung berapi aktif dengan pemandangan sunrise yang menakjubkan',
    image: '/images/destinations/bromo.jpg',
    tour_count: 25,
    is_popular: true,
  },
  {
    id: '5',
    slug: 'yogyakarta',
    name: 'Yogyakarta',
    description: 'Kota budaya Jawa dengan Borobudur, Prambanan, dan kuliner legendaris',
    image: '/images/destinations/yogyakarta.jpg',
    tour_count: 30,
    is_popular: true,
  },
  {
    id: '6',
    slug: 'lombok',
    name: 'Lombok',
    description: 'Pantai perawan, Gunung Rinjani, dan desa tradisional Sasak',
    image: '/images/destinations/lombok.jpg',
    tour_count: 20,
    is_popular: true,
  },
];

export const popularTours: Tour[] = [
  {
    id: '1',
    slug: 'bali-sunrise-trek-temple-tour',
    title: 'Bali Sunrise Trek & Temple Tour',
    description:
      'Saksikan keajaiban sunrise dari puncak Gunung Batur, lalu jelajahi pura-pura bersejarah di Bali. Paket lengkap dengan guide lokal berpengalaman, sarapan tradisional, dan transportasi privat.',
    destination: 'Bali',
    duration_days: 3,
    duration_nights: 2,
    price: 2500000,
    discount_price: 3200000,
    currency: 'IDR',
    rating: 4.8,
    review_count: 120,
    max_pax: 15,
    images: [
      '/images/tours/bali-sunrise-1.jpg',
      '/images/tours/bali-sunrise-2.jpg',
      '/images/tours/bali-sunrise-3.jpg',
    ],
    highlights: [
      'Sunrise dari Gunung Batur',
      'Pura Tirta Empul',
      'Tegallalang Rice Terrace',
      'Guide lokal berpengalaman',
    ],
    category: 'Alam',
    is_popular: true,
    is_featured: true,
    created_at: '2026-01-15T00:00:00Z',
  },
  {
    id: '2',
    slug: 'komodo-island-adventure',
    title: 'Komodo Island Adventure Tour',
    description:
      'Petualangan 5 hari ke Taman Nasional Komodo. Trekking melihat komodo, snorkeling di Pink Beach, dan menikmati sunset dari Padar Island. Pengalaman yang tak terlupakan!',
    destination: 'Komodo',
    duration_days: 5,
    duration_nights: 4,
    price: 6800000,
    discount_price: 8500000,
    currency: 'IDR',
    rating: 4.6,
    review_count: 85,
    max_pax: 12,
    images: [
      '/images/tours/komodo-1.jpg',
      '/images/tours/komodo-2.jpg',
      '/images/tours/komodo-3.jpg',
    ],
    highlights: [
      'Taman Nasional Komodo',
      'Pink Beach Snorkeling',
      'Padar Island Sunset',
      'Live on Board boat',
    ],
    category: 'Bahari',
    is_popular: true,
    is_featured: true,
    created_at: '2026-02-01T00:00:00Z',
  },
  {
    id: '3',
    slug: 'raja-ampat-diving-paradise',
    title: 'Raja Ampat Diving Paradise',
    description:
      'Selami keindahan bawah laut Raja Ampat, surga diving nomor satu dunia. Temui manta ray, terumbu karang warna-warni, dan ribuan spesies ikan tropis.',
    destination: 'Raja Ampat',
    duration_days: 7,
    duration_nights: 6,
    price: 12500000,
    discount_price: 15000000,
    currency: 'IDR',
    rating: 4.9,
    review_count: 64,
    max_pax: 8,
    images: [
      '/images/tours/raja-ampat-1.jpg',
      '/images/tours/raja-ampat-2.jpg',
      '/images/tours/raja-ampat-3.jpg',
    ],
    highlights: [
      'Diving di Misool',
      'Wayag Islands viewpoint',
      'Manta ray encounter',
      'Homestay lokal',
    ],
    category: 'Bahari',
    is_popular: true,
    is_featured: false,
    created_at: '2026-03-10T00:00:00Z',
  },
  {
    id: '4',
    slug: 'bromo-midnight-sunrise-tour',
    title: 'Bromo Midnight Sunrise Tour',
    description:
      'Bangun tengah malam untuk menyaksikan sunrise paling spektakuler di Jawa Timur. Jeep adventure melintasi lautan pasir menuju kawah Bromo yang masih aktif.',
    destination: 'Bromo',
    duration_days: 2,
    duration_nights: 1,
    price: 1500000,
    currency: 'IDR',
    rating: 4.7,
    review_count: 200,
    max_pax: 20,
    images: [
      '/images/tours/bromo-1.jpg',
      '/images/tours/bromo-2.jpg',
      '/images/tours/bromo-3.jpg',
    ],
    highlights: [
      'Sunrise dari Penanjakan',
      'Jeep adventure',
      'Kawah Bromo',
      'Pasir Berbisik',
    ],
    category: 'Alam',
    is_popular: true,
    is_featured: true,
    created_at: '2026-01-20T00:00:00Z',
  },
  {
    id: '5',
    slug: 'yogyakarta-culture-heritage',
    title: 'Yogyakarta Culture & Heritage Trip',
    description:
      'Jelajahi warisan budaya Yogyakarta: Candi Borobudur saat sunrise, kemegahan Candi Prambanan, dan kehidupan seni di Malioboro. Termasuk workshop batik dan kuliner lokal.',
    destination: 'Yogyakarta',
    duration_days: 4,
    duration_nights: 3,
    price: 3200000,
    discount_price: 4000000,
    currency: 'IDR',
    rating: 4.8,
    review_count: 150,
    max_pax: 15,
    images: [
      '/images/tours/yogya-1.jpg',
      '/images/tours/yogya-2.jpg',
      '/images/tours/yogya-3.jpg',
    ],
    highlights: [
      'Sunrise Borobudur',
      'Candi Prambanan',
      'Workshop Batik',
      'Kuliner Malioboro',
    ],
    category: 'Budaya',
    is_popular: true,
    is_featured: true,
    created_at: '2026-02-15T00:00:00Z',
  },
  {
    id: '6',
    slug: 'lombok-rinjani-trekking',
    title: 'Lombok Rinjani Trekking Adventure',
    description:
      'Tantang dirimu mendaki Gunung Rinjani, gunung berapi tertinggi kedua di Indonesia. Nikmati pemandangan Danau Segara Anak dari puncak dan relaksasi di pantai Senggigi.',
    destination: 'Lombok',
    duration_days: 4,
    duration_nights: 3,
    price: 4500000,
    discount_price: 5500000,
    currency: 'IDR',
    rating: 4.5,
    review_count: 92,
    max_pax: 10,
    images: [
      '/images/tours/lombok-1.jpg',
      '/images/tours/lombok-2.jpg',
      '/images/tours/lombok-3.jpg',
    ],
    highlights: [
      'Summit Gunung Rinjani',
      'Danau Segara Anak',
      'Pantai Senggigi',
      'Desa Sasak tradisional',
    ],
    category: 'Alam',
    is_popular: true,
    is_featured: false,
    created_at: '2026-03-05T00:00:00Z',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Wijaya',
    avatar: '/images/avatars/sarah.jpg',
    location: 'Jakarta, Indonesia',
    rating: 5,
    comment:
      'Pengalaman terbaik! Guide-nya sangat ramah dan profesional. Trip ke Komodo benar-benar tak terlupakan. Pasti akan booking lagi dengan ButikTrip!',
    tour: 'Komodo Island Adventure Tour',
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: '/images/avatars/michael.jpg',
    location: 'Singapore',
    rating: 5,
    comment:
      'Excellent service from start to finish. The Bali trek was well-organized and the sunrise view was absolutely breathtaking. Highly recommended!',
    tour: 'Bali Sunrise Trek & Temple Tour',
  },
  {
    id: '3',
    name: 'Dewi Rahayu',
    avatar: '/images/avatars/dewi.jpg',
    location: 'Surabaya, Indonesia',
    rating: 4,
    comment:
      'Raja Ampat memang surga dunia! ButikTrip mengatur semuanya dengan sempurna. Dari penerbangan hingga homestay, semuanya lancar. Terima kasih!',
    tour: 'Raja Ampat Diving Paradise',
  },
  {
    id: '4',
    name: 'James Thompson',
    avatar: '/images/avatars/james.jpg',
    location: 'Sydney, Australia',
    rating: 5,
    comment:
      'My wife and I had the most amazing time exploring Yogyakarta. The Borobudur sunrise was magical. ButikTrip made everything so easy and seamless.',
    tour: 'Yogyakarta Culture & Heritage Trip',
  },
];

export const trustStats = [
  { value: 500, suffix: '+', label: 'Trips Organized' },
  { value: 12000, suffix: '+', label: 'Happy Travelers' },
  { value: 4.8, suffix: '★', label: 'Average Rating' },
  { value: 24, suffix: '/7', label: 'Customer Support' },
];

export const formatPrice = (
  price: number,
  currency: string = 'IDR',
  locale: string = 'id-ID'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price).replace(/\s/g, '');
};

export const calculateDiscount = (
  originalPrice: number,
  discountedPrice: number
): number => {
  return Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );
};
