import { useState } from 'react';
import {
  Check,
  Copy,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function ContactFooter({ content }) {
  const { contact, meta, footer } = content;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const socialProfiles = [
    { name: 'GitHub', href: CONTACT_LINKS.github, icon: Github },
    { name: 'LinkedIn', href: CONTACT_LINKS.linkedin, icon: Linkedin },
    { name: 'WhatsApp', href: CONTACT_LINKS.whatsapp, icon: MessageCircle },
    { name: 'Telegram', href: CONTACT_LINKS.telegram, icon: Send },
    { name: 'Facebook', href: CONTACT_LINKS.facebook, icon: Facebook },
    { name: 'Instagram', href: CONTACT_LINKS.instagram, icon: Instagram },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-emerald-900/10 bg-section-aurora-alt pt-16 dark:border-white/10"
    >
      <div
        aria-hidden="true"
        className="animate-aurora pointer-events-none absolute top-10 start-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-alt pointer-events-none absolute bottom-10 end-1/4 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="animate-racing-border rounded-3xl p-[2px] shadow-[0_0_50px_rgba(16,185,129,0.18)]">
          <div className="overflow-hidden rounded-[22px] bg-white p-6 sm:p-10 dark:bg-gradient-to-br dark:from-[#10161e] dark:to-[#0b0f13]">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  {contact.title}
                </h2>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-emerald-700 sm:text-base dark:text-emerald-300">
                  {contact.availability}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {contact.closing}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={CONTACT_LINKS.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="tech-glow inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{contact.whatsappCta}</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_LINKS.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:bg-[#11151b] dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
                  >
                    <Mail className="h-4 w-4 text-emerald-500" />
                    <span>{contact.emailCta}</span>
                  </a>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {contact.directHeading}
                  </h3>

                  <div className="mt-3 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-[#090b0e]/80">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4.5 w-4.5 text-emerald-500" />
                        <div>
                          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            {contact.emailLabel}
                          </div>
                          <a
                            href={`mailto:${CONTACT_LINKS.email}`}
                            className="text-sm font-semibold text-slate-900 hover:text-emerald-600 dark:text-slate-100 dark:hover:text-emerald-300"
                          >
                            {CONTACT_LINKS.email}
                          </a>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:bg-[#11151b] dark:text-slate-200 dark:hover:text-emerald-300"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                            <span>{contact.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-emerald-500" />
                            <span>{contact.copyEmail}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <a
                        href={CONTACT_LINKS.phoneHref}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-emerald-400 dark:border-white/10 dark:bg-[#090b0e]/80 dark:hover:border-emerald-400/50"
                      >
                        <Phone className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
                        <div>
                          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            {contact.phoneLabel}
                          </div>
                          <div dir="ltr" className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {CONTACT_LINKS.phone}
                          </div>
                        </div>
                      </a>

                      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-[#090b0e]/80">
                        <MapPin className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
                        <div>
                          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            {contact.locationLabel}
                          </div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {meta.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {contact.socialsHeading}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {socialProfiles.map((profile) => {
                      const Icon = profile.icon;
                      return (
                        <a
                          key={profile.name}
                          href={profile.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:bg-[#090b0e]/80 dark:text-slate-200 dark:hover:border-emerald-400/60 dark:hover:text-emerald-300"
                        >
                          <Icon className="h-4 w-4 text-emerald-500" />
                          <span>{profile.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
        {footer.copyright}
      </div>
    </footer>
  );
}