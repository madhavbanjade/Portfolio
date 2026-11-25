// ============================================================
// TECH LOGOS: shown as logos (Simple Icons), never as text.
// key: [simple-icons slug, accessible name, brand colour or null]
// ============================================================
const ICON_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons/';
const TECH = {
  nextjs:     ['nextdotjs', 'Next.js', null],
  react:      ['react', 'React', '#61DAFB'],
  typescript: ['typescript', 'TypeScript', '#3178C6'],
  nestjs:     ['nestjs', 'NestJS', '#E0234E'],
  node:       ['nodedotjs', 'Node.js', '#5FA04E'],
  express:    ['express', 'Express', null],
  mongodb:    ['mongodb', 'MongoDB', '#47A248'],
  postgres:   ['postgresql', 'PostgreSQL', '#4169E1'],
  redis:      ['redis', 'Redis', '#FF4438'],
  prisma:     ['prisma', 'Prisma', null],
  socketio:   ['socketdotio', 'Socket.IO', null],
  docker:     ['docker', 'Docker', '#2496ED'],
  nginx:      ['nginx', 'Nginx', '#009639'],
  tailwind:   ['tailwindcss', 'Tailwind CSS', '#06B6D4'],
  graphql:    ['graphql', 'GraphQL', '#E10098'],
  fastapi:    ['fastapi', 'FastAPI', '#009688'],
  reactquery: ['reactquery', 'React Query', '#FF4154'],
  redux:      ['redux', 'Redux', '#764ABC'],
  framer:     ['framer', 'Framer Motion', '#0055FF'],
  puppeteer:  ['puppeteer', 'Puppeteer', '#40B5A4'],
  handlebars: ['handlebarsdotjs', 'Handlebars', null],
  cloudinary: ['cloudinary', 'Cloudinary', '#3448C5'],
  jwt:        ['jsonwebtokens', 'JSON Web Tokens', null],
  render:     ['render', 'Render', null],
  git:        ['git', 'Git', '#F05032'],
  github:     ['github', 'GitHub', null],
  postman:    ['postman', 'Postman', '#FF6C37'],
  figma:      ['figma', 'Figma', '#F24E1E'],
  aws:        ['amazonwebservices', 'AWS', '#FF9900'],
  linkedin:   ['linkedin', 'LinkedIn', null],
  instagram:  ['instagram', 'Instagram', null],
  gmail:      ['gmail', 'Email', null],
  whatsapp:   ['whatsapp', 'WhatsApp', null],
};

function logoAttrs(key) {
  const t = TECH[key];
  if (!t) return '';
  const brand = t[2] ? `--brand:${t[2]};` : '';
  return `style="--icon:url('${ICON_CDN}${t[0]}.svg');${brand}" role="img" aria-label="${t[1]}" title="${t[1]}"`;
}
const logo = key => `<span class="logo" ${logoAttrs(key)}></span>`;

function hydrateLogos(root = document) {
  root.querySelectorAll('.logo[data-tech]').forEach(el => {
    const t = TECH[el.dataset.tech];
    if (!t) return el.remove();
    el.style.setProperty('--icon', `url('${ICON_CDN}${t[0]}.svg')`);
    if (t[2]) el.style.setProperty('--brand', t[2]);
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', t[1]);
    el.title = t[1];
    el.removeAttribute('data-tech');
  });
}


