import styled from "styled-components";
import Bg from '../images/mainImage.png'

export const Container = styled.div`
    margin-top: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 650px) {
        background: url(${Bg});
        background-size: cover;
        height: 90vh;
        justify-content: center;
    }
    @media screen and (max-width: 400px) {
        margin-top: 60px;
    }
`
export const Information = styled.div`
    margin-top: -50px;
    margin-left: 75px;
    @media screen and (max-width: 1024px) {
        margin-top: 50px;
    }
    @media screen and (max-width: 650px) {
        margin: auto;
    }
`
export const Title = styled.h1`
    width: 59%;
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (max-width: 890px) {
        font-size: 30px;
        width: 49%;
    }
    @media screen and (max-width: 750px) {
        font-size: 22px;
        width: 55%;
    }
    @media screen and (max-width: 650px) {
        width: 100%;
        font-size: 35px;
        text-align: center;
        padding: 20px;
    }
    @media screen and (max-width: 410px) {
        font-size: 25px;
    }
`
export const Text = styled.p`
    width: 47%;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #3b3b3b;
    @media screen and (max-width: 890px) {
        font-size: 12px;
        width: 45%;
    }
    @media screen and (max-width: 750px) {
        font-size: 11px;
        width: 55%;
    }
    @media screen and (max-width: 650px) {
        font-size: 12px;
        color: #363434;
    }
    @media screen and (max-width: 650px) {
        width: 100%;
        font-size: 14px;
        padding: 0 40px;
        text-align: center;
    }
    @media screen and (max-width: 410px) {
        font-size: 13px;
    }
`
export const Buttons = styled.div`
    margin-top: 30px;
    @media screen and (max-width: 650px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const Button = styled.button`
    width: 200px;
    height: 45px;
    font-weight: 200;
    text-transform: uppercase;
    border: none;
    color: white;
    letter-spacing: 2px;
    background-color: #FF7549;
    transition: 0.2s;
    :hover{
        border: 1px solid black;
        color: black;
    }
    :active{
        background-color: #ce623e;
    }
    @media screen and (max-width: 890px) {
        width: 150px;
        height: 37px;
    }
    @media screen and (max-width: 750px) {
        width: 120px;
        height: 30px;
        font-size: 12px;
    }
    
`
export const Buttons2 = styled.button`
    width: 200px;
    height: 45px;
    font-weight: 200;
    text-transform: uppercase;
    margin-left: 10px;
    background: none;
    border: 1px solid black;
    letter-spacing: 1px;
    transition: 0.3s;
    :hover{
        border: 1px solid white;
        color: black;
        background-color: #d4d4d4;
    }
    :active{
        background-color: #707070;    
    }
    @media screen and (max-width: 890px) {
        width: 150px;
        height: 37px;
    }
    @media screen and (max-width: 750px) {
        width: 120px;
        height: 30px;
        font-size: 12px;
    }
`


export const LeftImage = styled.div`
    
`
export const LeftImg = styled.img`
    width: 500px;
    @media screen and (max-width: 1024px) {
        width: 300px;
    }
    @media screen and (max-width: 650px) {
        display: none;
    }
`