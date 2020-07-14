import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import ReviewBody from "../ReviewBody"
import ReviewHead from "../ReviewHead"

const FacebookReview = ({ title, body, avatar }) => {
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
    </div>
  )
}

FacebookReview.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  avatar: PropTypes.object.isRequired,
}
export default FacebookReview
