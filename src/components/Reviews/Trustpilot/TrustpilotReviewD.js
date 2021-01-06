import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"
import useTrustpilotLink from "../../../hooks/useTrustpilotLink"

TrustpilotReviewD.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  avatar: PropTypes.object,
  action: PropTypes.object,
}
export default function TrustpilotReviewD({ title, body, avatar, action }) {
  const data = useStaticQuery(graphql`
    query trustPilotD {
      tpWithStars: file(relativePath: { eq: "trustpilot-w-stars.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  const url = useTrustpilotLink()
  return (
    <TrustpilotReviewDPure
      title={title}
      avatar={avatar}
      logo={data?.tpWithStars?.childImageSharp?.fixed}
      logoLink={url}
      body={body}
      action={action}
    />
  )
}

export function TrustpilotReviewDPure({
  title,
  avatar,
  logo,
  logoLink,
  body,
  action,
}) {
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
            height: "auto",
            alignSelf: "flex-start",
          }}
          className="logo"
        >
          <a href={logoLink}>
          {logo ? (
            <GatsbyImage fixed={logo} alt="logo" />
            ) : null}
          </a>
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
