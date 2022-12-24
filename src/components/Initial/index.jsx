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

async function  onButtonClick(){
    // using Java Script method to get PDF file
   await fetch('Currículo.pdf').then(response => {
     response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Currículo.pdf';
            alink.click();
        })
    })
}


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
                <h1 id={styles.tittle}>Esmyrna <span>Oliveira</span></h1>
                <h3>Desenvolvedora <span id={styles.roxo}>Full Stack</span></h3>
                <hr id="line"></hr>
               
                <button onClick={onButtonClick} id={styles.btn}>
                   Download CV
                </button>
     
              
            </div>
        </div>
    )

}

export default Initial




