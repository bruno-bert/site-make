
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import BlogListElementStyle from "./styles"

export default function BlogListElement( {data} ) {
  return (
    <BlogListElementStyle 
       id={`blog-list-element-${data.key}`} 
       className="blog-list-element" >
            <Link to={data.path}>
            {data.coverImage && <Image fluid={data.coverImage} />}  
            <h3>{data.title}</h3>
            <p>{data.date}</p>
            <p>{data.description}</p>
            <p>{data.excerpt}</p>
            <p>{data.author}</p>          
            </Link>
     
    </BlogListElementStyle>
  )
}



