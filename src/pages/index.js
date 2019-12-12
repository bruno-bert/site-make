import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SectionWrapper from "../components/SectionWrapper"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header />

    <SectionWrapper className="hero" sectionType="hero">
      <Hero />
    </SectionWrapper>

    <Footer />
  </Layout>
)

export default IndexPage
