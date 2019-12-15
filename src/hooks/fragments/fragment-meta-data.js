import { graphql } from "gatsby"
export const metaData = graphql`
  fragment metadata on Site {
    siteMetadata {
      title
      description
      author

      sections {
        id
        type
        header {
          styles {
            navStyle
            logoStyle
          }
          logoImage
          links {
            id
            description
            href
          }
        }
        hero {
          styles {
            logoStyle
            titleStyle
            subTitleStyle
          }
          title
          subTitle
          backgroundImage
          logoImage
          callToAction {
            text
            href
          }
        }
        gallery {
          images {
            src
            alt
          }
        }
      }
    }
  }
`

/**
 *  videoBox {
            backgroundImage
            buttonImage
            href
          }
 */
