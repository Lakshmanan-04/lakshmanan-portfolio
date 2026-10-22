import { useState } from "react";
import "./index.css";

const profile = {
  name: "Lakshmanan Loganathan",
  github: "https://github.com/Lakshmanan-04",
  email: "lakshmananloganathan317@gmail.com",
};

const projects = [
  {
    number: "01",
    label: "MACHINE LEARNING · MOBILITY",
    title: "EV Battery Health Prediction",
    summary:
      "Exploring how machine learning can help estimate battery health and make EV battery data more useful.",
    contribution:
      "Used Gradient Boosting to estimate battery State of Health (SOH) from relevant battery performance parameters. The project explores model evaluation and how predictions can support battery performance analysis and predictive maintenance.",
    stack: ["Python", "Gradient Boosting", "Scikit-learn", "Pandas", "NumPy"],
    symbol: "01 / EV",
    visual: "battery",
  },
  {
    number: "02",
    label: "COMPUTER VISION · ACCESSIBILITY",
    title: "Sign Language to Text",
    summary:
      "A computer-vision project exploring how recognized sign gestures can be translated into text.",
    contribution:
      "Explored a CNN-based workflow to classify sign language gestures from images or video frames and convert recognized signs into readable text, with a backend and interface for displaying predictions.",
    stack: ["Python", "Computer Vision", "Machine Learning"],
    symbol: "02 / CV",
    visual: "vision",
  },
  {
    number: "03",
    label: "IOT · ENVIRONMENT",
    title: "Air Quality Monitoring",
    summary:
      "An IoT system for collecting environmental readings through sensors connected to an ESP32.",
    contribution:
      "Designed a sensor-based monitoring workflow using ESP32 and MQ-series gas sensors to collect environmental readings and visualize air-quality trends through ThingSpeak. The project explores how connected devices can help make local environmental data easier to observe.",
    stack: ["ESP32", "MQ Sensors", "IoT", "ThingSpeak"],
    symbol: "03 / IOT",
    visual: "air",
  },
  {
    number: "04",
    label: "DATABASES · SOFTWARE",
    title: "Animal Shelter Management",
    summary:
      "A relational database project for organizing animal, shelter, and adoption records.",
    contribution:
      "Designed normalized MySQL tables and relationships to manage animal profiles, shelter information, adoption applications, and adopter details. Used SQL queries, joins, constraints, and transaction-aware operations to maintain consistent records.",
    stack: ["MySQL", "SQL", "Database Design", "ER Modeling"],
    symbol: "04 / DATA",
    visual: "database",
  },
];

