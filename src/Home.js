import React from 'react'
import styled from 'styled-components'
import Product from './Product'

function Home() {
  return (
    <Container>
        
       <Banner>


       </Banner>

       <Content>
         <Product />  
         <Product /> 
         
       </Content>
       

    </Container>
  )
}

export default Home

const Container = styled.div`
    max-width: 100%;
    margin: 0 auto; // center the cointainer 
`
const Banner = styled.div`
     background-image: url('https://i.imgur.com/SYHeuYM.jpg');
     min-height: 700px;
      background-position: center;
      background-size: cover;
      z-index: 1;
     mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    // z-index:100;
    display:flex;
`