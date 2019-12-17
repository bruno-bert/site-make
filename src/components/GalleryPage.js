import React from "react"
import Gallery from "./Gallery"
import { useImages } from "../hooks/use-images"

export default function GalleryPage(props) {
  const allImages = useImages()

  const nodes = allImages.images.nodes.filter(
    node =>
      node.childImageSharp !== null &&
      String(node.relativePath).includes("gallery")
  )

  const data2 = {
    title: "Meu Trabalho",
    subtitle: "Na galeria de fotos alguns de meus trabalhos recentes",
  }

  const images2 = nodes.map(node => ({
    id: node.id,
    ...node.childImageSharp.fluid,
  }))

  return (
    <React.Fragment>
      <div className="header">
        {data2.title && <h3>{data2.title}</h3>}
        {data2.subtitle && <h5>{data2.subtitle}</h5>}
      </div>

      <Gallery images={images2} itemsPerRow={[2, 3]} />
    </React.Fragment>
  )

  /*
  <div className="gallery-inner">
  {chunked_images.map((image_array, idx) => (
    <div key={idx} className="photos_column">
      {image_array.map((image, idx) => (
        <a key={idx} href={require(`../images/${image.src}`)}>
          <Image src={image.src} alt={image.alt} optimized />
        </a>
      ))}
    </div>
  ))}
</div>
*/
}
