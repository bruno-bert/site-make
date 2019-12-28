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
  const globalStyles = data.site.siteMetadata.globalStyles

  const meta = data.site.siteMetadata.sections.map(item => {
    item[item.type] = { ...item[item.type], globalStyles }
    return item
  })

  /** header section */
  const headerSection = meta.filter(section => section.type === "header")

  /** footer section */
  const footerSection = meta.filter(section => section.type === "footer")

  /** other sections */
  const sections = meta.filter(
    section => section.type !== "header" && section.type !== "footer"
  )

  return (
    <Layout>
      <SEO />

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

      {/** footer section */}
      {footerSection &&
        footerSection.map(item => <Footer key={item.id} data={item.footer} />)}
    </Layout>
  )
}

export default IndexPage
