import { graphql } from "gatsby"
export const metaData = graphql`
  fragment metadata on Site {
    siteMetadata {
      title
      description
      author
      siteUrl
      email
      theme

      postBodyComponents {
        scripts {
          id
          src
        }

        stylesheets {
          href
        }
      }

      headComponents {
        scripts {
          id
          src
        }

        stylesheets {
          href
        }
      }

      globalStyles {
        typography {
          fontFamily
          fontFamilySecondary
        }
        colors {
          backgroundColor
          primaryColor
          secondaryColor
          terciaryColor
          lightTextColor
          darkTextColor
        }
      }

      pages {
        path
        name

        sections {
          id
          type
          header {
            styles {
              headerStyle
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
            socialMedia {
              className
              href
            }
            callToAction {
              id
              text
              href
            }
          }
          gallery {
            title
            subtitle
            galleryPath
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
