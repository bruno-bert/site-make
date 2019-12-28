const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    query {
      site {
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
    }
  `).then(res => {
    if (res.errors) {
      console.log("res-errors", JSON.stringify(res))
      return Promise.reject(res.errors)
    }
    const meta = res.data.site.siteMetadata
    const theme = meta.theme
    const pages = meta.pages
    const template = path.resolve(`src/templates/${theme}.js`)

    pages.map(page => {
      sections = createPage({
        path: page.path,
        component: template,
        context: {
          sections: page.sections,
          meta,
        },
      })
    })
  })
}
