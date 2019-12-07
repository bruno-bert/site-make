import React from "react"
import { SectionFromCms } from "../helpers/CmsHelper"
import { useImages } from "../hooks/use-images"

import BackgroundImage from "gatsby-background-image"

export default function Hero(props) {
  const meta = SectionFromCms(props, "hero")
  const imageData = useImages()
  const bgImageSrc = meta.backgroundImage

  const [bgImage] = imageData.desktop.nodes.filter(
    img => img.relativePath === bgImageSrc
  )

  return (
    <section className="hero">
      {bgImage && (
        <BackgroundImage
          Tag="div"
          fluid={bgImage.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <h1 dangerouslySetInnerHTML={{ __html: meta.title }}>{}</h1>
          <p>{meta.subTitle}</p>
        </BackgroundImage>
      )}
    </section>
  )
}
