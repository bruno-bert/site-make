import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import styled from "styled-components"

//import backgroundImage from "../images/landing/header-bg.jpg"

/*
const ContainerWrapper = styled.div`
    background-image: url('${backgroundImage}');
    height: 100vh;
    background-size: cover;
    background-position: center;
`

const Container = ( {children, metadata} ) => { 
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { metadata: metadata })
  );

 return (
  <ContainerWrapper>
     { childrenWithProps }  
  </ContainerWrapper>
 )
  
}*/

const IndexPage = () => (
  <Layout>
    
  <SEO title="Home" />

    {/*<Container>*/}
      <Header />
      <Hero />
    {/*</Container>*/}

    <Footer />
  </Layout>
)

export default IndexPage
