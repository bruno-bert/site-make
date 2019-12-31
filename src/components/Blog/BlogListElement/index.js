
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import BlogListElementStyle from "./styles"

export default function BlogListElement( {index, data, locale} ) {



  return (
    <BlogListElementStyle 
       id={`blog-list-element-${index}`} 
       className="blog-list-element" >
            
            <div className={`blog-list-element-cover-image ${index % 2 !== 0 ? 'inverse' : ''} `}> 
            <Link to={data.path}>
              <Image fluid={data.coverImage} />  
              </Link>  
            </div>
            <div className={`blog-list-element-content ${index % 2 !== 0 ? 'inverse' : ''} `}>
              
              <h3 className="blog-list-title">{data.title}</h3>
              <p  className="blog-list-author"><i>{locale.by} {data.author} {locale.on} {data.date}</i></p>
              <p  className="blog-list-description">{data.description}</p>
              <p  className="blog-list-excerpt">{data.excerpt}</p>
              <Link to={data.path} className="blog-list-button">{locale.readmore}</Link>
           
            </div>
            
            
    </BlogListElementStyle>
  )
}



