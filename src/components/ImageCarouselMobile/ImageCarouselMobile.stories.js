import React from "react"
import ImageCarouselMobile from "./index"

import placeholder from "../../images/150-placeholder.png"

export default {
  title: "ImageCarouselMobile",
  component: ImageCarouselMobile,
}
const Template = args => {
  return <ImageCarouselMobile {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title: "The title",
}

// todo: write stories
