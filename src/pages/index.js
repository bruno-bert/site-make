import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header />
    <Hero />

    <Footer />
  </Layout>
)

export default IndexPage
