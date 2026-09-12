export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  destination: string;
  duration_days: number;
  duration_nights: number;
  price: number;
  discount_price?: number;
  currency: string;
  rating: number;
  review_count: number;
  max_pax: number;
  images: string[];
  highlights: string[];
  category: string;
  is_popular: boolean;
  is_featured: boolean;
  created_at: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  tour_count: number;
  is_popular: boolean;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface TourInclusion {
  included: string[];
  excluded: string[];
}

export interface CancellationPolicy {
  type: string;
  description: string;
  refund_percent: number;
  days_before: number;
}

export interface Booking {
  id: string;
  reference_code: string;
  tour: Tour;
  user: User;
  guests: GuestInfo[];
  status: string;
  total_price: number;
  currency: string;
  payment_method: string;
  payment_status: string;
  created_at: string;
}

export interface GuestInfo {
  name: string;
  identity_type: string;
  identity_number: string;
  is_adult: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar_url?: string;
  preferred_language: string;
  preferred_currency: string;
}

export interface Review {
  id: string;
  user: User;
  tour: Tour;
  rating: number;
  comment: string;
  created_at: string;
}

export interface SearchFilters {
  query?: string;
  destination?: string;
  date_from?: string;
  date_to?: string;
  guests_adult?: number;
  guests_child?: number;
  guests_infant?: number;
  price_min?: number;
  price_max?: number;
  duration_min?: number;
  duration_max?: number;
  categories?: string[];
  rating_min?: number;
  sort_by?: string;
  page?: number;
  per_page?: number;
}

export interface SearchResult {
  tours: Tour[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

export interface Currency {
  code: 'IDR' | 'USD' | 'EUR' | 'SGD' | 'AUD' | 'MYR';
  symbol: string;
  name: string;
}

export type Locale = 'id' | 'en';

export type Dictionary = {
  [key: string]: string | Dictionary;
};
