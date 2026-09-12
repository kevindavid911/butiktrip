import { ReactNode } from 'react';
import { Locale } from '@/lib/i18n/config';

import { CurrencyProvider } from '@/context/CurrencyContext';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div lang={locale}>
      <CurrencyProvider>
        {children}
      </CurrencyProvider>
    </div>
  );
}
