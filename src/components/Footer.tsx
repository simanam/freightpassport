import Link from 'next/link';

const productLinks = [
  { label: 'Identity tiers', href: '#identity' },
  { label: 'How it works', href: '#flow' },
  { label: 'The fraud', href: '#problem' },
  { label: 'Fraud engine', href: '#rules' },
  { label: 'Security', href: '#security' },
  { label: 'Roadmap', href: '#roadmap' },
];

const trustLinks = [
  { label: 'Security', href: '#security' },
  { label: 'Fraud engine', href: '#rules' },
];

const companyLinks = [
  { label: 'Request a pilot', href: '#cta' },
  { label: 'Contact', href: 'mailto:hello@freightpassport.io' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-ink mb-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-ink font-bold text-sm">
                FP
              </span>
              <span className="font-bold tracking-tight">
                Freight<span className="text-accent">Passport</span>
              </span>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
              Cryptographically-sealed chain of custody for freight. Every handoff verifiable.
            </p>
          </div>

          <FooterCol title="Product" links={productLinks} />
          <FooterCol title="Trust" links={trustLinks} />
          <FooterCol title="Company" links={companyLinks} />
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-ink-subtle">
            © 2026 Logixtecs Solutions LLC. All rights reserved.
          </p>
          <p className="text-xs text-ink-subtle">
            Cryptographically-sealed chain of custody
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink mb-5">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ink-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
