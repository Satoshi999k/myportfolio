import { useEffect, useMemo, useState } from 'react';

const ROLES = [
  'a Full-Stack Developer',
  'a Problem Solver',
  'an Open-Source Contributor',
  'a Lifelong Learner'
];

const CODE_LINES = [
  '<span class="tok-kw">const</span> <span class="tok-var">developer</span> <span class="tok-punc">=</span> <span class="tok-punc">{</span>',
  '&nbsp;&nbsp;<span class="tok-key">name</span><span class="tok-punc">:</span> <span class="tok-str">"Marlo C. Bohol"</span><span class="tok-punc">,</span>',
  '&nbsp;&nbsp;<span class="tok-key">role</span><span class="tok-punc">:</span> <span class="tok-str">"Full-Stack Developer"</span><span class="tok-punc">,</span>',
  '&nbsp;&nbsp;<span class="tok-key">based</span><span class="tok-punc">:</span> <span class="tok-str">"Philippines"</span><span class="tok-punc">,</span>',
  '&nbsp;&nbsp;<span class="tok-key">stack</span><span class="tok-punc">:</span> <span class="tok-punc">[</span><span class="tok-str">"JS"</span><span class="tok-punc">,</span> <span class="tok-str">"React"</span><span class="tok-punc">,</span> <span class="tok-str">"Node"</span><span class="tok-punc">]</span><span class="tok-punc">,</span>',
  '&nbsp;&nbsp;<span class="tok-key">passion</span><span class="tok-punc">:</span> <span class="tok-str">"building things that matter"</span><span class="tok-punc">,</span>',
  '&nbsp;&nbsp;<span class="tok-key">available</span><span class="tok-punc">:</span> <span class="tok-bool">true</span>',
  '<span class="tok-punc">};</span>'
];

const EDUCATION = [
  { date: '2023 — 2027', title: 'B.S. in Information Technology', sub: 'Davao Oriental State University' },
  { date: '2017 — 2023', title: 'Senior High School, ICT-TVL Computer Programming Strand', sub: 'Mati National Comprehensive High School' },
  { date: '2024', title: 'Certified Web Developer', sub: 'Self-taught, projects & courses' }
];

