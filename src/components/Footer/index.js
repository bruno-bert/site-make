import React from "react"

import { FooterWrapper } from "./styles"

export default function Footer() {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterWrapper>
  )
}
