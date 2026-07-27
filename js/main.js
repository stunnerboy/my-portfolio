/**
 * Portfolio — Main JavaScript
 */
(function () {
  'use strict';

  const { profile, about, projects, skills, skillCategories, experience, education, certificates } = PORTFOLIO_DATA;

  // ── Theme Toggle ──────────────────────────────────────────
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ── Mobile Navigation ─────────────────────────────────────
  const navBurger = document.getElementById('nav-burger');
  const navLinks = document.getElementById('nav-links');

  navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navBurger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ── Active Nav Link on Scroll ─────────────────────────────
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav__link[href="#${id}"]`);
      if (!link) return;
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav);

  // ── Populate Profile Data ─────────────────────────────────
  function populateProfile() {
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText('hero-name', profile.name);
    setText('hero-tagline', profile.tagline);
    setText('hero-bio', profile.bio);
    setText('footer-name', profile.name);
    setText('footer-year', new Date().getFullYear());

    setText('about-aiml', about.aiml);
    setText('about-robotics', about.robotics);
    setText('about-web', about.web);

    setText('stat-projects', profile.stats.projects);
    setText('stat-certificates', profile.stats.certificates);
    setText('stat-technologies', profile.stats.technologies);
    setText('stat-experience', profile.stats.experience);

    const photo = document.getElementById('hero-photo');
    if (photo) {
      photo.src = profile.photo;
      photo.alt = `${profile.name} — Professional Photo`;
    }

    const linkMap = {
      'linkedin-header': profile.linkedin,
      'hero-linkedin': profile.linkedin,
      'hero-github': profile.github,
      'hero-email': `mailto:${profile.email}`,
      'contact-linkedin': profile.linkedin,
      'contact-email': `mailto:${profile.email}`,
      'contact-github': profile.github,
      'footer-linkedin': profile.linkedin,
      'footer-github': profile.github,
      'footer-email': `mailto:${profile.email}`
    };

    Object.entries(linkMap).forEach(([id, href]) => {
      const el = document.getElementById(id);
      if (el) el.href = href;
    });

    setText('contact-linkedin-text', profile.linkedin.replace('https://', ''));
    setText('contact-email-text', profile.email);
    setText('contact-github-text', profile.github.replace('https://', ''));
  }

  // ── Render Projects ───────────────────────────────────────
  function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);

    const categoryLabels = { aiml: 'AIML', robotics: 'Robotics', web: 'Web Design' };

    filtered.forEach((project, i) => {
      const card = document.createElement('article');
      card.className = `project-card reveal${i % 3 === 1 ? ' reveal--delay' : i % 3 === 2 ? ' reveal--delay-2' : ''}`;
      card.dataset.category = project.category;

      const overlayLinks = [
        project.github ? `<a href="${project.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>` : '',
        project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''
      ].join('');

      const bottomLinks = [
        project.github ? `<a href="${project.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>` : '',
        project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''
      ].filter(Boolean).join('');

      card.innerHTML = `
        <div class="project-card__image">
          <img src="${project.image}" alt="${project.title}" loading="lazy"
               onerror="this.src='assets/placeholder-project.svg'" />
          <span class="project-card__category">${categoryLabels[project.category]}</span>
          <div class="project-card__overlay">${overlayLinks}</div>
        </div>
        <div class="project-card__body">
          <div class="project-card__tags">
            ${project.tags.map(t => `<span class="project-card__tag">${t}</span>`).join('')}
          </div>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          ${bottomLinks ? `<div class="project-card__links">${bottomLinks}</div>` : ''}
        </div>
      `;

      grid.appendChild(card);
    });

    observeReveals();
  }

  // ── Project Filters ───────────────────────────────────────
  document.getElementById('project-filters').addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  });

  // ── Render Skills ─────────────────────────────────────────
  function renderSkills() {
    const grid = document.getElementById('skills-grid');
    skills.forEach((skill, i) => {
      const item = document.createElement('div');
      item.className = `skill-item reveal${i % 4 === 1 ? ' reveal--delay' : ''}`;
      item.innerHTML = `
        <i class="${skill.icon} skill-item__icon" style="color: ${skill.color}"></i>
        <span class="skill-item__name">${skill.name}</span>
      `;
      grid.appendChild(item);
    });

    const tagContainers = {
      'skills-ml': skillCategories.ml,
      'skills-robotics': skillCategories.robotics,
      'skills-web': skillCategories.web
    };

    Object.entries(tagContainers).forEach(([id, tags]) => {
      const container = document.getElementById(id);
      tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'skills__tag';
        span.textContent = tag;
        container.appendChild(span);
      });
    });
  }

  // ── Render Timeline ───────────────────────────────────────
  function renderTimeline(items, containerId) {
    const container = document.getElementById(containerId);
    items.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = `timeline__item reveal${i % 2 === 1 ? ' reveal--delay' : ''}`;
      el.innerHTML = `
        <p class="timeline__date">${item.date}</p>
        <h4 class="timeline__title">${item.title}</h4>
        <p class="timeline__org">${item.organization}</p>
        <p class="timeline__desc">${item.description}</p>
      `;
      container.appendChild(el);
    });
  }

  // ── Render Certificates ───────────────────────────────────
  function renderCertificates() {
    const grid = document.getElementById('certificates-grid');
    certificates.forEach((cert, i) => {
      const card = document.createElement('div');
      card.className = `cert-card reveal${i % 3 === 1 ? ' reveal--delay' : i % 3 === 2 ? ' reveal--delay-2' : ''}`;
      card.innerHTML = `
        <div class="cert-card__thumb">
          <img src="${cert.image}" alt="${cert.title}" loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
          <div class="cert-card__thumb-placeholder" style="display:none">
            <i class="fas fa-certificate"></i>
          </div>
          ${cert.verified ? '<span class="cert-card__verified"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
        </div>
        <div class="cert-card__body">
          <h4 class="cert-card__title">${cert.title}</h4>
          <p class="cert-card__issuer">${cert.issuer}</p>
          <a href="${cert.verifyUrl}" class="cert-card__link" target="_blank" rel="noopener">
            View Certificate <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ── Contact Form ─────────────────────────────────────────
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  });

  // ── Scroll Reveal ─────────────────────────────────────────
  function observeReveals() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  // ── Header Shadow on Scroll ───────────────────────────────
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 50 ? 'var(--shadow-sm)' : 'none';
  });

  // ── Init ──────────────────────────────────────────────────
  populateProfile();
  renderProjects();
  renderSkills();
  renderTimeline(experience, 'experience-list');
  renderTimeline(education, 'education-list');
  renderCertificates();
  observeReveals();
})();
