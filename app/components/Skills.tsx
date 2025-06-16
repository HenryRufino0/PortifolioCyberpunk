'use client';

import styles from './Skills.module.css';
import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const skills = [
    'Python', 'PHP','JavaScript','TypeScript','HTML','CSS', 'C#',
    'SQL','MySQL','NoSQL','Power BI', 'DAX', 'Git', 'Excel',
    'React', 'Next.JS', 'Django',
    'APIs REST', 'AWS EC2', 
    'Scrum', 'Figma'
  ];

  const ref = useRef<HTMLDivElement>(null);
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
    <section id="skills" ref={ref} className={`${styles.skills} ${visible ? styles.visible : ''}`}>
      <h2 className={styles.titulo}>🛠️ Skills Técnicas</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div className={styles.card} key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