// ============================================================
// PROJECTS: only projects with a `live` link are shown.
// To show a project, give it a live URL.
// ============================================================
const allProjects = [
  {
    id: 'hrn',
    kind: 'Client work',
    title: 'HRN Nepal System',
    image: 'hrn.png',
    contain: true, // logo, not a screenshot
    year: 'Ongoing',
    tech: ['nextjs', 'nestjs', 'typescript', 'mongodb', 'redis', 'reactquery', 'tailwind', 'aws'],
    desc: 'The operating system of a consultancy that sends students to Japan for work and study. Employees, students, attendance, CVs and visa processing all live in one place.',
    outcomeNum: '80%',
    outcome: 'less manual admin work, with every department working from the same system',
    live: 'https://system.hrnnepal.com/',
    longDesc: 'A large management platform built for HRN Nepal. It handles employee management, student records, attendance, automatic CV generation, class progress, document verification, interview preparation and the full Japan work/study visa process, with scalability, security and automation built in from day one.',
    problem: 'Students, staff records, attendance and visa cases were tracked by hand across spreadsheets and disconnected tools. That meant delays, inconsistent data and a lot of repeated work.',
    solution: 'One central platform with dashboards for each role, automatic student tracking, a one-click CV generator, attendance management, secure logins, rate limiting and real-time updates.',
  },
  {
    id: 'fanout',
    kind: 'System design',
    title: 'Fanout',
    image: 'fanout-cover.png',
    video: 'fanout.mp4',
    year: '2026',
    tech: ['nestjs', 'nextjs', 'nginx', 'redis', 'socketio', 'postgres', 'prisma', 'docker'],
    desc: 'A real-time notification platform built to prove out load balancing and horizontal scaling under real traffic, not just to send notifications.',
    outcomeNum: '3+',
    outcome: 'servers share one real-time system, and more can be added without code changes',
    live: 'https://fanout.netlify.app/',
    longDesc: 'Notifications are the excuse; the real focus is infrastructure. Stateless servers sit behind a reverse proxy that spreads traffic across them. A shared message layer passes real-time events between servers, so no visitor is tied to one machine. Delivery happens in a background queue with automatic retries, so the app stays fast under load.',
    problem: 'Imagine a shop\'s notification service running on one server. During a flash sale traffic jumps 10×, the server chokes, and order confirmations get lost. Adding a second server alone doesn\'t help, because each one only knows about its own visitors.',
    solution: 'A traffic splitter spreads requests and live connections across identical servers. A shared message layer makes sure real-time events reach every visitor, whichever server they\'re on. Slow work goes into a queue with retries. To handle more traffic, add servers, not bigger ones.',
  },
  {
    id: 'documind',
    kind: 'AI product',
    title: 'DocuMind',
    image: 'Raag-cover.png',
    video: 'raagdemo.mp4',
    year: '2026',
    tech: ['nestjs', 'typescript', 'mongodb', 'jwt', 'render'],
    desc: 'Upload PDFs, Word or Excel files and ask questions about them. Every answer comes only from your documents, with sources attached.',
    outcomeNum: '0',
    outcome: 'made-up answers. It cites its sources or says it doesn\'t know.',
    live: 'https://documindra.netlify.app/',
    longDesc: 'Uploaded documents are split into overlapping passages, converted into a searchable form and stored in a vector database. For each question, the most relevant passages are found, re-ranked, and handed to a language model that must answer only from them and return the passages it used. It also has secure accounts and chat history.',
    problem: 'Finding an answer inside long PDFs, spreadsheets and reports means a lot of manual searching, and general chatbots happily invent answers that aren\'t in the source.',
    solution: 'An end-to-end retrieval pipeline: parsing, overlapping chunks, semantic search, re-ranking and a strict "answer only from context" rule, with sources returned for every answer.',
  },
  {
    id: 'ecommerce',
    kind: 'Personal',
    title: 'Fashion E-commerce',
    image: 'ecommerce.jpg',
    year: '2026',
    tech: ['nextjs', 'nestjs', 'postgres', 'prisma', 'tailwind'],
    desc: 'A fashion store with cart, wishlist, order tracking and a fast checkout.',
    outcomeNum: '',
    outcome: '',
    live: '', // not deployed yet, so it stays hidden
    longDesc: '', problem: '', solution: '',
  },
];
const projects = allProjects.filter(p => p.live);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad2 = n => String(n).padStart(2, '0');
const host = url => url.replace(/^https?:\/\//, '').replace(/\/$/, '');


// ============================================================
// HERO + small widgets
// ============================================================
function initHero() {
  const hero = $('.hero');
  requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('in')));
}

function initClock() {
  const el = $('#bentoClock');
  const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kathmandu', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 1000);
}

function initMarquee() {
  const m = $('#logoMarquee');
  const clone = $('.marquee-track', m).cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  $$('.logo', clone).forEach(l => { l.removeAttribute('title'); l.removeAttribute('role'); l.removeAttribute('aria-label'); });
  m.appendChild(clone);
}


// ============================================================
// REVEALS + COUNTERS
// ============================================================
function initReveal() {
  const targets = $$('.reveal, .mask, .pcard');
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(t => io.observe(t));
}

