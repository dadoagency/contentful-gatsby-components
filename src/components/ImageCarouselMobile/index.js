import React from "react"
import PropTypes from "prop-types"
import { useMediaQuery } from 'react-responsive'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import renderOptions from '../../utils/richText'
import Slider from "react-slick"
const ImageCarouselMobile = ({ title, images }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 499px)" })
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
  }
  return (
    <div className="image-carousel-mobile-wrapper">
      {title ? (
        <div className="image-carousel-mobile-title">{title}</div>
      ) : null}
      <div className="image-carousel-mobile-images-container">
      {isTabletOrMobile ?
          <Slider {...settings}>{images.map((image, index) => <React.Fragment key={`image-carousel-mobile-img-${index}`}>{documentToReactComponents(image.node, renderOptions)}</React.Fragment>)}</Slider> :
          <>{images.map((image, index) =><React.Fragment key={`image-carousel-mobile-img-${index}`}>{documentToReactComponents(image.node, renderOptions)}</React.Fragment>)}</>}
      </div>
    </div>
  )
}

ImageCarouselMobile.defaultProps = {
  title: '',
  images: [],
}

ImageCarouselMobile.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default ImageCarouselMobile
