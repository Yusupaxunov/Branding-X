import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #d4d4d4;
    background-color: #ffffff89;
    position: fixed;
    top: 0;
    @media screen and (max-width: 400px) {
        height: 60px;
    }
    z-index: 999;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
`
export const BrandSide = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5%;
    @media screen and (max-width: 400px) {
        
        transform: scale(0.8);
        margin-left: 0;
    }
    @media screen and (max-width: 350px) {
        margin-left: -16px;
    }
    @media screen and (max-width: 370px) {
        transform: scale(0.7);
        margin-left:-30px;
    }
`
export const LogoImg = styled.img`
    width: 60px;
    margin: 10px;
    `
export const Brandname = styled.p`
    font-size: 1.5em;
    font-weight: 900;
    text-transform: uppercase;
`
export const NavLinks = styled.div`
    text-decoration: none;
    display: flex;
    align-items: center;
`
export const Ul = styled.ul`
    list-style: none;
    text-transform: uppercase;  
`
export const Li = styled.li`
    @media screen and (max-width: 370px) {
        font-size: 0.7em;
    }
`
export const BurgerBtn = styled.div`
    display: flex;
    flex-direction: column;
`
export const Span = styled.span`
    margin: 5px;
    width: 35px;
    height: 3px;
    background-color: black;
    @media screen and (max-width: 370px) {
        transform: scale(0.8);
    }
`