import React,  { useState, useEffect } from "react"
import BlogStyle from "./styles"
import { usePosts } from "../../hooks/use-posts"
import BlogListElement from "./BlogListElement"


export default function Blog(props) {
  const data = props.data
  const blogPrefix = props.blogPrefix
  const globalStyles = data.globalStyles

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


  const [ticking, setTicking] = useState(false)
  
  const CONFIG = {
    countOfInitiallyShownPosts: 5,
    countOfPostsDynamicallyAdded: 5,
    offsetHeightToTriggerLoading: 20,
  }

  const update = () => {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (distanceToBottom < CONFIG.offsetHeightToTriggerLoading) {
      blogPostStore.add()
    }
    this.ticking = false
  }

  const handleScroll = () => {
    if (!ticking) {
      setTicking(true)
      requestAnimationFrame(() => update())
    }
  }

  /** component did mount */ 
  useEffect( () =>{
    window.addEventListener(`scroll`, handleScroll)
  } , [])

  /** component did unmount */
  useEffect(() => {
    return () => {
      console.log('will unmount');
      window.addEventListener(`scroll`, handleScroll)
    }
  }, []);


  

  return (
    <BlogStyle id="blog" className="blog" styles={globalStyles}>
      <h1 style={titleStyle} dangerouslySetInnerHTML={{ __html: data.title }} />
      <p style={subTitleStyle}>{data.subtitle}</p>

      
        {listOfPosts.slice(0, blogPostStore.postsToShow).map(({ node }) => {
         
          return (
            <BlogListElement key={node.id} data={
              { 
                path: `${blogPrefix}${node.frontmatter.path}`,
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                excerpt: node.excerpt,
                coverImage:
                  node.frontmatter.cover &&
                  node.frontmatter.cover.childImageSharp
                    ? node.frontmatter.cover.childImageSharp.fluid
                    : null,
              }
            } /> 
          )

        })}
     
    </BlogStyle>
  )
}
