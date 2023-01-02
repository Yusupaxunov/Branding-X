import styled from "styled-components";

export const Container = styled.div`
    margin: 100px 0;
`
export const Elements = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`
export const Brandside = styled.div`
    margin: 0 20px;
`
export const Brand = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
export const BrandImg = styled.img`
    width: 40px;
    margin: 10px;
`
export const BrandName = styled.h1`
    font-size: 1.3em;
    font-weight: 900;
    text-transform: uppercase;
`
export const Contacts = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: #303030;
    line-height: 27px;
    transition: 0.3s;
    cursor: pointer;
    :hover{
        color: #ff7300;
    }
    :nth-child(1){
        color: #303030;
        font-weight: 600;
        :hover{
            color: black;
        }
    }
`
export const Pages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: auto;
    text-transform: uppercase;
    margin: 20px;
`
export const PagesItems = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: #606060;
    line-height: 27px;
    transition:0.3s;
    cursor: pointer;
    :hover{
        color: #ff7300;
    }
    :nth-child(1){
        color: #303030;
        font-weight: 600;
        :hover{
            color: black;
        }
    }
`
export const Foooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    background-color: #F0EFEC;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`
export const Company =styled.div`
    margin-left: 15px;
    @media screen and (max-width: 500px) {
        margin: 10px 0;
    }
`
export const CompanyText =styled.p`
    color: #616060;
    font-size: 13px;
`
export const Links = styled.div`
    margin-right: 15px;
`
export const LinksStyles = styled.a`
    text-decoration: none;
    color: black;
`