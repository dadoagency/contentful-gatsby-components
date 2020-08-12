import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import renderOptions from "../../../utils/richText"
import BasicReview from "../Trustpilot"
import ProductLinkButton from "../../ProductLinkButton"
import AmazonReviewComponent from "../Amazon"
import FacebookReviewComponent from "../Facebook"
import FacebookReviewD from "../Facebook/FacebookReviewD"
import TrustPilotReviewB from "../Trustpilot/TrustpilotReviewB"
import TrustpilotReviewC from "../Trustpilot/TrustpilotReviewC"
import TrustpilotReviewD from "../Trustpilot/TrustpilotReviewD"

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
            case "ContentfulFacebookReviewD":
              return <FacebookReviewTypeD review={review} key={index} />
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
            case "ContentfulTrustpilotReviewD":
              return <TrustPilotReviewTypeD review={review} key={index} />
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
      productLinkButton={
        <ProductLinkButton
          cta={productLinkButton.text}
          cta2={productLinkButton.additionalText}
          icon={productLinkButton.icon}
          bgColour={productLinkButton.bgColour}
          bgHoverColour={productLinkButton.bgHoverColour}
          fontColour={productLinkButton.fontColour}
          fontHoverColour={productLinkButton.fontHoverColour}
          borderColour={productLinkButton.borderColour}
          borderHoverColour={productLinkButton.borderHoverColour}
        />
      }
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
const FacebookReviewTypeD = ({ review }) => {
  const { title, body, productLinkButton, avatar } = review
  const renderedBody = documentToReactComponents(body.json, renderOptions)
  if (productLinkButton) {
    return (
      <FacebookReviewD
        title={title}
        body={renderedBody}
        action={
          <ProductLinkButton
            cta={productLinkButton.text}
            cta2={productLinkButton.additionalText}
            icon={productLinkButton.icon}
            bgColour={productLinkButton.bgColour}
            bgHoverColour={productLinkButton.bgHoverColour}
            fontColour={productLinkButton.fontColour}
            fontHoverColour={productLinkButton.fontHoverColour}
            borderColour={productLinkButton.borderColour}
            borderHoverColour={productLinkButton.borderHoverColour}
          />
        }
      />
    )
  }
  return (
    <FacebookReviewD
      title={title}
      body={renderedBody}
      avatar={avatar && avatar.localFile.childImageSharp.fixed}
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
            cta2={productLinkButton.additionalText}
            icon={productLinkButton.icon}
            bgColour={productLinkButton.bgColour}
            bgHoverColour={productLinkButton.bgHoverColour}
            fontColour={productLinkButton.fontColour}
            fontHoverColour={productLinkButton.fontHoverColour}
            borderColour={productLinkButton.borderColour}
            borderHoverColour={productLinkButton.borderHoverColour}
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
            cta2={productLinkButton.additionalText}
            icon={productLinkButton.icon}
            bgColour={productLinkButton.bgColour}
            bgHoverColour={productLinkButton.bgHoverColour}
            fontColour={productLinkButton.fontColour}
            fontHoverColour={productLinkButton.fontHoverColour}
            borderColour={productLinkButton.borderColour}
            borderHoverColour={productLinkButton.borderHoverColour}
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

const TrustPilotReviewTypeD = ({ review }) => {
  const { title, body, productLinkButton, avatar } = review
  const renderedBody = documentToReactComponents(body.json, renderOptions)
  if (productLinkButton) {
    return (
      <TrustpilotReviewD
        title={title}
        body={renderedBody}
        action={
          <ProductLinkButton
            cta={productLinkButton.text}
            cta2={productLinkButton.additionalText}
            icon={productLinkButton.icon}
            bgColour={productLinkButton.bgColour}
            bgHoverColour={productLinkButton.bgHoverColour}
            fontColour={productLinkButton.fontColour}
            fontHoverColour={productLinkButton.fontHoverColour}
            borderColour={productLinkButton.borderColour}
            borderHoverColour={productLinkButton.borderHoverColour}
          />
        }
      />
    )
  }
  return (
    <TrustpilotReviewD
      title={title}
      body={renderedBody}
      avatar={avatar && avatar.localFile.childImageSharp.fixed}
    />
  )
}

export default DynamicReviewList
