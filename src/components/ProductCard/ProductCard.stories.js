import React from "react"
import ProductCard from "./index"
// import Footer from "../Footer/index"
import * as ImageStories from "../Image/Image.stories"
import * as ButtonStories from "../ProductLinkButton/ProductLinkButton.stories"
import ProductLinkButton from "../ProductLinkButton"

export default {
  title: "Product Card",
  component: ProductCard,
}
const Template = args => {
  return <ProductCard {...args} />
}

export const Default = Template.bind({})
Default.args = {
  headerImage: ImageStories.Default.args,
  subHeading: (
    <div>
      <b>This</b> is a sub heading
    </div>
  ),
  actionButton: <ProductLinkButton {...ButtonStories.Text.args} />,
}
