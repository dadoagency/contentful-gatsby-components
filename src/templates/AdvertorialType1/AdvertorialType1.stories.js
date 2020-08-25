import React from "react"
import AdvertorialType1 from "./index"
import * as FooterStories from "../../components/Footer/Footer.stories"
import petlabLogo from "../../images/Petlab-logo.png"
import HeadlineFixture from "./___fixtures___/headline"
import BodyFixture from "./___fixtures___/body"
import footerFixture from "./___fixtures___/footer"
import testimonialFixture from "./___fixtures___/testimonialSection"

export default {
  title: "AdvertorialType1",
  component: AdvertorialType1,
}
const Template = args => {
  return <AdvertorialType1 {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...FooterStories.Default.args,
  headline: HeadlineFixture,
  body: BodyFixture,
  node_locale: "en-US",
  logoPosition: "left",
  headerText: "Advertorial",
  logo: {
    aspectRatio: 4.473684210526316,
    src: petlabLogo,
    srcSet: "",
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAjUlEQVQY05WOQQoCMQxFW0VwIYpQFMZZtAgjLnQhuG1P0Nz/OL7fKYKICwOPpMnPb1ws5v6J9EP/0ecRYMR8JK/hkHLdx2xbWKZsR9jQvzZ9bprQtNkGCL3/NpxggAfs4MxQ5hfyivyEE9S+GGDq2jvcOMB/nasfVDOcKbZIpbo4116oVujyvutlJp3iBXwXJpWT4bHDAAAAAElFTkSuQmCC",
    height: 38,
    originalName: "Petlab-logo.png",
    width: 170,
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='170'%20height='38'%20viewBox='0%200%20170%2038'%20preserveAspectRatio='none'/%3e",
  },
  footer: footerFixture,
  redirectDestinations: [
    {
      url: "https://promo.thepetlabco.com/jointcarechew/index.php",
      params: [
        {
          key: "utm_medium",
          value: "utmtimsval",
        },
        {
          key: "id",
          value: "tims_test",
        },
      ],
    },
  ],
  testimonialSection: testimonialFixture,
}
