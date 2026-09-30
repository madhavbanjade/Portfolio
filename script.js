// ============================================================
// PROJECT DATA
// Listed oldest → newest; the slider shows th iygy8gyg8ye latest first.
// ================================================= erw===========
 
const projects = [

  {
    id:       'hrn',
    category: 'professional',
    title:    'HRN Nepal-System Dashboard',
    monogram: 'HRN',
    image:    'hrn.png',
    imgClass: 'img-1',
    tags: ['Next.js', 'Nest.js', 'MongoDB'],
    desc: 'A complete management system for an educational consultancy that sends students to Japan for work and study opportunities.',
    year: 'On-Going',
    detail: {
      extraTags: ['Node.js', 'Redis', 'Rate Limiter', 'AI Integration', 'React Query', 'TailwindCSS', 'AWS'],
      longDesc: 'A large-scale full-stack management platform developed for HRN Nepal to streamline internal operations and student workflows. The system handles employee management, student records, attendance tracking, CV generation, class progress, document verification, interview preparation, and complete processing for Japan work/study visa applications. Built with scalability, security, and automation in mind to reduce manual workload and improve operational efficiency.',
      liveLink: 'https://system.hrnnepal.com/',
      outcomeNum: '80%',
      outcome: 'Reduced manual administrative workload by nearly 80%, improved student processing speed, centralized company operations into a single system, and enhanced overall workflow efficiency across multiple departments.',
      problem: 'The company was managing students, employee records, attendance, and visa processing manually through spreadsheets and disconnected systems, which caused delays, data inconsistency, and inefficient workflow management.',
      solution: 'Developed a centralized digital platform with role-based dashboards, automated student tracking, AI-assisted CV generation, attendance management, secure authentication, rate limiting, and real-time data handling. The platform significantly reduced manual operations and improved workflow coordination between departments.',
      stack: ['Next.js', 'Nest.js', 'TypeScript', 'MongoDB', 'Redis', 'React Query', 'TailwindCSS', 'AWS', 'AI Integration'],
    },
  },

  {
    id:       'ecommerce',
    category: 'personal',
    title:    'E-commerce',
    monogram: 'EC',
    image:    'ecommerce.jpg',
    imgClass: 'img-2',
    tags: ['Next.js', 'Nest.js', 'OAuth', 'PostgreSQL', 'Prisma'],
    desc: 'A modern fashion e-commerce platform built for seamless shopping experiences and fast performance.',
    year: '2026',
    detail: {
      extraTags: ['TailwindCSS'],
      longDesc: 'A full-stack fashion e-commerce application designed for modern users with a clean UI, secure authentication, fast product browsing, and smooth checkout experience. The platform supports role-based access, product management, cart and wishlist functionality, order tracking, secure online payments, and responsive performance across all devices.',
      liveLink: '#',
      problem: 'Most clothing e-commerce platforms feel slow, cluttered, and outdated. Users struggle with poor mobile experiences, complicated checkout flows, and lack of personalized shopping interactions.',
      solution: 'Built a scalable full-stack platform focused on speed, simplicity, and user experience. Implemented optimized product loading, secure OAuth/JWT authentication, responsive UI, real-time cart updates, and streamlined payment integration to improve customer engagement and conversion.',
      stack: ['Next.js', 'Nest.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      outcomeNum: '72%',
      outcome: 'Improved checkout completion rate by 72% during testing, reduced page load times significantly with optimized rendering, and delivered a fully responsive shopping experience for desktop and mobile users.',
    },
  },

  {
    id:       'ghar-jagga',
    category: 'personal',
    title:    'Ghar-Jagga Nepal',
    monogram: 'GJ',
    image:    'real-estate.jpg',
    imgClass: 'img-1',
    tags: ['React', 'Express', 'MongoDB'],
    desc: 'A modern real estate platform for Nepal that helps users buy, sell, and rent properties with an intuitive search experience.',
    year: '2025',
    detail: {
      extraTags: ['Node.js', 'TailwindCSS', 'JWT', 'Cloudinary', 'Responsive Design'],
      longDesc: 'A full-stack real estate marketplace designed specifically for the Nepali market. The platform allows users to explore properties for buying, renting, and selling with advanced search and filtering capabilities. It includes agent dashboards, property management tools, image uploads, location-based browsing, and responsive design optimized for both desktop and mobile devices.',
      liveLink: 'https://gharjagganep.onrender.com/',
      problem: 'Property discovery in Nepal was highly fragmented across Facebook posts, word-of-mouth, and outdated websites with poor search functionality and limited accessibility.',
      solution: 'Built a centralized real estate platform with advanced filtering, location-based property browsing, secure authentication, image management, and dedicated dashboards for agents and property owners to manage listings efficiently.',
      stack: ['React', 'Express.js', 'MongoDB', 'Node.js', 'TailwindCSS', 'JWT Authentication', 'Cloudinary', 'REST API'],
    },
  },

  {
    id:       'notify-platform',
    category: 'personal',
    title:    'Fanout — Horizontally Scaled Notification System',
    monogram: 'NP',
    image:    'fanout-cover.png',
    imgClass: 'img-2',
    tags: ['Load Balancing', 'NestJS', 'PostgreSQL', 'Redis'],
    desc: 'A distributed-systems project disguised as a notification platform — built to prove out load balancing, reverse proxying, and horizontal scaling under real traffic, not just to send notifications.',
    year: '2026',
    detail: {
      extraTags: ['Prisma', 'BullMQ', 'Socket.IO', 'Nginx Reverse Proxy', 'Docker', 'Zustand', 'React Query', 'TailwindCSS'],
      longDesc: 'Notifications are the excuse; the real focus is infrastructure. Stateless NestJS containers run behind Nginx as reverse proxy and load balancer. Socket.IO\'s Redis adapter fans real-time events across instances so no client is "pinned" to one server. Delivery is decoupled via BullMQ/Redis queues with retries, keeping the API fast under load.',
      liveLink: 'https://fanout.netlify.app/',
      demoVideo: 'fanout.mp4',
      problem: 'Mirrors a real scenario: an e-commerce site\'s notification service runs on one server. During a flash sale, traffic spikes 10x, the server chokes, and confirmations get dropped. Simply adding a server doesn\'t help — each instance only sees its own connections, with no shared routing layer.',
      solution: 'Nginx load-balances HTTP and WebSocket traffic across stateless NestJS containers, so instances scale up freely. Redis fans out Socket.IO events across all of them, and BullMQ queues delivery outside the request path with retries. Throughput now scales by adding containers, not bigger servers.',
      stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.IO', 'Nginx (Reverse Proxy / Load Balancer)', 'Docker', 'JWT Authentication'],
    },
  },

  {
    id:       'raag',
    category: 'personal',
    title:    'Raag — DocuMind RAG',
    monogram: 'RG',
    image:    'Raag-cover.png',
    imgClass: 'img-1',
    tags: ['NestJS', 'MongoDB', 'Qdrant', 'AI'],
    desc: 'A retrieval-augmented generation app that lets you upload documents and ask questions answered only from their content.',
    year: '2026',
    detail: {
      extraTags: ['Groq', 'Jina', 'Vector Search', 'JWT', 'Render', 'Node.js'],
      longDesc: 'DocuMind is a document Q&A application built on a retrieval-augmented generation pipeline. Users upload PDF, Word, and Excel files, which are parsed, split into overlapping chunks, embedded, and stored in a Qdrant vector database. When a question is asked, the most relevant chunks are retrieved and re-ranked with Jina, then passed to an LLM on Groq that answers strictly from that context and returns the source chunks it used. Includes JWT authentication, chat conversation history, and a lightweight vanilla JavaScript frontend.',
      liveLink: 'https://documindra.netlify.app/',
      problem: 'Finding answers inside long PDFs, spreadsheets, and reports means manually searching through them, and general-purpose chatbots often invent answers that are not in the source material.',
      solution: 'Built an end-to-end RAG pipeline: document parsing, overlapping chunking, vector embeddings, semantic search in Qdrant, and re-ranking before generation. The model is instructed to answer only from retrieved context and to say so when nothing relevant is found, and each answer returns its source references. Deployed as a NestJS API on Render.',
      stack: ['NestJS', 'TypeScript', 'MongoDB', 'Qdrant', 'Groq', 'Jina Reranker', 'JWT Authentication', 'Render'],
    },
  }

];

let activeCategory = 'professional';

function switchCategory(category) {
  if (category === activeCategory) return;
  activeCategory = category;

  document.querySelectorAll('.category-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  renderCards();
}


// ============================================================
// CARD HTML BUILDER
// ============================================================
function buildCard(p) {
  return `
    <a class="card card-uniform" href="#" onclick="showDetail('${p.id}'); return false;">
      <div class="card-img ${p.imgClass}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}" class="card-img-photo" />`
          : `<span class="card-monogram">${p.monogram}</span>`
        }
      </div>
      <div class="card-body">
        <div class="card-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <span class="card-link">Case Study →</span>
          <span class="card-year">${p.year}</span>
        </div>
      </div>
    </a>
  `;
}


// ============================================================
// RENDER CARDS — single-row slider, latest project first
// ============================================================
function renderCards() {
  const grid = document.getElementById('projects-grid');

  // projects are listed oldest → newest, so reverse to show the latest first
  const categoryProjects = projects
    .filter(p => p.category === activeCategory)
    .reverse();

  grid.innerHTML = `
    <div class="slider">
      <div class="slider-track" id="slider-track">
        ${categoryProjects.map(buildCard).join('')}
      </div>
      <div class="slider-controls" id="slider-controls">
        <button class="page-btn" id="slider-prev" onclick="slideProjects(-1)" aria-label="Previous projects">← Prev</button>
        <button class="page-btn" id="slider-next" onclick="slideProjects(1)" aria-label="Next projects">Next →</button>
      </div>
    </div>
  `;

  const track = document.getElementById('slider-track');
  track.addEventListener('scroll', updateSliderControls, { passive: true });
  updateSliderControls();
}

function slideProjects(direction) {
  const track = document.getElementById('slider-track');
  if (!track) return;
  const card = track.querySelector('.card');
  if (!card) return;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
}

function updateSliderControls() {
  const track    = document.getElementById('slider-track');
  const controls = document.getElementById('slider-controls');
  const prev     = document.getElementById('slider-prev');
  const next     = document.getElementById('slider-next');
  if (!track || !prev || !next) return;

  const maxScroll = track.scrollWidth - track.clientWidth;
  controls.style.display = maxScroll <= 2 ? 'none' : 'flex';
  prev.disabled = track.scrollLeft <= 2;
  next.disabled = track.scrollLeft >= maxScroll - 2;
  prev.classList.toggle('disabled', prev.disabled);
  next.classList.toggle('disabled', next.disabled);
}

window.addEventListener('resize', updateSliderControls);


// ============================================================
// SHOW DETAIL
// ============================================================
function showDetail(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const d         = project.detail;
  const allTags   = [...project.tags, ...d.extraTags].map(t => `<span class="tag">${t}</span>`).join('');

  document.getElementById('detail-view').innerHTML = `
    <main>
      <button class="back-btn" onclick="showPortfolio()">← Back to Work</button>
      <div class="detail-hero">
        <div class="detail-featured ${project.imgClass}">
          ${project.image
            ? `<img src="${project.image}" alt="${project.title}" class="detail-featured-img" />`
            : project.monogram
          }
        </div>
        <div class="detail-body">
          <div class="detail-meta">${allTags}</div>
          <div class="detail-title">${project.title}</div>
          <p class="detail-desc">${d.longDesc}</p>
          <div class="detail-actions">
            <a class="btn btn-primary" href="${d.liveLink}" target="_blank">View Live Project ↗</a>
            ${d.demoVideo ? `<button class="btn btn-ghost" onclick="watchDemo()">▶ Watch Demo</button>` : ''}
          </div>
        </div>
      </div>
      ${d.demoVideo ? `
        <div class="detail-card demo-card" id="demo-section">
          <h3>Demo</h3>
          <video id="demo-video" class="demo-video" src="${d.demoVideo}" controls preload="metadata" playsinline></video>
        </div>` : ''}
      <div class="detail-grid">
        <div class="detail-card"><h3>Problem</h3><p>${d.problem}</p></div>
        <div class="detail-card"><h3>Solution</h3><p>${d.solution}</p></div>
      </div>
    </main>
    <footer style="margin-top: 64px">
      <div class="footer-inner">
        <span>© ${new Date().getFullYear()} Madhav Banjade</span>
        <div class="footer-links">
          <a href="https://www.linkedin.com/in/madhavbanjade/" target="_blank">LinkedIn</a>
          <a href="https://github.com/madhavbanjade" target="_blank">GitHub</a>
          <a href="https://www.instagram.com/devb.ychance/" target="_blank">Instagram</a>
        </div>
      </div>
    </footer>
  `;

  document.getElementById('portfolio-view').style.display = 'none';
  document.getElementById('detail-view').style.display   = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });
}


function watchDemo() {
  const section = document.getElementById('demo-section');
  const video   = document.getElementById('demo-video');
  if (!section || !video) return;
  section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  video.play().catch(() => {});
}


// ============================================================
// PORTFOLIO VIEW
// ============================================================
function showPortfolio() {
  document.getElementById('portfolio-view').style.display = 'block';
  document.getElementById('detail-view').style.display   = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
  setTimeout(observeFadeUps, 50);
}


// ============================================================
// SCROLL FADE-UP ANIMATION
// ============================================================
function observeFadeUps() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('#portfolio-view .fade-up').forEach(el => observer.observe(el));
}


// ===== =======================================================
// INIT ajvewvuwye igfi iufwwe
// ============================================================
document.querySelectorAll('.copyright-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

renderCards();
initSkillTagStagger();
observeFadeUps();
initStatCounters();
initHeroTilt();

document.addEventListener('mousemove', e => {
  document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
});

// ============================================================
// SKILL TAG STAGGERED REVEAL
// ============================================================
function initSkillTagStagger() {
  document.querySelectorAll('.about-skills .skill-tag').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 0.04}s`;
  });
}

