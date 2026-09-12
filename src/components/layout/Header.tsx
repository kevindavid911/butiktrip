"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import styles from "./Header.module.css";
import { LangSwitcher } from "../shared/LangSwitcher";
import { CurrencySwitcher } from "../shared/CurrencySwitcher";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as string) || "id";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 992) setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage =
    pathname === `/${locale}` || pathname === `/${locale}/` || pathname === "/";
  const headerClass = `${styles.header} ${!isHomePage || isScrolled ? styles.scrolled : styles.initial}`;

  return (
    <>
      <header className={headerClass}>
        <div className={styles.topBar}>
          <div className={styles.container}>
            <div className={styles.topBarLeft}>
              <a href="tel:+6281234567890" className={styles.topLink}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +62 812 1314 4604
              </a>
              <a
                href="mailto:butiktripinfo@gmail.com"
                className={styles.topLink}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                butiktripinfo@gmail.com
              </a>
            </div>
            <div className={styles.topBarRight}>
              <a
                href="https://instagram.com/butiktrip"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.topLink}
              >
                {/* Ikon Instagram */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                @butiktrip
              </a>
            </div>
          </div>
        </div>

        <div className={styles.mainNav}>
          <div className={styles.container}>
            <button
              className={styles.hamburgerBtn}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            <Link href={`/${locale}`} className={styles.logo}>
              ButikTrip.id
            </Link>

            <div className={styles.navAndActions}>
              <nav className={styles.desktopNav}>
                {NAV_LINKS.map((link) => {
                  const targetHref = `/${locale}${link.href === "/" ? "" : link.href}`;
                  return (
                    <Link
                      key={link.href}
                      href={targetHref}
                      className={`${styles.navLink} ${pathname === targetHref ? styles.activeLink : ""}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className={styles.bookingControls}>
                <CurrencySwitcher />
                <LangSwitcher />
                <Link
                  href={`/${locale}/register`}
                  className={styles.registerBtn}
                >
                  Register
                </Link>
                <Link href={`/${locale}/login`} className={styles.signInBtn}>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className={styles.drawerOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.drawerHeader}>
          <Link
            href={`/${locale}`}
            className={styles.logo}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ButikTrip.id
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.drawerBody}>
          <nav className={styles.mobileNav}>
            {NAV_LINKS.map((link) => {
              const targetHref = `/${locale}${link.href === "/" ? "" : link.href}`;
              return (
                <Link
                  key={link.href}
                  href={targetHref}
                  className={`${styles.mobileNavLink} ${pathname === targetHref ? styles.activeMobileLink : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.drawerUtils}>
            <div className={styles.drawerUtilRow}>
              <span className={styles.drawerUtilLabel}>Language</span>
              <LangSwitcher />
            </div>
            <div className={styles.drawerUtilRow}>
              <span className={styles.drawerUtilLabel}>Currency</span>
              <CurrencySwitcher />
            </div>
          </div>

          <div className={styles.drawerFooter}>
            <Link
              href={`/${locale}/register`}
              className={styles.mobileRegisterBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              href={`/${locale}/login`}
              className={styles.mobileLoginBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
