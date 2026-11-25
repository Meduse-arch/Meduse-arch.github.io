import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { PROFILE, type Lang, type ThemeMode } from '../data/portfolioData';

interface TopNavProps {
  lang: Lang;
  theme: ThemeMode;
  onToggleLang: (lang: Lang) => void;
  onToggleTheme: () => void;
}

export function TopNav({ lang, theme, onToggleLang, onToggleTheme }: TopNavProps) {
  const [timeStr, setTimeStr] = useState('--:--');

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('fr-FR', {
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
        }).format(now);
        setTimeStr(formatted);
      } catch {
        setTimeStr('--:--');
      }
    };
    updateClock();
    const id = window.setInterval(updateClock, 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="top-nav">
      <a href="#top" className="nav-pill" aria-label="Accueil Louis Bochereau">
        <span className="status-dot" aria-hidden="true" />
        <span style={{ fontWeight: 600 }}>{PROFILE.name}</span>
        <span
          style={{
            color: 'var(--text-tertiary)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11.5,
          }}
        >
          BUT2 · Toulouse · {timeStr}
        </span>
      </a>

      <nav className="nav-center" aria-label="Navigation principale">
        <a href="#projets" className="nav-link">
          {lang === 'fr' ? 'Projets' : 'Work'}
        </a>
        <a href="#approche" className="nav-link">
          {lang === 'fr' ? 'Compétences' : 'Skills'}
        </a>
        <a href="#parcours" className="nav-link">
          {lang === 'fr' ? 'Parcours' : 'Education'}
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className="nav-link cta-pill">
          CV ↗
        </a>
      </nav>

      <div className="nav-controls">
        <button
          type="button"
          className="icon-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
          title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        <div className="lang-switch" role="group" aria-label="Choix de langue">
          <button
            type="button"
            className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
            onClick={() => onToggleLang('fr')}
          >
            FR
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => onToggleLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
