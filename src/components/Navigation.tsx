'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b from-[var(--color-dark)] to-transparent backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline text-[var(--color-light)]">
            <div className="w-10 h-10 rounded-[10px] flex items-center justify-center font-bold text-lg text-[var(--color-primary-text)]" style={{ background: 'var(--gradient-primary)' }}>
              FP
            </div>
            <div className="font-bold text-xl tracking-tight">
              Freight<span className="text-[var(--color-primary)]">Passport</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            <li><Link href="#problem" className="text-[var(--color-muted)] no-underline text-sm font-medium hover:text-[var(--color-light)] transition-colors">Problem</Link></li>
            <li><Link href="#solution" className="text-[var(--color-muted)] no-underline text-sm font-medium hover:text-[var(--color-light)] transition-colors">Solution</Link></li>
            <li><Link href="#ai-powered" className="text-[var(--color-muted)] no-underline text-sm font-medium hover:text-[var(--color-light)] transition-colors">AI Powered</Link></li>
            <li><Link href="#how-it-works" className="text-[var(--color-muted)] no-underline text-sm font-medium hover:text-[var(--color-light)] transition-colors">How It Works</Link></li>
            <li><Link href="#testimonials" className="text-[var(--color-muted)] no-underline text-sm font-medium hover:text-[var(--color-light)] transition-colors">Testimonials</Link></li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="#cta" className="px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90 hover:-translate-y-0.5 transition-all">
              Get Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-transparent border-none text-[var(--color-light)] cursor-pointer p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[var(--color-border)]">
            <ul className="flex flex-col gap-4 list-none">
              <li><Link href="#problem" className="text-[var(--color-muted)] no-underline text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Problem</Link></li>
              <li><Link href="#solution" className="text-[var(--color-muted)] no-underline text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Solution</Link></li>
              <li><Link href="#ai-powered" className="text-[var(--color-muted)] no-underline text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>AI Powered</Link></li>
              <li><Link href="#how-it-works" className="text-[var(--color-muted)] no-underline text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>How It Works</Link></li>
              <li><Link href="#testimonials" className="text-[var(--color-muted)] no-underline text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link></li>
            </ul>
            <div className="mt-4">
              <Link href="#cta" className="w-full text-center block px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-[var(--color-primary-text)]" onClick={() => setMobileMenuOpen(false)}>
                Get Early Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
