import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import GalleryPage from "../components/GalleryPage"
import Footer from "../components/Footer"
import SectionWrapper from "../components/SectionWrapper"
import { useMetaData } from "../hooks/use-meta"

const IndexPage = () => {
  const data = useMetaData()
  const meta = data.site.siteMetadata

  /** header section */
  const headerSection = meta.sections.filter(
    section => section.type === "header"
  )

  /** other sections */
  const sections = meta.sections.filter(section => section.type !== "header")

  return (
    <Layout>
      <SEO title="Home" />

      {/** header section */}
      {headerSection &&
        headerSection.map(item => <Header key={item.id} data={item.header} />)}

      {/** other sections */}
      {sections.map(item => (
        <SectionWrapper
          key={item.id}
          id={item.id}
          className={item.className || item.type}
          data={item[item.type]}
        >
          {item.type === "hero" && <Hero data={item[item.type]} />}
          {item.type === "gallery" && <GalleryPage data={item[item.type]} />}
        </SectionWrapper>
      ))}

      <Footer />
    </Layout>
  )
}

export default IndexPage
