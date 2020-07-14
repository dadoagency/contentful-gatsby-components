//components
const Layout = require("./src/components/Layout")
const Article = require("./src/components/Article")
const TestimonialSection = require("./src/components/TestimonialSection")
const DynamicReviewList = require("./src/components/Reviews/ReviewList")
//util
const renderOptions = require("./src/utils/richText")
//templates
const AdvertorialType1 = require("./src/templates/AdvertorialType1")
const RichText = {
  renderOptions,
}

module.exports = {
  Layout,
  Article,
  TestimonialSection,
  RichText,
  DynamicReviewList,
  AdvertorialType1,
}
