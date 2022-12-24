import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Footer.module.css';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import {MdAlternateEmail} from 'react-icons/md'
import {useState} from 'react'
function HeaderAndFooterExample() {

    const [linkedin, setLinkedin] = useState("https://www.linkedin.com/in/esmyrna-oliveira-cavalcanti-452bb9212/");
    const [github, setgithub] = useState("https://github.com/Esmyrna");

  return (
    <Card className="text-center">
      <Card.Header id={styles.head}>Esmyrna Oliveira Cavalcanti</Card.Header>
      <Card.Body>
        <Card.Title className={styles.card}>Desenvolvedora Web</Card.Title>
        <Card.Text className={styles.text}>
          Esse Website foi desenvolvido por Esmyrna Oliveira Cavalcanti.
        </Card.Text>
        <div ClassName={styles.redes}>
                     <div className={styles.iconsSociais}>
                     <a target="_blank" href={linkedin}><BsLinkedin /></a> 
                     <a target="_blank" href={github}> <AiFillGithub /></a> 
                     </div>
                  </div>
      </Card.Body>
      <Card.Footer id={styles.muted}>Todos os direitos reservados.</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;