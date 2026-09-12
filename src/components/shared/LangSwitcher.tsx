'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import styles from './LangSwitcher.module.css';
import { IoClose } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

interface LanguageItem {
  code: string;
  name: string;
  flag: string;
  localeCode: 'id' | 'en';
}

const SUGGESTED_LANGS: LanguageItem[] = [
  { code: 'id-id', name: 'Bahasa Indonesia', flag: '🇮🇩', localeCode: 'id' },
  { code: 'en-us', name: 'English (US)', flag: '🇺🇸', localeCode: 'en' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', localeCode: 'en' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', localeCode: 'en' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', localeCode: 'en' },
];

const ALL_LANGS: LanguageItem[] = [
  { code: 'id-id', name: 'Bahasa Indonesia', flag: '🇮🇩', localeCode: 'id' },
  { code: 'en-gb', name: 'English (UK)', flag: '🇬🇧', localeCode: 'en' },
  { code: 'en-us', name: 'English (US)', flag: '🇺🇸', localeCode: 'en' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', localeCode: 'en' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', localeCode: 'en' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', localeCode: 'en' },
  { code: 'es', name: 'Español', flag: '🇪🇸', localeCode: 'en' },
  { code: 'es-ar', name: 'Español (AR)', flag: '🇦🇷', localeCode: 'en' },
  { code: 'es-mx', name: 'Español (MX)', flag: '🇲🇽', localeCode: 'en' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', localeCode: 'en' },
  { code: 'pt-pt', name: 'Português (PT)', flag: '🇵🇹', localeCode: 'en' },
  { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷', localeCode: 'en' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴', localeCode: 'en' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮', localeCode: 'en' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪', localeCode: 'en' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰', localeCode: 'en' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', localeCode: 'en' },
  { code: 'zh-cn', name: '简体中文', flag: '🇨🇳', localeCode: 'en' },
  { code: 'zh-tw', name: '繁體中文', flag: '🇹🇼', localeCode: 'en' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱', localeCode: 'en' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', localeCode: 'en' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', localeCode: 'en' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', localeCode: 'en' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', localeCode: 'en' },
  { code: 'ms', name: 'Bahasa Malaysia', flag: '🇲🇾', localeCode: 'id' },
  { code: 'th', name: 'ภาษาไทย', flag: '🇹🇭', localeCode: 'en' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', localeCode: 'en' },
];

function FlagCircle({ code, flag }: { code: string; flag: string }) {
  if (code.startsWith('id')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24">
        <clipPath id="circle-flag-id">
          <circle cx="12" cy="12" r="11" />
        </clipPath>
        <g clipPath="url(#circle-flag-id)">
          <rect width="24" height="12" fill="#E11925" />
          <rect y="12" width="24" height="12" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="11" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        </g>
      </svg>
    );
  }
  if (code === 'en-gb') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24">
        <clipPath id="circle-flag-gb">
          <circle cx="12" cy="12" r="11" />
        </clipPath>
        <g clipPath="url(#circle-flag-gb)">
          <rect width="24" height="24" fill="#012169" />
          <path d="M0,0 L24,24 M24,0 L0,24" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M0,0 L24,24 M24,0 L0,24" stroke="#C8102E" strokeWidth="2.5" />
          <path d="M12,0 V24 M0,12 H24" stroke="#FFFFFF" strokeWidth="6" />
          <path d="M12,0 V24 M0,12 H24" stroke="#C8102E" strokeWidth="3.5" />
          <circle cx="12" cy="12" r="11" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        </g>
      </svg>
    );
  }
  return (
    <span style={{ fontSize: '18px', lineHeight: 1 }}>{flag}</span>
  );
}

export function LangSwitcher() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params?.locale as string) || 'id';

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

  const switchLocale = (targetLocale: string) => {
    setIsModalOpen(false);
    if (targetLocale === currentLocale) return;

    let newPath = pathname;
    if (pathname.startsWith(`/${currentLocale}`)) {
      newPath = pathname.replace(`/${currentLocale}`, `/${targetLocale}`);
    } else {
      newPath = `/${targetLocale}${pathname}`;
    }

    try {
      document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000`;
    } catch (e) {
      // ignore
    }

    router.push(newPath);
  };

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsModalOpen(true)}
        aria-label="Select language"
      >
        <div className={styles.flagCircle}>
          <FlagCircle code={currentLocale === 'id' ? 'id-id' : 'en-gb'} flag={currentLocale === 'id' ? '🇮🇩' : '🇬🇧'} />
        </div>
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
              <h2 className={styles.modalTitle}>Select your language</h2>
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
              <h3 className={styles.sectionTitle}>Suggested for you</h3>
              <div className={styles.grid}>
                {SUGGESTED_LANGS.map((item) => {
                  const isSelected = item.localeCode === currentLocale;
                  return (
                    <button
                      key={`suggested-${item.code}`}
                      type="button"
                      className={`${styles.langCard} ${isSelected ? styles.selected : ''}`}
                      onClick={() => switchLocale(item.localeCode)}
                    >
                      <div className={styles.cardFlag}>
                        <FlagCircle code={item.code} flag={item.flag} />
                      </div>
                      <span className={styles.langName}>{item.name}</span>
                      {isSelected && <FaCheck className={styles.checkIcon} />}
                    </button>
                  );
                })}
              </div>

              <h3 className={styles.sectionTitle}>All languages</h3>
              <div className={styles.grid}>
                {ALL_LANGS.map((item) => {
                  const isSelected = item.localeCode === currentLocale && (
                    (currentLocale === 'id' && item.code === 'id-id') ||
                    (currentLocale === 'en' && item.code === 'en-gb')
                  );
                  return (
                    <button
                      key={`all-${item.code}`}
                      type="button"
                      className={`${styles.langCard} ${isSelected ? styles.selected : ''}`}
                      onClick={() => switchLocale(item.localeCode)}
                    >
                      <div className={styles.cardFlag}>
                        <FlagCircle code={item.code} flag={item.flag} />
                      </div>
                      <span className={styles.langName}>{item.name}</span>
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
