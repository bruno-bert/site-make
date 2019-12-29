import React from "react"
import PostStyle from "./styles"
import Image from "gatsby-image"

export default function Post(props) {
  const postInfo = props.postInfo
  const globalStyles = props.globalStyles
  const coverImage = postInfo.frontmatter.cover && postInfo.frontmatter.cover.childImageSharp.fluid
  
  return (
    <PostStyle id="post" className="post" styles={globalStyles}>
    
      {coverImage && <Image fluid={coverImage} />}  
      <p dangerouslySetInnerHTML={{ __html: postInfo.html }} />
    </PostStyle>
  )
}
