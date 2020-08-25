import React from "react"
import Image from "./index"

import placeholder from "../../images/150-placeholder.png"

export default {
  title: "Image",
  component: Image,
}
const Template = args => {
  return <Image {...args} />
}

export const Default = Template.bind({})
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "a placeholder",
}

export const Caption = Template.bind({})
Caption.args = {
  ...Default.args,
  caption: <div>An Image Caption</div>,
}

export const MaxWidth = Template.bind({})
MaxWidth.args = {
  ...Default.args,
  width: 100,
}

export const Fixed = Template.bind({})
Fixed.args = {
  fixed: {
    height: 150,
    originalName: "150-placeholder.png",
    src: placeholder,
    srcSet: "",
    width: 150,
  },
}

// todo: fluid, hyperlink and all combinations