const SKILLS = [
  { category: 'languages', items: [
    { name: 'JavaScript', slug: 'javascript', variant: 'original' },
    { name: 'TypeScript', slug: 'typescript', variant: 'original' },
    { name: 'Python', slug: 'python', variant: 'original' },
    { name: 'Java', slug: 'java', variant: 'original' },
    { name: 'PHP', slug: 'php', variant: 'original' },
    { name: 'SQL', slug: 'mysql', variant: 'original' }
  ]},
  { category: 'frontend', items: [
    { name: 'React', slug: 'react', variant: 'original' },
    { name: 'Next.js', slug: 'nextjs', variant: 'original', invert: true },
    { name: 'HTML5', slug: 'html5', variant: 'original' },
    { name: 'CSS3', slug: 'css3', variant: 'original' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', variant: 'original' }
  ]},
  { category: 'backend', items: [
    { name: 'Node.js', slug: 'nodejs', variant: 'original' },
    { name: 'Express', slug: 'express', variant: 'original', invert: true },
    { name: 'REST APIs', slug: 'postman', variant: 'original' },
    { name: 'PostgreSQL', slug: 'postgresql', variant: 'original' },
    { name: 'MongoDB', slug: 'mongodb', variant: 'original' }
  ]},
  { category: 'tools', items: [
    { name: 'Git', slug: 'git', variant: 'original' },
    { name: 'GitHub', slug: 'github', variant: 'original', invert: true },
    { name: 'Docker', slug: 'docker', variant: 'original' },
    { name: 'Figma', slug: 'figma', variant: 'original' },
    { name: 'VS Code', slug: 'vscode', variant: 'original' }
  ]}
];

const PROJECTS = [
  {
    name: 'Smart Event Management System',
    desc: 'Event management system for creating and managing events, attendees, and schedules.',
    tags: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'RabbitMQ', 'Docker'],
    github: 'https://github.com/Satoshi999k/Smart-Event-Management-System',
    live: '#'
  },
  {
    name: 'CitiTrack',
    desc: 'A location and tracking application (see repository for full details).',
    tags: ['React', 'Node.js', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Satoshi999k/CitiTrack',
    live: '#'
  },
  {
    name: 'Inventory Tracker',
    desc: 'An inventory management/tracking system for small businesses or projects.',
    tags: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Satoshi999k/inventory_tracker',
    live: '#'
  },
  {
    name: 'Smart Solutions',
    desc: 'A e-commerce platform for selling products and services online, with a focus on computer parts.',
    tags: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Satoshi999k/Smart-Solutions',
    live: '#'
  },
  {
    name: 'DOrSU Voting System',
    desc: 'Voting system built for students at Davao Oriental State University.',
    tags: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Satoshi999k/DOrSU_Voting_System',
    live: '#'
  },
  {
    name: 'Explore Japan',
    desc: 'A travel-related project focused on exploring destinations in Japan.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Satoshi999k/explore-japan',
    live: '#'
  }
];

const CERTIFICATES = [
  {
    title: 'National Certificate II for Computer System Servicing',
    issuer: 'TESDA',
    date: new Date().getFullYear().toString(),
    link: '/images/marlo2.jpg'
  }
];

const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/Satoshi999k', icon: `<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.10-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>` },
  { name: 'LinkedIn', url: '#', icon: `<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z"/>` },
  { name: 'Instagram', url: 'https://www.instagram.com/mrlocbnsbhl_/', icon: `<path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-2.9a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34Z"/>` },
  { name: 'Facebook', url: 'https://web.facebook.com/kraiaudrey', icon: `<path d="M13.5 22v-8.4h2.82l.42-3.28h-3.24V8.2c0-.95.26-1.6 1.63-1.6h1.74V3.67C16.56 3.6 15.6 3.5 14.47 3.5c-2.36 0-3.97 1.44-3.97 4.08v2.74H7.67v3.28h2.83V22h3Z"/>` },
  { name: 'Messenger', url: 'https://m.me/kraiaudrey', icon: `<path d="M12 2C6.48 2 2 6.15 2 11.25c0 2.9 1.45 5.49 3.72 7.18V22l3.4-1.87c.9.25 1.87.38 2.88.38 5.52 0 10-4.15 10-9.26C22 6.15 17.52 2 12 2Zm1.02 12.47-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.9-2.72-5.46 5.82Z"/>` }
];

const STATUS_PATHS = {
  home: '~/portfolio/home.tsx',
  about: '~/portfolio/about.tsx',
  skills: '~/portfolio/skills.json',
  projects: '~/portfolio/projects/',
  certificates: '~/portfolio/certificates.pdf',
  contact: '~/portfolio/contact.md'
};

const iconUrl = (slug) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const PROJECT_TAG_ICONS = {
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  Python: 'python',
  Java: 'java',
  PHP: 'php',
  SQL: 'mysql',
  React: 'react',
  'Next.js': 'nextjs',
  HTML5: 'html5',
  CSS3: 'css3',
  'Tailwind': 'tailwindcss',
  'Tailwind CSS': 'tailwindcss',
  'Node.js': 'nodejs',
  Express: 'express',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Stripe: 'stripe',
  Flask: 'flask'
  , 'REST APIs': 'postman'
  , Docker: 'docker'
  , RabbitMQ: 'rabbitmq'
};

