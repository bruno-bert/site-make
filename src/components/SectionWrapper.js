import React from "react"
import { SectionFromCms } from "../helpers/CmsHelper"
import { useImages } from "../hooks/use-images"
import { useMetaData } from "../hooks/use-meta"

import BackgroundImage from "gatsby-background-image"

export default function SectionWrapper(props) {
  const data = useMetaData()
  const meta = SectionFromCms(props, props.sectionType)
  const imageData = useImages()
  const bgImageSrc = meta.backgroundImage

  const [bgImage] = imageData.desktop.nodes.filter(
    img => img.relativePath === bgImageSrc
  )

  const childrenWithProps = React.Children.map(props.children, child =>
    React.cloneElement(child, { metadata: data })
  )

  return (
    <section className={props.className}>
      {bgImage && (
        <BackgroundImage Tag="div" fluid={bgImage.childImageSharp.fluid}>
          {childrenWithProps}
        </BackgroundImage>
      )}

      {!bgImage && <div>{childrenWithProps}</div>}
    </section>
  )
}
