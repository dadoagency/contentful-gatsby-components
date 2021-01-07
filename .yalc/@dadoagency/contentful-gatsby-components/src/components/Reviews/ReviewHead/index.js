import React from "react"
import GatsbyImage from "gatsby-image"

const ReviewHead = ({ title, logo, logoLink, avatar, ...props }) => (
  <div
    className="review-head"
    {...props}
    style={{
      display: "flex",
      alignItems: "center",
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
      <span>{title}</span>
    </div>
    <div
      style={{
        height: "100%",
      }}
      className="logo"
    >
      <a href={logoLink}>
        <GatsbyImage fixed={logo} alt="logo" />
      </a>
    </div>
  </div>
)

export default ReviewHead
