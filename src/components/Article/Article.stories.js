import React from "react"
import Article from "./index"
import * as StyledTextStories from "../StyledText/StyledText.stories"
import { StyledTextPure } from "../StyledText"

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
      <p>
        This is an example of styled text{" "}
        <StyledTextPure {...StyledTextStories.Colored.args} />
      </p>
      <p>
        This is an example of inline styled text{" "}
        <StyledTextPure {...StyledTextStories.InlineColored.args} />
      </p>
    </div>
  ),
}
