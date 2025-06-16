'use client';

import styles from './Conquistas.module.css'
import { useState} from "react";

const conquistas = [
  {src:'/conquistas-imagens/diploma.png',alt:'Diploma Univap'},
  { src: '/conquistas-imagens/openran.png', alt: 'Desvendando o Open RAN' },
  { src: '/conquistas-imagens/spotify.png', alt: 'Spotify' },
  { src: '/conquistas-imagens/gestao.png', alt: 'Gestao de Projetos' },
  { src:'/conquistas-imagens/ML.PNG', alt:'Praticas de Machine Learning'},
  { src:'/conquistas-imagens/excel.PNG', alt:'Excel'},
  { src:'/conquistas-imagens/ML2.PNG', alt:'Machine Learning'},
  { src:'/conquistas-imagens/seguranca-digital.PNG', alt:'Seguranca Digital'},
  { src:'/conquistas-imagens/tomada-decisao.PNG', alt:'Valor na tomada de Decicao'},
  { src:'/conquistas-imagens/data-science.PNG', alt:'Data Science'},
  { src: '/conquistas-imagens/matlab.PNG', alt:'Matlab'},
  { src: '/conquistas-imagens/jornada-python.png',alt:'Jornada Python'},

];

export default function Conquistas() {
  const [imgSelecionada, setImgSelecionada] = useState<string | null>(null);

  return (
    <section id="conquistas" className={styles.conquistas}>
      <h2 className={styles.titulo}>🏆 Conquistas</h2>
      <div className={styles.grid}>
        {conquistas.map((c, i) => (
          <img
            key={i}
            src={c.src}
            alt={c.alt}
            onClick={() => setImgSelecionada(c.src)}
            className={styles.thumb}
          />
        ))}
      </div>

      {imgSelecionada && (
        <div className={styles.modal} onClick={() => setImgSelecionada(null)}>
          <img src={imgSelecionada} className={styles.ampliada} />
        </div>
      )}
    </section>
  );
}