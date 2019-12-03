import React from "react"
import { HeroWrapper } from "./styles"
import { SectionFromCms } from "../../helpers/CmsHelper"
//import backgroundImage from "../../images/landing/header-bg.jpg"
import { useImages } from "../../hooks/use-images"

import BackgroundImage from "gatsby-background-image"

export default function Hero(props) {
  const meta = SectionFromCms(props, "hero")
  const imageData = useImages()
  const bgImageSrc = meta.backgroundImage

  const [bgImage] = imageData.desktop.nodes.filter(
    img => img.relativePath === bgImageSrc
  )

  return (
    <HeroWrapper meta={meta}>
      <BackgroundImage
        Tag="div"
        fluid={bgImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <h1>
          {meta.title}
          <span class="dot"></span>
        </h1>
        <p>{meta.subTitle}</p>
      </BackgroundImage>
    </HeroWrapper>
  )
}
