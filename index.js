//components
import Layout from "./src/components/Layout"
import Article from "./src/components/Article"
import TestimonialSection from "./src/components/TestimonialSection"
import DynamicReviewList from "./src/components/Reviews/ReviewList"
import Tracking from "./src/components/Tracking"
import Pixel from "./src/components/Tracking/Pixel"
import ProductCard from "./src/components/ProductCard"
import ProductLinkButton from "./src/components/ProductLinkButton"
import TrustpilotReview from "./src/components/Reviews/Trustpilot/index"
import TrustpilotReviewB from "./src/components/Reviews/Trustpilot/TrustpilotReviewB"
import TrustpilotReviewB2 from "./src/components/Reviews/Trustpilot/TrustpilotReviewB2"
import TrustpilotReviewC from "./src/components/Reviews/Trustpilot/TrustpilotReviewC"

//util
import renderOptions from "./src/utils/richText"
//templates
import AdvertorialType1 from "./src/templates/AdvertorialType1"
import AdvertorialType2 from "./src/templates/AdvertorialType2"
import AdvertorialType3 from "./src/templates/AdvertorialType3"

const RichText = {
  renderOptions,
}

export {
  Layout,
  Article,
  TestimonialSection,
  RichText,
  DynamicReviewList,
  AdvertorialType1,
  Tracking,
  Pixel,
  ProductCard,
  ProductLinkButton,
  AdvertorialType2,
  TrustpilotReview,
  TrustpilotReviewB,
  TrustpilotReviewB2,
  TrustpilotReviewC,
  AdvertorialType3,
}
