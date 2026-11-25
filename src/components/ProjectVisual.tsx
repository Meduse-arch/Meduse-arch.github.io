import type { ProjectItem } from '../data/portfolioData';

interface Props {
  visualType: ProjectItem['visualType'];
  title?: string;
}

export function ProjectVisual({ visualType, title }: Props) {
  if (visualType === 'signet-v2') {
    return (
      <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
        <defs>
          <pattern id="hexGrid" width="28" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M14 0 L28 7 L28 17 L14 24 L0 17 L0 7 Z"
              fill="none"
              stroke="#242428"
              strokeWidth="0.9"
            />
          </pattern>
        </defs>
        <rect width="640" height="240" fill="#101012" />
        <rect width="640" height="240" fill="url(#hexGrid)" opacity="0.7" />

        <g fontFamily="JetBrains Mono, monospace" fontSize="11">
          <rect x="28" y="34" width="166" height="72" rx="8" fill="#17171a" stroke="#ff5c2e" strokeWidth="1.2" />
          <text x="42" y="58" fill="#ff5c2e">FRONTEND · REACT 19</text>
          <text x="42" y="78" fill="#f4f1ec">Konva Canvas · Tailwind v4</text>
          <text x="42" y="94" fill="#8b8a87">Core Agnostique VTT</text>

          <rect x="236" y="34" width="168" height="72" rx="8" fill="#17171a" stroke="#2f2f34" />
          <text x="250" y="58" fill="#f4f1ec">TAURI v2 · RUST</text>
          <text x="250" y="78" fill="#d0cec9">Axum · Tokio · Serde</text>
          <text x="250" y="94" fill="#8b8a87">IPC Natif &amp; Backend</text>

          <rect x="446" y="34" width="166" height="72" rx="8" fill="#17171a" stroke="#2f2f34" />
          <text x="460" y="58" fill="#f4f1ec">P2P MESH · WEBRTC</text>
          <text x="460" y="78" fill="#d0cec9">simple-peer · Signaling</text>
          <text x="460" y="94" fill="#8b8a87">Sync Temps Réel</text>

          <path d="M194 70 L236 70" stroke="#ff5c2e" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M404 70 L446 70" stroke="#ff5c2e" strokeWidth="1.5" strokeDasharray="4 3" />

          <rect x="28" y="138" width="584" height="68" rx="8" fill="rgba(23,23,26,0.9)" stroke="#2a2a2e" />
          <text x="44" y="162" fill="#9d9b95">ARCHITECTURE « CORE VS MODULES »</text>
          <rect x="44" y="174" width="122" height="22" rx="4" fill="#212126" stroke="#ff5c2e" strokeOpacity="0.45" />
          <text x="54" y="189" fill="#f4f1ec" fontSize="10">Tokens &amp; Grille</text>
          <rect x="178" y="174" width="122" height="22" rx="4" fill="#212126" stroke="#2f2f34" />
          <text x="188" y="189" fill="#d0cec9" fontSize="10">Dés &amp; Macros</text>
          <rect x="312" y="174" width="136" height="22" rx="4" fill="#212126" stroke="#2f2f34" />
          <text x="322" y="189" fill="#d0cec9" fontSize="10">Modules JDR</text>
          <rect x="460" y="174" width="136" height="22" rx="4" fill="#212126" stroke="#2f2f34" />
          <text x="470" y="189" fill="#d0cec9" fontSize="10">Zod Validation</text>
        </g>
      </svg>
    );
  }

  if (visualType === 'signet-v1') {
    return (
      <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
        <rect width="640" height="240" fill="#101012" />
        <g stroke="#222226" strokeWidth="1">
          <line x1="0" y1="48" x2="640" y2="48" />
          <line x1="0" y1="96" x2="640" y2="96" />
          <line x1="0" y1="144" x2="640" y2="144" />
          <line x1="0" y1="192" x2="640" y2="192" />
          <line x1="128" y1="0" x2="128" y2="240" />
          <line x1="256" y1="0" x2="256" y2="240" />
          <line x1="384" y1="0" x2="384" y2="240" />
          <line x1="512" y1="0" x2="512" y2="240" />
        </g>
        <circle cx="256" cy="120" r="64" fill="rgba(255, 92, 46, 0.08)" stroke="#ff5c2e" strokeDasharray="4 4" />
        <circle cx="256" cy="120" r="18" fill="#1b1b1f" stroke="#ff5c2e" strokeWidth="2" />
        <text x="256" y="124" textAnchor="middle" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10">MJ</text>
        <circle cx="384" cy="96" r="14" fill="#1b1b1f" stroke="#f4f1ec" strokeWidth="1.5" />
        <text x="384" y="100" textAnchor="middle" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="9">P1</text>
        <circle cx="352" cy="162" r="14" fill="#1b1b1f" stroke="#f4f1ec" strokeWidth="1.5" />
        <text x="352" y="166" textAnchor="middle" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="9">P2</text>
        <path d="M274 116 L370 99" stroke="#ff5c2e" strokeWidth="1.2" opacity="0.7" />
        <path d="M270 130 L338 158" stroke="#ff5c2e" strokeWidth="1.2" opacity="0.7" />

        <rect x="24" y="20" width="218" height="32" rx="6" fill="#17171a" stroke="#2f2f34" />
        <circle cx="40" cy="36" r="4" fill="#4dd973" />
        <text x="52" y="40" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10.5">
          PixiJS · PearJS P2P · Live
        </text>
      </svg>
    );
  }

  if (visualType === 'sigil') {
    return (
      <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
        <rect width="640" height="240" fill="#101012" />
        <rect x="34" y="22" width="572" height="196" rx="10" fill="#17171a" stroke="#2f2f34" />
        <circle cx="54" cy="38" r="4" fill="#ff5c2e" />
        <circle cx="68" cy="38" r="4" fill="#eab308" />
        <circle cx="82" cy="38" r="4" fill="#4dd973" />
        <text x="320" y="42" textAnchor="middle" fill="#8b8a87" fontFamily="JetBrains Mono, monospace" fontSize="10">
          SIGIL // ELECTRON + REACT + ZUSTAND
        </text>
        <line x1="34" y1="54" x2="606" y2="54" stroke="#2a2a2e" />
        <rect x="50" y="70" width="136" height="132" rx="6" fill="#111113" stroke="#26262a" />
        <rect x="62" y="84" width="112" height="14" rx="3" fill="#ff5c2e" fillOpacity="0.28" />
        <rect x="62" y="108" width="94" height="10" rx="3" fill="#26262a" />
        <rect x="62" y="128" width="104" height="10" rx="3" fill="#26262a" />
        <rect x="62" y="148" width="84" height="10" rx="3" fill="#26262a" />

        <rect x="202" y="70" width="186" height="132" rx="6" fill="#111113" stroke="#26262a" />
        <text x="216" y="92" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10.5">STATE · ZUSTAND</text>
        <text x="216" y="114" fill="#9d9b95" fontFamily="JetBrains Mono, monospace" fontSize="10">Framer Motion UI</text>
        <text x="216" y="134" fill="#9d9b95" fontFamily="JetBrains Mono, monospace" fontSize="10">CryptoJS + bcryptjs</text>

        <rect x="404" y="70" width="186" height="132" rx="6" fill="#111113" stroke="#26262a" />
        <text x="418" y="92" fill="#ff5c2e" fontFamily="JetBrains Mono, monospace" fontSize="10.5">SYNC · SUPABASE</text>
        <rect x="418" y="110" width="156" height="34" rx="4" fill="#1b1b1f" stroke="#2f2f34" />
        <text x="428" y="131" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="10">Campagnes &amp; Fiches</text>
      </svg>
    );
  }

  if (visualType === 'jdr-assistance') {
    return (
      <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
        <rect width="640" height="240" fill="#101012" />
        <g fontFamily="JetBrains Mono, monospace" fontSize="11">
          <rect x="36" y="42" width="170" height="156" rx="8" fill="#17171a" stroke="#ff5c2e" strokeOpacity="0.65" />
          <text x="52" y="72" fill="#ff5c2e">/bot</text>
          <text x="52" y="96" fill="#f4f1ec">Discord Bot JS</text>
          <text x="52" y="118" fill="#8b8a87">Commandes MJ</text>
          <text x="52" y="138" fill="#8b8a87">Gestion sessions</text>

          <rect x="235" y="42" width="170" height="156" rx="8" fill="#17171a" stroke="#2f2f34" />
          <text x="251" y="72" fill="#f4f1ec">/client</text>
          <text x="251" y="96" fill="#d0cec9">Discord Activity</text>
          <text x="251" y="118" fill="#8b8a87">Interface vocale</text>
          <text x="251" y="138" fill="#8b8a87">Interactive UI</text>

          <rect x="434" y="42" width="170" height="156" rx="8" fill="#17171a" stroke="#2f2f34" />
          <text x="450" y="72" fill="#f4f1ec">/server</text>
          <text x="450" y="96" fill="#d0cec9">Backend Node</text>
          <text x="450" y="118" fill="#8b8a87">Auth &amp; OAuth2</text>
          <text x="450" y="138" fill="#8b8a87">Sync temps réel</text>

          <path d="M206 120 L235 120" stroke="#ff5c2e" strokeDasharray="4 3" />
          <path d="M405 120 L434 120" stroke="#ff5c2e" strokeDasharray="4 3" />
        </g>
      </svg>
    );
  }

  if (visualType === 'discord-portfolio') {
    return (
      <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
        <rect width="640" height="240" fill="#101012" />
        {/* Discord-inspired layout */}
        <rect x="28" y="24" width="52" height="192" rx="8" fill="#17171a" stroke="#2a2a2e" />
        <circle cx="54" cy="52" r="14" fill="#ff5c2e" fillOpacity="0.85" />
        <circle cx="54" cy="90" r="12" fill="#26262b" />
        <circle cx="54" cy="124" r="12" fill="#26262b" />

        <rect x="92" y="24" width="144" height="192" rx="8" fill="#151518" stroke="#2a2a2e" />
        <text x="108" y="52" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="11"># accueil</text>
        <text x="108" y="78" fill="#8b8a87" fontFamily="JetBrains Mono, monospace" fontSize="11"># à-propos</text>
        <text x="108" y="104" fill="#8b8a87" fontFamily="JetBrains Mono, monospace" fontSize="11"># projets</text>
        <text x="108" y="130" fill="#8b8a87" fontFamily="JetBrains Mono, monospace" fontSize="11"># contact</text>

        <rect x="248" y="24" width="364" height="192" rx="8" fill="#17171a" stroke="#2a2a2e" />
        <text x="272" y="64" fill="#ff5c2e" fontFamily="JetBrains Mono, monospace" fontSize="12">MEDUSE-ARCH.GITHUB.IO</text>
        <text x="272" y="94" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="11">Portfolio v1 · Interface style Discord</text>
        <text x="272" y="118" fill="#9d9b95" fontFamily="JetBrains Mono, monospace" fontSize="10.5">HTML5 · CSS3 · Vanilla JavaScript</text>
      </svg>
    );
  }

  if (visualType === 'dune') {
    return (
      <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
        <rect width="640" height="240" fill="#101012" />
        {/* Board grid + encirclement demo */}
        <g transform="translate(210, 25)" stroke="#2f2f34" fill="#17171a">
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <rect key={`${r}-${c}`} x={c * 44} y={r * 38} width="42" height="36" rx="4" />
            ))
          )}
        </g>
        <circle cx="275" cy="119" r="11" fill="#f4f1ec" />
        <circle cx="319" cy="119" r="11" fill="#ff5c2e" />
        <circle cx="363" cy="119" r="11" fill="#f4f1ec" />
        <text x="320" y="226" textAnchor="middle" fill="#9d9b95" fontFamily="JetBrains Mono, monospace" fontSize="10.5">
          DUNE (PYTHON) · CAPTURE PAR ENCERCLEMENT
        </text>
      </svg>
    );
  }

  if (visualType === 'python-bot') {
    return (
      <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
        <rect width="640" height="240" fill="#101012" />
        <rect x="44" y="28" width="552" height="184" rx="10" fill="#151518" stroke="#2a2a2e" />
        <text x="68" y="58" fill="#ff5c2e" fontFamily="JetBrains Mono, monospace" fontSize="11.5">
          $ python3 main.py // {title || 'Discord Bot'}
        </text>
        <line x1="68" y1="74" x2="572" y2="74" stroke="#242428" />
        <text x="68" y="102" fill="#f4f1ec" fontFamily="JetBrains Mono, monospace" fontSize="11">
          &gt; Slash commands enregistrées avec succès
        </text>
        <text x="68" y="128" fill="#9d9b95" fontFamily="JetBrains Mono, monospace" fontSize="11">
          &gt; Écoute des événements Discord Gateway...
        </text>
        <text x="68" y="154" fill="#4dd973" fontFamily="JetBrains Mono, monospace" fontSize="11">
          &gt; Statut : prêt (projet éducatif open source)
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 240" style={{ width: '100%', display: 'block', maxHeight: 230 }}>
      <rect width="640" height="240" fill="#101012" />
      <g fontFamily="JetBrains Mono, monospace" fontSize="11">
        <rect x="30" y="36" width="275" height="168" rx="8" fill="#17171a" stroke="#2f2f34" />
        <text x="48" y="64" fill="#f4f1ec">01 · JAVA APPLICATION</text>
        <text x="48" y="88" fill="#9d9b95">Équipe de 4 · IUT Rangueil</text>
        <line x1="48" y1="104" x2="287" y2="104" stroke="#2a2a2e" />
        <text x="48" y="128" fill="#d0cec9">• Logique métier complète</text>
        <text x="48" y="150" fill="#d0cec9">• UI &amp; tests automatisés</text>
        <text x="48" y="172" fill="#d0cec9">• Optimisation &amp; debug</text>

        <rect x="335" y="36" width="275" height="168" rx="8" fill="#17171a" stroke="#ff5c2e" strokeOpacity="0.6" />
        <text x="353" y="64" fill="#ff5c2e">02 · CLOUD &amp; LINUX</text>
        <text x="353" y="88" fill="#9d9b95">Déploiement &amp; Sécurité</text>
        <line x1="353" y1="104" x2="592" y2="104" stroke="#2a2a2e" />
        <text x="353" y="128" fill="#d0cec9">• Admin serveurs Linux</text>
        <text x="353" y="150" fill="#d0cec9">• Contrôle d’accès &amp; réseau</text>
        <text x="353" y="172" fill="#d0cec9">• Monitoring performances</text>
      </g>
    </svg>
  );
}
