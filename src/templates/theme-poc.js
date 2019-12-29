import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import GalleryPage from "../components/GalleryPage"
import Footer from "../components/Footer"
import Blog from "../components/Blog"
import Post from "../components/Blog/Post"
import SectionWrapper from "../components/SectionWrapper"

export default props => {
  const globalStyles = props.pageContext.meta.globalStyles
  const sections = props.pageContext.sections
  const postInfo = props.pageContext.postInfo 

  
  const meta = sections.map(item => {
    item[item.type] = { ...item[item.type], globalStyles }
    return item
  })

  /** header section */
  const headerSection = meta.filter(section => section.type === "header")

  /** footer section */
  const footerSection = meta.filter(section => section.type === "footer")

  /** other sections */
  const otherSections = meta.filter(
    section => section.type !== "header" && section.type !== "footer"
  )

  return (
    <Layout>
      <SEO />

      {/** header section */}
      {headerSection &&
        headerSection.map(item => <Header key={item.id} data={item.header} />)}

      {/** other sections */}
      {otherSections.map(item => (
        <SectionWrapper
          key={item.id}
          id={item.id}
          className={item.className || item.type}
          data={item[item.type]}
        >
          {item.type === "hero" && <Hero data={item[item.type]} />}
          {item.type === "blog" && (
            <Blog
              blogPrefix={props.pageContext.meta.blogPrefix}
              data={item[item.type]}
            />
          )}
          {item.type === "gallery" && <GalleryPage data={item[item.type]} />}


          {item.type === "post" && postInfo && <Post postInfo={postInfo} data={item[item.type]} />}
          

        </SectionWrapper>
      ))}

      {/** footer section */}
      {footerSection &&
        footerSection.map(item => <Footer key={item.id} data={item.footer} />)}
    </Layout>
  )
}
