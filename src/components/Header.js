import React from "react"
import Image from "./Image"
import { Link } from "gatsby"
import { CmsFromProps } from "../helpers/CmsHelper"

export default function Header(props) {
  const links = CmsFromProps(props).links

  return (
    <header className="header">
      {/*<Image className="logo" alt="logo" src="landing/logo.png" optimized />*/}

      <a href="#" class="menu-icon" id="menuToggle">
        <span class="navClosed"></span>
      </a>

      <nav class="navbar">
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <Link to={link.href}>{link.description}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
