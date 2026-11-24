import { useState } from 'react';
import { Download, Globe, Menu, X } from 'lucide-react';

export default function Navbar({ content, onToggleLang, onOpenCv }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // الترتيب الجديد حسب طلبك تماماً
  const navItems = [
    { href: '#top', label: content.nav.home },
    { href: '#about', label: content.nav.about },
    { href: '#experience', label: content.nav.experience },
    { href: '#projects', label: content.nav.projects },
    { href: '#skills', label: content.nav.services },
    { href: '#certifications', label: content.nav.certificats },
    { href: '#contact', label: content.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-[#f4f8f6]/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0e12]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        {/* Brand */}
        <a
          href="#top"
          className="font-display flex items-baseline gap-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white"
        >
          <span>{content.meta.brandMain}</span>
          <span className="text-emerald-500 dark:text-emerald-400">
            {content.meta.brandAccent}
          </span>
        </a>

        {/* Centered Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls + Download CV CTA */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="Toggle Language"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#11151b] px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-emerald-400 hover:text-emerald-300"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-500" />
            <span>{content.nav.langLabel}</span>
          </button>

          <button
            type="button"
            onClick={onOpenCv}
            className="tech-glow hidden items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-400 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{content.nav.downloadCv}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 lg:hidden dark:border-white/10 dark:bg-[#11151b] dark:text-slate-200"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden dark:border-white/10 dark:bg-[#0b0e12]">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenCv();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950"
            >
              <Download className="h-4 w-4" />
              <span>{content.nav.downloadCv}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}