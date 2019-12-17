import React from "react"
import { useImages } from "../hooks/use-images"

import BackgroundImage from "gatsby-background-image"

export default function SectionWrapper(props) {
  const meta = props.data
  const imageData = useImages()
  const bgImageSrc = meta.backgroundImage

  const [bgImage] = imageData.desktop.nodes.filter(
    img => img.relativePath === bgImageSrc
  )

  //const childrenWithProps = React.Children.map(props.children, child =>
  //  React.cloneElement(child, { metadata: meta })
  //)

  return (
    <section id={props.id} className={props.className}>
      {bgImage && (
        <BackgroundImage Tag="div" fluid={bgImage.childImageSharp.fluid}>
          {props.children}
        </BackgroundImage>
      )}

      {!bgImage && <div className="container">{props.children}</div>}
    </section>
  )
}
