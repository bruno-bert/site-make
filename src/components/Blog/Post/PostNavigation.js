
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"


const PostNavigationStyle = styled.div.attrs(props => ({
  id: props.id,
}))`
 
`


export default function PostNavigation( {navigationData} ) {
  
  return (
    <PostNavigationStyle 
       id={`post-navigation`} 
       className="posts-navigation" >
       
       <Link className={`${navigationData.prev ? 'prev' : 'hide'}`} to={navigationData.prev ? navigationData.prev.path : '/'}><i className="fas fa-chevron-left" /><span>{navigationData.prev.title}</span></Link>
       <Link className="home" to={navigationData.home.path}><i className="fas fa-home" /><span>{navigationData.home.navDescription}</span></Link>
       <Link className={`${navigationData.next ? 'next' : 'hide'}`} to={navigationData.next ? navigationData.next.path : '/'}><span>{navigationData.next.title}</span><i className="fas fa-chevron-right" /></Link>
            
    </PostNavigationStyle>
  )
}



 