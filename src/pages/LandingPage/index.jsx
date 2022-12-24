import Header from '../../components/Header/Nav'
import Initial from '../../components/Initial'
import AboutMe from '../../components/AboutMe'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
 
import AnchorLink from 'react-anchor-link-smooth-scroll'
import emailjs from '@emailjs/browser'
import {useState} from 'react'
function LandingPage() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
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
        <>
            <Header  />
            <Initial />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default LandingPage;