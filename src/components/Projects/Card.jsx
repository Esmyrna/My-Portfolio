import styles from './Project.module.css'
import { useState } from 'react';
import {AiFillGithub} from 'react-icons/ai'
import {Link, Router} from 'react-router-dom'
import index from './index'
function Card({title, description, imgUrl, link}) {
     
    return(
        
       <div  className={styles.allCard} id="projetos" >
        <div className={styles.cards} >

            <a target="_blank" href={link}>
             <img src={imgUrl}  width="355px"/>
             </a>
    
             <h2>{title}</h2>
             <p>{description}</p>           
        </div>
       </div>
    )
}

export default Card;