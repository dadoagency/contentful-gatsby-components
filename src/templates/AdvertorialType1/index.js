import React from "react"
import {
  Layout,
  Article,
  TestimonialSection as Reviews,
  RichText,
  DynamicReviewList,
} from "@dadoagency/contentful-gatsby-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import "./advertorial.scss"
import Tracking from "../../components/Tracking/Tracking"
import useRedirectDestination from "../../hooks/useRedirectDestination"

export const query = graphql`
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

export default ({ data }) => {
  // useRedirectDestination(data.contentfulAdvertorialType1.redirectDestinations)
  const renderOptions = RichText.renderOptions
  const ArticleBody = () => {
    let document = data.contentfulAdvertorialType1.body.json
    return documentToReactComponents(document, renderOptions)
  }

  const documentTitle = (
    <>
      {documentToReactComponents(
        data.contentfulAdvertorialType1.headline.json,
        renderOptions
      )}
    </>
  )

  return (
    <Layout
      className="advertorial-type-1"
      references={data.contentfulAdvertorialType1.references}
      locale={data.node_locale}
      logo={data.logo}
    >
      <Tracking pixelId={data.contentfulAdvertorialType1.facebookPixelId} />
      <Article title={documentTitle} body={<ArticleBody data={data} />} />
      <Reviews
        headerImage={
          data.contentfulAdvertorialType1.testimonialSection.headerImage
        }
        subHeading={documentToReactComponents(
          data.contentfulAdvertorialType1.testimonialSection.subtitle.json,
          renderOptions
        )}
        reviews={
          <DynamicReviewList
            reviews={data.contentfulAdvertorialType1.testimonialSection.reviews}
          />
        }
      />
    </Layout>
  )
}
