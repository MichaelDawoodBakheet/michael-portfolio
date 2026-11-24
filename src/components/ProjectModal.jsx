import { useEffect } from 'react';
import { CheckCircle2, FolderGit2, Info, PlayCircle, X } from 'lucide-react';

export default function ProjectModal({ project, content, onClose }) {
  const { projects } = content;

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 dark:border-emerald-500/30 dark:bg-[#11151b]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={projects.closeModal}
          className="absolute end-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        <span className="inline-block rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          {project.platformBadge}
        </span>

        <h3
          id="project-modal-title"
          className="font-display mt-3 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white"
        >
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          {project.subtitle}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-[#090b0e] dark:text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          {project.description}
        </p>

        {/* Status note */}
        {project.statusNote && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs font-medium text-emerald-800 sm:text-sm dark:text-emerald-200">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{project.statusNote}</span>
          </div>
        )}

        {/* Key Features */}
        <div className="mt-6">
          <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
            {projects.featuresHeading}
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Role */}
        {project.role && project.role.length > 0 && (
          <div className="mt-6">
            <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
              {projects.roleHeading}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {project.role.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* External Links */}
        <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:border-emerald-500 hover:text-emerald-600 sm:text-sm dark:border-white/15 dark:bg-[#090b0e] dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              <FolderGit2 className="h-4 w-4 text-emerald-500" />
              <span>{projects.githubLabel}</span>
            </a>
          )}
          {project.links.recording && (
            <a
              href={project.links.recording}
              target="_blank"
              rel="noreferrer"
              className="tech-glow inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-400 sm:text-sm"
            >
              <PlayCircle className="h-4 w-4" />
              <span>{projects.recordingLabel}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
