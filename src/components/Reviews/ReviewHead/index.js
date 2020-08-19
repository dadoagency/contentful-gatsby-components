import React from "react"
import GatsbyImage from "gatsby-image"
import Image from "../../Image"

const ReviewHead = ({ title, logo, logoLink, avatar, ...props }) => (
  <div
    className="review-head"
    {...props}
    style={{
      display: "flex",
      alignItems: "flex-end",
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
        height: logo?.height,
        marginBottom: "5px",
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
