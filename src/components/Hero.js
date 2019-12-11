import React from "react"
import { Link } from "gatsby"
import { SectionFromCms } from "../helpers/CmsHelper"
import { useImages } from "../hooks/use-images"

import BackgroundImage from "gatsby-background-image"
import Image from "./Image"
import heroLogo from "../images/landing/hero-logo.svg"

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
        <BackgroundImage Tag="div" fluid={bgImage.childImageSharp.fluid}>
          <Image
            className="logo"
            alt="logo"
            src={meta.logoImage}
            srcObject={heroLogo}
          />

          <h1 dangerouslySetInnerHTML={{ __html: meta.title }}>{}</h1>
          <p>{meta.subTitle}</p>
        </BackgroundImage>
      )}
    </section>
  )
}
