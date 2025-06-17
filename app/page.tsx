'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import Projetos from './components/Projetos';
import Image from 'next/image';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contato' },
];

export default function Home() {
  const dark = true;
  const [openExperience, setOpenExperience] = useState<string | null>(null);
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    projetos: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    skills: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  useEffect(() => {
    document.body.className = dark ? styles.dark : styles.light;
  }, [dark]);

  const scrollToSection = (id: keyof typeof sectionRefs) => {
    const ref = sectionRefs[id]?.current;
    if (ref) {
      const y = ref.getBoundingClientRect().top + window.pageYOffset - 80; // offset para navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Neon Navigation Bar */}
      <nav className={styles.navBar}>
        <div className={styles.navLogo}>HENRY</div>
        <div className={styles.navLinks}>
          {sections.map((section) => (
            <button key={section.id} onClick={() => scrollToSection(section.id as keyof typeof sectionRefs)} className={styles.navLink}>
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <main className={styles.main}>
        {/* Hero Section */}
        <section ref={sectionRefs.home} id="home" className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextBlock}>
              <h1 className={`${styles.heroTitle} neon-text glitch`} data-text="HENRY LÍRIO RUFINO">
                HENRY RUFINO
              </h1>
              <h2 className={styles.heroSubtitle}>Engenheiro de Software & Cyberpunk Developer</h2>
              <p className={styles.heroTagline}>
                Desenvolvedor Back-End e Front-End com experiência em Python, React, SQL, PHP, JavaScript, DevOps, <br />
                técnicas de Machine Learning e foco total em UX moderno e automações inteligentes.
              </p>
              <div className={styles.socialButtons}>
                <a href="https://www.linkedin.com/in/henryrufino/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  <span className={styles.iconWrapper}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" fill="#00f2ff"/></svg>
                  </span>
                  LinkedIn
                </a>
                <a href="https://github.com/HenryRufino0" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  <span className={styles.iconWrapper}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#00f2ff"/></svg>
                  </span>
                  GitHub
                </a>
                <a href="/Curriculo-Henry.pdf" download className={styles.ctaButton}>
                  <span className={styles.iconWrapper}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20h14v-2H5v2zm7-18C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm1 14.59V7h-2v7.59l-2.29-2.3-1.42 1.42L12 19l5.71-5.71-1.42-1.42L13 16.59z" fill="#00f2ff"/></svg>
                  </span>
                  Baixar Currículo
                </a>
              </div>
            </div>
            <div className={styles.heroPhotoBlock}>
              <Image src="/profile.jpeg" alt="Henry Rufino" width={260} height={260} className={styles.profileImg} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={sectionRefs.about} id="about" className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.titulo}>Sobre Mim</h2>
              <p>
                Sou apaixonado por tecnologia desde cedo. Me especializei em desenvolvimento Back-End e Front-End, com foco em soluções que otimizam tempo e melhoram a experiência do usuário. Trabalhei com automações, APIs, visualizações de dados e tenho forte atuação em backend com Python e frontend com JavaScript.<br /><br />
                Também atuo com DevOps, banco de dados e metodologias ágeis. Além ter conehcimento e aplicação em técnincas de Machine Learning. Gosto de aprender e aplicar tecnologias novas, sempre buscando eficiência e resultados
              </p>
            </div>
            <div className={styles.aboutPhoto}>
              <Image src="/SouthPark_Char.png" alt="Henry Rufino" width={450} height={250} className={styles.imgAnimada} />
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className={styles.experienceSection} id="experience">
          <h2 className={styles.titulo}>Experiências Profissionais</h2>
          <div className={styles.experienceGrid}>
            {/* Freelancer */}
            <div
              className={styles.experienceCard}
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenExperience(openExperience === 'freelancer' ? null : 'freelancer')}
            >
              <h3>
                Freelancer <span className={styles.experienceDate}>(2023 - atual)</span>
              </h3>
              <p>Desenvolvimento de soluções web, automações e consultoria para clientes diversos.</p>
              {openExperience === 'freelancer' && (
                <div className={styles.detailsBox}>
                  <strong>Principais atividades:</strong>
                  <ul>
                    <li>Desenvolvimento de sites e sistemas sob demanda</li>
                    <li>Automação de processos para empresas</li>
                    <li>Consultoria em tecnologia e UX</li>
                    <li>Projetos com React, Node.js, Python, APIs REST</li>
                  </ul>
                </div>
              )}
            </div>
            {/* Connect 5G */}
            <div
              className={styles.experienceCard}
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenExperience(openExperience === 'connect5g' ? null : 'connect5g')}
            >
              <h3>
                Connect 5G <span className={styles.experienceDate}>(2022 - 2023)</span>
              </h3>
              <p>Desenvolvedor Back-End e Front-End, foco em APIs, integrações e automações.</p>
              {openExperience === 'connect5g' && (
                <div className={styles.detailsBox}>
                  <strong>Principais atividades:</strong>
                  <ul>
                    <li>Desenvolvimento de APIs REST e integrações entre sistemas</li>
                    <li>Implementação de automações para processos internos</li>
                    <li>Trabalho com JavaScript, Node.js, SQL, Python</li>
                  </ul>
                </div>
              )}
            </div>
            {/* SoluCX */}
            <div
              className={styles.experienceCard}
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenExperience(openExperience === 'solucx' ? null : 'solucx')}
            >
              <h3>
                SoluCX <span className={styles.experienceDate}>(2021 - 2022)</span>
              </h3>
              <p>Desenvolvimento de dashboards, integrações e suporte a sistemas internos.</p>
              {openExperience === 'solucx' && (
                <div className={styles.detailsBox}>
                  <strong>Principais atividades:</strong>
                  <ul>
                    <li>Criação de dashboards para análise de dados</li>
                    <li>Integração de sistemas internos e externos</li>
                    <li>Suporte técnico e manutenção de sistemas</li>
                    <li>Projetos com SQL, Power BI, Python</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={sectionRefs.projetos} id="projetos" className={styles.projectsSection}>
          <h2 className={styles.titulo}>Projetos</h2>
          <Projetos />
        </section>

        {/* Skills Section */}
        <section ref={sectionRefs.skills} id="skills" className={styles.skillsSection}>
          <h2 className={styles.titulo}>Skills Técnicas</h2>
          <ul className={styles.skillsList}>
            <li>Python</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C#</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>Power BI</li>
            <li>DAX</li>
            <li>Git</li>
            <li>Microsoft Office</li>
            <li>Excel</li>
            <li>React</li>
            <li>Next.JS</li>
            <li>Django</li>
            <li>APIs REST</li>
            <li>AWS EC2</li>
            <li>Scrum</li>
            <li>Figma</li>
            <li>ML</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section ref={sectionRefs.contact} id="contact" className={styles.contactSection}>
          <h2 className={styles.titulo}>Contato</h2>
          <p className={styles.contactText}>
            Quer bater um papo, colaborar em projetos ou contratar meus serviços?<br />
            Me mande um email:
          </p>
          <form className={styles.contactForm} method="POST" onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);
            const res = await fetch('/api/email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
            const result = await res.json();
            alert(result.message || 'Enviado!');
            e.currentTarget.reset();
          }}>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className={styles.input}
            />
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              required
              className={styles.textarea}
              rows={5}
            ></textarea>
            <button type="submit" className={styles.ctaButton}>Enviar Email</button>
          </form>
        </section>
    </main>

      {/* Footer */}
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Henry Lírio Rufino. Todos os direitos reservados.</p>
      <p>Portifolio desenvolvido usando React + Next.js</p>
    </footer>
    </>
  );
}

