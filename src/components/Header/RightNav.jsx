import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components';

const Ul = styled.ul`

    @font-face {
    font-family: 'Relaway-Regular';
    src: url('../../assets/fonts/Raleway-Regular.ttf');
}
    list-style: none;
    display: flex;
    flex-flow: nowrap;
    
   
    li {
      padding: 18px 10px;
      
    }
    li a {
      text-decoration: none;
      color: #fff;
      font-family: 'Relaway-Regular';
      font-size: 1rem;
      
    }

    li a:hover {
      color: #fcfc;
      text-shadow: 0 0 15px #fcfc, 0 0 30px #fcfc, 0 0 45px #fcfc;
      transition: 0.3s;
    }

    @media (max-width: 768px){
      flex-flow: column nowrap;
      background-color: #fcfc;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      z-index: 30;
      
     
      li {
        color: black;
        background: none;
        
      }

      li a {
        text-decoration: none;
        background: none;
        color: #000;
        font-family: sans-serif;
        font-weight: bold;
    }}
`;

const rightNav = ({ open }) => {
    return(
        <Ul open={open}>
           <li><AnchorLink href="#home">Home</AnchorLink></li> 
           <li><AnchorLink href="#sobre">Sobre</AnchorLink></li>
           <li><AnchorLink href="#projetos">Projetos</AnchorLink></li>
           <li> <AnchorLink href="#contato">Contato</AnchorLink></li>
        </Ul>
    )
}

export default rightNav;