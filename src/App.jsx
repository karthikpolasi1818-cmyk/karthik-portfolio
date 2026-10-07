import { useState } from 'react';
import './index.css';

const skills = {
  'Data Analytics': ['Python', 'SQL', 'Pandas', 'NumPy', 'Excel', 'Power BI', 'Data Cleaning', 'EDA', 'ETL', 'Data Validation', 'KPI Reporting'],
  'Data Engineering': ['PostgreSQL', 'SQLAlchemy', 'ETL', 'Data Transformation', 'Data Validation', 'API-based Data Extraction'],
  'AI & Machine Learning': ['Scikit-learn', 'Feature Engineering', 'ML Prediction', 'Anomaly Detection', 'Predictive Analytics'],
  'Automation & Web Data': ['Requests', 'BeautifulSoup', 'Web Scraping', 'Automation'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Streamlit'],
};

const projects = [
  {
    no: '01', label: 'ENTERPRISE ANALYTICS', title: 'EROI — Enterprise Revenue & Operations Intelligence Platform',
    description: 'Enterprise analytics platform that transforms business transaction data into revenue, profit, margin, order-volume and operational KPIs with automated processing and interactive dashboards.',
    stack: ['Python', 'Pandas', 'SQL', 'Streamlit', 'Power BI'],
  },
  {
    no: '02', label: 'AI / DATA INTELLIGENCE', title: 'NEXUS AI — Enterprise Intelligence Platform',
    description: 'Intelligent analytics platform that automates data validation, KPI reporting, anomaly detection and predictive analytics from raw business datasets.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Streamlit', 'Power BI'],
  },
  {
    no: '03', label: 'ANALYTICS PRODUCT', title: 'Nexus Analytics Studio',
    description: 'Interactive Streamlit analytics workspace designed around modular business dashboards for Sales, Financial, Supply Chain, Product, HR and Fraud analysis, turning uploaded datasets into decision-ready insights.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'SQL', 'Analytics'],
  },
  {
    no: '04', label: 'BUSINESS ANALYTICS', title: 'End-to-End Sales Analytics Platform',
    description: 'Processed 1M+ sales records; built ETL pipelines and SQL-based KPI analysis for revenue, profit, retention and regional performance, with Power BI dashboards.',
    stack: ['Python', 'PostgreSQL', 'SQL', 'Pandas', 'SQLAlchemy', 'Power BI'],
  },
  {
    no: '05', label: 'DATA AUTOMATION', title: 'Startup Lead Finder',
    description: 'Automated lead extraction, validation, duplicate handling and CSV/Excel export workflows from public sources for faster prospect research.',
    stack: ['Python', 'BeautifulSoup', 'Web Scraping', 'Automation'],
  },
];

const experience = [
  {
    period: 'JUN 2026 — AUG 2026', role: 'Data Analyst Intern', company: 'Venture Launcher', location: 'Remote',
    points: [
      'Built automated Python workflows for data extraction, scraping and processing.',
      'Cleaned and validated datasets using Python and SQL with data-quality checks.',
      'Performed exploratory data analysis and built KPI reports and Power BI dashboards.',
    ],
  },
];

const education = [
  ['B.Tech, Electronics and Communication Engineering', 'Mahindra University', 'Aug 2023 — Present', 'GPA: 6.54'],
  ['Intermediate (MPC)', 'Tirumala Junior College', 'Jun 2021 — May 2023', 'Score: 929/1000'],
  ['SSC', 'Bhashyam High School', 'May 2020 — Jun 2021', 'Score: 597/600'],
];

const training = [
  ['Gen AI', 'Infosys', 'Jun — Jul 2025'],
  ['IoT-Network Specialist', 'Reliance Foundation', 'Nov — Dec 2025'],
  ['JavaScript for Beginners', 'Udemy', 'Sep 2025'],
];

