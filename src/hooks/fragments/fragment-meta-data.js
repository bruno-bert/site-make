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
      blogPrefix

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
        blogHome
        commentsProvider
        locale {
          on
          by
          home
          prev
          next
          readmore
          mail
          name
          subject
          message
          submit
          reset

        }

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

          blog {
            styles {
              titleStyle
              subTitleStyle
            }
          }

          contact {
            title
            subtitle
            styles {
              titleStyle
              subTitleStyle
            }
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
