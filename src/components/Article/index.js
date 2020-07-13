import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

Article.propTypes = {
  title: PropTypes.node,
  headerImage: PropTypes.object,
  body: PropTypes.object.isRequired,
  productLinkButton: PropTypes.object,
}

export default function Article({ title, headerImage, body }) {
  return (
    <div className="left-data-wrapper article">
      <div className="article-data-container">
        {title && <div className="title">{title}</div>}
        {headerImage ? (
          <div className="article-img-wrapper">
            <Img fluid={headerImage} alt="article header" />
          </div>
        ) : null}
      </div>
      <div className="article-creator-wrapper">
        <div className="creator-data-wrapper">
          <div className="creator-comment-wrapper body">{body}</div>
        </div>
      </div>
    </div>
  )
}
