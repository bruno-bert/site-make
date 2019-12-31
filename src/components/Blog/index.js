import React,  { useState, useEffect } from "react"
import BlogStyle from "./styles"
import { usePosts } from "../../hooks/use-posts"
import BlogListElement from "./BlogListElement"


export default function Blog(props) {
  const data = props.data
  const blogPrefix = props.blogPrefix
  const globalStyles = data.globalStyles
  const locale = props.locale

  const CONFIG = {
    countOfInitiallyShownPosts: 2,
    countOfPostsDynamicallyAdded: 2    
  }



  
  const [ticking, setTicking] = useState(false)
  const [postsToShow, setPostsToShow] = useState(CONFIG.countOfInitiallyShownPosts)



  /** get posts from data cms */
  const posts = usePosts()
  const listOfPosts = posts.allMarkdownRemark.edges 
  const totalCount = posts.allMarkdownRemark.edges.totalCount
  
  const titleStyle =
    data.styles && data.styles.titleStyle
      ? JSON.parse(data.styles.titleStyle)
      : null

  const subTitleStyle =
    data.styles && data.styles.subTitleStyle
      ? JSON.parse(data.styles.subTitleStyle)
      : null

   
  /** component did mount */      
  useEffect( () =>{
   
    window.addEventListener(`scroll`, handleScroll)
    window.addEventListener('resize', handleScroll)
    window.addEventListener('touchend', handleTouchEnd)

     /** component did unmount */
    return () => {
      window.removeEventListener(`scroll`, handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('touchend', handleTouchEnd)
    }

  } , [])

  const update = () => {

    
    if ( window && ( window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight ) ){
      setPostsToShow((prev) => prev + CONFIG.countOfPostsDynamicallyAdded )
    }

    setTicking(false)

  }

  const handleTouchEnd = (e) => {
    e.preventDefault(); 
    handleScroll();
  }

  const handleScroll = () => {
    if (!ticking) {
      setTicking(true)
      requestAnimationFrame(() => update())
    }
  }

  return (
    <BlogStyle id="blog" className="blog" styles={globalStyles}>
      <h1 style={titleStyle} dangerouslySetInnerHTML={{ __html: data.title }} />
      <p style={subTitleStyle}>{data.subtitle}</p>

      
        {listOfPosts.slice(0, postsToShow).map(({ node }, index) => (
         
          
            <BlogListElement index={index} locale={locale}  data={
              { 
                path: `${blogPrefix}${node.frontmatter.path}`,
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                author: node.frontmatter.author,
                description: node.frontmatter.description,
                excerpt: node.excerpt,
                coverImage:
                  node.frontmatter.cover &&
                  node.frontmatter.cover.childImageSharp
                    ? node.frontmatter.cover.childImageSharp.fluid
                    : null,
              }
            } /> 
          

        ))}
     
    </BlogStyle>
  )
}
