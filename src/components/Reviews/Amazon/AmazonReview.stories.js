import React from "react"
import AmazonReview from "./index"
import * as ProductLinkButtonStories from "../../ProductLinkButton/ProductLinkButton.stories"

import starIcon from "../../../images/review_star.png"
import ProductLinkButton from "../../ProductLinkButton"

export default {
  title: "Amazon Review",
  component: AmazonReview,
}
const Template = args => {
  return <AmazonReview {...args} />
}

export const Default = Template.bind({})
Default.args = {
  stars: 3,
  title: "A kind review",
  body: "Some text describing what a great service we provided",
}

export const WithAction = Template.bind({})
WithAction.args = {
  ...Default.args,
  productLinkButton: (
    <ProductLinkButton {...ProductLinkButtonStories.Text.args} />
  ),
}