// ============================================================
// ANIMATED STAT COUNTERS
// ============================================================
function animateCount(el, target, suffix) {
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initStatCounters() {
  const statsEl = document.querySelector('.about-stats');
  if (!statsEl || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      statsEl.querySelectorAll('.stat-num[data-count]').forEach(el => {
        animateCount(el, parseInt(el.dataset.count, 10), el.dataset.suffix || '');
      });
      obs.disconnect();
    });
  }, { threshold: 0.4 });

  observer.observe(statsEl);
}

// ============================================================
// HERO PHOTO 3D TILT
// ============================================================
function initHeroTilt() {
  const wrap  = document.querySelector('.hero-photo');
  const frame = document.querySelector('.hero-photo-frame');
  if (!wrap || !frame) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  wrap.addEventListener('mousemove', e => {
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });

  wrap.addEventListener('mouseleave', () => {
    frame.style.transform = '';
  });
}

// ============================================================
// THEME TOGGLE
// ============================================================
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

const scrollProgressEl = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 10);

  if (scrollProgressEl) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress  = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollProgressEl.style.width = progress + '%';
  }
});


// ============================================================
// MOBILE NAV (hamburger + dropdown)
// ============================================================
function toggleMobileMenu() {
  const links    = document.getElementById('navLinks');
  const burger   = document.getElementById('navBurger');
  const backdrop = document.getElementById('navBackdrop');
  const isOpen   = links.classList.toggle('open');

  burger.classList.toggle('open', isOpen);
  backdrop.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  const links    = document.getElementById('navLinks');
  const burger   = document.getElementById('navBurger');
  const backdrop = document.getElementById('navBackdrop');
  if (!links || !links.classList.contains('open')) return;

  links.classList.remove('open');
  burger.classList.remove('open');
  backdrop.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Close the mobile menu automatically if the viewport grows past the breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMobileMenu();
});