import styles from './Initial.module.css'

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import {SiTypescript} from 'react-icons/si'
import {FaAngular} from 'react-icons/fa'
import { useState } from 'react';
import CV from '../../assets/Curriculo/Currículo.pdf'


function Initial() {
  

    return (

        <div className={styles.all} id="#home">
            <div className={styles.tecnologias}>
                <ul className={styles.list}>

                    <li><SiJavascript /></li>
                    <li><SiTypescript /></li>
                    <li><BsBootstrapFill /></li>
                    <li>  <FaReact /></li>
                    <li><FaAngular/></li>
                    <li><FaPython /></li>
                    <li><FaJava /></li>
                </ul>
            </div>
            <div className={styles.content} id="home">
                <h4 >Olá, eu me chamo</h4>
                <h1  id={styles.title} >Esmyrna <span>Oliveira</span></h1> 
                <span id={styles.barra}>|</span>
                <h3 class={styles.frontEND}>Desenvolvedora <span id={styles.roxo}>Front End</span></h3>
                <hr id="line"></hr>
               <a id={styles.download} href={CV} download>
               <button  id={styles.btn}>
                   Download CV
                </button>
               </a>
               
     
              
            </div>
        </div>
    )

}

export default Initial




