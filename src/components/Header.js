import React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import PropTypes from "prop-types"
import Image from "./Image"

const Header = props => {
  const data = props.data
  const [showMenu, setShowMenu] = useState(false)
  const links = data.links

  let logo = null
  if (data.logoImage) {
    try {
      logo = require(`../images/${data.logoImage}`)
    } catch (error) {
      console.error("Could not load logo: " + error)
    }
  }

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

  const logoStyle = data.styles && data.styles.logoStyle

  return (
    <header id="header" className="header">
      <div id="logo-placeholder">
        {data.logoImage && (
          <Image
            imgStyle={logoStyle}
            className="logo"
            alt="logo"
            src={data.logoImage}
            srcObject={logo}
          />
        )}
      </div>

      <a
        href="#menu"
        className="menu-icon"
        id="menuToggle"
        onClick={toggleMenu}
      >
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

Header.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Header
