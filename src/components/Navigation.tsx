'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#identity', label: 'Identity' },
  { href: '#flow', label: 'How it works' },
  { href: '#problem', label: 'The fraud' },
  { href: '#rules', label: 'Fraud engine' },
  { href: '#security', label: 'Security' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '/how-it-works', label: 'Deep dive' },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-ink"
      aria-label="FreightPassport home"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-ink font-bold text-[13px]">
        FP
      </span>
      <span className="font-bold tracking-tight text-base">
        Freight<span className="text-accent">Passport</span>
      </span>
    </Link>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-3 bg-bg/85 backdrop-blur-xl border-b border-border'
          : 'py-5 bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <Logo />

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link href="#cta" className="btn btn-primary text-sm py-2.5 px-5">
              Request a pilot
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden p-2 text-ink"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1.5 text-sm font-medium text-ink-muted"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className="btn btn-primary mt-4 w-full text-sm"
              onClick={() => setOpen(false)}
            >
              Request a pilot
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
