import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import ReviewBody from "../ReviewBody"
import ReviewHead from "../ReviewHead"
import useTrustpilotLink from "../../../hooks/useTrustpilotLink"

BasicReview.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  avatar: PropTypes.object,
  action: PropTypes.object,
}
export default function BasicReview({ title, body, avatar, action }) {
  const data = useStaticQuery(graphql`
    query facebookReviews {
      trustpilot: file(relativePath: { eq: "trustpilot.png" }) {
        childImageSharp {
          fixed(width: 74) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const url = useTrustpilotLink()

  return (
    <div className="facebook-container">
      <ReviewHead
        title={title}
        logo={data.trustpilot.childImageSharp.fixed}
        logoLink={url}
        avatar={avatar}
      />
      <ReviewBody>{body}</ReviewBody>
      <div className="page-btn-container">{action}</div>
    </div>
  )
}
