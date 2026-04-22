'use client';

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import WaitlistForm from './WaitlistForm';

export default function WaitlistDialog({
  label = 'Get early access',
  source = 'hero',
  className = 'btn btn-primary',
}: {
  label?: string;
  source?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Mark client-mounted so createPortal only runs on the browser.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      // restore focus to the trigger when we close
      triggerRef.current?.focus();
    };
  }, [open]);

  const dialog = open ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
      className="fixed inset-0 z-1000 flex items-center justify-center px-4 py-8 isolate"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full max-w-md rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden animate-fade-up">
        <div className="flex items-start justify-between gap-3 px-6 pt-6 pb-3">
          <div>
            <span className="eyebrow">Early access</span>
            <h2
              id="waitlist-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-ink leading-tight"
            >
              Put your loads on autopilot.
            </h2>
            <p className="mt-2 text-[13px] text-ink-muted leading-relaxed">
              Drop your work email and we&rsquo;ll be in touch when the next
              design partner spot opens — usually same week.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close dialog"
            className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:text-ink hover:bg-bg-tint transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-6">
          <WaitlistForm source={source} autoFocus />
        </div>

        <div className="px-6 py-4 border-t border-border bg-bg-tint flex items-center justify-between gap-3 text-[11px] font-mono text-ink-subtle uppercase tracking-widest">
          <span>Design partner pricing</span>
          <a
            href="mailto:aman@logixtecs.com?subject=Early%20access%20%E2%80%94%20design%20partner"
            className="text-accent-strong hover:underline normal-case tracking-normal font-sans font-semibold"
          >
            Prefer a call? →
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {label}
        <Arrow />
      </button>

      {mounted && dialog ? createPortal(dialog, document.body) : null}
    </>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