const statusItems = [
  { label: 'Available for work' },
  { label: 'UTF-8' }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roleText, setRoleText] = useState(ROLES[0]);
  const [visibleCodeLines, setVisibleCodeLines] = useState([]);
  const [avatarError, setAvatarError] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [certModalSrc, setCertModalSrc] = useState('');
  const reduceMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    document.title = 'Marlo C. Bohol — Full-Stack Developer';
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const current = ROLES[roleIndex];
      if (!deleting) {
        charIndex += 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, 2000);
          return;
        }
      } else {
        charIndex -= 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          timeoutId = window.setTimeout(tick, 600);
          return;
        }
      }
      timeoutId = window.setTimeout(tick, deleting ? 40 : 70);
    };

    tick();
    return () => window.clearTimeout(timeoutId);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCodeLines(CODE_LINES);
      return;
    }
    let timeoutIds = [];
    CODE_LINES.forEach((line, idx) => {
      timeoutIds.push(
        window.setTimeout(() => {
          setVisibleCodeLines((prev) => [...prev, line]);
        }, idx * 130)
      );
    });
    return () => timeoutIds.forEach((id) => window.clearTimeout(id));
  }, [reduceMotion]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    document.querySelectorAll('section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [reduceMotion]);

  const allSkills = useMemo(
    () => SKILLS.flatMap((group) => group.items),
    []
  );

  const rowA = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const rowB = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <div className="app">
      <header className="editor-topbar">
        <div className="topbar-left">
          <span className="caret">▸</span>
          <span className="proj-name">portfolio</span>
        </div>
        <nav className="tabs" aria-label="Section navigation">
          {Object.entries(STATUS_PATHS).map(([key, path]) => (
            <a
              key={key}
              href={`#${key}`}
              className={`tab ${activeSection === key ? 'active' : ''}`}
              data-target={key}
            >
              {key === 'projects' ? 'Projects/' : `${key}.tsx`}
              <span className="unsaved"></span>
            </a>
          ))}
        </nav>
        <button
          className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`}>
        {Object.keys(STATUS_PATHS).map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className={activeSection === key ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
            data-target={key}
          >
            {key === 'projects' ? 'Projects/' : `${key}.tsx`}
          </a>
        ))}
      </div>

      <main>
        <section id="home" className="section hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">// hello world</p>
              <h1>
                Hi, I'm <span className="accent">Marlo C. Bohol</span>
              </h1>
              <p className="role-line">
                I'm <span className="typed-role">{roleText}</span>
                <span className="cursor">|</span>
              </p>
              <p className="hero-desc">
                I design and build clean, fast, reliable web applications — from the database
                to the pixels on screen. This is where I show my work, my background, and the
                things I've picked up along the way.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a href="#" className="btn btn-ghost" download>
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="hero-code" aria-hidden="true">
              <div className="code-window">
                <div className="code-titlebar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="code-filename">about-me.js</span>
                </div>
                <pre className="code-body">
                  <code>
                    {visibleCodeLines.map((line, index) => (
                      <div
                        key={index}
                        className="code-line"
                        style={{ animationDelay: reduceMotion ? '0s' : `${index * 0.12}s` }}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <p className="eyebrow">// about.tsx</p>
            <h2 className="section-title reveal">Background &amp; Education</h2>
            <div className="about-grid">
              <div className="about-bio reveal">
                <div className="about-avatar" id="aboutAvatar">
                  {!avatarError ? (
                    <img
                      src="/images/marlo.jpg"
                      alt="Marlo C. Bohol"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="avatar-fallback">YN</div>
                  )}
                </div>
                <p>
                  I'm a full-stack developer who enjoys turning fuzzy ideas into working
                  software. I care about clean code, thoughtful UX, and shipping things
                  that actually get used.
                </p>
                <p>
                  Outside of coding, I like exploring new tools, contributing to small
                  open-source projects, and constantly finding new things to learn.
                </p>
              </div>
              <div className="about-timeline reveal">
                <ul className="timeline" id="timelineList">
                  {EDUCATION.map((item) => (
                    <li className="timeline-item" key={item.title}>
                      <span className="timeline-date">{item.date}</span>
                      <div className="timeline-title">{item.title}</div>
                      <div className="timeline-sub">{item.sub}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <p className="eyebrow">// skills.json</p>
            <h2 className="section-title reveal">What I Work With</h2>
            <div className="marquee-wrap reveal">
              <div className="marquee-row">
                <div className="marquee-track" id="marqueeRowA">
                  {[...rowA, ...rowA].map((skill, index) => (
                    <span className="tech-pill" key={`${skill.slug}-${index}`}>
                      <img
                        src={iconUrl(skill.slug)}
                        alt={skill.name}
                        loading="lazy"
                        className={`tech-pill-icon${skill.invert ? ' icon-invert' : ''}`}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="marquee-row reverse">
                <div className="marquee-track" id="marqueeRowB">
                  {[...rowB, ...rowB].map((skill, index) => (
                    <span className="tech-pill" key={`${skill.slug}-${index}`}>
                      <img
                        src={iconUrl(skill.slug)}
                        alt={skill.name}
                        loading="lazy"
                        className={`tech-pill-icon${skill.invert ? ' icon-invert' : ''}`}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="skills-panel reveal">
              <div className="code-titlebar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-filename">skills.json</span>
              </div>
              <div id="skillsList">
                {SKILLS.map((group) => (
                  <div className="skill-group" key={group.category}>
                    <div className="skill-group-key">"{group.category}": [</div>
                    <div className="skill-chips">
                      {group.items.map((skill) => (
                        <span className="chip" key={skill.name}>
                          <img
                            src={iconUrl(skill.slug)}
                            alt={skill.name}
                            loading="lazy"
                            className={`chip-icon${skill.invert ? ' icon-invert' : ''}`}
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="eyebrow">// projects/</p>
            <h2 className="section-title reveal">Selected Work</h2>
            <div className="card-grid" id="projectsGrid">
              {PROJECTS.map((project) => (
                <div className="project-card" key={project.name}>
                  <div className="project-thumb">📁</div>
                  <div className="project-body">
                    <div className="project-title">{project.name}</div>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => {
                        const slug = PROJECT_TAG_ICONS[tag];
                        return (
                          <span className="chip" key={tag}>
                            {slug ? (
                              <img
                                src={iconUrl(slug)}
                                alt={tag}
                                loading="lazy"
                                className="chip-icon"
                              />
                            ) : null}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                        </svg>
                        Code
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/** debug: show how many projects are in the array at runtime */}
            <script dangerouslySetInnerHTML={{ __html: `console.log('PROJECTS count:', ${PROJECTS.length}); setTimeout(()=>console.log('DOM project cards:', document.querySelectorAll('.project-card').length),300);` }} />
          </div>
        </section>

        <section id="certificates" className="section">
          <div className="container">
            <p className="eyebrow">// certificates.pdf</p>
            <h2 className="section-title reveal">Certifications</h2>
            <div className="card-grid" id="certGrid">
              {CERTIFICATES.map((cert) => (
                <div className="cert-card" key={cert.title}>
                  <div className="cert-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="8" r="5" />
                      <path d="M8.5 13 7 22l5-3 5 3-1.5-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-meta">
                      <span className="cert-date">{cert.date}</span>
                        <button
                          type="button"
                          className="cert-link"
                          onClick={(e) => {
                            e.preventDefault();
                            setCertModalSrc(cert.link);
                            setCertModalOpen(true);
                          }}
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <path d="M15 3h6v6" />
                            <path d="M10 14 21 3" />
                          </svg>
                          View credential
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-inner">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              // contact.md
            </p>
            <h2 className="section-title">Let's Build Something</h2>
            <p className="section-lede">
              Have a project in mind, an opportunity to share, or just want to say hi?
              My inbox is open.
            </p>
            <div className="contact-actions">
              <a href="mailto:marlobohol0105@gmail.com" className="btn btn-primary">
                Email Me
              </a>
              <a href="#" className="btn btn-ghost" download>
                Download Resume
              </a>
            </div>
            <div className="social-row">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={social.name}
                  title={social.name}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
                    <g dangerouslySetInnerHTML={{ __html: social.icon }} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {certModalOpen ? (
        <div className="cert-modal-backdrop" role="dialog" aria-modal="true">
          <div className="cert-modal">
            <div className="modal-header">
              <div className="modal-title">{CERTIFICATES[0].title}</div>
              <div className="modal-actions">
                <a href={certModalSrc} download className="modal-download">Download</a>
                <button className="modal-close" onClick={() => setCertModalOpen(false)}>Close</button>
              </div>
            </div>
            <img src={certModalSrc} alt={CERTIFICATES[0].title} />
          </div>
        </div>
      ) : null}

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Marlo C. Bohol — built with HTML, CSS &amp; JS.
        </p>
      </footer>

      <div className="status-bar" id="statusBar">
        <span className="status-left">{STATUS_PATHS[activeSection]}</span>
        <span className="status-right">
          {statusItems.map((item) => (
            <span className="status-item" key={item.label}>
              {item.label === 'Available for work' ? <span className="pulse-dot" /> : null}
              {item.label}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default App;
