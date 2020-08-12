import React from "react"
import Article from "./index"

export default {
  title: "Article",
  component: Article,
}
const Template = args => {
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  component: Article,
  title: <h1>The title of the article</h1>,
  body: (
    <div>
      this is the body content for the article
      <p>You can nest content in here</p>
    </div>
  ),
}
