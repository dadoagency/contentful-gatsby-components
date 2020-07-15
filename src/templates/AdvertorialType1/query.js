export const query = `
  query advertorialType1PageQuery($contentful_id: String) {
    contentfulAdvertorialType1(contentful_id: { eq: $contentful_id }) {
      facebookPixelId
      node_locale
      redirectDestinations {
        url
        utm
      }
      headline {
        json
      }
      body {
        json
      }
      testimonialSection {
        headerImage {
          fluid {
            aspectRatio
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            sizes
            src
            srcSet
          }
        }
        subtitle {
          json
        }
        reviews {
          ... on ContentfulTrustpilotReview {
            title
            body {
              json
            }
            productLinkButton {
              text
              icon {
                fixed(width: 12) {
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  height
                  src
                  srcSet
                  width
                }
              }
            }
          }
        }
      }
      references {
        displayText
        url
      }
    }

    logo: file(relativePath: { eq: "Petlab-logo.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
