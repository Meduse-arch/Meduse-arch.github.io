import { useEffect, useRef, useState, type MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Github,
  Mail,
  MousePointerClick,
  Phone,
} from 'lucide-react';
import { HeroScene } from './components/HeroScene';
import { ProjectVisual } from './components/ProjectVisual';
import { TopNav } from './components/TopNav';
import {
  EDUCATION,
  MARQUEE_STACK,
  PILLARS,
  PROFILE,
  PROJECTS,
  SOFT_TRAITS,
  type Lang,
  type ThemeMode,
} from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const BLADE_ITEMS = [
  { idx: '01', label: 'React / 19', accent: false },
  { idx: '02', label: 'TypeScript', accent: true },
  { idx: '03', label: 'PixiJS · Konva', accent: false },
  { idx: '04', label: 'Tauri · Rust', accent: false },
  { idx: '05', label: 'PostgreSQL', accent: true },
  { idx: '06', label: 'PearJS · WebRTC', accent: false },
  { idx: '07', label: 'Linux · Git', accent: false },
];

const CLICK_LABELS = ['React', 'TypeScript', 'Signet VTT', 'PixiJS', 'Rust / Tauri', 'Java', 'Linux'];

interface BurstItem {
  id: number;
  x: number;
  y: number;
  label: string;
}

