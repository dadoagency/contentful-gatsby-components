import React from "react"
import PropTypes from "prop-types"
import Image from "../Image"

const ProductCard = ({
  headerImage,
  subHeading,
  actionButton,
  className,
  ...props
}) => {
  return (
    <div className={`meta-info product-card ${className}`} {...props}>
      <center>{headerImage && <Image {...headerImage} alt="header" />}</center>
      <div className="figure caption" style={{ marginTop: 0 }}>
        {subHeading}
      </div>

      {actionButton ? actionButton : null}
    </div>
  )
}

ProductCard.propTypes = {
  actionButton: PropTypes.object,
  subHeading: PropTypes.array,
  className: PropTypes.string,
  headerImage: PropTypes.shape({
    fluid: PropTypes.object,
    fixed: PropTypes.object,
    src: PropTypes.string,
  }).isRequired,
}

export default ProductCard
