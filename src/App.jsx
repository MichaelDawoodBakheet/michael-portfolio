import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import CertificationsLanguages from './components/CertificationsLanguages';
import ContactFooter from './components/ContactFooter';
import CvModal from './components/CvModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  const content = portfolioData[lang];
  const isRtl = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#0b0e12] text-slate-100">
      <Navbar
        content={content}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
        onOpenCv={() => setCvOpen(true)}
      />

      <main>
        <Hero content={content} isRtl={isRtl} />
        <About content={content} />
        <ExperienceEducation content={content} />
        <Projects content={content} onSelectProject={setSelectedProject} />
        <Skills content={content} />
        <CertificationsLanguages content={content} />
      </main>

      <ContactFooter content={content} />

      <ProjectModal
        project={selectedProject}
        content={content}
        onClose={() => setSelectedProject(null)}
      />

      <CvModal
        open={cvOpen}
        content={content}
        onClose={() => setCvOpen(false)}
      />
    </div>
  );
}