const skillGroups = [
  { name: "Programming", skills: ["Python", "Java", "C", "SQL"] },
  { name: "Web", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { name: "Data & AI", skills: ["Pandas", "NumPy", "Scikit-learn", "ML fundamentals"] },
  { name: "Tools & systems", skills: ["Git", "GitHub", "VS Code", "Excel", "ESP32"] },
];

const learning = [
  "Oracle Foundation Certification",
  "IBM Cognitive Class AI",
  "Google Campaign Manager 360",
  "AWS DynamoDB Troubleshooting",
  "Microsoft Azure Developer certification",
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function ProjectVisual({ type, number }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <span className="visual-index">{number}</span>
      {type === "battery" && (
        <div className="battery-art">
          <div className="battery-cap" />
          <div className="battery-body"><div className="battery-charge" /><span>HEALTH<br />MODEL</span></div>
          <div className="battery-orbit orbit-a" /><div className="battery-orbit orbit-b" />
        </div>
      )}
      {type === "vision" && (
        <div className="vision-art"><div className="scan-frame"><i /><i /><i /><i /><span>GESTURE<br />RECOGNITION</span></div><div className="scan-line" /></div>
      )}
      {type === "air" && (
        <div className="air-art"><div className="air-ring ring-one" /><div className="air-ring ring-two" /><div className="air-core"><span>PM</span><strong>2.5</strong><small>SENSOR DATA</small></div><span className="air-node node-one" /><span className="air-node node-two" /><span className="air-node node-three" /></div>
      )}
      {type === "database" && (
        <div className="database-art"><div className="db-table"><span>ID</span><span>ANIMAL</span><span>STATUS</span><i /><i /><i /></div><div className="db-link-line"/><div className="db-table db-table-small"><span>ADOPTION</span><i /><i /></div></div>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const resumeAvailable = true;
  const navItems = ["About", "Projects", "AI Workflow", "Role Fit", "Skills", "Journey", "Contact"];
  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setEmailCopied(true);
    } catch {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.setAttribute("readonly", "");
      field.style.position = "absolute";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(field);
      setEmailCopied(copied);
    }
    window.setTimeout(() => setEmailCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Lakshmanan — home">L<span>.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          <span /><span />
        </button>
        <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={closeMenu}>{item}</a>)}
          {resumeAvailable ? <a className="nav-cta" href={`${import.meta.env.BASE_URL}resume.pdf`} download>Resume <Arrow diagonal /></a> : <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <Arrow diagonal /></a>}
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-main">
            <p className="overline"><span className="overline-line" /> COMPUTER SCIENCE & ENGINEERING</p>
            <h1>Building useful<br />things with <span>technology.</span></h1>
            <p className="hero-lede">I'm {profile.name.split(" ")[0]}, a CSE student interested in software engineering, machine learning, data, and connected systems.</p>
            <div className="hero-cta-row">
              <a className="button button-light" href="#projects">Explore selected work <Arrow /></a>
              {resumeAvailable ? <a className="button button-quiet" href={`${import.meta.env.BASE_URL}resume.pdf`} download>Download résumé <Arrow diagonal /></a> : <a className="button button-quiet" href="#contact">Résumé available on request <Arrow diagonal /></a>}
            </div>
            <div className="hero-meta">
              <span>CHENNAI, INDIA</span><span className="meta-divider" /><span>GRADUATING 2027</span>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract illustration inspired by connected systems">
            <div className="art-caption">FIG. 01 <span>— SYSTEMS IN MOTION</span></div>
            <div className="art-grid" />
            <div className="art-disc disc-back" /><div className="art-disc disc-front" />
            <div className="art-orbit orbit-large" /><div className="art-orbit orbit-small" />
            <div className="art-node art-node-one" /><div className="art-node art-node-two" /><div className="art-node art-node-three" />
            <div className="art-label label-one">DATA <span>→</span> INSIGHT</div>
            <div className="art-label label-two">IDEA / 001</div>
            <div className="art-bottom-note">Curiosity, made tangible.</div>
          </div>
          <a className="scroll-note" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-band" id="about">
          <div className="wrap intro-layout">
            <p className="section-index">01 / ABOUT</p>
            <div className="intro-copy">
              <h2>Curious by nature.<br /><span>Practical by design.</span></h2>
              <div className="intro-columns">
                <p>I'm studying Computer Science and Engineering at SRM Institute of Science and Technology. I enjoy taking ideas from a rough problem statement to something people can understand, test, and use.</p>
                <p>My academic work spans predictive modelling, computer vision, and IoT. I'm looking for a graduate opportunity where I can keep learning, collaborate with thoughtful teams, and contribute to real products.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="projects">
          <div className="section-topline"><p className="section-index">02 / SELECTED WORK</p><p className="section-aside">ACADEMIC & PERSONAL PROJECTS</p></div>
          <div className="section-title-row"><h2>Ideas, explored<br /><span>through projects.</span></h2><p>Academic and personal work across electric mobility, accessibility, connected environments, and database design.</p></div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className={`project-row ${expandedProject === project.number ? "project-expanded" : ""}`} key={project.number}>
                <ProjectVisual type={project.visual} number={project.symbol} />
                <div className="project-content">
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  {expandedProject === project.number && <div className="project-detail"><p><strong>Approach & contribution</strong></p><p>{project.contribution}</p><p className="detail-note">Focus: applying technical concepts to a practical problem, documenting the workflow, and evaluating how the solution can be useful.</p></div>}
                  <button className="text-action" type="button" onClick={() => setExpandedProject(expandedProject === project.number ? null : project.number)} aria-expanded={expandedProject === project.number}>{expandedProject === project.number ? "Show less" : "Read project notes"} <Arrow diagonal /></button>
                </div>
                <span className="project-count">{project.number}</span>
              </article>
            ))}
          </div>
          <div className="project-links-row"><p className="section-footnote">Project descriptions summarise the work; repositories and demos are linked only when their exact public URLs have been verified.</p><a className="text-action github-project-link" href={profile.github} target="_blank" rel="noreferrer">Browse GitHub profile <Arrow diagonal /></a></div>
        </section>

        <section className="section wrap ai-workflow-section" id="ai-workflow">
          <div className="section-topline"><p className="section-index">03 / AI WORKFLOW</p><p className="section-aside">CONCEPT CASE STUDY</p></div>
          <div className="section-title-row"><h2>From prompt<br /><span>to useful output.</span></h2><p>A proposed workflow for exploring AI tools in design and documentation, with human review at every important step.</p></div>
          <div className="workflow-grid">
            <article className="workflow-step"><span>01</span><h3>Define the task</h3><p>Start with a specific design or documentation problem, the intended audience, and what a useful result should achieve.</p></article>
            <article className="workflow-step"><span>02</span><h3>Explore and iterate</h3><p>Compare prompts and tool outputs, record what changes between iterations, and refine the workflow based on observed results.</p></article>
            <article className="workflow-step"><span>03</span><h3>Validate before use</h3><p>Review generated content for accuracy, usability, consistency, and unsupported claims before incorporating it into a final deliverable.</p></article>
            <article className="workflow-step"><span>04</span><h3>Document the method</h3><p>Capture the selected tool, prompt approach, limitations, review checklist, and lessons learned so the process can be repeated.</p></article>
          </div>
          <div className="workflow-example">
            <p className="project-label">ILLUSTRATIVE EXAMPLE · NOT A CLAIM OF COMPLETED WORK</p>
            <h3>Example task: turn a complex feature into a clear explanation</h3>
            <div className="workflow-example-grid">
              <p><strong>Input</strong><span>A feature description and its intended audience.</span></p>
              <p><strong>AI assistance</strong><span>Draft a plain-language summary and a structured outline.</span></p>
              <p><strong>Human review</strong><span>Check each statement against the source, remove unsupported details, and test clarity.</span></p>
              <p><strong>Output</strong><span>A reviewed explanation with assumptions and gaps made explicit.</span></p>
            </div>
          </div>
          <p className="section-footnote">This is an illustrative workflow to demonstrate an approach. It should be replaced or supplemented with a real experiment, prompts, output comparisons, and observations after you conduct one.</p>
        </section>

        <section className="section wrap role-fit-section" id="role-fit">
          <div className="section-topline"><p className="section-index">04 / ROLE FIT</p><p className="section-aside">INTEREST IN AI × MOBILITY × EXPERIENCE</p></div>
          <div className="section-title-row"><h2>Technology with<br /><span>a real-world purpose.</span></h2><p>Why the intersection of AI, product thinking, and electric mobility interests me.</p></div>
          <div className="role-fit-grid">
            <article className="role-fit-card"><span>01 / MOBILITY</span><h3>Grounded in a relevant problem space</h3><p>My EV battery health project introduced me to using data and predictive modelling to explore battery performance. It gives me a starting point for learning more about the questions that matter in electric mobility.</p></article>
            <article className="role-fit-card"><span>02 / APPLIED AI</span><h3>Curious, but careful with outputs</h3><p>I’m interested in AI as a practical tool: trying approaches, comparing results, checking them against reliable information, and being clear about limitations instead of treating generated output as automatically correct.</p></article>
            <article className="role-fit-card"><span>03 / PRODUCT & DESIGN</span><h3>Make complex things easier to use</h3><p>I value clear information, considered interaction, and interfaces that help people understand what to do next. I want to build on my technical foundation by learning from real users and product teams.</p></article>
          </div>
          <p className="section-footnote">This section describes my interests and learning goals; it does not imply employment at Ather or experience with Ather products.</p>
        </section>

        <section className="skills-section" id="skills">
          <div className="wrap skills-wrap">
            <div className="section-topline"><p className="section-index">05 / TOOLKIT</p><p className="section-aside">A WORK IN PROGRESS</p></div>
            <div className="section-title-row"><h2>Tools for<br /><span>thinking & making.</span></h2><p>A practical toolkit across programming, web development, data, and connected devices. I focus on learning the right tool for the problem.</p></div>
            <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-group" key={group.name}><span className="skill-group-index">0{index + 1}</span><h3>{group.name}</h3><div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section className="section wrap" id="journey">
          <div className="section-topline"><p className="section-index">06 / JOURNEY</p><p className="section-aside">EDUCATION · EXPERIENCE · LEARNING</p></div>
          <div className="journey-grid">
            <div><h2>Learning that<br /><span>travels with me.</span></h2><p className="journey-intro">A foundation in computing, plus experiences that have helped me work with people as well as technology.</p></div>
            <div className="journey-items">
              <article className="journey-item"><span className="journey-date">2023 — 2027</span><div><h3>B.E. Computer Science & Engineering</h3><p>SRM Institute of Science and Technology</p><p className="journey-detail">CGPA: 9.45 / 10</p></div></article>
              <article className="journey-item"><span className="journey-date">INTERNSHIP</span><div><h3>HR / Talent Acquisition Intern</h3><p>Writer Information</p><p className="journey-detail">Supported HR operations by maintaining employee records, updating documentation, and organizing personnel information. Assisted recruitment and talent acquisition through resume screening, interview scheduling, candidate communication, and coordination with internal stakeholders. Contributed to HR documentation and administrative workflows, gaining practical exposure to talent acquisition and employee lifecycle processes.</p></div></article>
              <article className="journey-item learning-item"><span className="journey-date">CONTINUED LEARNING</span><div><h3>Courses & certifications</h3><p className="journey-detail">The following credentials were supplied for this portfolio; confirm each official title and credential link before public release.</p><ul>{learning.map((item) => <li key={item}>{item}</li>)}</ul></div></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-wrap"><p className="section-index">07 / CONTACT</p><h2>Good work starts<br /><span>with a conversation.</span></h2><p className="contact-copy">I'm interested in opportunities that bring together software, applied AI, and product-focused problem-solving. If my work feels relevant, I'd be glad to connect.</p><div className="contact-links">{profile.email && <><a className="contact-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry")}`}>Email me <Arrow diagonal /></a><button className="email-copy-button" type="button" onClick={copyEmail}>{emailCopied ? "Email copied ✓" : profile.email + " · Copy email"}</button></>}{profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>}<a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Lakshmanan-Loganathan-Resume.pdf">Download résumé <Arrow diagonal /></a></div></div>
        </section>
      </main>

      <footer className="site-footer wrap"><a className="wordmark" href="#home">L<span>.</span></a><p>Designed with care. Built with React.</p><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
