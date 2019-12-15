import React from "react"
import Image from "./Image"
import { chunk } from "../helpers"

export default function Gallery(props) {
  //const images = props.data.images
  //const data = props.data

  /** temporary*/
  const number_of_columns = 4
  const data = {
    title: "Meu Trabalho",
    subtitle:
      "Inspiração - Veja na galeria de fotos alguns de meus trabalhos recentes",
    images: [
      { src: "landing/image-1.jpg", alt: "image1" },
      { src: "landing/image-2.jpg", alt: "image2" },
      { src: "landing/image-3.jpg", alt: "image3" },
      { src: "landing/image-4.jpg", alt: "image4" },
      { src: "landing/image-5.jpg", alt: "image5" },
      { src: "landing/image-6.jpg", alt: "image6" },
      { src: "landing/image-7.jpg", alt: "image7" },
      { src: "landing/image-8.jpg", alt: "image8" },
      { src: "landing/image-9.jpg", alt: "image9" },
      { src: "landing/image-10.jpg", alt: "image10" },
      { src: "landing/image-11.jpg", alt: "image11" },
      { src: "landing/image-12.jpg", alt: "image12" },
      { src: "landing/image-13.jpg", alt: "image13" },
      { src: "landing/image-14.jpg", alt: "image14" },
      { src: "landing/image-15.jpg", alt: "image15" },
    ],
  }

  const chunked_images = chunk(number_of_columns, data.images)

  return (
    <React.Fragment>
      <div className="header">
        {data.title && <h3>{data.title}</h3>}
        {data.subtitle && <h5>{data.subtitle}</h5>}
      </div>
      <div className="gallery-inner">
        {chunked_images.map(image_array => (
          <div className="photos_column">
            {image_array.map(image => (
              <Image src={image.src} alt={image.alt} optimized />
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}
