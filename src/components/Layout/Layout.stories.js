import React from "react"
import Layout from "./index"
import Footer from "../Footer/index"
import * as ImageStories from "../Image/Image.stories"
import * as FooterStories from "../Footer/Footer.stories"

export default {
  title: "Layout",
  component: Layout,
}
const Template = args => {
  return <Layout {...args} />
}

console.log(ImageStories.Fixed)

export const Default = Template.bind({})
Default.args = {
  children: <div>the content</div>,
  className: "Layout",
  locale: "en-US",
  logoPosition: "left",
  logo: ImageStories.Fixed.args.fixed,
  headerText: <h4>Advertorial</h4>,
  footer: <Footer {...FooterStories.Default.args} />,
  extra: <div>extra content</div>,
}

// todo: extra
