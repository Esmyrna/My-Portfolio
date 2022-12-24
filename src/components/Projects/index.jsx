import styles from './Project.module.css'
import Card from './Card'
import ProjImg1 from '../../assets/img/Carva.png'
import ProjImg2 from '../../assets/img/imc.png'
import ProjImg3 from '../../assets/img/movielib.png'
import ProjImg4 from '../../assets/img/toDoList.png'
import { useState } from 'react'

function Projects() {


  const projects = [
    {
      imgUrl: ProjImg1,
      title: "Website Carvalheira",
      description: "Desenvolvedora e designer, o website foi pensado desde a sua prototipação no figma até seu desenvolvimento em React JS.",
      link: "https://projeto-carv.vercel.app/"
    },

    {
      imgUrl: ProjImg2,
      title: "Calculadora IMC",
      description: "Sistema responsivo para calcular IMC e verificar sua classificação de acordo com a tabela. Desenvolvido com HTML5, CSS3 e Javascript.",
      link: "https://calculadora-imc-plum.vercel.app/"
    },

    {
      imgUrl: ProjImg3,
      title: "Biblioteca de filmes",
      description: "Clone feito através de um consumo de API da MovieLIbs. Desenvolvido com React JS e Vite.",
      link: "https://movie-libs-i2cn.vercel.app/",
    },

    {
      imgUrl: ProjImg4,
      title: "Lista de tarefas",
      description: "Uma To do List para você adicionar e remover suas tarefas diárias. Desenvolvido com HTML5, CSS3 e Javascript.",
      link: "https://to-do-list-ten-rosy.vercel.app/"
    }
  ]


  return (

    <section className={styles.sectionProject}>
      <h1 id={styles.h1project}>PROJETOS</h1>
      <div className={styles.ProjectCard}>
        {projects.map((project, index) => {
          return (
            <Card key={index} {...project} />
          )
        })}
      </div>
    </section>



  )
}

export default Projects;