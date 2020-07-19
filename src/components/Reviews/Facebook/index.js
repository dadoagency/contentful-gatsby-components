import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import ReviewBody from "../ReviewBody"
import ReviewHead from "../ReviewHead"
import ProductLinkButton from "../../ProductLinkButton"

const FacebookReview = ({ title, body, avatar, productLinkButton }) => {
  const data = useStaticQuery(graphql`
    query facebookReview {
      fb: file(relativePath: { eq: "fb.png" }) {
        childImageSharp {
          fixed(width: 74) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="facebook-container">
      <ReviewHead
        title={title}
        logo={data.fb.childImageSharp.fixed}
        avatar={avatar}
      />
      <ReviewBody>{body}</ReviewBody>
      {productLinkButton &&
      (productLinkButton.text || productLinkButton.icon) ? (
        <div className="page-btn-container">
          <ProductLinkButton
            cta={productLinkButton.text || ""}
            icon={productLinkButton.icon || null}
          />
        </div>
      ) : null}
    </div>
  )
}

FacebookReview.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  avatar: PropTypes.object,
}
export default FacebookReview
