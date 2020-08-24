import React from "react"
import AdvertorialType2 from "./index"
import * as FooterStories from "../../components/Footer/Footer.stories"
import * as ProductLinkButtonStories from "../../components/ProductLinkButton/ProductLinkButton.stories"
import petlabLogo from "../../images/logo.png"
import bodyFixture from "./___fixtures___/body"
import headlineFixture from "./___fixtures___/headline"
import testimonialFixture from "./___fixtures___/testimonialSection"
import footerFixture from "./___fixtures___/footer"

export default {
  title: "Advertorial Type 2",
  component: AdvertorialType2,
}
const Template = args => {
  return <AdvertorialType2 {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...FooterStories.Default.args,
  stickyProductButton: {
    text: ProductLinkButtonStories.Text.args.cta,
  },
  headline: headlineFixture,
  body: bodyFixture,
  node_locale: "en-US",
  headerText: "Advertorial",
  logo: {
    height: 25,
    src: petlabLogo,
    width: 280,
    aspectRatio: 11.2,
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
