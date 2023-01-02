import { BrowseBtn, Container, Header, ImageMain, ImageSection, Title } from "./agencyStyle"
import AgencyImg from '../images/agency.png'
import Line from "../line/line"


const Agency = () => {


  return (
    <>
    <Container>
        <Header>
            <Title>Our agency started back in 2002</Title>
            <BrowseBtn>More About Us</BrowseBtn>
        </Header>
        <ImageSection>
            <ImageMain src={AgencyImg} />
        </ImageSection>
    </Container>
    <Line/>
    </>
  )
}

export default Agency