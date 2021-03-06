import React from "react"
import PropTypes from "prop-types"
import renderOptions from "../../utils/richText"
import Layout from "../../components/Layout"
import Article from "../../components/Article"
import Reviews from "../../components/TestimonialSection"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import "./style.scss"
import Tracking from "../../components/Tracking"
import useRedirectDestination from "../../hooks/useRedirectDestination"
import { PageProvider } from "../../context/PageContext"
import Footer from "../../components/Footer"

export const AdvertorialType1Page = graphql`
  fragment AdvertorialType1Page on ContentfulAdvertorialType1 {
    facebookPixelId
    node_locale
    redirectDestinations {
      url
      params {
        key
        value
      }
    }
    fixedHeader
    logoPosition
    headerText
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
          internal {
            type
          }
          productLinkButton {
            ...ProductLinkButtonFields
          }
        }
        ... on ContentfulFacebookReview {
          title
          body {
            json
          }
          internal {
            type
          }
          productLinkButton {
            ...ProductLinkButtonFields
          }
        }
        ... on ContentfulFacebookReviewD {
          title
          body {
            json
          }
          internal {
            type
          }
          productLinkButton {
            ...ProductLinkButtonFields
          }
        }
        ... on ContentfulTrustpilotReviewC {
          title
          body {
            json
          }
          internal {
            type
          }
          productLinkButton {
            ...ProductLinkButtonFields
          }
        }
        ... on ContentfulTrustpilotReviewD {
          title
          body {
            json
          }
          internal {
            type
          }
          productLinkButton {
            ...ProductLinkButtonFields
          }
        }
      }
    }
    footer {
      json
    }
  }
`

const AdvertorialType1 = ({
  facebookPixelId,
  headline,
  body,
  node_locale,
  fixedHeader,
  logoPosition,
  headerText,
  logo,
  companyDetails,
  footerLinks,
  redirectDestinations,
  testimonialSection,
  references,
  footer,
}) => {
  useRedirectDestination(redirectDestinations)
  const ArticleBody = () => {
    let document = body?.json
    return documentToReactComponents(document, renderOptions)
  }
  const documentTitle = (
    <>{documentToReactComponents(headline?.json, renderOptions)}</>
  )
  return (
    <Layout
      className="advertorial-type-1"
      references={references}
      locale={node_locale}
      fixedHeader={fixedHeader}
      logoPosition={logoPosition}
      headerText={headerText}
      logo={logo}
      footer={
        footer && (
          <Footer
            companyDetails={companyDetails}
            footerLinks={footerLinks}
            footerBody={
              <>
                {Object.entries(footer.json).length > 0
                  ? documentToReactComponents(footer.json, renderOptions)
                  : null}
              </>
            }
          />
        )
      }
    >
      <Tracking pixelId={facebookPixelId} />
      <Article title={documentTitle} body={<ArticleBody />} />
      <Reviews
        headerImage={testimonialSection?.headerImage}
        subHeading={
          testimonialSection?.subtitle
            ? documentToReactComponents(
                testimonialSection.subtitle.json,
                renderOptions
              )
            : null
        }
        reviews={testimonialSection?.reviews}
      />
    </Layout>
  )
}

AdvertorialType1.propTypes = {
  logo: PropTypes.object.isRequired,
  facebookPixelId: PropTypes.string,
  fixedHeader: PropTypes.bool,
  logoPosition: PropTypes.string,
  headerText: PropTypes.string,
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
      params: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string,
          value: PropTypes.string,
        })
      ),
    })
  ),
  testimonialSection: PropTypes.shape({
    headerImage: PropTypes.object.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        internal: PropTypes.shape({
          type: PropTypes.string.isRequired,
        }).isRequired,
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
  footer: PropTypes.shape({
    json: PropTypes.object.isRequired,
  }).isRequired,
  companyDetails: PropTypes.object.isRequired,
  footerLinks: PropTypes.array,
}

export default props => {
  return (
    <PageProvider>
      <AdvertorialType1 {...props} />
    </PageProvider>
  )
}
