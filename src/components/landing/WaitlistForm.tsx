'use client';

import { useState, useRef, useEffect } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function WaitlistForm({
  source,
  autoFocus = false,
  tone = 'light',
  size = 'md',
}: {
  source: string;
  autoFocus?: boolean;
  tone?: 'light' | 'dark';
  size?: 'md' | 'lg';
}) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setError(null);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, website: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setError('Network hiccup — please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className={[
          'rounded-xl border px-5 py-4 flex items-center gap-3',
          tone === 'dark'
            ? 'bg-navy/80 border-accent-ring text-white'
            : 'bg-success-wash border-success-border text-success',
        ].join(' ')}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success text-white shrink-0">
          <CheckIcon />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-bold">You&rsquo;re on the list.</div>
          <div
            className={[
              'text-xs mt-0.5',
              tone === 'dark' ? 'text-white/80' : 'text-success/85',
            ].join(' ')}
          >
            We&rsquo;ll email <strong>{email}</strong> when the next design
            partner spot opens.
          </div>
        </div>
      </div>
    );
  }

  const inputClasses = [
    'flex-1 min-w-0 rounded-md border px-3 outline-none transition-colors',
    size === 'lg' ? 'h-12 text-[15px]' : 'h-11 text-[14px]',
    tone === 'dark'
      ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent-soft focus:bg-white/15'
      : 'bg-white border-border-strong text-ink placeholder:text-ink-subtle focus:border-accent',
  ].join(' ');

  const buttonClasses = [
    'shrink-0 inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all',
    size === 'lg' ? 'h-12 px-5 text-[14px]' : 'h-11 px-4 text-[13px]',
    status === 'submitting'
      ? 'bg-accent/70 text-white cursor-wait'
      : 'bg-accent text-white hover:bg-accent-strong',
    'border border-accent',
  ].join(' ');

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Honeypot — hidden from humans and screen readers */}
      <label
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px overflow-hidden"
      >
        Leave this field blank
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-2.5">
        <input
          ref={inputRef}
          type="email"
          name="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder="you@brokerage.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'submitting'}
          className={inputClasses}
          aria-label="Work email"
          aria-invalid={status === 'error'}
        />
        <button
          type="submit"
          className={buttonClasses}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Spinner />
              Saving…
            </>
          ) : (
            <>
              Get early access
              <Arrow />
            </>
          )}
        </button>
      </div>

      {error && (
        <div
          role="alert"
          className={[
            'mt-2.5 text-[12px]',
            tone === 'dark' ? 'text-[#FCA5A5]' : 'text-critical',
          ].join(' ')}
        >
          {error}
        </div>
      )}

      <div
        className={[
          'mt-3 text-[11px] font-mono uppercase tracking-widest',
          tone === 'dark' ? 'text-white/50' : 'text-ink-subtle',
        ].join(' ')}
      >
        Read-only inbox access · One-click disconnect · Never shared
      </div>
    </form>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
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

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
