import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 9%;
    margin-bottom: 100px;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        margin-top: -50px;
    }
    @media screen and (max-width: 500px) {
       
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
    height: 35px;
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
export const Cards  = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
`
export const BigCard = styled.div`
    width: 350px;
    margin: 30px 15px;
`
export const BigCardImg = styled.img`
    width: 100%;
`
export const BigCardDate = styled.p`
    font-size: 13px;
    font-weight: 300;
    line-height: 40px;
    text-transform: uppercase;
`
export const BigCardTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`
export const BigCardText = styled.p`
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    margin: 15px 0;
`
export const WorkTogether = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F0EFEC;
    padding: 120px;
    border-top: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
    @media screen and (max-width: 790px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 50px;
    }
`
export const WorkTitle = styled.div`
    
`
export const WTitle = styled.h1`
    font-size: 45px;
    font-weight: 400;
    text-transform: uppercase;
    width: 300px;
    @media screen and (max-width: 850px) {
        font-size: 40px;
    }
    @media screen and (max-width: 850px) {
        font-size: 40px;
    }
    @media screen and (max-width: 790px) {
        font-size: 45px;
        margin: 15px 0;
    }
    @media screen and (max-width: 550px) {
        font-size: 38px;
    }
`
export const Contact = styled.div`
    
`
export const ContactText = styled.h1`
    font-size: 25px;
    font-weight: 400;
    @media screen and (max-width: 850px) {
        font-size: 20px;
    }
    @media screen and (max-width: 790px) {
        font-size: 25px;
    }
    @media screen and (max-width: 550px) {
        font-size: 18px;
    }
`