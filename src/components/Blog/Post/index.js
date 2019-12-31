import React from "react"
import PostStyle from "./styles"
import Image from "gatsby-image"
import PostNavigation from './PostNavigation'
import { Link } from "gatsby"

export default function Post(props) {
  const postInfo = props.postInfo
  const locale = props.locale
  const blogHome = props.blogHome
  const blogPrefix = props.blogPrefix
  const globalStyles = props.globalStyles
  const coverImage = postInfo.frontmatter.cover && postInfo.frontmatter.cover.childImageSharp.fluid

  console.log('image', coverImage)
  
  const postPath = (postPath) =>{
    return `${blogPrefix}/${postPath}`
  }

  const navigationData = {
    prev: postInfo.prev && { path: postInfo.prev ? postPath(postInfo.prev.frontmatter.path) : '', title: postInfo.prev && postInfo.prev.frontmatter.title, navDescription: locale.prev},
    next: postInfo.next && { path: postInfo.next ? postPath(postInfo.next.frontmatter.path) : '', title: postInfo.next && postInfo.next.frontmatter.title, navDescription: locale.next},
    home: { path: blogHome, navDescription: locale.home}
  }

 

  return (
    <PostStyle id="post" className="post" styles={globalStyles}>
       
      <PostNavigation navigationData={navigationData}/>
      
      {coverImage && <Image fluid={coverImage} />}  
      <div className="post-content" dangerouslySetInnerHTML={{ __html: postInfo.html }} />
      
      <PostNavigation navigationData={navigationData}/>
     
    </PostStyle>
  )
}
