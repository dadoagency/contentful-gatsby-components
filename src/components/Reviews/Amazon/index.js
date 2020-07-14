import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import ReviewBody from "../ReviewBody"

AmazonReview.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  stars: PropTypes.number,
  productLinkButton: PropTypes.object.isRequired,
}

export default function AmazonReview({
  title,
  body,
  stars = 5,
  productLinkButton,
}) {
  if (!stars) {
    stars = 5
  }
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
  const Rating = () => {
    const ratings = []
    for (let index = 0; index < stars; index++) {
      ratings.push(
        <Img
          fixed={data.star.childImageSharp.fixed}
          alt="Review star"
          key={index}
        />
      )
    }
    return ratings
  }
  return (
    <div className="facebook-container">
      <div style={{ fontFamily: "lato, arial, sans-serif", fontSize: "14px" }}>
        <Rating />
        &nbsp;&nbsp;
        <Img fixed={data.amazonLogo.childImageSharp.fixed} alt="Amazon logo" />
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