function initCounters() {
  $('#liveCount').dataset.count = projects.length;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    io.unobserve(el);
    if (reduceMotion) { el.textContent = target; return; }
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / 1500, 1);
      el.textContent = Math.round((1 - Math.pow(1 - p, 4)) * target);
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }), { threshold: 0.5 });
  $$('[data-count]').forEach(el => io.observe(el));
}


// ============================================================
// WORK: two-column grid of project cards
// ============================================================
function renderWork() {
  $('#workGrid').innerHTML = projects.map((p, i) => `
    <article class="pcard" style="transition-delay:${(i % 2) * 0.12}s">
      <div class="pc-media${p.contain ? ' contain' : ''}" data-open="${p.id}">
        <img src="${p.image}" alt="${p.title} preview" loading="lazy" />
        ${p.video ? `<video src="${p.video}" poster="${p.image}" muted loop playsinline preload="none"></video>
                     <span class="pc-badge"><span class="live-dot"></span>Demo</span>` : ''}
      </div>
      <div class="pc-body">
        <div class="pc-top"><span class="pc-kind">${p.kind}</span><span>${p.year}</span></div>
        <h3 class="pc-title">${p.title}</h3>
        <p class="pc-desc">${p.desc}</p>
        <div class="logo-row">${p.tech.map(logo).join('')}</div>
        <div class="pc-outcome"><b>${p.outcomeNum}</b><span>${p.outcome}</span></div>
        <div class="pc-actions">
          <button class="btn btn-primary btn-small" data-open="${p.id}"><span>Case study</span><span class="arrow">→</span></button>
          <a class="btn btn-ghost btn-small" href="${p.live}" target="_blank" rel="noopener noreferrer">Visit live site ↗</a>
        </div>
      </div>
    </article>`).join('');

  // demo videos play while their card is on screen
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    const v = $('video', e.target);
    if (e.isIntersecting && !reduceMotion) v.play().then(() => e.target.classList.add('playing')).catch(() => {});
    else { v.pause(); e.target.classList.remove('playing'); }
  }), { threshold: 0.5 });
  $$('.pc-media').filter(m => $('video', m)).forEach(m => io.observe(m));
}


