import React from "react"
import PropTypes, { object } from "prop-types"
// import {
//   Layout,
//   Article,
//   TestimonialSection as Reviews,
//   RichText,
//   DynamicReviewList,
// } from "../../../index.js"
import { renderOptions } from "../../utils/richText"
import Article from "../../components/Article"
import Layout from "../../components/Layout"
import Reviews from "../../components/TestimonialSection"
// import DynamicReviewList from "../../components/Reviews/ReviewList"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import "./style.scss"
// import Tracking from "../../components/Tracking/Tracking"
// import useRedirectDestination from "../../hooks/useRedirectDestination"
// import { query } from "./query"
const DynamicReviewList = () => {
  return <div>sup reviews</div>
}

export const advertorialType1Page = graphql`
  fragment advertorialType1Page on ContentfulAdvertorialType1 {
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
// logo: file(relativePath: { eq: "Petlab-logo.png" }) {
//   childImageSharp {
//     fixed(width: 170) {
//       ...GatsbyImageSharpFixed_withWebp
//     }
//   }
// }

const AdvertorialType1 = props => {
  // useRedirectDestination(data.contentfulAdvertorialType1.redirectDestinations)
  // const ArticleBody = () => {
  //   let document = body.json
  //   return documentToReactComponents(document, renderOptions)
  // }
  console.log("lib", props)
  return <div>sup reviews</div>

  // const documentTitle = (
  //   <>
  //     {documentToReactComponents(
  //       data.contentfulAdvertorialType1.headline.json,
  //       renderOptions
  //     )}
  //   </>
  // )

  // return (
  //   <Layout
  //     className="advertorial-type-1"
  //     references={data.contentfulAdvertorialType1.references}
  //     locale={data.node_locale}
  //     logo={data.logo}
  //   >
  //     {/* <Tracking pixelId={data.contentfulAdvertorialType1.facebookPixelId} /> */}
  //     <Article title={documentTitle} body={<ArticleBody data={data} />} />
  //     <Reviews
  //       headerImage={
  //         data.contentfulAdvertorialType1.testimonialSection.headerImage
  //       }
  //       subHeading={documentToReactComponents(
  //         data.contentfulAdvertorialType1.testimonialSection.subtitle.json,
  //         renderOptions
  //       )}
  //       reviews={
  //         <DynamicReviewList
  //           reviews={data.contentfulAdvertorialType1.testimonialSection.reviews}
  //         />
  //       }
  //     />
  //   </Layout>
  // )
}

AdvertorialType1.propTypes = {
  body: PropTypes.shape({
    json: PropTypes.object.isRequired,
  }).isRequired,
}

export default AdvertorialType1
