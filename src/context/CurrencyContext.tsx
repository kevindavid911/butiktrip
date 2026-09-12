'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
  rate: number;
}

export const CURRENCIES: Currency[] = [
  { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩', symbol: 'Rp ', rate: 1 },
  { code: 'USD', name: 'United States Dollar', flag: '🇺🇸', symbol: '$', rate: 16000 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€', rate: 17200 },
  { code: 'GBP', name: 'Pound Sterling', flag: '🇬🇧', symbol: '£', rate: 20500 },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$', rate: 10500 },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', symbol: 'S$', rate: 12000 },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', symbol: 'NZ$', rate: 9800 },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥', rate: 105 },
  { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾', symbol: 'RM ', rate: 3600 },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'CA$', rate: 11500 },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', symbol: 'CHF ', rate: 18000 },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', symbol: '¥', rate: 2200 },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰', symbol: 'HK$', rate: 2050 },
  { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷', symbol: '₩', rate: 12 },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', symbol: '฿', rate: 450 },
  { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', symbol: 'SR ', rate: 4250 },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', symbol: 'AED ', rate: 4350 },
];

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceInIDR: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: CURRENCIES[0],
  setCurrency: () => {},
  formatPrice: (p) => `Rp ${p?.toLocaleString('id-ID') || 0}`,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(CURRENCIES[0]);

  useEffect(() => {
    try {
      const savedCode = localStorage.getItem('butiktrip_currency');
      if (savedCode) {
        const found = CURRENCIES.find((c) => c.code === savedCode);
        if (found) setCurrencyState(found);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem('butiktrip_currency', c.code);
    } catch (e) {
      // ignore
    }
  };

  const formatPrice = (priceInIDR: number): string => {
    if (!priceInIDR) return '0';
    if (currency.code === 'IDR') {
      return `Rp${priceInIDR.toLocaleString('id-ID')}`;
    }
    const converted = Math.round(priceInIDR / currency.rate);
    return `${currency.symbol}${converted.toLocaleString('en-US')}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
