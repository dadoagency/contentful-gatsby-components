import React from "react"
import PropTypes from "prop-types"
import renderOptions from "../../utils/richText"
import Layout from "../../components/Layout"
import Article from "../../components/Article"
import TestimonialSection from "../../components/TestimonialSection"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import Tracking from "../../components/Tracking"
import ProductLinkButton from "../../components/ProductLinkButton"
import ProductCard from "../../components/ProductCard"
import useRedirectDestination from "../../hooks/useRedirectDestination"
import { PageProvider } from "../../context/PageContext"

import "./advertorialType2.scss"

export const AdvertorialType2Page = graphql`
  fragment AdvertorialType2Page on ContentfulAdvertorialType2 {
    facebookPixelId
    redirectDestinations {
      url
      params {
        key
        value
      }
    }
    headline {
      json
    }
    stickyProductButton {
      text
      icon {
        localFile {
          url
        }
      }
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
        ... on ContentfulTrustpilotReviewB {
          title
          body {
            json
          }
        }
      }
    }
    socialMediaIcons {
      icon {
        file {
          url
        }
      }
      link
    }
    footer {
      json
    }
  }
`

const AdvertorialType2 = ({
  logo,
  facebookPixelId,
  stickyProductButton,
  redirectDestinations,
  footer,
  headline,
  body,
  testimonialSection,
  socialMediaIcons,
}) => {
  useRedirectDestination(redirectDestinations)
  return (
    <Layout
      className="advertorial-type-2"
      logo={logo}
      extra={
        stickyProductButton ? (
          <ProductLinkButton
            icon={stickyProductButton.icon ? stickyProductButton.icon : null}
            cta={stickyProductButton.text ? stickyProductButton.text : null}
          />
        ) : null
      }
      footer={
        <footer>
          <div className="site-footer-wrapper">
            {footer && documentToReactComponents(footer.json, renderOptions)}
          </div>
        </footer>
      }
    >
      <Tracking pixelId={facebookPixelId} />
      <div className="title">
        {headline && documentToReactComponents(headline.json, renderOptions)}
      </div>
      <div className="flex-wrapper">
        <Article
          body={
            <>{body && documentToReactComponents(body.json, renderOptions)}</>
          }
        />

        <div className="right-sidebar">
          {testimonialSection ? (
            <>
              <TestimonialSection
                headerImage={testimonialSection.headerImage}
                subHeading={
                  <>
                    {documentToReactComponents(
                      testimonialSection.subtitle.json,
                      renderOptions
                    )}
                  </>
                }
                reviews={testimonialSection.reviews}
              />

              <ProductCard
                className="floating"
                headerImage={testimonialSection.headerImage}
                subHeading={
                  <>
                    {documentToReactComponents(
                      testimonialSection.subtitle.json,
                      renderOptions
                    )}
                  </>
                }
              />
            </>
          ) : null}

          <div className="social-icons">
            {socialMediaIcons &&
              socialMediaIcons.map((socialMediaIcon, index) => {
                const { link, icon } = socialMediaIcon
                return (
                  <div className="social-icon" key={index}>
                    <a href={link}>
                      <img alt="social icon" src={icon.file.url} />
                    </a>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

AdvertorialType2.propTypes = {
  logo: PropTypes.object.isRequired,
  facebookPixelId: PropTypes.string,
  stickyProductButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
  }),
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
  headline: PropTypes.shape({
    json: PropTypes.object,
  }).isRequired,
  footer: PropTypes.shape({
    json: PropTypes.object,
  }).isRequired,
  body: PropTypes.shape({
    json: PropTypes.object,
  }).isRequired,
  //   testimonialSection: { ...Reviews.propTypes },
  socialMediaIcons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      link: PropTypes.string,
    })
  ),
}

export default props => {
  return (
    <PageProvider>
      <AdvertorialType2 {...props} />
    </PageProvider>
  )
}