// ============================================================
// FILM: "How I work", a scripted animation with real video controls.
// Each .scene lasts SCENE seconds. Elements with data-at="a,b,..."
// receive classes s1, s2, ... once the scene clock passes each time.
// ============================================================
function initFilm() {
  const film = $('#film');
  const scenes = $$('.scene', film);
  const SCENE = 6.5;
  const TOTAL = SCENE * scenes.length;
  const caption = $('#filmCaption');
  const range = $('#filmRange');
  const fill = $('#filmFill');
  const time = $('#filmTime');
  const chapters = $('#filmChapters');
  let t = 0, playing = false, last = 0, current = -1;

  const fmt = s => `${Math.floor(s / 60)}:${pad2(Math.floor(s % 60))}`;
  range.max = TOTAL;

  $('#filmTicks').innerHTML = scenes.slice(1).map((_, i) => `<i style="left:${((i + 1) / scenes.length) * 100}%"></i>`).join('');
  chapters.innerHTML = scenes.map((s, i) => `
    <li><button data-ch="${i}"><span class="ch-n">${pad2(i + 1)}</span><span>${s.dataset.title}</span><span class="ch-t">${fmt(i * SCENE)}</span><span class="ch-bar"></span></button></li>`).join('');
  const chBtns = $$('button', chapters);

  const timed = scenes.map(s => $$('[data-at]', s).map(el => ({ el, at: el.dataset.at.split(',').map(Number) })));

  function render() {
    const idx = Math.min(Math.floor(t / SCENE), scenes.length - 1);
    const local = t - idx * SCENE;
    if (idx !== current) {
      scenes.forEach((s, i) => s.classList.toggle('active', i === idx));
      // reset other scenes so they replay when revisited
      timed.forEach((list, i) => { if (i !== idx) list.forEach(({ el, at }) => at.forEach((_, k) => el.classList.remove('s' + (k + 1)))); });
      caption.textContent = scenes[idx].dataset.caption;
      chBtns.forEach((b, i) => b.classList.toggle('current', i === idx));
      current = idx;
    }
    timed[idx].forEach(({ el, at }) => at.forEach((a, k) => el.classList.toggle('s' + (k + 1), local >= a)));
    film.classList.toggle("ended", t >= TOTAL - 2.2);
    fill.style.width = (t / TOTAL * 100) + '%';
    range.value = t;
    time.textContent = `${fmt(t)} / ${fmt(TOTAL)}`;
    chBtns.forEach((b, i) => {
      const p = Math.min(Math.max((t - i * SCENE) / SCENE, 0), 1);
      $('.ch-bar', b).style.transform = `scaleX(${p})`;
    });
  }

  function loop(now) {
    if (!playing) return;
    // rAF timestamps can be slightly earlier than performance.now() from play()
    t = Math.min(t + Math.max(now - last, 0) / 1000, TOTAL);
    last = now;
    render();
    if (t >= TOTAL) { pause(); return; }
    requestAnimationFrame(loop);
  }
  function play() {
    if (playing) return;
    if (t >= TOTAL - 0.05) { t = 0; current = -1; }
    playing = true;
    film.classList.add('playing', 'started');
    $('#filmPlay').setAttribute('aria-label', 'Pause');
    last = performance.now();
    requestAnimationFrame(loop);
  }
  function pause() {
    playing = false;
    film.classList.remove('playing');
    $('#filmPlay').setAttribute('aria-label', 'Play');
  }
  const toggle = () => (playing ? pause() : play());
  function seek(s) { t = Math.min(Math.max(s, 0), TOTAL); current = -1; film.classList.add('started'); render(); }

  $('#filmPlay').addEventListener('click', toggle);
  $('#filmStage').addEventListener('click', e => { if (!e.target.closest('a, button')) toggle(); });
  range.addEventListener('input', () => seek(+range.value));
  chapters.addEventListener('click', e => {
    const b = e.target.closest('[data-ch]');
    if (b) { seek(+b.dataset.ch * SCENE + 0.01); if (!playing) play(); }
  });
  film.addEventListener('keydown', e => {
    if (e.target !== film) return;
    if (e.key === ' ' || e.key === 'k') { e.preventDefault(); toggle(); }
    if (e.key === 'ArrowRight') seek(t + 5);
    if (e.key === 'ArrowLeft') seek(t - 5);
  });
  $('#filmFull').addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else film.requestFullscreen && film.requestFullscreen().catch(() => {});
  });

  // pop-up: open from any [data-film] button, close with ✕, Esc or the backdrop
  const modal = $('#filmModal');
  let opener = null;
  function openFilm() {
    opener = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('locked');
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('open')));
    seek(0);
    film.focus({ preventScroll: true });
    if (!reduceMotion) play();
  }
  function closeFilm() {
    if (modal.hidden) return;
    pause();
    if (document.fullscreenElement) document.exitFullscreen();
    modal.classList.remove('open');
    document.body.classList.remove('locked');
    setTimeout(() => { modal.hidden = true; }, 400);
    if (opener) opener.focus({ preventScroll: true });
  }
  document.addEventListener('click', e => {
    if (e.target.closest('[data-film]')) { e.preventDefault(); openFilm(); return; }
    if (e.target.closest('[data-film-close]') || e.target === modal) closeFilm();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFilm(); });

  render();
  caption.textContent = '';
}


// ============================================================
// SCROLL: nav, progress, active link, timeline, work
// ============================================================
function initScroll() {
  const nav = $('#nav');
  const progress = $('#scrollProgress');
  const fill = $('#timelineFill');
  const timeline = $('#timeline');
  const links = $$('[data-nav]');
  const indicator = $('#navIndicator');
  const sections = links.map(a => $(a.getAttribute('href')));
  let lastY = scrollY, ticking = false;

  function update() {
    ticking = false;
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle('scrolled', y > 20);
    nav.classList.toggle('hide', y > lastY + 2 && y > 600 && !document.body.classList.contains('locked'));
    if (y < lastY - 2) nav.classList.remove('hide');
    lastY = y;

    let active = null;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) active = links[i]; });
    if ($('#contact').getBoundingClientRect().top < innerHeight * 0.5) active = null;
    links.forEach(a => a.classList.toggle('active', a === active));
    if (active) {
      indicator.style.opacity = 1;
      indicator.style.width = active.offsetWidth + 'px';
      indicator.style.transform = `translateX(${active.offsetLeft}px)`;
    } else indicator.style.opacity = 0;

    const r = timeline.getBoundingClientRect();
    fill.style.transform = `scaleY(${Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1)})`;

  }

  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
}


