import AnchorLink from 'react-anchor-link-smooth-scroll'
import logoMarca from '../../assets/img/1.png'
import styled from 'styled-components'
import Burger from './Burger'

 

const Nav = styled.nav` 
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #424141;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0;
    }

    #logo {
    height: 45px;
    width: 50px;
    margin: -1rem 3.5rem;
 }


   
`

const Navbar = () => {
    return(
        <Nav>
            <div className="logo">
            <img id="logo" src={logoMarca} alt="Logo"/>
            </div>
            <Burger />
         

        </Nav>
    )
}

export default Navbar;