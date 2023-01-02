import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 150px;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
    @media screen and (max-width: 500px) {
        margin-top: 100px;
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
export const CardSection = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fit, minmax(333px, 1fr));
    gap: 40px;
    margin-top: 75px;
    margin-left:9%;
    @media screen and (max-width: 450px) {
        grid-template-columns: auto;
    }
`
export const Card = styled.div`
    height: 250px;
    /* border: 1px solid black; */
    @media screen and (max-width: 450px) {
        height: 200px;
    }
`
export const CardImage = styled.img`
    width: auto;
    @media screen and (max-width: 450px) {
        width: 20%;
    }
`
export const OrangeSlash = styled.span`
    color: #ff7300;
    margin: 0 1px;
`
export const CardTitle = styled.h1`
    font-size: 25px;
    font-weight: 400;
    line-height: 50px;
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