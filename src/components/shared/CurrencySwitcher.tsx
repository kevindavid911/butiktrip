'use client';

import React, { useState, useEffect } from 'react';
import styles from './CurrencySwitcher.module.css';
import { useCurrency, CURRENCIES, Currency } from '@/context/CurrencyContext';
import { IoClose } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

const SUGGESTED_CODES = ['EUR', 'GBP', 'USD', 'AUD', 'NZD', 'SGD'];

export function CurrencySwitcher() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleSelect = (curr: Currency) => {
    setCurrency(curr);
    setIsModalOpen(false);
  };

  const suggestedCurrencies = CURRENCIES.filter((c) => SUGGESTED_CODES.includes(c.code));

  return (
    <>
      <button 
        type="button"
        className={styles.trigger}
        onClick={() => setIsModalOpen(true)}
        aria-label="Select currency"
      >
        <span>{currency.code}</span>
      </button>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Select your currency</h2>
              <button 
                type="button"
                className={styles.closeBtn} 
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <IoClose />
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.subtitle}>
                Where applicable prices will be converted to, and shown in, the currency that you select. The currency you pay in may differ based on your reservation, and a service fee may also apply.
              </p>

              <h3 className={styles.sectionTitle}>Suggested for you</h3>
              <div className={styles.grid}>
                {suggestedCurrencies.map((curr) => {
                  const isSelected = curr.code === currency.code;
                  return (
                    <button
                      key={`suggested-${curr.code}`}
                      type="button"
                      className={`${styles.currencyCard} ${isSelected ? styles.selected : ''}`}
                      onClick={() => handleSelect(curr)}
                    >
                      <span className={styles.currencyName}>{curr.name}</span>
                      <span className={styles.currencyCode}>{curr.code}</span>
                      {isSelected && <FaCheck className={styles.checkIcon} />}
                    </button>
                  );
                })}
              </div>

              <h3 className={styles.sectionTitle}>All currencies</h3>
              <div className={styles.grid}>
                {CURRENCIES.map((curr) => {
                  const isSelected = curr.code === currency.code;
                  return (
                    <button
                      key={`all-${curr.code}`}
                      type="button"
                      className={`${styles.currencyCard} ${isSelected ? styles.selected : ''}`}
                      onClick={() => handleSelect(curr)}
                    >
                      <span className={styles.currencyName}>{curr.name}</span>
                      <span className={styles.currencyCode}>{curr.code}</span>
                      {isSelected && <FaCheck className={styles.checkIcon} />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
