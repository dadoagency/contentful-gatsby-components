import React from "react"
import { AmazonReviewPure } from "./index"
import * as ProductLinkButtonStories from "../../ProductLinkButton/ProductLinkButton.stories"

import logo from "../../../images/amazon-logo.png"
import starIcon from "../../../images/review_star.png"
import ProductLinkButton from "../../ProductLinkButton"

export default {
  title: "Amazon Review",
  component: AmazonReviewPure,
}
const Template = args => {
  return <args.component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  logo: {
    aspectRatio: 3.0833333333333335,
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABiUlEQVQY02NgAAItLS0DbW1tRwd7e1Y9PT0dINtER0fHUFdXVxHI5wHK+xkaGooCxZXU1NRcgeISQKwA5FtNmjSJEagGpN8sKyuLgcHCwoIdqLldQ0PjBFBjDpDeDsSHgfiAurr6En19fQ9NTc09QPYiU1MTIKV2B8hvAOJZQDWrgHqqgfQ+ID4OMhTkOiktLc1+oMAaIJ6so6U5CejEGiC7Eqh7BlBjMVDNdKDLNqppaLooqajv0tLW9gbKzweKJwDpY0C5eiDdDuSHMABNlQdq3AXUuBAo0CAmr1miqKqdpaejVaCrrdmso6UBtEBzk4aG5gRgYLRaGWrsNtDXTQKqnwRyBFB/IlB/FZBfAfSpKygIGTwdLXgYGPRYfy93Vnk50yrgWr+VBAMK0GEBkf9X2tv+X2nV+X+FtRqI72xtKAiibe3s2FxcXVhcXV2ZGJSVlVG0/l5kaf1jvlnbj/mmE37MM6n4Ptck9+9C08rv80x7vs23iPkwz8blw1xLIZh6KUkpRmT9APF9cs4bmVUCAAAAAElFTkSuQmCC",
    height: 24,
    originalName: "amazon-logo.png",
    src: logo,
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='74'%20height='24'%20viewBox='0%200%2074%2024'%20preserveAspectRatio='none'%3e%3cpath%20d='M14%203v6c0%207%203%207%203%201%200-3%201-4%202-4l1%204c0%206%203%206%203%200s2-6%202-1c1%207%203%206%203%200s-2-8-4-6H14'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
    width: 74,
  },
  starIcon: {
    aspectRatio: 1.0422535211267605,
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAACPElEQVQ4y41UPU8cMRC93UNEwsNHkQjaKEkRiSICRJ02AgmB+B0UUbrkP6QjBV0QuhSUiAZ5+QifAUGTtBQUSJHSRQhyx655Mx4v3jsgrPTk8Xr85s3Y41rtjs9lJGNhTSpza8aACbX1H9Ue/bGzW+/hse4DmAbsXyEYSMugj/qKzERKzCvg0u2RwzipAeq69h9lnkhV6qaMvrh9kG0zIW2pX8JZSOB2pSLfp5AAqcCabq+UXhSsbl3Irt2OqHyngZ5wSQD2T8oyPFQLOM+7HyDJTAsbrjXtjXtLFUrgZoX4KfAamATmkM48Nl94daYAaYEAGDkANYAPmM8Cb0A0BJ+ukPJ74BQO57KZa3UAHAIlmZAwPCmvs3Iuwab4/AHOEPQzpzWAiXXHvbzQBHJNsXlLpgpvbV5vYcwx/hNyS6ewX8YnvKwLEZGkWFXoicO/ptwAa05g94euSCPSb5JqRnlbqncAhyQCzBHQp4dYD0RpdI2+uu+yIW9TF9URa95nG3ZvO1n1IlvTj8XfvtiUdxDaKIilEd3TVelvf7kpNP2w1DHebKmo2JzurtgzQV2lDaXhQ39mZsoXGp3hiVpCtCH1aul9bGqtP4XsQqYxaUj5o9wzS1dSx4Nw8vTXd43U7kqDNsIZVJ4z/ygEQlosHwMpPK0gyGhh6Tn8FuRA9vRSWzrUnq91pBzZP/WSr6Gl3nb2txmGz5J/ffBwWBr0fUxJ7JSo0mewWdF0pD4tXxQti+4Zx3wVGFGVcqg38UaA6SfLuosAAAAASUVORK5CYII=",
    height: 19,
    originalName: "review_star.png",
    src: starIcon,
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='74'%20height='71'%20viewBox='0%200%2074%2071'%20preserveAspectRatio='none'%3e%3cpath%20d='M31%2012l-5%2012-12%201-13%202%209%209%209%209-2%2013-2%2012%2012-6%2010-5%2011%205%2012%206-2-13-2-12%209-9c10-10%2011-9-6-11l-10-1-6-12-6-11-6%2011'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
    width: 20,
  },
  numStars: 3,
  title: "A kind review",
  body: "Some text describing what a great service we provided",
  component: AmazonReviewPure,
}

export const WithAction = Template.bind({})
WithAction.args = {
  ...Default.args,
  productLinkButton: (
    <ProductLinkButton {...ProductLinkButtonStories.Text.args} />
  ),
}