function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="app">
      <header className="header">
        <nav className="nav container">
          <a className="logo" href="#top" onClick={close}>PK<span>.</span></a>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Open navigation">☰</button>
          <div className={`links ${open ? 'open' : ''}`}>
            <a href="#about" onClick={close}>About</a>
            <a href="#experience" onClick={close}>Experience</a>
            <a href="#skills" onClick={close}>Skills</a>
            <a href="#projects" onClick={close}>Projects</a>
            <a href="#education" onClick={close}>Education</a>
            <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-left">
            <div className="eyebrow"><span /> DATA ANALYST · PYTHON · SQL · POWER BI</div>
            <h1>Turning data into <strong>clear decisions.</strong></h1>
            <p className="hero-text">I’m Polasi Karthik, a B.Tech Electronics & Communication Engineering student with hands-on experience in Python, SQL, ETL, data analytics, KPI reporting, machine learning and automation.</p>
            <div className="buttons">
              <a className="button primary" href="#projects">Explore my work <b>↗</b></a>
              <a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume</a>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/karthik-polasi-70b40a333/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/karthikpolasi1818-cmyk" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:karthikpolasi1818@gmail.com">Email</a>
              <a href="tel:+917013166937">+91 7013166937</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-top"><span>ANALYTICS WORKFLOW</span><i>● DATA → INSIGHT</i></div>
            <div className="pipeline">
              <div><small>01</small><b>Extract</b><span>CSV · Excel · SQL · APIs</span></div>
              <div className="arrow">→</div>
              <div><small>02</small><b>Transform</b><span>Python · ETL · EDA</span></div>
              <div className="arrow">→</div>
              <div><small>03</small><b>Decide</b><span>KPI · Power BI</span></div>
            </div>
            <div className="insight"><span>Analyst mindset</span><strong>Clean data. Find patterns. Explain the business impact.</strong></div>
          </div>
        </section>

        <section className="stats container">
          <div><strong>1M+</strong><span>sales records processed</span></div>
          <div><strong>5</strong><span>featured analytics projects</span></div>
          <div><strong>3</strong><span>training credentials</span></div>
          <div><strong>1</strong><span>data analyst internship</span></div>
        </section>

        <section id="about" className="section container">
          <div className="section-head"><span>01 · ABOUT</span><h2>Analytical thinking with an <em>engineering foundation.</em></h2></div>
          <div className="about-grid">
            <div className="about-copy">
              <p>My work focuses on turning raw data into reliable analysis and business insights. I enjoy working across data extraction, cleaning, validation, exploratory analysis, KPI reporting and visualization.</p>
              <p>My engineering background also helps me approach analytics problems systematically, automate repetitive workflows and build practical data products with Python, SQL and modern analytics tools.</p>
            </div>
            <div className="focus-list">
              {['Data Analytics', 'Business Intelligence', 'Python & SQL', 'ETL & Automation', 'Predictive Analytics'].map((x, i) => <div key={x}><small>0{i + 1}</small><b>{x}</b><span>↗</span></div>)}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-head"><span>02 · EXPERIENCE</span><h2>Hands-on work with <em>real data workflows.</em></h2></div>
          <div className="timeline">
            {experience.map((job) => <article className="job" key={job.company}>
              <div className="job-meta"><span>{job.period}</span><span>{job.location}</span></div>
              <div className="job-main"><h3>{job.role}</h3><h4>{job.company}</h4><ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
            </article>)}
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-head"><span>03 · SKILLS</span><h2>The toolkit behind my <em>analysis.</em></h2></div>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items], index) => <div className="skill-card" key={group}><div className="skill-number">{String(index + 1).padStart(2, '0')}</div><h3>{group}</h3><div className="chips">{items.map((s) => <span key={s}>{s}</span>)}</div></div>)}
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head project-head"><div><span>04 · SELECTED PROJECTS</span><h2>Projects built around <em>data and outcomes.</em></h2></div><p>Analytics, intelligence, automation and decision-support projects.</p></div>
          <div className="project-grid">
            {projects.map((project) => <article className="project" key={project.title}>
              <div className="project-top"><small>{project.no}</small><span>{project.label}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">{project.stack.map((s) => <span key={s}>{s}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section id="education" className="section container">
          <div className="section-head"><span>05 · EDUCATION & TRAINING</span><h2>Education, learning & <em>credentials.</em></h2></div>
          <div className="edu-grid">
            <div><h4 className="label">EDUCATION</h4>{education.map((e) => <article className="edu" key={e[1]}><div><span>{e[2]}</span><h3>{e[0]}</h3><p>{e[1]}</p></div><strong>{e[3]}</strong></article>)}</div>
            <div><h4 className="label">TRAINING / CERTIFICATIONS</h4>{training.map((t) => <article className="credential" key={t[0]}><span>{t[2]}</span><div><h3>{t[0]}</h3><p>{t[1]}</p></div><b>✓</b></article>)}</div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <div><span className="eyebrow">06 · CONTACT</span><h2>Let’s turn data into <em>something useful.</em></h2><p>Open to Data Analyst, Business Intelligence, analytics and entry-level technology opportunities.</p></div>
          <div className="contact-actions"><a className="button primary" href="mailto:karthikpolasi1818@gmail.com?subject=Portfolio%20Opportunity">Start a conversation ↗</a><a className="button outline" href="https://www.linkedin.com/in/karthik-polasi-70b40a333/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="button outline" href="https://github.com/karthikpolasi1818-cmyk" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </section>
      </main>

      <footer className="footer container"><span>© 2026 Polasi Karthik</span><span>Data Analytics · Python · SQL · Power BI</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
