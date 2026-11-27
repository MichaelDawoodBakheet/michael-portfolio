import { useState } from 'react';
import { Code2, ExternalLink, FolderGit2, Monitor, PlayCircle, Smartphone } from 'lucide-react';

function CategoryIcon({ category }) {
  if (category === 'desktop') return <Monitor className="h-4 w-4 text-emerald-500 shrink-0" />;
  if (category === 'web') return <Code2 className="h-4 w-4 text-emerald-500 shrink-0" />;
  return <Smartphone className="h-4 w-4 text-emerald-500 shrink-0" />;
}

export default function Projects({ content, onSelectProject }) {
  const { projects } = content;
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? projects.items
      : projects.items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-emerald-900/10 bg-section-aurora-alt py-12 sm:py-16 lg:py-20 dark:border-white/10"
    >
      <div
        aria-hidden="true"
        className="animate-aurora-alt pointer-events-none absolute top-12 start-1/4 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute bottom-12 end-1/4 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-sky-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {projects.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400">
              {projects.subtitle}
            </p>
          </div>

          {/* Filters - تحسين العرض على الموبايل ليصبح قابل للتمرير بسلاسة */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0" role="tablist" aria-label="Project Categories">
            {projects.filters.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold transition-all whitespace-nowrap ${
                    active
                      ? 'tech-glow bg-emerald-500 text-slate-950 font-bold'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:bg-[#11151b]/80 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((project) => (
            <article
              key={project.id}
              className="glass-card group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="mb-3 sm:mb-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <CategoryIcon category={project.category} />
                    <span className="truncate">{project.platformBadge}</span>
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {project.subtitle}
                </p>

                <p className="mt-2.5 sm:mt-3 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-[#090b0e]/80 dark:text-emerald-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 pt-3.5 sm:pt-4 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  <span>{projects.viewDetails}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      title={projects.githubLabel}
                      aria-label={`${project.title} ${projects.githubLabel}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
                    >
                      <FolderGit2 className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.recording && (
                    <a
                      href={project.links.recording}
                      target="_blank"
                      rel="noreferrer"
                      title={projects.recordingLabel}
                      aria-label={`${project.title} ${projects.recordingLabel}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
                    >
                      <PlayCircle className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.googlePlay && (
                    <a
                      href={project.links.googlePlay}
                      target="_blank"
                      rel="noreferrer"
                      title={projects.googlePlayLabel}
                      aria-label={`${project.title} ${projects.googlePlayLabel}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 transition-colors hover:border-emerald-400 hover:bg-emerald-500/20 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.75 1.75 0 0 1-.61-1.335V3.149c0-.517.224-.997.609-1.335zm11.244 11.247l2.63 2.63-9.95 5.657 7.32-8.287zm3.575-2.032l2.927 1.664c.86.489.86 1.725 0 2.214l-2.927 1.664-2.852-2.852 2.852-2.69zm-3.575-1.153L7.533 1.59l9.95 5.657-2.63 2.63z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}