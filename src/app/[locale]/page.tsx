import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/lib/i18n/config';
import { Header, Footer } from '@/components/layout';
import { WhatsAppFAB } from '@/components/shared';
import {
  HeroSection,
  TrustBar,
  PopularDestinations,
  PopularPackages,
  WhyChooseUs,
  Testimonials,
  CTASection,
  GallerySection
} from '@/components/home';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  
  return {
    title: `ButikTrip.id - ${dict?.homepage?.heroTitle || 'Jelajahi Indonesia, Temukan Petualanganmu'}`,
    description: dict?.homepage?.heroSubtitle || 'Rencanakan liburan tak terlupakan dengan paket tur terbaik.',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <>
      <Header />
      <main>
        <HeroSection locale={locale} />
        <TrustBar />
        <PopularDestinations locale={locale} />
        <PopularPackages locale={locale} />
        <WhyChooseUs />
        <GallerySection />
        <Testimonials />
        <CTASection locale={locale} />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
