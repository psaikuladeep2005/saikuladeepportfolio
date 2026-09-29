import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowRight,
  faBars,
  faBolt,
  faBookOpen,
  faBriefcase,
  faCertificate,
  faCheck,
  faCode,
  faDatabase,
  faEnvelope,
  faExternalLinkAlt,
  faEye,
  faLaptopCode,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faPlus,
  faTrophy,
  faUsers,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGitAlt,
  faLinkedinIn,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import './styles.css';

const navigation = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

const skills = [
  { icon: faCode, title: 'Programming', tools: ['C', 'C++', 'Python'], tone: 'sky' },
  { icon: faBookOpen, title: 'Core CS', tools: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS'], tone: 'blue' },
  { icon: faReact, title: 'Frameworks', tools: ['Django', 'Django REST Framework', 'React'], tone: 'cyan' },
  { icon: faDatabase, title: 'Tools & Data', tools: ['PostgreSQL', 'Git & GitHub', 'Linux (Basics)'], tone: 'ice' },
];

const coursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Computer Organization & Architecture',
  'Database Management Systems',
  'Object-Oriented Programming',
];

const projects = [
  {
    number: '01',
    title: 'SREEVIGNIKAA Sarees',
    subtitle: 'E-Commerce Platform',
    description: 'A responsive saree e-commerce platform with a product catalog, detailed product pages, and interactive quick-view galleries.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    highlights: [
      'Integrated Supabase for product data management and cloud image storage, enabling dynamic product listings and image galleries.',
      'Built an admin dashboard to manage products, categories, pricing, availability, and product images.',
      'Designed a premium boutique interface with responsive layouts, product specifications, and WhatsApp integration for customer inquiries.',
    ],
    year: '2026',
    live: 'https://sree-vignikaa.vercel.app/',
    github: 'https://github.com/psaikuladeep2005/SreeVignikaa',
    visual: 'sarees',
    label: 'Featured project',
  },
  {
    number: '02',
    title: 'Smart Tollgate Optimization System',
    description: 'An intelligent toll plaza management system for lane-wise vehicle detection, classification, and traffic monitoring using computer vision techniques.',
    stack: ['Python', 'OpenCV', 'Flask', 'Computer Vision'],
    highlights: [
      'Implemented waiting-time estimation based on vehicle type and queue length to recommend the optimal toll lane and reduce congestion.',
      'Built a real-time analytics dashboard to visualize vehicle counts, lane occupancy, congestion levels, and best-lane recommendations.',
      'Designed and evaluated single-camera and multi-camera monitoring architectures, improving lane-level detection accuracy and scalability.',
    ],
    year: '2026',
    github: 'https://github.com/psaikuladeep2005/TollOS',
    visual: 'toll',
    label: 'Computer vision',
  },
  {
    number: '03',
    title: 'BlaBlaBike',
    subtitle: 'Full Stack Ride Sharing System',
    description: 'A full-stack ride sharing system with RESTful APIs in Python for ride publishing, booking workflows, and seat management using Django REST Framework.',
    stack: ['React', 'Django REST Framework', 'PostgreSQL'],
    highlights: [
      'Implemented secure authentication with role-based access control and real-time Accept/Reject booking logic.',
      'Incorporated geolocation-based search with autosuggest and normalized coordinates for accurate ride matching.',
    ],
    year: '2025',
    github: 'https://github.com/psaikuladeep2005/BlaBlaBilke',
    visual: 'bike',
    label: 'Full-stack',
  },
  {
    number: '04',
    title: 'Campus Marketplace for Seniors & Juniors',
    description: 'A campus-exclusive marketplace enabling students to trade academic resources efficiently.',
    stack: ['Python', 'Django', 'HTML', 'CSS'],
    highlights: [
      'Implemented user authentication, categorized listings, search functionality, and secure workflows.',
      'Embedded a real-time chat feature to support direct buyer–seller communication.',
    ],
    year: '2024',
    github: 'https://github.com/saikuladeepgithub/E-Commerce',
    visual: 'bike',
    label: 'Marketplace',
  },
  {
    number: '05',
    title: 'Event Management System',
    subtitle: 'Hackathon Project',
    description: 'A centralized platform for event creation, volunteer registration, and analytics tracking.',
    stack: ['Python', 'Django', 'HTML', 'CSS'],
    highlights: [
      'Integrated group chat, automated email notifications, reviews, and photo gallery features.',
      'Applied chatbot integration to enable instant retrieval of event-related information.',
    ],
    year: '2023',
    github: 'https://github.com/saikuladeepgithub/HackathonSRC',
    visual: 'toll',
    label: 'Hackathon',
  },
  {
    number: '06',
    title: 'Robotics Club Website',
    description: 'Designed and maintained the official Robotics Club website with responsive and accessible layouts.',
    stack: ['WordPress', 'HTML', 'CSS'],
    highlights: ['Improved website performance and mobile responsiveness across devices.'],
    year: '2023',
    live: 'https://rguktrkv.ac.in/robotics/',
    visual: 'sarees',
    label: 'Web platform',
  },
  {
    number: '07',
    title: 'Alumni Cell Website',
    description: 'Contributed to the development and maintenance of the official Alumni Cell website to enhance alumni–student engagement.',
    stack: ['WordPress', 'HTML', 'CSS'],
    highlights: ['Worked on content structuring, UI improvements, and regular updates in coordination with the Alumni Cell team.'],
    year: '2024',
    live: 'https://rguktrkv.ac.in/alumni',
    visual: 'bike',
    label: 'Web platform',
  },
];

