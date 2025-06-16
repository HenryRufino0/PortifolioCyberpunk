'use client';

import styles from './Experiencias.module.css';
import { useState, useEffect, useRef } from 'react';

const experiencias = [


  {
    id: 'freelancer',
    titulo: 'Freelancer – Autônomo',
    descricao:[
      'Desenvolvimento Back-End and Front-End.',
      'Manutenção de TI para pequenas empresas.',
      'Desenvolvimento de software utilizando Python, SQL, Power BI e IA.',
      'Suporte sobre desenvolvimento de software.'
    ],
    periodo: '08/2024 – Atualmente',
  },

  {
    id: 'connect5g',
    titulo: 'Connect 5G – Estágio e Programador ',
    descricao: [
      'Integrante da equipe de DevOps remotamente.',
      'Representação da empresa em reuniões com clientes.',
      'Desenvolvimento de soluções em Python e JavaScript para automação e manipulação de dados.',
      'Utilização de SQL, DAX e Power BI para análise de dados e relatórios.',
      'Apliicção de conceitos de Django Rest Framework e React.',
      'Criação de scripts para validação em plataformas internas.',
      'Experiência prática com produtos AWS (EC2, S3, RDS).',
      'Adoção de metodologias ágeis e uso avançado do Git.'
  ],
    periodo: '08/2023 – 07/2024',
  },

  {
    id: 'solucx',
    titulo: 'SoluCX – Estágio em Machine Learning',
    descricao: [
      'Processamento e classificação de banco de dados com Excel e MySQL',
      'Automação de tarefas em Python para manipulação de dados e geração de relatórios.',
      'Desenvolvimento de dashboards em Power BI.',
      'Apresentação de workshops e criação de tutoriais em vídeos.',
      'Conceitos de Machine Learning aplicados em algoritmos proprietários.',
      'Uso de metodologias ágeis para gerenciamento de tarefas.',
    ],
    periodo: '03/2022 – 09/2022',
  },
  
];

export default function Experiencias() {
  const [ativa, setAtiva] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setAtiva((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experiencias"
      className={`${styles.experiencias} ${visible ? styles.visible : ''}`}
      ref={ref}
    >
      <h2 className={styles.titulo}>🚀 Experiências Profissionais</h2>

      <div className={styles.blocos}>
        {experiencias.map((exp) => (
          <div key={exp.id} className={styles.blocoWrapper}>
            <button
              onClick={() => handleClick(exp.id)}
              className={`${styles.bloco} ${ativa === exp.id ? styles.ativo : ''}`}
            >
              {exp.titulo.split('–')[0].trim()}
            </button>
            {ativa === exp.id && (
              <div className={`${styles.detalhes} ${styles.ativoDetalhe}`}>
                <h3>{exp.titulo}</h3>
                <ul className={styles.lista}>
                  {Array.isArray(exp.descricao) ? (
                    exp.descricao.map((item, i) => <li key={i}>{item}</li>)
                  ) : (
                    <li>{exp.descricao}</li>
                  )}
                </ul>
                <span>{exp.periodo}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
