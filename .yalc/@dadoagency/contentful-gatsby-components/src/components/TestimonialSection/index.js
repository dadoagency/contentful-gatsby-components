import React from "react"
import PropTypes from "prop-types"
import ProductCard from "../ProductCard"
import DynamicReviewList from "../../components/Reviews/ReviewList"

const TestimonialSection = ({ reviews, headerImage, subHeading, ...props }) => {
  return (
    <div className="right-data-wrapper reviews">
      <ProductCard headerImage={headerImage} subHeading={subHeading} />
      <div className="reviews-list">
        <DynamicReviewList reviews={reviews} />
      </div>
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

  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      internal: PropTypes.shape({
        type: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      subHeading: PropTypes.shape({
        json: PropTypes.object.isRequired,
      }),
      body: PropTypes.shape({
        json: PropTypes.object.isRequired,
      }).isRequired,
      productLinkButton: PropTypes.shape({
        icon: PropTypes.object,
        text: PropTypes.string,
      }),
    })
  ),
}

export default TestimonialSection
