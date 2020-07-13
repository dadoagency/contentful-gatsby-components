import React from "react"
import PropTypes from "prop-types"

const ProductCard = ({
  headerImage,
  subHeading,
  actionButton,
  className,
  ...props
}) => {
  return (
    <div className={`meta-info product-card ${className}`} {...props}>
      <center>{headerImage && <img src={headerImage} alt="header" />}</center>
      <div className="figure caption" style={{ marginTop: 0 }}>
        {subHeading}
      </div>

      {actionButton ? actionButton : null}
    </div>
  )
}

ProductCard.propTypes = {
  actionButton: PropTypes.object,
  subHeading: PropTypes.object,
  className: PropTypes.string,
}

export default ProductCard
