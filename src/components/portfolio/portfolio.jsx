import { useEffect } from 'react';
import ContactImage from '../images/ContactImg.png'
import Idea from '../images/idea.png'
import Execution from '../images/execution.png'
import Launch from '../images/launch.png'
import { BrowseBtn, BtnDiv, CardBtn1, CardBtn2, CardBtns, CardImage, CardText, CardTitle, Contact, ContactBtn, ContactImg, ContactImgDiv, ContactLeft, ContactText, Container, Date, DateText, Description, DescText, DescTitle, Header, Slash, Steps, StepsCard, StepsCards, StepsText, StepsTitle, StepsTitleDiv, Table, Title } from "./portfolioStyle";
import { OrangeSlash } from '../workTypes/workTypesStyle';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Portfolio = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>
        <Container>
            <Header>
                <Title>See our latest portfolio projects</Title>
                <BrowseBtn>Browse more</BrowseBtn>
            </Header>
            <Table data-aos="fade-up" data-aos-duration="400">
                <Date>
                    <DateText>Branding <Slash>/</Slash>2021</DateText>
                </Date>
                <Description>
                    <DescTitle>Brand Identity for Haus</DescTitle>
                    <DescText>Pellentesque sit amet porttitor eget dolor morbi non turpis egestas maecenas  pharetra convallis posuere netus et malesuada fames ac fames ac turpis.   
                    </DescText>
                </Description>
            </Table>
            <Table data-aos="fade-up" data-aos-duration="400">
                <Date>
                    <DateText>Graphic Design <Slash>/</Slash>2022</DateText>
                </Date>
                <Description>
                    <DescTitle>Packaging Design for Sezane</DescTitle>
                    <DescText>Pellentesque sit amet porttitor eget dolor morbi non turpis egestas maecenas  pharetra convallis posuere netus et malesuada fames ac fames ac turpis.   
                    </DescText>
                </Description>
            </Table>
            <Table data-aos="fade-up" data-aos-duration="400">
                <Date>
                    <DateText>Web Design <Slash>/</Slash>2022</DateText>
                </Date>
                <Description>
                    <DescTitle>Website Design for Doean</DescTitle>
                    <DescText>Pellentesque sit amet porttitor eget dolor morbi non turpis egestas maecenas  pharetra convallis posuere netus et malesuada fames ac fames ac turpis.   
                    </DescText>
                </Description>
            </Table>
            <Table data-aos="fade-up" data-aos-duration="400">
                <Date>
                    <DateText>Graphic Design <Slash>/</Slash>2022</DateText>
                </Date>
                <Description>
                    <DescTitle>Collateral Design for Globex</DescTitle>
                    <DescText>Pellentesque sit amet porttitor eget dolor morbi non turpis egestas maecenas  pharetra convallis posuere netus et malesuada fames ac fames ac turpis.   
                    </DescText>
                </Description>
            </Table>
            <Contact>
                <ContactLeft>
                    <ContactText data-aos="fade-right" data-aos-duration="400">Have a project? Get in touch today</ContactText>
                    <BtnDiv data-aos="fade-right" data-aos-duration="400">
                    <ContactBtn>Contact us</ContactBtn>
                    </BtnDiv>
                </ContactLeft>
                <ContactImgDiv>
                    <ContactImg src={ContactImage} />
                </ContactImgDiv>
            </Contact>
            <Steps>
                <StepsTitleDiv>
                    <StepsTitle>A simple, yet effective three step process.</StepsTitle>
                    <StepsText>A scelerisque purus semper eget duis at tellus integer malesuada nunc vel risus commodo viverra maecenas doloro accumsan pharetra massa massa ultricie.</StepsText>
                </StepsTitleDiv>
                <StepsCards>
                <StepsCard data-aos="fade-up" data-aos-duration="300">
                    <CardImage src={Idea}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Project Idea</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </StepsCard>
                <StepsCard data-aos="fade-up" data-aos-duration="700">
                    <CardImage src={Execution}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Execution</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </StepsCard>
                <StepsCard data-aos="fade-up" data-aos-duration="1100">
                    <CardImage src={Launch}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Launch</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </StepsCard>
                </StepsCards>
                <CardBtns>
                    <CardBtn1>Contact us</CardBtn1>
                    <CardBtn2>About Our agency</CardBtn2>
                </CardBtns>
            </Steps>
        </Container>
    </>
  )
}

export default Portfolio;