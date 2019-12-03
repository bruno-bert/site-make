/** This hook gets specific image */

import { useStaticQuery, graphql } from "gatsby"
import "./fragments/fluid-image"
export const useImages = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile {
        nodes {
          id
          relativePath
          ...fixedImage
          ...fluidImage
        }
      }

      desktop: allFile(filter: { relativePath: { regex: "/(background)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return data
}
