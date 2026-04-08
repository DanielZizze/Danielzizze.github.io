/* ═══════════════════════════════════
   script.js — shared across pages
═══════════════════════════════════ */

// ── Typing effect for logo name
const nameEl = document.getElementById('typed-name');
if (nameEl) {
  const text = 'DANIEL.ZIZZE';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      nameEl.textContent += text[i++];
      setTimeout(type, 60 + Math.random() * 40);
    }
  };
  setTimeout(type, 300);
}

// ── Projects data
const projects = [
  {
    code: 'L001',
    title: 'Gioco Carte',
    desc: 'Simulazione di un gioco di carte in JavaScript. Gestione del mazzo, delle mani e della logica di gioco.',
    tags: ['javascript', 'game', 'dom'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/L001_gioco_carte'
  },
  {
    code: 'L002',
    title: 'Corsa Ciclistica',
    desc: 'Simulazione di una corsa ciclistica con animazioni canvas e gestione di classifiche.',
    tags: ['canvas', 'animazione', 'javascript'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/L002_CorsaCIclistica'
  },
  {
    code: 'L003',
    title: 'To-Do List',
    desc: 'Applicazione di gestione delle attività con aggiunta, rimozione e salvataggio locale dei task.',
    tags: ['localStorage', 'crud', 'ui'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/L003_ToDoList'
  },
  {
    code: 'L004',
    title: 'Von Koch',
    desc: 'Generazione frattale del fiocco di neve di Von Koch tramite ricorsione e canvas HTML5.',
    tags: ['frattali', 'ricorsione', 'canvas'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/L004_VonKoch'
  },
  {
    code: 'L005',
    title: 'Albero Frattale',
    desc: 'Disegno ricorsivo di un albero frattale con controllo del numero di livelli e angolazioni.',
    tags: ['frattali', 'canvas', 'ricorsione'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/L005_albero'
  },
  {
    code: 'L006',
    title: 'pitrapez',
    desc: 'Progetto creativo con implementazione di algoritmi e interfaccia interattiva.',
    tags: ['javascript', 'interattivo'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/L006_pitrapez'
  },
   {
    code: 'L007',
    title: 'montecarlo',
    desc: 'Progetto creativo con implementazione di algoritmi e interfaccia interattiva.',
    tags: ['javascript'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/L007_montecarlo'
  },
  {
    code: 'P001',
    title: 'Gioco Tris',
    desc: 'Implementazione del classico Tris (Tic-Tac-Toe) con IA minimax e modalità multiplayer.',
    tags: ['game', 'ia', 'minimax'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/P001_GiocoTris'
  },
  {
    code: 'X001',
    title: 'Fetch Card Example',
    desc: 'Esempio di utilizzo della Fetch API per recuperare e visualizzare dati da API esterne.',
    tags: ['fetch', 'api', 'async'],
    url: 'https://github.com/Zuccante/4id-consegne-2025-2026-DanielZizze/tree/main/X001_fetch-card-exmple'
  }
];

// ── Render cards on index page
const grid = document.getElementById('cards-grid');
if (grid) {
  projects.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${0.1 + idx * 0.08}s`;
    card.innerHTML = `
      <div class="card-code">${p.code}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
      <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <a class="card-link" href="${p.url}" target="_blank">→ VIEW ON GITHUB</a>
    `;
    grid.appendChild(card);
  });
}
