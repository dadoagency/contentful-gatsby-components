import React from "react"
import { FacebookReviewPure } from "./index"
import { FacebookReviewDPure } from "./FacebookReviewD"

import logo from "../../../images/fb.png"
import * as ProductLinkButtonStories from "../../ProductLinkButton/ProductLinkButton.stories"
import ProductLinkButton from "../../ProductLinkButton"

export default {
  title: "Facebook Review",
  component: FacebookReviewPure,
}
const Template = args => {
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  component: FacebookReviewPure,
  logo: {
    aspectRatio: 4.866666666666666,
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8UlEQVQY03WPvUoEMRSFp/MBfAQfQEszybiw2AhaKkwyP4KytSJYWa+Ntbq5yUyhsCBaqPhTKKKVWCiKhbAv4+dab+Bwzz3ncJIkWRmNsjKq926nkgmHzDLoTfIX6mZOF6E/XlTun5X111ndrqROeosbJ9OplV1dxDVdxiWCBfo2uS/4ame9ncHvZ1WcNWUweDupC5vzuW9M1XaT1PpzEEzVVBT/EPi7QCjsUDKCv6E9MQO44TefKh8cM18ofiCDLq9438yrRDu/BfZZzsCHdnKPeWTK2CX8TtkBLztEG+KfUnKHPlBOLuEXY27l8b9Uhr9uY3UFr+e/9wAAAABJRU5ErkJggg==",
    height: 15,
    originalName: "fb.png",
    src: logo,
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='73'%20height='15'%20viewBox='0%200%2073%2015'%20preserveAspectRatio='none'%3e%3cpath%20d='M35%201l-1%207%201%207h8v-5c0-4-1-4-3-5l-3-3c0-1-1-2-2-1'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
    width: 73,
  },
  title: "A kind review",
  body: "Some text describing what a great service we provided",
}

export const WithAction = Template.bind({})
WithAction.args = {
  ...Default.args,
  productLinkButton: (
    <ProductLinkButton {...ProductLinkButtonStories.Text.args} />
  ),
}

export const TypeD = Template.bind({})
TypeD.args = {
  ...Default.args,
  component: FacebookReviewDPure,
}

export const TypeDWithAction = Template.bind({})
TypeDWithAction.args = {
  ...WithAction.args,
  component: FacebookReviewDPure,
  action: WithAction.args.productLinkButton,
}
