import { graphql } from "gatsby"
export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`