// ============================================================
// MENU + COPY
// ============================================================
function initMenu() {
  const burger = $('#burger');
  const menu = $('#mobileMenu');
  const set = open => {
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', !open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('locked', open);
  };
  burger.addEventListener('click', () => set(!menu.classList.contains('open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => set(false)));
  addEventListener('resize', () => { if (innerWidth > 900) set(false); });
}

function initCopy() {
  const btn = $('#copyEmail');
  const hint = $('#copyHint');
  btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.email); }
    catch { location.href = 'mailto:' + btn.dataset.email; return; }
    hint.textContent = 'Copied ✓';
    hint.classList.add('ok');
    setTimeout(() => { hint.textContent = 'Copy'; hint.classList.remove('ok'); }, 2000);
  });
}


// ============================================================
// CASE STUDY OVERLAY (deep link: #case/<id>)
// ============================================================
const caseEl = $('#case');
const casePanel = $('#casePanel');
let lastFocus = null;

function caseHTML(p) {
  const i = projects.indexOf(p);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return `
    <div class="case-close-wrap"><button class="case-close" data-close aria-label="Close case study">✕</button></div>
    <div class="case-hero${p.contain ? ' contain' : ''}"><img src="${p.image}" alt="${p.title}" /></div>
    <div class="case-content">
      <div class="case-kicker">${p.kind} · ${p.year}</div>
      <h2 class="case-title" id="caseTitle">${p.title}</h2>
      <p class="case-lead">${p.longDesc}</p>
      <div class="case-actions">
        <a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener noreferrer"><span>Visit ${host(p.live)}</span><span class="arrow">↗</span></a>
        <div class="logo-row">${p.tech.map(logo).join('')}</div>
      </div>
      ${p.video ? `<div class="case-video"><video src="${p.video}" poster="${p.image}" controls playsinline preload="metadata"></video></div>` : ''}
      <div>
        <div class="case-grid">
          <div class="case-block"><h4>The problem</h4><p>${p.problem}</p></div>
          <div class="case-block"><h4>What I built</h4><p>${p.solution}</p></div>
        </div>
        <div class="case-block case-outcome"><b>${p.outcomeNum}</b><div><h4>Outcome</h4><p>${p.outcome}</p></div></div>
      </div>
      <nav class="case-nav" aria-label="More projects">
        <button data-goto="${prev.id}"><small>← Previous</small><b>${prev.title}</b></button>
        <button data-goto="${next.id}"><small>Next →</small><b>${next.title}</b></button>
      </nav>
    </div>`;
}

function openCase(id, push = true) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  if (caseEl.hidden) lastFocus = document.activeElement;
  casePanel.innerHTML = caseHTML(p);
  caseEl.hidden = false;
  caseEl.scrollTop = 0;
  document.body.classList.add('locked');
  requestAnimationFrame(() => requestAnimationFrame(() => caseEl.classList.add('open')));
  $('.case-close', casePanel).focus({ preventScroll: true });
  if (push && location.hash !== '#case/' + id) history.pushState(null, '', '#case/' + id);
}

function closeCase(push = true) {
  if (caseEl.hidden) return;
  caseEl.classList.remove('open');
  document.body.classList.remove('locked');
  $$('video', casePanel).forEach(v => v.pause());
  setTimeout(() => { caseEl.hidden = true; casePanel.innerHTML = ''; }, 450);
  if (push && location.hash.startsWith('#case/')) history.pushState(null, '', location.pathname + location.search);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

function initCase() {
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-open]');
    if (opener) { e.preventDefault(); openCase(opener.dataset.open); return; }
    const go = e.target.closest('[data-goto]');
    if (go) { openCase(go.dataset.goto); return; }
    if (e.target.closest('[data-close]') || e.target === caseEl) closeCase();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCase();
    if (e.key === 'Tab' && !caseEl.hidden) {
      const f = $$('a, button, video', casePanel);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  const fromHash = () => {
    const m = location.hash.match(/^#case\/(.+)$/);
    if (m) openCase(m[1], false); else closeCase(false);
  };
  addEventListener('popstate', fromHash);
  fromHash();
}


// ============================================================
// INIT
// ============================================================
$('#year').textContent = new Date().getFullYear();
hydrateLogos();
initMarquee();
renderWork();
initHero();
initClock();
initMenu();
initCopy();
initReveal();
initCounters();
initFilm();
initScroll();
initCase();
