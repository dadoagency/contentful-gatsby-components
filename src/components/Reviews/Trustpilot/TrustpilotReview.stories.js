import React from "react"
import TrustpilotReview from "./index"
import TrustpilotReviewB from "./TrustpilotReviewB"
import TrustpilotReviewC from "./TrustpilotReviewC"
import TrustpilotReviewDPure from "./TrustpilotReviewD"
import * as ProductLinkButtonStories from "../../ProductLinkButton/ProductLinkButton.stories"

import ProductLinkButton from "../../ProductLinkButton"

export default {
  title: "Trustpilot Review",
  component: TrustpilotReview,
}

const Template = args => {
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  logoLink: "/redirected",
  title: "A kind review",
  body: "Some text describing what a great service we provided",
  component: TrustpilotReview,
}

export const WithAction = Template.bind({})
WithAction.args = {
  ...Default.args,
  action: <ProductLinkButton {...ProductLinkButtonStories.Text.args} />,
}

export const TypeB = Template.bind({})
TypeB.args = {
  ...Default.args,
  component: TrustpilotReviewB,
}

export const TypeBVersion2 = Template.bind({})
TypeBVersion2.args = {
  ...Default.args,
  component: TrustpilotReviewB,
  version: 2
}

export const TypeC = Template.bind({})
TypeC.args = {
  ...Default.args,
  component: TrustpilotReviewC,
}

export const TypeCWithAction = Template.bind({})
TypeCWithAction.args = {
  ...TypeC.args,
  action: WithAction.args.action,
}

export const TypeD = Template.bind({})
TypeD.args = {
  ...Default.args,
  component: TrustpilotReviewDPure,
}

export const TypeDWithAction = Template.bind({})
TypeDWithAction.args = {
  ...TypeD.args,
  action: WithAction.args.action,
}
