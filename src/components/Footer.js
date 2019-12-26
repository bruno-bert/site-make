import React from "react"

export default function Footer(props) {
  const data = props.data
  const globalStyles = data.globalStyles

  return (
    <footer className="footer">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
