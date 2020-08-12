import React from "react"
import { ProductLinkButtonPure } from "."

export default {
  title: "Button",
  component: ProductLinkButtonPure,
}
// We create a “template” of how args map to rendering
const Template = args => <ProductLinkButtonPure {...args} />

export const Text = Template.bind({})
Text.args = { cta: "Click me" }

export const BonusText = Template.bind({})
BonusText.args = { ...Text.args, cta2: "Bonus text" }
