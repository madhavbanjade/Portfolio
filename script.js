// ============================================================
// PROJECT DATA
// First 2 projects are always "pinned" (shown at top, no pagination).
// Projects from index 2 onwards are paginated below.
// ============================================================

const projects = [

  {
  id:       'hrn',

  title:    'HRN Nepal-System Dashboard',

  monogram: 'HRN',

  image:    '/file/hrn.png',

  imgClass: 'img-1',

  tags: [
    'Next.js',
    'Nest.js',
    'MongoDB'
  ],

  desc:
    'A complete management system for an educational consultancy that sends students to Japan for work and study opportunities.',

  year: 'On-Going',

  cardSize: 'card-wide',

  detail: {
    extraTags: [
      'Node.js',
      'Redis',
      'Rate Limiter',
      'AI Integration',
      'React Query',
      'TailwindCSS',
      'AWS'
    ],

    longDesc:
      'A large-scale full-stack management platform developed for HRN Nepal to streamline internal operations and student workflows. The system handles employee management, student records, attendance tracking, CV generation, class progress, document verification, interview preparation, and complete processing for Japan work/study visa applications. Built with scalability, security, and automation in mind to reduce manual workload and improve operational efficiency.',

    liveLink: 'https://system.hrnnepal.com/',

        outcomeNum: '80%',

    outcome:
      'Reduced manual administrative workload by nearly 80%, improved student processing speed, centralized company operations into a single system, and enhanced overall workflow efficiency across multiple departments.',

    problem:
      'The company was managing students, employee records, attendance, and visa processing manually through spreadsheets and disconnected systems, which caused delays, data inconsistency, and inefficient workflow management.',

    solution:
      'Developed a centralized digital platform with role-based dashboards, automated student tracking, AI-assisted CV generation, attendance management, secure authentication, rate limiting, and real-time data handling. The platform significantly reduced manual operations and improved workflow coordination between departments.',

    stack: [
      'Next.js',
      'Nest.js',
      'TypeScript',
      'MongoDB',
      'Redis',
      'React Query',
      'TailwindCSS',
      'AWS',
      'AI Integration'
    ],


  },
},

{
  id:       'ecommerce',
  title:    'E-commerce',
  monogram: 'EC',
  image:    '/file/ecommerce.jpg',
  imgClass: 'img-2',

  tags: ['Next.js', 'Nest.js', 'OAuth', 'PostgreSQL', 'Prisma'],

  desc: 'A modern fashion e-commerce platform built for seamless shopping experiences and fast performance.',

  year: '2026',

  cardSize: 'card-narrow',

  detail: {
    extraTags: [
      'TailwindCSS',
   
    ],

    longDesc:
      'A full-stack fashion e-commerce application designed for modern users with a clean UI, secure authentication, fast product browsing, and smooth checkout experience. The platform supports role-based access, product management, cart and wishlist functionality, order tracking, secure online payments, and responsive performance across all devices.',

    liveLink: '#',

    problem:
      'Most clothing e-commerce platforms feel slow, cluttered, and outdated. Users struggle with poor mobile experiences, complicated checkout flows, and lack of personalized shopping interactions.',

    solution:
      'Built a scalable full-stack platform focused on speed, simplicity, and user experience. Implemented optimized product loading, secure OAuth/JWT authentication, responsive UI, real-time cart updates, and streamlined payment integration to improve customer engagement and conversion.',

    stack: [
      'Next.js',
      'Nest.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'TailwindCSS',
    ],

    outcomeNum: '72%',

    outcome:
      'Improved checkout completion rate by 72% during testing, reduced page load times significantly with optimized rendering, and delivered a fully responsive shopping experience for desktop and mobile users.',
  },
},
 {
  id:       'ghar-jagga',

  title:    'Ghar-Jagga Nepal',

  monogram: 'GJ',

  image:    'file/real-estate.jpg',

  imgClass: 'img-1',

  tags: [
    'React',
    'Express',
    'MongoDB',
  ],

  desc:
    'A modern real estate platform for Nepal that helps users buy, sell, and rent properties with an intuitive search experience.',

  year: '2025',

  cardSize: 'card-wide',

  detail: {
    extraTags: [
      'Node.js',
      'TailwindCSS',
      'JWT',
      'Cloudinary',
      'Responsive Design'
    ],

    longDesc:
      'A full-stack real estate marketplace designed specifically for the Nepali market. The platform allows users to explore properties for buying, renting, and selling with advanced search and filtering capabilities. It includes agent dashboards, property management tools, image uploads, location-based browsing, and responsive design optimized for both desktop and mobile devices.',

    liveLink: 'https://gharjagganep.onrender.com/',

    problem:
      'Property discovery in Nepal was highly fragmented across Facebook posts, word-of-mouth, and outdated websites with poor search functionality and limited accessibility.',

    solution:
      'Built a centralized real estate platform with advanced filtering, location-based property browsing, secure authentication, image management, and dedicated dashboards for agents and property owners to manage listings efficiently.',

    stack: [
      'React',
      'Express.js',
      'MongoDB',
      'Node.js',
      'TailwindCSS',
      'JWT Authentication',
      'Cloudinary',
      'REST API'
    ],

  },
}
 


  
];

// ── PAGINATION CONFIG ──
const PINNED_COUNT = 2;   // first N projects are always visible (no pagination)
let   currentPage  = 1;

