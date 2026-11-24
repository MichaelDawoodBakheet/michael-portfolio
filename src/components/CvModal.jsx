import { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function CvModal({ open, content, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const { meta, experience, projects, skills, certifications, cvModal } = content;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl sm:p-8 dark:border-emerald-500/30 dark:bg-[#11151b] dark:text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Toolbar */}
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-white/10">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            {cvModal.title}
          </h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400"
            >
              <Printer className="h-4 w-4" />
              <span>{cvModal.printBtn}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={cvModal.closeBtn}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-emerald-400 hover:text-emerald-500 dark:border-white/10 dark:text-slate-400"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="space-y-6 text-sm leading-relaxed">
          <div className="border-b border-slate-200 pb-4 dark:border-white/10">
            <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {meta.name}
            </h1>
            <p className="mt-1 font-semibold text-emerald-600 dark:text-emerald-400">
              {meta.role}
            </p>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              {meta.location} • {CONTACT_LINKS.email} • {CONTACT_LINKS.phone}
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-base font-bold text-emerald-600 dark:text-emerald-400">
              {experience.expHeading}
            </h2>
            <div className="space-y-4">
              {experience.items.map((item) => (
                <div key={item.role}>
                  <div className="flex flex-wrap justify-between font-bold text-slate-900 dark:text-white">
                    <span>
                      {item.role} — {item.org}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{item.period}</span>
                  </div>
                  <ul className="mt-1.5 list-disc space-y-1 ps-5 text-xs text-slate-600 dark:text-slate-300">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display mb-1.5 text-base font-bold text-emerald-600 dark:text-emerald-400">
              {experience.eduHeading}
            </h2>
            <p className="font-bold text-slate-900 dark:text-white">
              {experience.education.degree} — {experience.education.university} ({experience.education.year})
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {experience.education.major} • {experience.education.gradProject} ({experience.education.grade})
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-base font-bold text-emerald-600 dark:text-emerald-400">
              {projects.title}
            </h2>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {projects.items.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl border border-slate-200 p-3 dark:border-white/10"
                >
                  <div className="font-bold text-slate-900 dark:text-white">
                    {p.title} — {p.subtitle}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                    {p.technologies.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display mb-2 text-base font-bold text-emerald-600 dark:text-emerald-400">
              {skills.techHeading}
            </h2>
            <div className="space-y-1 text-xs">
              {skills.categories.map((c) => (
                <p key={c.name}>
                  <strong className="text-slate-900 dark:text-white">{c.name}:</strong>{' '}
                  {c.items.join(', ')}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display mb-1.5 text-base font-bold text-emerald-600 dark:text-emerald-400">
              {certifications.certsHeading}
            </h2>
            <ul className="list-disc space-y-1 ps-5 text-xs text-slate-600 dark:text-slate-300">
              {certifications.items.map((cert) => (
                <li key={cert.title}>
                  {cert.title} — {cert.issuer} ({cert.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
