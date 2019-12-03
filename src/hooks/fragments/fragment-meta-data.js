import { graphql } from "gatsby"
export const metaData = graphql`
  fragment metadata on Site {
    siteMetadata {
        title
        description
        author
        theme
        links {
            id
            description
            href
        }
        sections {
          id
          type
          hero {
            title
            subTitle
            backgroundImage
            callToAction {
              text
              href
            }
            videoBox {
              backgroundImage
              buttonImage
              href
            }
          }
        }
    }
  }
`

