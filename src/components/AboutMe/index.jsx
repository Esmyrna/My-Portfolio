import imgFoto from '../../assets/img/eu.jpeg';
import styles from './About.module.css'
function AboutMe() {
    return(

        <div className={styles.allAbout} id="sobre">
        <div className={styles.aboutMe}>
        <img id={styles.moveImg} src={imgFoto}></img>
        </div>
        <div className={styles.TextAbout}>
        <h2 id={styles.about}>SOBRE</h2>
        <p>Estudante no curso tecnólogo de Sistemas para Internet na Universidade Católica de Pernambuco,
           Esmyrna é uma desenvolvedora web junior que tem paixão pela programação! Sempre motivada, busca
           seu desenvolvimento constantemente. Suas habilidades incluem front-end, back-end e ciência de dados.</p>
        <h2 id={styles.about}> SKILLS</h2>
        <div className={styles.lista}>
        <ul id={styles.mySkill}>
           <li>Colaborativa</li>
           <li>Comuanicativa</li>
           <li>Pensamento crítico</li>
           <li>Criativa</li>
        </ul>
        <ul id={styles.mySkill2}>
           <li>Liderança</li>
           <li>Responsável</li>
           <li>Autoditada</li>
           <li>Resiliência</li>
        </ul>
        </div>
        </div>
     </div>
    )
}

export default AboutMe;