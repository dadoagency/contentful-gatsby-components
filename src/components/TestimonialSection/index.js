import React from "react"
import PropTypes from "prop-types"
import ProductCard from "../ProductCard"

const TestimonialSection = ({ reviews, ...props }) => {
  return (
    <div className="right-data-wrapper reviews">
      <ProductCard {...props} />
      <div className="reviews-list">{reviews}</div>
    </div>
  )
}

TestimonialSection.propTypes = {
  headerImage: PropTypes.object,
  subHeading: PropTypes.object,
  reviews: PropTypes.object,
}

export default TestimonialSection
