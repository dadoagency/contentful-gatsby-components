import React from "react"
import PropTypes from "prop-types"
import ProductCard from "../ProductCard"

const TestimonialSection = ({ reviews, headerImage, subHeading, ...props }) => {
  return (
    <div className="right-data-wrapper reviews">
      <ProductCard headerImage={headerImage} subHeading={subHeading} />
      <div className="reviews-list">{reviews}</div>
    </div>
  )
}

TestimonialSection.propTypes = {
  headerImage: PropTypes.shape({
    fluid: PropTypes.object,
    fixed: PropTypes.object,
    src: PropTypes.string,
  }).isRequired,
  // subHeading: PropTypes.object,
  reviews: PropTypes.object,
}

export default TestimonialSection
