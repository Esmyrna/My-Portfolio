import {useState} from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { FiMapPin } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';

function Contact() {

    const [github, useGitHub] = useState('');
    const [site, useSite] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [message, setMessage] = useState('');
 
    function sendEmail(e){
       e.preventDefault();
 
      if(name === '' || email === '' || assunto ==='' || message === ''){
       alert('Preencha todos os campos');
       return;
      }
      const templateParams = {
          from_name: name,
          email: email,
          assunto: assunto,
          message: message,
         
      }
      emailjs.send('service_j1vuqun', 'template_729ximg', templateParams , 'o_8iMEK5GWeQaAmR5')
      .then((response) =>{
          console.log('EMAIL ENVIADO', response.status, response.text)
          setName('')
          setEmail('')
          setAssunto('')
          setMessage('')
      })
    }
    return(
        <section className={styles.contato} id="contato" >
            <div className={styles.contatoTittle} >
               <h4>CONTATO</h4>
            </div>
            <div className={styles.contatoContainer} >
               <div className={styles.left}>
                  <div className={styles.infor}>
                     <div className={styles.location}>
                        <FiMapPin />
                        <h5>Localização:</h5>
                        <p>Recife - PE</p>
                     </div>
                     <div className={styles.mail}>
                        <FaRegEnvelope />
                        <h5>E-mail:</h5>
                        <p>Esmyrna.oliveira@gmail.com</p>
                     </div>
                     <div className={styles.call}>
                        <BiPhoneCall />
                        <h5>Telefone:</h5>
                        <p>(81) 99392-5428</p>
                     </div>
                  </div>
               </div>
               <div className={styles.right}>
                  <form  onSubmit={sendEmail}>
                     <div className={styles.contatoRow}>
                        <div className={styles.row1}>
                           <input type="text" name="name" placeholder="Nome" onChange={(e)=> setName(e.target.value)} value={name}></input>
                        </div>
                        <div className={styles.row2}>
                           <input type="text" email="email" placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)} value={email}></input>
                        </div>
                   
                     <div className={styles.row3}>
                        <input type="text" name="subject" placeholder="Assunto" onChange={(e)=> setAssunto(e.target.value)} value={assunto}></input>
                     </div>
                     <div className={styles.row4}>
                        <textarea name="message" id cols="30" rows="10" onChange={(e)=> setMessage(e.target.value)} value={message}></textarea>
                     </div>
                     <input id={styles.btnForm} type="submit" value="Enviar" />
                     </div>
                     
                  </form>   
               </div>
            </div>

         </section>
    )
}

export default Contact;