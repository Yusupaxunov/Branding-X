import styled from "styled-components"

export const Block = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #91919183;
`

export const ModalBurger = styled.div`
    position: absolute;
    top: 25%;
    left: 30%;
    width: 500px;
    height: auto;
    background-color: #fff;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    
    @media screen and (max-width: 1024px) {
        left: 25%;
    }
    @media screen and (max-width: 870px) {
        left: 20%;
    }
    @media screen and (max-width: 750px) {
        left: 10%;
        transform: scale(0.8);
    }
    @media screen and (max-width: 600px) {
        left: 5%;
        transform: scale(0.7);
        top: 20%;
    }
    @media screen and (max-width: 520px) {
        left: 0%;
        transform: scale(0.6);
        top: 20%;
    }
    @media screen and (max-width: 470px) {
        left: -10%;
        transform: scale(0.6);
        top: 20%;
    }
    @media screen and (max-width: 400px) {
        left: -15%;
        transform: scale(0.5);
        top: 20%;
    }
    @media screen and (max-width: 350px) {
        left: -25%;
        transform: scale(0.5);
        top: 15%;
    }
`
export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const BorderBtn = styled.button`
    width: 500px;
    padding: 24px 0;
    background: none;
    border: 1px solid #d4d4d4;
    transition: all 0.1s;
    font-weight: 400;
    :hover{
        background-color: #FF7549;
        font-weight: 600;
    }
`
export const Ways = styled.a`
    text-decoration: none;
    color: black;
    font-size: 30px;
    padding: 24px 190px;
    :hover{
        color: white;
    }
`