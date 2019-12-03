import React from "react"
import { HeaderWrapper } from "./styles"
import Image from "../image"
import { Link } from "gatsby"
import { CmsFromProps } from "../../helpers/CmsHelper"

export default function Header( props ) {
  
  const links = CmsFromProps(props).links
 
  return (
    <HeaderWrapper>
      
        <Image 
        className="logo" 
        alt="logo"
        src="landing/logo.png" 
        optimized />
        
        <a href="#" class="hide-desktop">
          <Image 
            className="menu-icon" 
            alt="toggle menu" 
            src="landing/ham.png" 
            optimized />         
        </a>

        <nav class="show-desktop hide-mobile">
          <ul>
            { links.map( link => (
              <li key={link.id}>
                <Link to={link.href}>{link.description}</Link>
              </li>
             ) )}
           
          </ul>
        </nav>
      
    </HeaderWrapper>
  )
}
