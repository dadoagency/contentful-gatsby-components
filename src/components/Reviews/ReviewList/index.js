import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import renderOptions from "../../../utils/richText"
import BasicReview from "../Trustpilot"
import ProductLinkButton from "../../ProductLinkButton"
import AmazonReviewComponent from "../Amazon"
import FacebookReviewComponent from "../Facebook"
import TrustPilotReviewB from "../Trustpilot/TrustpilotReviewB"
import TrustpilotReviewC from "../Trustpilot/TrustpilotReviewC"

const DynamicReviewList = ({ reviews }) => {
  return (
    <>
      {reviews &&
        reviews.map((review, index) => {
          switch (review.__typename) {
            case "ContentfulTrustpilotReview":
              return <TrustPilotReview review={review} key={index} />
            case "ContentfulFacebookReview":
              return <FaceBookReview review={review} key={index} />
            case "ContentfulAmazonReview":
              return <AmazonReview review={review} key={index} />
            case "ContentfulTrustpilotReviewB":
              return (
                <TrustPilotReviewB
                  title={review.title}
                  body={documentToReactComponents(
                    review.body.json,
                    renderOptions
                  )}
                  key={index}
                />
              )
            case "ContentfulTrustpilotReviewC":
                return <TrustPilotReviewTypeC review={review} key={index} />
            default:
              console.log(
                "unhandled review type. Will not render " + review.__typename
              )
              return null
          }
        })}
    </>
  )
}

const AmazonReview = ({ review }) => {
  const { title, body, productLinkButton, stars } = review
  const renderedBody = documentToReactComponents(body.json, renderOptions)
  return (
    <AmazonReviewComponent
      title={title}
      body={renderedBody}
      stars={stars}
      productLinkButton={<ProductLinkButton cta={productLinkButton.text} />}
    />
  )
}

const FaceBookReview = ({ review }) => {
  const { title, body, avatar, productLinkButton } = review
  const renderedBody = documentToReactComponents(body.json, renderOptions)
  return (
    <FacebookReviewComponent
      title={title}
      body={renderedBody}
      avatar={avatar}
      productLinkButton={productLinkButton}
    />
  )
}

const TrustPilotReview = ({ review }) => {
  const { title, body, productLinkButton, avatar } = review
  const renderedBody = documentToReactComponents(body.json, renderOptions)
  if (productLinkButton) {
    return (
      <BasicReview
        title={title}
        body={renderedBody}
        action={
          <ProductLinkButton
            cta={productLinkButton.text}
            icon={productLinkButton.icon}
          />
        }
      />
    )
  }
  return (
    <BasicReview
      title={title}
      body={renderedBody}
      avatar={avatar && avatar.localFile.childImageSharp.fixed}
    />
  )
}

const TrustPilotReviewTypeC = ({ review }) => {
  const { title, body, productLinkButton, avatar } = review
  const renderedBody = documentToReactComponents(body.json, renderOptions)
  if (productLinkButton) {
    return (
      <TrustpilotReviewC
        title={title}
        body={renderedBody}
        action={
          <ProductLinkButton
            cta={productLinkButton.text}
            icon={productLinkButton.icon}
          />
        }
      />
    )
  }
  return (
    <TrustpilotReviewC
      title={title}
      body={renderedBody}
      avatar={avatar && avatar.localFile.childImageSharp.fixed}
    />
  )
}

export default DynamicReviewList
