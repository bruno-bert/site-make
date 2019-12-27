import React from "react"
import FooterStyle from "./styles"

export default function Footer(props) {
  const data = props.data
  const globalStyles = data.globalStyles

  return (
    <FooterStyle className="footer" styles={globalStyles}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterStyle>
  )
}
