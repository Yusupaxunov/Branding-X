import { BigCard, BigCardDate, BigCardImg, BigCardText, BigCardTitle, BrowseBtn, Cards, Contact, ContactText, Container, Header, Title, WorkTitle, WorkTogether, WTitle } from "./resourcesStyle"
import BigMarketing from '../images/bigmarketing.png'
import BigGDesign from '../images/bigdesign.png'
import BigTypography from '../images/bigtypography.png'
import { OrangeSlash } from "../workTypes/workTypesStyle"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Resources = () => {
    
    useEffect(() => {
      AOS.init()
    }, [])
    
  return (
    <Container>
        <Header>
            <Title>Articles & resources</Title>
            <BrowseBtn>Browse more posts</BrowseBtn>
        </Header>
        <Cards>
            <BigCard data-aos="fade-right" data-aos-offset="50">
                <BigCardImg src={BigMarketing}/>
                <BigCardDate>Marketing / Nov 22, 2021</BigCardDate>
                <BigCardTitle>The difference between UX & UI Design: A simple guide for beginner’s</BigCardTitle>
                <BigCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna</BigCardText>
            </BigCard>
            <BigCard data-aos="fade-right" data-aos-offset="100">
                <BigCardImg src={BigGDesign}/>
                <BigCardDate>Development / Nov 22, 2021</BigCardDate>
                <BigCardTitle>Font sizes in graphic design: The complete guide to follow</BigCardTitle>
                <BigCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna</BigCardText>
            </BigCard>
            <BigCard data-aos="fade-right" data-aos-offset="150">
                <BigCardImg src={BigTypography}/>
                <BigCardDate>Development / Nov 22, 2021</BigCardDate>
                <BigCardTitle>8 design systems you can check out and download for free</BigCardTitle>
                <BigCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna</BigCardText>
            </BigCard>
        </Cards>
        <WorkTogether>
            <WorkTitle  data-aos="zoom-in" >
                <WTitle>Let’s work together</WTitle>
            </WorkTitle>
            <Contact>
                <ContactText><OrangeSlash>/</OrangeSlash>contact: @branding.com</ContactText>
                <ContactText><OrangeSlash>/</OrangeSlash>+1 (414) 840 - 3207</ContactText>
            </Contact>
        </WorkTogether>
    </Container>
  )
}

export default Resources