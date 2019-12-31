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
  const keywords = props.pageContext.keywords 
  const postInfo = props.pageContext.postInfo 
  const locale =  props.pageContext.locale 
  
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
      <SEO keywords={keywords}/>

      {/** header section */}
      {headerSection &&
        headerSection.map(item => <Header key={item.id} data={item.header} locale={locale} />)}

      {/** other sections */}
      {otherSections.map(item => (
        <SectionWrapper
          key={item.id}
          id={item.id}
          className={item.className || item.type}
          data={item[item.type]}
          locale={locale}
        >
          {item.type === "hero" && <Hero data={item[item.type]} locale={locale}/>}
          {item.type === "blog" && (
            <Blog
              blogPrefix={props.pageContext.meta.blogPrefix}
              data={item[item.type]}
              locale={locale}
            />
          )}
          {item.type === "gallery" && <GalleryPage data={item[item.type]} locale={locale}/>}


          {item.type === "post" && postInfo && <Post 
          blogHome={props.pageContext.blogHome}
          commentsProvider={props.pageContext.commentsProvider}
          blogPrefix={props.pageContext.meta.blogPrefix} 
          postInfo={postInfo} data={item[item.type]} locale={locale}/>}
          

        </SectionWrapper>
      ))}

      {/** footer section */}
      {footerSection &&
        footerSection.map(item => <Footer key={item.id} data={item.footer} locale={locale}/>)}
    </Layout>
  )
}
