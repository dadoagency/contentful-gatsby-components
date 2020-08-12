import React from "react"
import Footer from "./index"

export default {
  title: "Footer",
  component: Footer,
}
const Template = args => {
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  component: Footer,
  companyDetails: {
    url: "/",
    name: "Dado",
  },
  footerLinks: [
    {
      to: "/",
      text: "Link to somewhere",
    },
    {
      to: "/",
      text: "Link to nowhere",
    },
  ],
  footerBody: (
    <div>
      This is arbitrary content
      <p>that can be nested</p>
    </div>
  ),
}
