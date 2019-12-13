import React from "react"
import { Link } from "gatsby"
import { CmsFromProps } from "../helpers/CmsHelper"
import { useState } from "react"

export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false)
  const links = CmsFromProps(props).links

  const toggleMenu = () => {
    if (!showMenu) {
      setShowMenu(true)
      document.getElementById("sidebar").classList.add("side-menu")
      document.getElementById("menuToggle").classList.add("close")
    } else {
      setShowMenu(false)
      document.getElementById("sidebar").classList.remove("side-menu")
      document.getElementById("menuToggle").classList.remove("close")
    }
  }

  return (
    <header className="header">
      {/*<Image className="logo" alt="logo" src="landing/logo.png" optimized />*/}

      <a href="#" className="menu-icon" id="menuToggle" onClick={toggleMenu}>
        <span></span>
      </a>

      <nav id="sidebar" className="navbar show-menu">
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