const experience = [
  {
    title: 'Tech Team Coordinator',
    organization: 'Alumni Cell (RGURAA)',
    dates: '2024 — Present',
    icon: faUsers,
    detail: 'Contributed to development and maintenance of alumni engagement platforms, supporting 500+ users and improving site reliability.',
  },
  {
    title: 'Website Maintenance Team',
    organization: 'Robotics Club',
    dates: '2023 — Present',
    icon: faLaptopCode,
    detail: 'Performed website maintenance and feature updates, improving mobile responsiveness and reducing page load time by 20%.',
  },
  {
    title: 'Accountant',
    organization: 'Helping Hands Organization',
    dates: '2024 — 2025',
    icon: faBriefcase,
    detail: 'Maintained financial records and monitored budget allocation for 10+ social initiatives, ensuring accurate expense tracking and reporting.',
  },
];

const education = [
  {
    credential: 'B.Tech in Computer Science Engineering',
    institution: 'Rajiv Gandhi University of Knowledge Technologies, RK Valley',
    dates: '2023 — Present',
    result: 'CGPA: 9.01 / 10',
  },
  {
    credential: 'Pre-University Course (MPC)',
    institution: 'Rajiv Gandhi University of Knowledge Technologies, RK Valley',
    dates: '2021 — 2023',
    result: 'CGPA: 10.0 / 10',
  },
  {
    credential: 'Secondary School Certificate (SSC), Sri Satya Sai District',
    institution: 'Andhra Pradesh Residential School of Excellence, Kodigenahalli, Hindupur',
    dates: '2016 — 2021',
    result: 'CGPA: 9.8 / 10',
  },
];

function useActiveSection() {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return active;
}

function AuroraBackdrop() {
  return <div className="aurora" aria-hidden="true"><span className="aurora-orb orb-one" /><span className="aurora-orb orb-two" /><span className="aurora-orb orb-three" /><span className="aurora-grid" /></div>;
}

function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <nav className="navbar glass" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={close} aria-label="Sai Kuladeep home">SK<span>.</span></a>
        <div className="nav-links" aria-label="Section links">
          {navigation.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>{label}</a>)}
        </div>
        <a className="resume-link" href="mailto:psaikuladeep2005@gmail.com?subject=Resume%20Request" title="Request a résumé">Résumé <FontAwesomeIcon icon={faArrowRight} /></a>
        <button className="menu-button" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen((isOpen) => !isOpen)}><FontAwesomeIcon icon={open ? faXmark : faBars} /></button>
      </nav>
      <div className={`mobile-menu glass ${open ? 'open' : ''}`} aria-hidden={!open}>
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={close}>{label}<FontAwesomeIcon icon={faArrowRight} /></a>)}
        <a href="mailto:psaikuladeep2005@gmail.com?subject=Resume%20Request" onClick={close} className="mobile-resume">Request résumé</a>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, children, align = '' }) {
  return <div className={`section-heading ${align}`}><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}

