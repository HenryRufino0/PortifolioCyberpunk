'use client';

import styles from './Hero.module.css';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

export default function Hero({
  
  
}: {
  toggleMode: () => void;
  dark: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.hero} ${visible ? styles.visible : ''}`}
      id="apresentacao"
      ref={ref}
    >
      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroTitle}>HENRY LÍRIO RUFINO</h1>
          <h2 className={styles.subtitle}>Engenheiro de Software</h2>
          <p className={styles.heroDesc}>
            Desenvolvedor Back-End e Front-End com experiência em Python, React, SQL, PHP, JavaScript,
            DevOps e foco total em UX moderno e automações inteligentes.
          </p>
          <div className={styles.social}>
            <a
              href="https://github.com/HenryRufino0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <FaGithub size={30} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/henryrufino/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <FaLinkedin size={30} />
              <span>LinkedIn</span>
            </a>
            <a
              href="/Curriculo-Henry.pdf"
              download
              className={styles.socialBtn}
            >
              <FaFileAlt size={30} />
              <span>Curriculo</span>
            </a>
          </div>
        </div>
        <div className={styles.heroPhotoBlock}>
          <Image
            src="/profile.jpeg"
            alt="Henry Rufino"
            className={styles.profileImg}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
