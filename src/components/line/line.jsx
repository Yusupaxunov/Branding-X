import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Span = styled.span`
    background-color: #d4d4d4;
    margin: 150px 0; 
    width: 82%;
    height: 2px;
`

const Line = () => {
  return (
    <Container>
     <Span></Span>  
    </Container>
  )
}

export default Line;