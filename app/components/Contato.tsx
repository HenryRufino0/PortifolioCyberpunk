'use client';

import styles from './Contato.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

export default function Contato() {
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
  }

  return (
    <section
      id="contato"
      ref={ref}
      className={`${styles.contato} ${visible ? styles.visible : ''}`}
    >
      <h2 className={styles.titulo}>📫 Contato</h2>
      <p className={styles.texto}>
        Quer bater um papo, colaborar em projetos ou contratar meus serviços?<br></br>
        Me mande um email:
      </p>
      

      <div className={styles.icones}>
        <a href="https://www.linkedin.com/in/henryrufino/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:rufino.hlr@gmail.com">
          <FaEnvelope size={28} />
        </a>
      </div>

      <form className={styles.formulario} method="POST" onSubmit={handleSubmit}>
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
        ></textarea>
        <button type="submit" className={styles.botao}>Enviar</button>
      </form>
    </section>
  );
}
