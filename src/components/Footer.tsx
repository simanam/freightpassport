import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#solution' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pre-Verification', href: '#pre-verification' },
      { label: 'AI Capabilities', href: '#ai-powered' },
      { label: 'Pricing', href: '#' },
      { label: 'API Docs', href: '#' }
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' }
    ]
  };

  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline text-[var(--color-light)] mb-4">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center font-bold text-lg text-[var(--color-primary-text)]" style={{ background: 'var(--gradient-primary)' }}>
                FP
              </div>
              <div className="font-bold text-xl tracking-tight">
                Freight<span className="text-[var(--color-primary)]">Passport</span>
              </div>
            </Link>
            <p className="text-sm text-[var(--color-muted)] max-w-[280px]">
              The identity layer for American freight. One passport. One truth. Every load verified.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Product</h4>
            <ul className="space-y-3 list-none">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-[var(--color-muted)] no-underline hover:text-[var(--color-light)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 list-none">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-[var(--color-muted)] no-underline hover:text-[var(--color-light)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3 list-none">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-[var(--color-muted)] no-underline hover:text-[var(--color-light)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] gap-6">
          <p className="text-sm text-[var(--color-muted)]">
            © 2025 Freight Passport. All rights reserved.
          </p>

          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center bg-[var(--color-surface)] rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-text)] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center bg-[var(--color-surface)] rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-text)] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
