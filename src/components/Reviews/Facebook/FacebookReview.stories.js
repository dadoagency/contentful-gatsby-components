import React from "react"
import FacebookReview from "./index"
import FacebookReviewD from "./FacebookReviewD"

import * as ProductLinkButtonStories from "../../ProductLinkButton/ProductLinkButton.stories"
import ProductLinkButton from "../../ProductLinkButton"

export default {
  title: "Facebook Review",
  component: FacebookReview,
}
const Template = args => {
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  component: FacebookReview,

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

export const TypeD = Template.bind({})
TypeD.args = {
  ...Default.args,
  component: FacebookReviewD,
}

export const TypeDWithAction = Template.bind({})
TypeDWithAction.args = {
  ...WithAction.args,
  component: FacebookReviewD,
  action: WithAction.args.productLinkButton,
}
