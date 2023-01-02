import { Brandname, BrandSide, BurgerBtn, Container, Content, Li, LogoImg, NavLinks, Span, Ul } from "./navbarStyle";
import Logo from '../images/Logo.png'
import Modal from "../navbar/modal";
import { useState } from "react";


const Navbar = () => {

    const [display, setDisplay] = useState(false)

    const OpenBurger = () => {
        setDisplay(prevState => setDisplay(!prevState))
    }

  return (
    <Container>
        <Content>
            <BrandSide>
                <LogoImg src={Logo} alt='Logo'/>
                <Brandname>Branding X</Brandname>
            </BrandSide>
            <NavLinks>
                <Ul>
                    <Li>Cart (0)</Li>
                </Ul>
                <BurgerBtn onClick={OpenBurger}>
                    {display === true ? <Modal /> : ''}
                    <Span></Span>
                    <Span></Span>
                </BurgerBtn>
            </NavLinks>
        </Content>
    </Container>
  )
}

export default Navbar;