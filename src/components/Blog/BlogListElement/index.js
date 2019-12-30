
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import BlogListElementStyle from "./styles"

export default function BlogListElement( {data, locale} ) {



  return (
    <BlogListElementStyle 
       id={`blog-list-element-${data.key}`} 
       className="blog-list-element" >
            {/**data.coverImage */}
            <div className="blog-list-element-cover-image"> 
            <Link to={data.path}>
              <Image fluid={data.coverImage} />  
              </Link>  
            </div>
            <div className="blog-list-element-content">
            <Link to={data.path}>
              
              <h3 className="blog-list-title">{data.title}</h3>
              <p  className="blog-list-author"><i>{locale.by} {data.author} {locale.on} {data.date}</i></p>
              <p  className="blog-list-description">{data.description}</p>
              <p  className="blog-list-excerpt">{data.excerpt}</p>
            </Link>
            </div>
            
            
    </BlogListElementStyle>
  )
}



