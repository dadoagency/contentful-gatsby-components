import React from "react"
import { ProductLinkButtonPure } from "./"

export default {
  title: "Product Link Button",
  component: ProductLinkButtonPure,
  argTypes: {
    bgColour: { control: "color" },
    bgHoverColour: { control: "color" },
    fontColour: { control: "color" },
    fontHoverColour: { control: "color" },
    borderColour: { control: "color" },
    borderHoverColour: { control: "color" },
    redirectDestination: { control: "text" },
  },
}
// We create a “template” of how args map to rendering
const Template = args => <ProductLinkButtonPure {...args} />

export const Text = Template.bind({})
Text.args = { cta: "Click me", redirectDestination: "/" }

export const BonusText = Template.bind({})
BonusText.args = { ...Text.args, cta2: "Bonus text" }
