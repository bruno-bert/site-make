/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"
import { useImages } from "../hooks/use-images"

const Image = ({ src, imgStyle, className, alt, srcObject, optimized }) => {
  const data = useImages()
  const [img] = data.images.nodes.filter(img => img.relativePath === src)

  const style = imgStyle ? JSON.parse(imgStyle) : null

  if (img) {
    if (optimized)
      return (
        <GatsbyImage
          imgStyle={{ style }}
          className={className}
          alt={alt}
          fixed={img.childImageSharp.fixed}
        />
      )
    else
      return (
        <img style={style} className={className} alt={alt} src={srcObject} />
      )
  } else return null
}

Image.defaultProps = {
  optimized: false,
}

Image.propTypes = {
  optimized: PropTypes.bool,
  src: PropTypes.string.isRequired,
}

export default Image