function TechTile({ icon, label, className }) {
  return <div className={`tech-tile glass ${className}`}><span className="tech-icon"><FontAwesomeIcon icon={icon} /></span><span>{label}</span></div>;
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-content reveal">
        <div className="availability"><span className="status-dot" />Open to opportunities</div>
        <p className="hero-kicker">Hello, I&apos;m</p>
        <h1 id="hero-title">Sai <span>Kuladeep.</span><br />Building efficient software with purpose.</h1>
        <p className="hero-copy">A final-year Computer Science Engineering student focused on scalable web applications, systems fundamentals, Python development, and efficient, impactful software solutions.</p>
        <div className="hero-actions"><a className="button primary-button" href="#projects">Explore my work <FontAwesomeIcon icon={faArrowRight} /></a><a className="button secondary-button" href="#contact">Contact me</a></div>
        <div className="social-row"><span>Find me on</span><a href="https://github.com/sai-kuladeep" target="_blank" rel="noreferrer" aria-label="Sai Kuladeep on GitHub"><FontAwesomeIcon icon={faGithub} /></a><a href="https://linkedin.com/in/sai-kuladeep" target="_blank" rel="noreferrer" aria-label="Sai Kuladeep on LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
      </div>
      <div className="hero-art reveal" aria-label="Technology focus: React, Python, Django, PostgreSQL, C and C plus plus, OpenCV, Git and GitHub, and REST APIs">
        <div className="hero-orbit" />
        <div className="hero-focus glass"><span className="focus-ring"><FontAwesomeIcon icon={faLaptopCode} /></span><p>B.Tech CSE<br /><strong>Final year</strong></p></div>
        <TechTile className="tile-react" icon={faReact} label="React" /><TechTile className="tile-python" icon={faPython} label="Python" /><TechTile className="tile-django" icon={faCode} label="Django" /><TechTile className="tile-postgres" icon={faDatabase} label="PostgreSQL" />
        <div className="skill-chip chip-cpp glass"><FontAwesomeIcon icon={faCode} /><span>C / C++</span></div>
        <div className="skill-chip chip-opencv glass"><FontAwesomeIcon icon={faEye} /><span>OpenCV</span></div>
        <div className="skill-chip chip-git glass"><FontAwesomeIcon icon={faGitAlt} /><span>Git</span></div>
        <div className="skill-chip chip-api glass"><FontAwesomeIcon icon={faCode} /><span>REST APIs</span></div>
        <div className="art-spark spark-one" /><div className="art-spark spark-two" />
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About"><span>Scroll to explore</span><FontAwesomeIcon icon={faArrowDown} /></a>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container about-layout">
        <SectionHeading eyebrow="About me" title={<>A strong foundation.<br /><em>A practical mindset.</em></>}>
          Motivated by performance-driven systems, low-level computing, and AI/ML fundamentals — with a focus on applying technical skills to meaningful software problems.
        </SectionHeading>
        <article className="about-note glass reveal">
          <div className="about-note-top"><span className="note-mark">01</span><FontAwesomeIcon icon={faBolt} /></div>
          <h3>Turning technical curiosity into useful products.</h3>
          <p>Experienced in building scalable web applications using Django and REST APIs, with hands-on development in Linux environments. Proficient in Python scripting and focused on thoughtful, efficient implementation.</p>
          <div className="note-line"><span /> <span /> <span /></div>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skill-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading eyebrow="Capabilities" title="A grounded, growing technical toolkit." align="center">A balance of computer science fundamentals, full-stack development, scripting, and practical application design.</SectionHeading>
        <div className="skill-grid">
          {skills.map((skill, index) => <article className={`skill-card glass reveal delay-${index + 1}`} key={skill.title}><div className={`skill-icon ${skill.tone}`}><FontAwesomeIcon icon={skill.icon} /></div><h3>{skill.title}</h3><ul>{skill.tools.map((tool) => <li key={tool}><FontAwesomeIcon icon={faCheck} />{tool}</li>)}</ul></article>)}
        </div>
        <div className="coursework-panel glass reveal">
          <div className="coursework-icon"><FontAwesomeIcon icon={faBookOpen} /></div>
          <div><p className="coursework-label">Core coursework</p><div className="coursework-tags">{coursework.map((course) => <span key={course}>{course}</span>)}</div></div>
        </div>
        <p className="skill-footnote">Also working with Python scripting, REST API development, API design, problem solving, object-oriented programming, and basic AI/ML concepts.</p>
      </div>
    </section>
  );
}

function ProjectArt({ variant }) {
  if (variant === 'sarees') return <div className="project-art sarees-art" aria-hidden="true"><span className="saree-swatch swatch-1" /><span className="saree-swatch swatch-2" /><span className="saree-swatch swatch-3" /><span className="saree-thread" /></div>;
  if (variant === 'toll') return <div className="project-art toll-art" aria-hidden="true"><div className="lane lane-left"><i /><i /><i /></div><div className="lane lane-middle"><i /><i /><i /></div><div className="lane lane-right"><i /><i /><i /></div><span className="scanner" /><span className="toll-camera"><FontAwesomeIcon icon={faCode} /></span></div>;
  return <div className="project-art bike-art" aria-hidden="true"><span className="route route-a" /><span className="route route-b" /><span className="route-pin pin-one" /><span className="route-pin pin-two" /><span className="bike-symbol"><FontAwesomeIcon icon={faCode} /></span></div>;
}

