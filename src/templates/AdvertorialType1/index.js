import React from "react"
import PropTypes from "prop-types"
import renderOptions from "../../utils/richText"
import Layout from "../../components/Layout"
import Article from "../../components/Article"
import Reviews from "../../components/TestimonialSection"
import DynamicReviewList from "../../components/Reviews/ReviewList"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import "./style.scss"
// import Tracking from "../../components/Tracking"
import useRedirectDestination from "../../hooks/useRedirectDestination"
import { PageProvider } from "../../context/PageContext"

export const AdvertorialType1Page = graphql`
  fragment AdvertorialType1Page on ContentfulAdvertorialType1 {
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
`

const AdvertorialType1 = ({
  facebookPixelId,
  headline,
  body,
  node_locale,
  logo,
  redirectDestinations,
  testimonialSection,
  references,
  ...props
}) => {
  useRedirectDestination(redirectDestinations)
  const ArticleBody = () => {
    let document = body.json
    return documentToReactComponents(document, renderOptions)
  }
  const documentTitle = (
    <>{documentToReactComponents(headline.json, renderOptions)}</>
  )
  return (
    <Layout
      className="advertorial-type-1"
      references={references}
      locale={node_locale}
      logo={logo}
    >
      {/* <Tracking pixelId={facebookPixelId} /> */}
      <Article title={documentTitle} body={<ArticleBody />} />
      <Reviews
        headerImage={testimonialSection.headerImage}
        subHeading={documentToReactComponents(
          testimonialSection.subtitle.json,
          renderOptions
        )}
        reviews={<DynamicReviewList reviews={testimonialSection.reviews} />}
      />
    </Layout>
  )
}

AdvertorialType1.propTypes = {
  logo: PropTypes.object.isRequired,
  facebookPixelId: PropTypes.string,
  headline: PropTypes.shape({
    json: PropTypes.object,
  }).isRequired,
  body: PropTypes.shape({
    json: PropTypes.object.isRequired,
  }).isRequired,
  node_locale: PropTypes.string.isRequired,
  redirectDestinations: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      utm: PropTypes.string.isRequired,
    })
  ),
  testimonialSection: PropTypes.shape({
    headerImage: PropTypes.object.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        __typename: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.shape({
          json: PropTypes.object.isRequired,
        }).isRequired,
        productLinkButton: PropTypes.shape({
          icon: PropTypes.object,
          text: PropTypes.string,
        }),
      })
    ),
  }).isRequired,
  references: PropTypes.arrayOf(
    PropTypes.shape({
      displayText: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

// export default AdvertorialType1

export default props => {
  return (
    <PageProvider>
      <AdvertorialType1 {...props} />
    </PageProvider>
  )
}
