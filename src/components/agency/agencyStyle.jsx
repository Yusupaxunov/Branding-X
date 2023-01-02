import styled from "styled-components";

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
export const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
export const ImageMain = styled.img`
    width: 80%;
`