const path = require("path")



exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const BLOG_POST_COVER_IMAGE_MAX_WIDTH = 800

  return graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000) {
        totalCount 
        edges {
          node {
            html
            id
            excerpt
            frontmatter {
              path
              title
              description
              date
              author
              keywords
              cover {
                childImageSharp {
                  ... on ImageSharp {
                    fluid(maxWidth: 800, maxHeight: 400) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        }
      }

      site {
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
                title
                subtitle
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
    }
  `).then(res => {
    if (res.errors) {
      console.log("res-errors", JSON.stringify(res))
      return Promise.reject(res.errors)
    }

    const meta = res.data.site.siteMetadata
    const template = path.resolve(`src/templates/${meta.theme}.js`)

    /** create pages from cms */
    const pages = meta.pages
    pages.map(page => {
      if (page.name !== "post")
        createPage({
          path: page.path,
          component: template,
          context: {
            sections: page.sections,
            locale: page.locale,
            meta,
          },
        })
    })




     /** create pages from markdown to the blog */
    const postPages = pages.filter(page => page.name === "post")
    const blogPrefix = meta.blogPrefix
    if (postPages && postPages.length > 0) {
      const postPage = postPages[0]
      const posts = res.data.allMarkdownRemark.edges
      let pagePath = ""
      posts.map(({ node }, index) => {
        pagePath = `${blogPrefix}${node.frontmatter.path}`
  
        const prev = index === 0 ? false : posts[index - 1].node
        const next = index === posts.length - 1 ? false : posts[index + 1].node

        

        createPage({
          path: pagePath,
          component: template,
          context: {
            postInfo: { ...node, prev, next },
            keywords: node.frontmatter.keywords,
            commentsProvider: postPage.commentsProvider !== "none" ? postPage.commentsProvider : null , 
            blogHome: postPage.blogHome || "/blog",
            sections: [ ...postPage.sections, { id: "post", type: "post" }],
            coverImageMaxWidth: BLOG_POST_COVER_IMAGE_MAX_WIDTH,
            locale: postPage.locale,
            meta,
          },
        })
      })

    }

   
   
  })
}
