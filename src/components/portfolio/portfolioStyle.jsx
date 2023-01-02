import styled from "styled-components";
import ContactImage from '../images/ContactImg.png'

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    box-sizing: border-box;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
    @media screen and (max-width: 500px) {
        margin-top: -100px;
    }
`
export const Title = styled.h1`
    width: 40%;
    font-size: 30px;
    letter-spacing: 3px;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (max-width: 800px) {
        width: 50%;
        text-align: center;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 615px) {
        font-size: 20px;
    }
    @media screen and (max-width: 450px) {
        width: 72%;
    }
`
export const BrowseBtn = styled.button`
    width: 300px;
    height: 45px;
    font-weight: 400;
    text-transform: uppercase;
    margin-left: 10px;
    background: none;
    border: 1px solid black;
    letter-spacing: 1px;
    transition: 0.3s;
    :hover{
        border: 1px solid black;
        color: black;
        background-color: #d4d4d4;
    }
    :active{
        background-color: #707070;    
    }
    @media screen and (max-width: 615px) {
        transform: scale(0.9);
    }
    @media screen and (max-width: 450px) {
        transform: scale(0.8);
    }
`
export const Table = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px 9.5%;
    border-bottom: 1px solid #d4d4d4;
    padding: 25px 0;
    @media screen and (max-width: 560px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
export const Date = styled.div`
    width: 25%;
    @media screen and (max-width: 900px) {
        width: 40%;
        margin: 0 20px;
    }
`
export const DateText = styled.p`
    font-size: 17px;
    text-transform: uppercase;
    padding: 5px;
`
export const Slash = styled.span`
    color: #949494;
`
export const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`
export const DescTitle = styled.h1`
    font-size: 25px;
    font-weight: 400;
`
export const DescText = styled.p`
    width: 65%;
    padding-top: 5px;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

// Contact


export const Contact = styled.div`
    margin-top: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70vh;
    background-color: #F0EFEC;
    @media screen and (max-width: 1024px) {
        height: 55vh;
    }
    @media screen and (max-width: 700px) {
        background: url(${ContactImage});
        background-size: cover;
        background-position: center;
        justify-content: center;
    }
    @media screen and (max-width: 400px) {
        margin-top: 60px;
    }
`
export const ContactLeft = styled.div`
    margin-left: 75px;
    @media screen and (max-width: 1024px) {
        margin-top: 50px;
    }
    @media screen and (max-width: 700px) {
        margin: auto;
    }
`
export const ContactText = styled.h1`
    width: 70%;
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (max-width: 890px) {
        font-size: 30px;
    }
    @media screen and (max-width: 750px) {
        font-size: 22px;
    }
    @media screen and (max-width: 700px) {
        width: 100%;
        font-size: 35px;
        text-align: center;
        padding: 20px;
    }
    @media screen and (max-width: 410px) {
        font-size: 25px;
    }
`
export const BtnDiv = styled.div`
    @media screen and (max-width: 700px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const ContactBtn = styled.button`
    width: 200px;
    height: 45px;
    margin-top: 30px;
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
export const ContactImgDiv = styled.div`
    margin-top: 5px;
`
export const ContactImg = styled.img`
    width: 430px;
    @media screen and (max-width: 1024px) {
        width: 330px;
    }
    @media screen and (max-width: 700px) {
        display: none;
    }
`

//Steps


export const Steps = styled.div`
    width: 100%;
`
export const StepsTitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 150px;
    margin-bottom: 75px;
    @media screen and (max-width: 615px) {
        flex-direction: column;
    }
`
export const StepsTitle = styled.h1`
    width: 40%;
    font-size: 30px;
    letter-spacing: 3px;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (max-width: 800px) {
        width: 50%;
        margin-left: 5%;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 615px) {
        font-size: 20px;
        text-align: center;
    }
    @media screen and (max-width: 450px) {
        width: 72%;
    }
`
export const StepsText = styled.p`
    width: 40%;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 300;
    @media screen and (max-width: 800px) {
        width: 50%;
        text-align: center;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 615px) {
        font-size: 14px;
        width: 80%;
    }
    @media screen and (max-width: 450px) {
        width: 90%;
    }
`
export const StepsCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 75px;
    margin-left: 11%;
    margin-bottom: 50px;
    @media screen and (max-width: 950px) {
        flex-wrap: wrap;
    }
`
export const StepsCard = styled.div`
    width: 400px;
    height: 250px;
    /* border: 1px solid black; */
    @media screen and (max-width: 450px) {
        height: 200px;
    }
`
export const CardImage = styled.img`
    width: auto;
    @media screen and (max-width: 450px) {
        width: 12%;
    }
`
export const CardTitle= styled.h1`
    font-size: 25px;
    font-weight: 400;
    line-height: 50px;
`
export const CardSlash = styled.span`
    color: #ce623e;
    margin: 0 1px;
`
export const CardText = styled.p`
    font-size: 13px;
    font-weight: 300;
    width: 60%;
    line-height: 20px;
    @media screen and (max-width: 450px) {
        width: 90%;
    }
`
export const CardBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`
export const CardBtn1 = styled.button`
    width: 250px;
    height: 35px;
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
export const CardBtn2 = styled.button`
     width: 250px;
    height: 35px;
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