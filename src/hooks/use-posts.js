import { useStaticQuery, graphql } from "gatsby"
export const usePosts = () => {
  
  const data = useStaticQuery(graphql`
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
    }
  `)

  return data
}
