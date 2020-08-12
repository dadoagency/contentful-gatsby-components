import React from "react"
import { TrustpilotReviewPure } from "./index"
import { TrustpilotReviewBPure } from "./TrustpilotReviewB"
import { TrustpilotReviewCPure } from "./TrustpilotReviewC"
import * as ProductLinkButtonStories from "../../ProductLinkButton/ProductLinkButton.stories"

import logo from "../../../images/trustpilot.png"
import ProductLinkButton from "../../ProductLinkButton"

export default {
  title: "Trustpilot Review",
  component: TrustpilotReviewPure,
}
const Template = args => {
  console.log("render args", args)
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  logo: {
    aspectRatio: 2.3870967741935485,
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz2MI3FjLAAMBQHbKswUMkjJSDBISEmAMAjAaBpDFkeXExcUhhgRuqmMF0qwBG2oZww60M/AwMDFISkkygRTANCFhRnQ+kjpGsMmBm+vZgAaWMlADAF3nDzRsOdDQV0FbGqYF72wyEuLks5eQlCwG2igPxKxQV7ACMReQrQ/EQkDMAcRKQGwJxJxAzAvEhgz+66r4gYadjjrW/d99bu4icNhISmgDJduBOAloSBKQdgHiCiAuAOI6IC4E4jgQGyjfBqTTgHQGkJ7E4L2shBloYBOQrgbiApCB0sryokDJLKAiKyAOAGKQ4dlA3ApkxwDpLhAfyK4H0iCfFALZiUA6B+RldqAruUAGRR7u4fffWM0CYktKSyF7lQ/IBnmXG4iZgdgJiGWhMQuKPF5oEHDAw9J7eSkLNeIEAEwdVryKCuM9AAAAAElFTkSuQmCC",
    height: 31,
    width: 74,
    originalName: "trustpilot.png",
    src: logo,
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='74'%20height='31'%20viewBox='0%200%2074%2031'%20preserveAspectRatio='none'/%3e",
  },
  title: "A kind review",
  body: "Some text describing what a great service we provided",
  component: TrustpilotReviewPure,
}

export const WithAction = Template.bind({})
WithAction.args = {
  ...Default.args,
  action: <ProductLinkButton {...ProductLinkButtonStories.Text.args} />,
}

export const TypeB = Template.bind({})
TypeB.args = {
  ...Default.args,
  component: TrustpilotReviewBPure,
}

export const TypeC = Template.bind({})
TypeC.args = {
  ...Default.args,
  component: TrustpilotReviewCPure,
}

export const TypeCWithAction = Template.bind({})
TypeCWithAction.args = {
  ...TypeC.args,
  action: WithAction.args.action,
}
