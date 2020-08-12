import React from "react"
import { TrustpilotReviewPure } from "./index"

import logo from "../../../images/trustpilot.png"

export default {
  title: "Trustpilot Review",
  component: TrustpilotReviewPure,
}
const Template = args => (
  <TrustpilotReviewPure {...args}>hello</TrustpilotReviewPure>
)

export const Default = Template.bind({})
Default.args = {
  title: "A kind review",
  logo: logo,
  body: "Some text describing what a great service we provided",
}
