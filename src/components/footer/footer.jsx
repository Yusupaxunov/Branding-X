import { Brand, BrandImg, BrandName, Brandside, Company, CompanyText, Contacts, Container, Elements, Foooter, Links, LinksStyles, Pages, PagesItems } from "./footerStyle";
import Logo from '../images/Logo.png'
import { OrangeSlash } from "../workTypes/workTypesStyle";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {

  return (
    <div>
        <Container>
           <Elements>
           <Brandside>
            <Brand>
                <BrandImg src={Logo}/>
                <BrandName>Branding X</BrandName>
                
            </Brand>
            <Contacts><OrangeSlash>/</OrangeSlash>contact@branding.com</Contacts>
            <Contacts><OrangeSlash>/</OrangeSlash>+1 (414) 840 - 3207</Contacts>
            </Brandside>
            <Pages>
                <PagesItems>PAGES</PagesItems>
                <PagesItems>HOME</PagesItems>
                <PagesItems>About</PagesItems>
                <PagesItems>Blog</PagesItems>
                <PagesItems>Blog post</PagesItems>
                <PagesItems>portfolio</PagesItems>
                <PagesItems>portfolio single</PagesItems>
            </Pages>
            <Pages>
                <PagesItems>Utility pages</PagesItems>
                <PagesItems>Start Here</PagesItems>
                <PagesItems>Style guide</PagesItems>
                <PagesItems>404 Not Found</PagesItems>
                <PagesItems>Password Protected</PagesItems>
                <PagesItems>Licenses</PagesItems>
                <PagesItems>Changelog</PagesItems>
            </Pages>
           </Elements>
        </Container>
           <Foooter>
            <Company>
                <CompanyText>Copyright © Branding X | Designed by Yusupaxunov</CompanyText>
            </Company>
            <Links>
                <LinksStyles><Facebook/></LinksStyles>
                <LinksStyles><Twitter/></LinksStyles>
                <LinksStyles><Instagram/></LinksStyles>
                <LinksStyles><LinkedIn/></LinksStyles>
            </Links>
           </Foooter>
    </div>
  )
}

export default Footer;