// Returns page size based on screen width
function getPageSize() {
  return window.innerWidth <= 600 ? 1 : 3;
}

// Re-render on resize if page size bucket changes
let _lastPageSize = getPageSize();
window.addEventListener('resize', () => {
  const newSize = getPageSize();
  if (newSize !== _lastPageSize) {
    _lastPageSize = newSize;
    currentPage   = 1;
    renderPage(1);
  }
});


// ============================================================
// CARD HTML BUILDER  (shared by pinned + paginated)
// ============================================================

function buildCard(p) {
  return `
    <a class="card ${p.cardSize} fade-up" href="#" onclick="showDetail('${p.id}'); return false;">
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
// SKELETON HTML  (shown while "loading" paginated cards)
// ============================================================

function buildSkeleton(count) {
  return Array.from({ length: count }, () => `
    <div class="card card-third skeleton">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>
  `).join('');
}


// ============================================================
// RENDER CARDS
// ============================================================

function renderCards() {
  const grid = document.getElementById('projects-grid');

  // ── 1. Pinned cards (always visible, no animation delay) ──
  const pinnedHTML = projects
    .slice(0, PINNED_COUNT)
    .map(buildCard)
    .join('');

  // ── 2. Skeleton placeholder for paginated section ──
  const pageSize    = getPageSize();
  const skeletonHTML = `
    <div class="paginated-section" id="paginated-section">
      <div class="projects-grid-inner" id="paginated-grid">
        ${buildSkeleton(pageSize)}
      </div>
      <div class="pagination" id="pagination"></div>
    </div>
  `;

  grid.innerHTML = pinnedHTML + skeletonHTML;

  // Show skeleton briefly then render real page
  setTimeout(() => renderPage(1), 600);
}


// ============================================================
// RENDER PAGE  (paginated section only)
// ============================================================

function renderPage(page) {
  const pageSize          = getPageSize();
  const paginatedProjects = projects.slice(PINNED_COUNT); // everything after pinned
  const totalPages        = Math.ceil(paginatedProjects.length / pageSize);

  currentPage = page;

  const start     = (page - 1) * pageSize;
  const pageItems = paginatedProjects.slice(start, start + pageSize);

  const paginatedGrid = document.getElementById('paginated-grid');
  const pagination    = document.getElementById('pagination');

  // ── Show skeleton first ──
  paginatedGrid.style.opacity = '0';
  paginatedGrid.innerHTML     = buildSkeleton(pageSize);
  paginatedGrid.style.opacity = '1';

  // ── Swap in real cards after short delay (simulates smooth load) ──
  setTimeout(() => {
    paginatedGrid.innerHTML = pageItems.map(buildCard).join('');
    paginatedGrid.style.opacity = '0';

    // Fade in smoothly
    requestAnimationFrame(() => {
      paginatedGrid.style.transition = 'opacity 0.35s ease';
      paginatedGrid.style.opacity    = '1';
    });

    // Re-run fade-up observer for new cards
    observeFadeUps();
  }, 400);

  // ── Build pagination controls ──
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let paginationHTML = '<div class="pagination-inner">';

  // Prev button
  paginationHTML += `
    <button class="page-btn ${page === 1 ? 'disabled' : ''}"
            onclick="renderPage(${page - 1})"
            ${page === 1 ? 'disabled' : ''}>
      ← Prev
    </button>
  `;

  // Page number buttons
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
      <button class="page-btn page-num ${i === page ? 'active' : ''}"
              onclick="renderPage(${i})">
        ${i}
      </button>
    `;
  }

  // Next button
  paginationHTML += `
    <button class="page-btn ${page === totalPages ? 'disabled' : ''}"
            onclick="renderPage(${page + 1})"
            ${page === totalPages ? 'disabled' : ''}>
      Next →
    </button>
  `;

  paginationHTML += '</div>';
  pagination.innerHTML = paginationHTML;
}


// ============================================================
// SHOW DETAIL
// ============================================================

function showDetail(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const d         = project.detail;
  const allTags   = [...project.tags, ...d.extraTags].map(t => `<span class="tag">${t}</span>`).join('');
  const stackTags = d.stack.map(s => `<span class="stack-tag">${s}</span>`).join('');

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
          <a class="btn btn-primary" href="${d.liveLink}" target="_blank">View Live Project ↗</a>
        </div>
      </div>
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


// ============================================================
// PORTFOLIO VIEW
// ============================================================

function showPortfolio() {
  document.getElementById('portfolio-view').style.display = 'block';
  document.getElementById('detail-view').style.display   = 'none';
  document.getElementById('cv-view').style.display       = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
  setTimeout(observeFadeUps, 50);
}


// ============================================================
// CV VIEW
// ============================================================

function showCV() {
  document.getElementById('portfolio-view').style.display = 'none';
  document.getElementById('detail-view').style.display   = 'none';
  document.getElementById('cv-view').style.display       = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });
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


// ============================================================
// INIT
// ============================================================

document.querySelectorAll('.copyright-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

renderCards();
observeFadeUps();

// Cursor spotlight — sets CSS custom properties read by body::after
document.addEventListener('mousemove', e => {
  document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
});

// Nav scroll state — slightly darkens nav once user scrolls
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 10);
});