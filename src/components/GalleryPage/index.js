import React from "react"
import Gallery from "./Gallery"
import { useImages } from "../../hooks/use-images"
import GalleryStyle from "./styles"
import { ParseOnSuccess } from "../../helpers"

export default function GalleryPage(props) {
  const data = props.data
  const globalStyles = data.globalStyles

  const allImages = useImages()

  /** gets only the images from the gallery directory */
  const nodes = allImages.images.nodes.filter(
    node =>
      node.childImageSharp !== null &&
      String(node.relativePath).includes(data.galleryPath + "/")
  )

  /** merge global styles with component styles */
  const galleryStyle = data.styles && ParseOnSuccess(data.styles.galleryStyle)
  const styles = { ...globalStyles, ...galleryStyle }

  return (
    <GalleryStyle id="gallery" className="gallery" styles={styles}>
      <div className="header">
        {data.title && <h3>{data.title}</h3>}
        {data.subtitle && <h5>{data.subtitle}</h5>}
      </div>

      <Gallery
        images={nodes.map(node => ({
          id: node.id,
          ...node.childImageSharp.fluid,
        }))}
        itemsPerRow={[2, 3]}
      />
    </GalleryStyle>
  )
}
