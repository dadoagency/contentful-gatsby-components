import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import ReviewBody from "../ReviewBody"
import ReviewHead from "../ReviewHead"

const FacebookReview = ({ title, body, avatar, productLinkButton }) => {
  const data = useStaticQuery(graphql`
    query facebookReview {
      fb: file(relativePath: { eq: "fb.png" }) {
        childImageSharp {
          fixed(width: 73) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <FacebookReviewPure
      title={title}
      body={body}
      avatar={avatar}
      productLinkButton={productLinkButton}
      logo={data?.fb?.childImageSharp?.fixed}
    />
  )
}

export function FacebookReviewPure({
  title,
  logo,
  avatar,
  body,
  productLinkButton,
}) {
  return (
    <div className="facebook-container">
      <ReviewHead title={title} logo={logo} avatar={avatar} />
      <ReviewBody>{body}</ReviewBody>
      {productLinkButton}
    </div>
  )
}

FacebookReview.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  avatar: PropTypes.object,
}
export default FacebookReview
