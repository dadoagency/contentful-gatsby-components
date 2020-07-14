import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

// uses gatsby-image when passed fluid or fixed
//uses html image tag when passed src

const Image = ({ fluid, fixed, src, alt, caption, ...props }) => {
  let image = null
  if (fluid) {
    image = <Img fluid={fluid} alt={alt} {...props} />
  } else if (fixed) {
    image = <Img fixed={fixed} alt={alt} {...props} />
  } else if (src) {
    image = <img src={src} alt={alt} {...props} />
  }
  return (
    <div className="article-img-wrapper">
      {image}

      {caption ? (
        <div
          style={{
            padding: 0,
            margin: 0,
            fontWeight: 700,
            width: fixed ? fixed.width + 10 : "auto",
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  )
}

Image.propTypes = {
  caption: PropTypes.object,
  alt: PropTypes.string,
}

export default Image
