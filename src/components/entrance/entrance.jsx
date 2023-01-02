import React from 'react'
import { Button, Buttons, Buttons2, Container, Information, LeftImage, LeftImg, Text, Title } from './entranceStyle';
import Image from '../images/mainImage.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Entrance = () => {

    useEffect(() => {
      AOS.init()
    }, [])
    

  return (
    <>
        <Container>
            <Information>
                <Title data-aos="fade-down" data-aos-duration="500">We’re a creative design agency from Los Angeles, CA</Title>
                <Text data-aos="fade-down" data-aos-duration="700">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</Text>
                <Buttons>
                    <Button data-aos="fade-top" data-aos-duration="900">Contact us</Button>
                    <Buttons2 data-aos="fade-top" data-aos-duration="1200">Our projects</Buttons2>
                </Buttons>
            </Information>
            <LeftImage>
                <LeftImg src={Image} alt='Design'/>
            </LeftImage> 
        </Container>
    </>
  )
}

export default Entrance;