export default function App() {
  const [lang, setLang] = useState<Lang>('fr');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [bursts, setBursts] = useState<BurstItem[]>([]);

  const rootRef = useRef<HTMLDivElement>(null);
  const arcPathRef = useRef<SVGPathElement>(null);
  const burstIdRef = useRef(0);

  const activeProject = PROJECTS[activeProjectIdx];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-anim', {
        yPercent: 105,
        opacity: 0,
        duration: 1.0,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
      });

      gsap.from('.hero-fade-anim', {
        y: 20,
        opacity: 0,
        duration: 0.85,
        stagger: 0.09,
        ease: 'power2.out',
        delay: 0.45,
      });

      // Curved Arc Scroll-Wipe (La boite à slides - Scrolling Home)
      if (arcPathRef.current) {
        const arcState = { curveY: 160, edgeY: 160 };
        gsap.to(arcState, {
          curveY: 0,
          edgeY: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.arc-transition-zone',
            start: 'top 95%',
            end: 'bottom 45%',
            scrub: 0.8,
          },
          onUpdate: () => {
            if (!arcPathRef.current) return;
            const d = `M0,${arcState.edgeY} Q720,${arcState.curveY - 125} 1440,${arcState.edgeY} L1440,180 L0,180 Z`;
            arcPathRef.current.setAttribute('d', d);
          },
        });
      }

      // Scroll-synchronized 3D geometric blades (La boite à slides - Scrolling Home)
      gsap.fromTo(
        '.blade-card',
        {
          rotateY: -50,
          rotateX: 16,
          y: 34,
          opacity: 0.55,
        },
        {
          rotateY: 16,
          rotateX: -6,
          y: -10,
          opacity: 1,
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: {
            trigger: '.blades-stage',
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      gsap.from('.pillar-card', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.11,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pillars-grid',
          start: 'top 84%',
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleHeroClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) return;
    const id = ++burstIdRef.current;
    const label = CLICK_LABELS[id % CLICK_LABELS.length];
    setBursts((prev) => [...prev.slice(-6), { id, x: e.clientX, y: e.clientY, label }]);
    window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 900);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <div ref={rootRef} id="top">
      <div className="noise-layer" aria-hidden="true" />
      <HeroScene theme={theme} />
      <TopNav
        lang={lang}
        theme={theme}
        onToggleLang={setLang}
        onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      />

      {bursts.map((b) => (
        <div key={b.id} className="click-burst" style={{ left: b.x, top: b.y }} aria-hidden="true">
          <div className="click-burst-ring" />
          <span className="click-burst-tag">{b.label}</span>
        </div>
      ))}

      <main>
        {/* 1. HERO (ksenpanchenko.com centered editorial layout + Hero Appear 3D shards) */}
        <section className="hero-section" onClick={handleHeroClick}>
          <div className="hero-inner">
            <div className="hero-badge-row hero-fade-anim">
              <div className="hero-chip">
                <span className="status-dot" aria-hidden="true" />
                <strong>{PROFILE.role[lang]}</strong>
                <span>·</span>
                <span>{PROFILE.schoolShort}</span>
              </div>
            </div>

            <div className="hero-center-block">
              <h1 className="hero-title">
                <span className="line-mask">
                  <span className="line-inner hero-line-anim">
                    {lang === 'fr' ? 'Louis Bochereau —' : 'Louis Bochereau —'}
                  </span>
                </span>
                <span className="line-mask">
                  <span className="line-inner hero-line-anim indent-line">
                    {lang === 'fr' ? 'projets web,' : 'student projects'}
                  </span>
                </span>
                <span className="line-mask">
                  <span className="line-inner hero-line-anim">
                    {lang === 'fr' ? 'code & ' : 'in web & '}
                    <em>{lang === 'fr' ? 'systèmes.' : 'systems.'}</em>
                  </span>
                </span>
              </h1>

              <div className="hero-sub-row hero-fade-anim">
                <p className="hero-lead">
                  {lang === 'fr'
                    ? 'Étudiant de 21 ans en 2ᵉ année de BUT Informatique à l’IUT Rangueil (Toulouse). Ce portfolio regroupe mes projets personnels et académiques : applications web et desktop, tables virtuelles P2P pour le jeu de rôle et travaux d’infrastructure Linux.'
                    : '21-year-old 2nd-year Computer Science student (BUT Informatique) at IUT Rangueil, Toulouse. This portfolio gathers my personal and academic projects: web & desktop apps, P2P virtual tabletops, and Linux infrastructure sprints.'}
                </p>

                <div className="hero-actions">
                  <a href="#projets" className="btn-primary">
                    <span>{lang === 'fr' ? 'Voir les projets' : 'Explore projects'}</span>
                    <ArrowDown size={15} />
                  </a>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Github size={15} />
                    <span>{PROFILE.handle}</span>
                  </a>
                  <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <FileText size={15} />
                    <span>CV</span>
                  </a>
                </div>
              </div>

              <div className="click-hint hero-fade-anim" aria-hidden="true">
                <MousePointerClick size={13} />
                <span>{lang === 'fr' ? 'Cliquer n’importe où' : 'Click anywhere'}</span>
              </div>
            </div>

            {/* 4-column Metadata Strip (ksenpanchenko.com) */}
            <div className="meta-strip hero-fade-anim">
              <div>
                <div className="meta-label">{lang === 'fr' ? 'Formation' : 'Education'}</div>
                <div className="meta-val">
                  BUT Informatique (2ᵉ année)
                  <br />
                  IUT Rangueil, Univ. Toulouse
                </div>
              </div>
              <div>
                <div className="meta-label">{lang === 'fr' ? 'Projets' : 'Projects'}</div>
                <div className="meta-val">
                  Signet VTT (v1 &amp; v2) · Sigil
                  <br />
                  Bots Discord &amp; Projets IUT
                </div>
              </div>
              <div>
                <div className="meta-label">{lang === 'fr' ? 'Langages & Outils' : 'Languages & Tools'}</div>
                <div className="meta-val">
                  TypeScript, React, Java, Python
                  <br />
                  Rust, PostgreSQL, Linux, Git
                </div>
              </div>
              <div>
                <div className="meta-label">{lang === 'fr' ? 'Basé à' : 'Based in'}</div>
                <div className="meta-val">
                  {PROFILE.city}
                  <br />
                  {PROFILE.coords}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Band */}
        <div className="marquee-band" aria-label="Technologies pratiquées">
          <div className="marquee-track">
            {[...MARQUEE_STACK, ...MARQUEE_STACK].map((tech, i) => (
              <span className="marquee-item" key={`${tech}-${i}`}>
                <span>{tech}</span>
                <span className="marquee-sep" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* 2. CURVED ARC WIPE INTO SELECTED WORK (La boite à slides + ksenpanchenko.com) */}
        <div className="arc-transition-zone" aria-hidden="true">
          <div className="arc-svg-wrap">
            <svg
              viewBox="0 0 1440 180"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%', display: 'block' }}
            >
              <path
                ref={arcPathRef}
                d="M0,160 Q720,35 1440,160 L1440,180 L0,180 Z"
                fill="#141414"
              />
            </svg>
          </div>
        </div>

        <section id="projets" className="sw-section">
          <div className="section-container">
            <div className="section-kicker inverse">
              <span className="kicker-dot" />
              <span>
                {lang === 'fr'
                  ? '01 · Projets sélectionnés (CV & GitHub)'
                  : '01 · Selected Projects (Resume & GitHub)'}
              </span>
            </div>

            <div className="sw-grid">
              {/* Left Index + Individual Git Project Buttons + Big Tabular Counter */}
              <div className="sw-left">
                <div>
                  <ul className="sw-index" role="tablist" aria-label="Liste des projets">
                    {PROJECTS.map((proj, idx) => {
                      const isActive = idx === activeProjectIdx;
                      return (
                        <li key={proj.id} className="sw-index-row">
                          <button
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            className={`sw-index-btn ${isActive ? 'is-active' : ''}`}
                            onClick={() => setActiveProjectIdx(idx)}
                          >
                            <span className="sw-index-left">
                              <span className="sw-num">{proj.index}</span>
                              <span className="sw-title-sm">{proj.title}</span>
                            </span>
                            {isActive && <span className="sw-dot" aria-hidden="true" />}
                          </button>
                          {proj.repoUrl && (
                            <a
                              href={proj.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="sw-repo-btn"
                              aria-label={`Ouvrir le dépôt GitHub ${proj.title}`}
                              title={`github.com/Meduse-arch/${proj.repoName ?? proj.id}`}
                            >
                              <Github size={14} />
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <div style={{ marginTop: 24 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11.5,
                        color: 'var(--accent)',
                        marginBottom: 8,
                      }}
                    >
                      {activeProject.category[lang]}
                    </div>
                    <p className="sw-left-desc">{activeProject.summary[lang]}</p>
                  </div>
                </div>

                <div className="sw-counter-box" aria-hidden="true">
                  <span className="sw-big-num">{activeProject.index}</span>
                  <span className="sw-of">/ {String(PROJECTS.length).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Right Stage Window (ksenpanchenko.com .sw__stage + .sw__win) */}
              <article className="sw-stage" role="tabpanel">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <div>
                    <h2 style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 500 }}>
                      {activeProject.title}
                    </h2>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11.5,
                        color: 'var(--text-inverse-muted)',
                      }}
                    >
                      {activeProject.context[lang]} · {activeProject.period}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 10 }}>
                    {activeProject.repoUrl && (
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-inverse-ghost"
                        style={{ padding: '8px 14px', fontSize: 12.5 }}
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-inverse-primary"
                        style={{ padding: '8px 14px', fontSize: 12.5 }}
                      >
                        <ExternalLink size={14} />
                        <span>Demo Live</span>
                      </a>
                    )}
                  </div>
                </div>

                <div key={activeProject.id} className="sw-win">
                  <div className="sw-win-bar">
                    <div className="sw-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span className="sw-win-url">
                      {activeProject.liveUrl
                        ? activeProject.liveUrl.replace('https://', '')
                        : `github.com/Meduse-arch/${activeProject.id}`}
                    </span>
                  </div>
                  <ProjectVisual visualType={activeProject.visualType} title={activeProject.title} />
                </div>

                <ul className="sw-highlights">
                  {activeProject.highlights[lang].map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="stack-pills">
                  {activeProject.stack.map((s) => (
                    <span key={s} className="stack-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 3. PULL QUOTE + 3D BLADES + CAPABILITIES (Warm Paper / Page BG) */}
        <section id="approche" className="capabilities-section">
          <div className="section-container">
            <div className="section-kicker">
              <span className="kicker-dot" />
              <span>{lang === 'fr' ? '02 · Compétences & Pratique' : '02 · Skills & Practice'}</span>
            </div>

            <h2 className="pull-quote">
              {lang === 'fr' ? (
                <>
                  Des projets personnels et universitaires pour explorer l’interface,{' '}
                  <em>le réseau</em> et la rigueur logicielle.
                </>
              ) : (
                <>
                  Personal and university projects to explore interfaces, <em>networking</em>, and
                  solid software engineering.
                </>
              )}
            </h2>

            {/* Scroll-Linked 3D Rotating Geometric Blades (La boite à slides) */}
            <div className="blades-stage" aria-label="Technologies clés en rotation au scroll">
              {BLADE_ITEMS.map((item) => (
                <div key={item.idx} className={`blade-card ${item.accent ? 'accent' : ''}`}>
                  <span className="blade-idx">{item.idx}</span>
                  <span className="blade-label">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pillars-grid">
              {PILLARS.map((pillar) => (
                <article key={pillar.index} className="pillar-card">
                  <pre className="pillar-ascii" aria-hidden="true">
                    {pillar.asciiPattern}
                  </pre>
                  <h3 className="pillar-title">{pillar.title[lang]}</h3>
                  <p className="pillar-sub">{pillar.subtitle[lang]}</p>
                  <ul className="pillar-list">
                    {pillar.skills.map((sk, idx) => (
                      <li key={sk}>
                        <span className="num">0{idx + 1}</span>
                        <span>{sk}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PARCOURS & PROFIL */}
        <section id="parcours" className="about-section">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <div className="section-kicker">
                  <span className="kicker-dot" />
                  <span>{lang === 'fr' ? '03 · Parcours & Formations' : '03 · Education'}</span>
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 3.4vw, 48px)',
                    fontWeight: 400,
                    letterSpacing: '-0.03em',
                    marginBottom: 28,
                  }}
                >
                  {lang === 'fr' ? 'Parcours étudiant.' : 'Academic background.'}
                </h2>

                {EDUCATION.map((edu) => (
                  <div key={edu.school} className="edu-item">
                    <div className="edu-top">
                      <h3 className="edu-degree">{edu.degree[lang]}</h3>
                      <span className="edu-period">
                        {lang === 'fr' ? edu.period : edu.periodEn}
                      </span>
                    </div>
                    <div className="edu-school">
                      {edu.school} · {edu.location}
                    </div>
                    <p className="edu-desc">{edu.details[lang]}</p>
                  </div>
                ))}
              </div>

              <aside className="trait-box">
                <div>
                  <div className="trait-group-title">
                    {lang === 'fr' ? 'Technologies du CV' : 'Resume Tech Stack'}
                  </div>
                  <div className="chip-row">
                    {[
                      'TypeScript',
                      'JavaScript',
                      'React',
                      'Tailwind CSS',
                      'PixiJS',
                      'PearJS',
                      'Java',
                      'Python',
                      'Rust',
                      'PHP',
                      'C',
                      'PostgreSQL',
                      'SQLite',
                      'Bash',
                      'Linux',
                      'Git',
                    ].map((tech) => (
                      <span key={tech} className="light-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="trait-group-title">
                    {lang === 'fr' ? 'Savoir-être' : 'Soft Skills'}
                  </div>
                  <div className="chip-row">
                    {SOFT_TRAITS.softSkills[lang].map((trait) => (
                      <span key={trait} className="light-chip">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div className="trait-group-title">
                      {lang === 'fr' ? 'Langues' : 'Languages'}
                    </div>
                    <ul style={{ listStyle: 'none', fontSize: 13.5, display: 'grid', gap: 6 }}>
                      {SOFT_TRAITS.languages.map((l) => (
                        <li key={l.name.fr}>
                          <strong>{l.name[lang]}</strong> · {l.level[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="trait-group-title">
                      {lang === 'fr' ? 'Centres d’intérêt' : 'Interests'}
                    </div>
                    <ul style={{ listStyle: 'none', fontSize: 13.5, display: 'grid', gap: 6 }}>
                      {SOFT_TRAITS.interests[lang].map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER CTA */}
      <footer id="contact" className="footer-cta">
        <div className="section-container">
          <div className="section-kicker inverse">
            <span className="kicker-dot" />
            <span>{lang === 'fr' ? '04 · Contact' : '04 · Contact'}</span>
          </div>

          <h2 className="footer-headline">
            {lang === 'fr' ? (
              <>
                Échanger autour d’un <em>projet</em> ou de code.
              </>
            ) : (
              <>
                Let’s talk about <em>projects</em> &amp; code.
              </>
            )}
          </h2>

          <div className="footer-actions">
            <button type="button" onClick={handleCopyEmail} className="btn-inverse-primary">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? (lang === 'fr' ? 'Email copié' : 'Email copied') : PROFILE.email}</span>
            </button>
            <a href={`mailto:${PROFILE.email}`} className="btn-inverse-ghost">
              <Mail size={16} />
              <span>{lang === 'fr' ? 'Envoyer un mail' : 'Send email'}</span>
            </a>
            <a href={PROFILE.phoneHref} className="btn-inverse-ghost">
              <Phone size={16} />
              <span>{PROFILE.phone}</span>
            </a>
            <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-inverse-ghost">
              <FileText size={16} />
              <span>{lang === 'fr' ? 'CV imprimable (A4)' : 'Printable Resume'}</span>
            </a>
          </div>

          <div className="footer-meta-grid">
            <div>
              <div className="footer-col-label">{lang === 'fr' ? 'Profil' : 'Profile'}</div>
              <div>{PROFILE.city}</div>
              <div style={{ color: 'var(--text-inverse-muted)', fontSize: 13 }}>
                {PROFILE.age} {lang === 'fr' ? 'ans' : 'y/o'} · {PROFILE.nationality[lang]}
              </div>
            </div>

            <div>
              <div className="footer-col-label">GitHub</div>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <span>github.com/{PROFILE.handle}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div>
              <div className="footer-col-label">{lang === 'fr' ? 'Projet en ligne' : 'Live Project'}</div>
              <a
                href={PROFILE.signetLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <span>signet-vtt.vercel.app</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div>
              <div className="footer-col-label">{lang === 'fr' ? 'Formation' : 'Education'}</div>
              <div>IUT Rangueil — BUT Info (2ᵉ année)</div>
              <div style={{ color: 'var(--text-inverse-muted)', fontSize: 13 }}>Université de Toulouse</div>
            </div>
          </div>

          <div className="footer-wordmark" aria-hidden="true">
            BOCHEREAU
          </div>
        </div>
      </footer>

      {copied && (
        <div className="copy-toast" role="status">
          {lang === 'fr' ? 'Adresse email copiée dans le presse-papiers' : 'Email copied to clipboard'}
        </div>
      )}
    </div>
  );
}