function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects-heading-row"><SectionHeading eyebrow="Academic & technical projects" title="Ideas brought all the way to working builds.">A selection of e-commerce, computer vision, community, and full-stack projects built across the last several years.</SectionHeading><a className="text-link" href="https://github.com/sai-kuladeep" target="_blank" rel="noreferrer">More on GitHub <FontAwesomeIcon icon={faArrowRight} /></a></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-card glass reveal project-${index + 1}`} key={project.title}>
              <ProjectArt variant={project.visual} />
              <div className="project-content">
                <div className="project-meta"><span>{project.number}</span><span>{project.year}</span></div>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                <p>{project.description}</p>
                <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <details className="project-details"><summary>Project highlights <FontAwesomeIcon icon={faPlus} /></summary><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></details>
                <div className="project-actions">
                  {project.live && <a className="button compact-button primary-button" href={project.live} target="_blank" rel="noreferrer">{project.github ? 'Live site' : 'Visit site'} <FontAwesomeIcon icon={faExternalLinkAlt} /></a>}
                  {project.github && <a className="project-github" href={project.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} />Source</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading eyebrow="Work history" title="Contributing beyond the classroom." align="center">Responsibilities across student organizations, platform maintenance, coordination, and financial operations.</SectionHeading>
        <div className="experience-list">
          {experience.map((item, index) => <article className={`experience-card glass reveal delay-${index + 1}`} key={item.title}><div className="experience-icon"><FontAwesomeIcon icon={item.icon} /></div><div className="experience-info"><div className="experience-top"><div><h3>{item.title}</h3><p>{item.organization}</p></div><time>{item.dates}</time></div><p className="experience-detail">{item.detail}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-title">
      <div className="container education-layout">
        <div>
          <SectionHeading eyebrow="Education & recognition" title={<>A record of consistency<br />and <em>curiosity.</em></>}>
            Building a formal foundation in computer science while continuing to learn through independent projects and team contributions.
          </SectionHeading>
          <div className="recognition-card glass reveal"><span className="recognition-icon"><FontAwesomeIcon icon={faTrophy} /></span><div><p>Recognition</p><h3>Qualified GATE 2026</h3><span>Computer Science Engineering</span></div></div>
        </div>
        <div className="education-stack">
          {education.map((item, index) => <article className={`education-card glass reveal delay-${index + 1}`} key={item.credential}><div><span className="education-year">{item.dates}</span><h3>{item.credential}</h3><p>{item.institution}</p></div><strong>{item.result}</strong></article>)}
          <article className="certification-card glass reveal"><div className="certification-heading"><span><FontAwesomeIcon icon={faCertificate} /></span><div><p>Certifications</p><h3>HackerRank</h3></div></div><div className="certification-tags"><span>Problem Solving (Basic)</span><span>Python (Basic)</span></div></article>
          <div className="interest-bar"><span>Areas of interest</span><p>Machine Learning <i /> Software Development <i /> Research <i /> Higher Studies</p></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container"><div className="contact-panel glass reveal">
        <div className="contact-copy"><p className="eyebrow"><span />Let&apos;s connect</p><h2 id="contact-title">Have an idea?<br /><em>Let&apos;s make it useful.</em></h2><p>Whether you&apos;re discussing a role, a collaboration, or a project, I&apos;d be glad to hear from you.</p></div>
        <div className="contact-actions"><a className="button primary-button" href="mailto:psaikuladeep2005@gmail.com"><FontAwesomeIcon icon={faPaperPlane} />Start a conversation</a><a className="contact-email" href="mailto:psaikuladeep2005@gmail.com"><FontAwesomeIcon icon={faEnvelope} />psaikuladeep2005@gmail.com</a><a className="contact-email" href="tel:+917816012320"><FontAwesomeIcon icon={faPhone} />+91 78160 12320</a><span className="location"><FontAwesomeIcon icon={faLocationDot} />Open to opportunities</span></div>
        <div className="contact-sun" aria-hidden="true" />
      </div></div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="wordmark" href="#top">SK<span>.</span></a><p>© {new Date().getFullYear()} Sai Kuladeep. Crafted with care.</p><div className="footer-links"><a href="https://github.com/sai-kuladeep" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a><a href="https://linkedin.com/in/sai-kuladeep" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a><a href="#top" aria-label="Back to top"><FontAwesomeIcon icon={faPlus} /></a></div></div></footer>;
}

function App() {
  return <><AuroraBackdrop /><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
