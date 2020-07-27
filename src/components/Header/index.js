import React from "react"
import Img from "gatsby-image"

export default ({ logo, extra }) => {
  return (
    <section className="site-logo-container">
      <div className="site-logo-wrapper section">
        <div className="site-logo">
          {logo && <Img fixed={logo.childImageSharp.fixed} alt="Logo" />}
        </div>
        <div className="extra">{extra}</div>
      </div>
    </section>
  )
}
