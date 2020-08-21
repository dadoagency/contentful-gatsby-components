import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import PropTypes from "prop-types"
import ReviewBody from "../ReviewBody"

AmazonReview.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  stars: PropTypes.number,
  productLinkButton: PropTypes.object,
}

export default function AmazonReview({
  title,
  body,
  stars,
  productLinkButton,
}) {
  const data = useStaticQuery(graphql`
    query amazonReview {
      star: file(relativePath: { eq: "review_star.png" }) {
        childImageSharp {
          fixed(width: 20) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      amazonLogo: file(relativePath: { eq: "amazon-logo.png" }) {
        id
        childImageSharp {
          fixed(width: 93) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AmazonReviewPure
      logo={data.amazonLogo.childImageSharp.fixed}
      title={title}
      body={body}
      productLinkButton={productLinkButton}
      numStars={stars}
      starIcon={data.star.childImageSharp.fixed}
    />
  )
}

export function AmazonReviewPure({
  logo,
  title,
  body,
  productLinkButton,
  numStars,
  starIcon,
}) {
  if (!numStars) {
    numStars = 5
  }
  const Rating = () => {
    const ratings = []
    for (let index = 0; index < numStars; index++) {
      ratings.push(
        <GatsbyImage fixed={starIcon} alt="Review star" key={index} />
      )
    }
    return ratings
  }
  return (
    <div className="facebook-container">
      <div style={{ fontFamily: "lato, arial, sans-serif", fontSize: "14px" }}>
        <Rating />
        &nbsp;&nbsp;
        <GatsbyImage fixed={logo} alt="Amazon logo" />
        &nbsp;&nbsp; Verified Purchase
      </div>

      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.1em",
          marginBottom: "5px",
          borderBottom: "1px solid #CCC",
          color: "#444",
        }}
      >
        {title}
      </div>

      <ReviewBody>{body}</ReviewBody>

      <div>
        <center>{productLinkButton}</center>
      </div>
    </div>
  )
}
