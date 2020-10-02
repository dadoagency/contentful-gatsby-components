import React from "react"
import { StyledTextPure } from "./index"

export default {
  title: "Styled Text",
  component: StyledTextPure,
}
const Template = args => {
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  component: StyledTextPure,
  children: <div>I'm styled text</div>,
}

export const Colored = Template.bind({})
Colored.args = {
  ...Default.args,
  color: "red",
}

export const BackgroundColor = Template.bind({})
BackgroundColor.args = {
  ...Default.args,
  backgroundColor: "red",
}

export const ColorAndBackgroundColor = Template.bind({})
ColorAndBackgroundColor.args = {
  ...Default.args,
  backgroundColor: "red",
  color: "white",
}

export const Inline = Template.bind({})
Inline.args = {
  ...Default.args,
  inline: true,
}

export const InlineColored = Template.bind({})
InlineColored.args = {
  ...Default.args,
  inline: true,
  color: "red",
}

export const InlineBackground = Template.bind({})
InlineBackground.args = {
  ...BackgroundColor.args,
  inline: true,
}

export const InlineBackgroundAndColor = Template.bind({})
InlineBackgroundAndColor.args = {
  ...ColorAndBackgroundColor.args,
  inline: true,
}

export const Centered = Template.bind({})
Centered.args = {
  ...Default.args,
  isCentered: true,
}

export const Superscript = Template.bind({})
Superscript.args = {
  component: StyledTextPure,
  color: "red",
  children: (
    <p>
      I'm styled text with a superscript point<code>1</code>
    </p>
  ),
}

export const BackgroundColorWithBold = Template.bind({})
BackgroundColorWithBold.args = {
  component: StyledTextPure,
  backgroundColor: "red",
  children: (
    <div>
      I'm styled text, and <b>I am bold text</b>
    </div>
  ),
}

export const InlineBackgroundColorWithBold = Template.bind({})
InlineBackgroundColorWithBold.args = {
  ...BackgroundColorWithBold.args,
  inline: true,
}
