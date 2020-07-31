import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"

TrustpilotReviewC.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  avatar: PropTypes.object,
  action: PropTypes.object,
}
export default function TrustpilotReviewC({ title, body, avatar, action }) {
  console.log(action)
  const data = useStaticQuery(graphql`
    query trustPilotC {
      trustpilot: file(relativePath: { eq: "trustpilot.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="facebook-container">
      <div
        className="review-head"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontWeight: "bold",
          fontSize: "1.1em",
          marginBottom: "5px",
          borderBottom: "1px solid #CCC",
          color: "#444",
        }}
      >
        <div>
          {avatar ? (
            <GatsbyImage fixed={avatar} style={{ marginRight: ".5em" }} />
          ) : null}
        </div>
        <div
          style={{
            height: data.trustpilot.childImageSharp.height,
            alignSelf: "center",
          }}
          className="logo"
        >
          <GatsbyImage
            fixed={data.trustpilot.childImageSharp.fixed}
            alt="logo"
          />
        </div>
        <span>{title}</span>
      </div>
      <div
        style={{
          fontFamily: "lato, arial, sans-serif",
          fontSize: "14px",
          marginTop: "1em",
        }}
      >
        {body}
      </div>
      <div className="page-btn-container">{action}</div>
    </div>
  )
}
