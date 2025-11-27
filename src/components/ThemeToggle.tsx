'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-2xl p-2 shadow-2xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleTheme()}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              theme === 'startup'
                ? 'bg-green-500 text-black'
                : 'bg-transparent text-[var(--color-muted)] hover:text-[var(--color-light)]'
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Startup
          </button>

          <button
            onClick={() => toggleTheme()}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              theme === 'enterprise'
                ? 'bg-teal-500 text-black'
                : 'bg-transparent text-[var(--color-muted)] hover:text-[var(--color-light)]'
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Enterprise
          </button>
        </div>

        <div className="mt-2 pt-2 border-t border-[var(--color-border)] text-center">
          <span className="text-xs text-[var(--color-muted)]">
            {theme === 'startup' ? 'Bright & Modern' : 'Secure & Trustworthy'}
          </span>
        </div>
      </div>
    </div>
  );
}
