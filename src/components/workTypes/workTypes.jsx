import { BrowseBtn, Card, CardImage, CardSection, CardText, CardTitle, Container, Header, OrangeSlash, Title } from "./workTypesStyle"
import Branding from '../images/branding.png'
import Graphic from '../images/graphic.png'
import Marketing from '../images/marketing.png'
import Motion from '../images/motion.png'
import UXUI from '../images/UXUI.png'
import WebDesign from '../images/webDesign.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const WorkTypes = () => {
    
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <>
        <Container>
            <Header>
                <Title>We’re more than just a branding agency.</Title>
                <BrowseBtn>Browse All services</BrowseBtn>
            </Header>
            <CardSection>
                <Card data-aos="fade" data-aos-duration="200" >
                    <CardImage src={Branding}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Branding</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </Card>
                <Card data-aos="fade" data-aos-duration="400">
                    <CardImage src={WebDesign}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Web Design</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </Card>
                <Card data-aos="fade" data-aos-duration="600">
                    <CardImage src={UXUI}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>UX/UI Design</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </Card>
                <Card data-aos="fade" data-aos-duration="200">
                    <CardImage src={Graphic}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Graphic Design</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </Card>
                <Card  data-aos="fade" data-aos-duration="400">
                    <CardImage src={Motion}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Motion Design</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </Card>
                <Card  data-aos="fade" data-aos-duration="600">
                    <CardImage src={Marketing}/>
                    <CardTitle><OrangeSlash>/</OrangeSlash>Marketing</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.</CardText>
                </Card>
                
            </CardSection>
        </Container>
    </>
  )
}

export default WorkTypes