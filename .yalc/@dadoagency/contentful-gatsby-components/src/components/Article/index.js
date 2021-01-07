import React from "react"
import PropTypes from "prop-types"

Article.propTypes = {
  title: PropTypes.node,
  body: PropTypes.object.isRequired,
}

export default function Article({ title, body }) {
  return (
    <div className="left-data-wrapper article">
      <div className="article-data-container">
        {title && <div className="title">{title}</div>}
      </div>
      <div className="article-creator-wrapper">
        <div className="creator-data-wrapper">
          <div className="creator-comment-wrapper body">{body}</div>
        </div>
      </div>
    </div>
  )
}
