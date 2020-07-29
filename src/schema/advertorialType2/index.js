module.exports = `
type ContentfulAdvertorialType2 implements Node @derivedTypes @infer {
  path: String
  facebookPixelId: String
  redirectDestinations: [ContentfulRedirectDestination] @link(by: "id", from: "redirectDestinations___NODE")
  testimonialSection: ContentfulTestimonialSection @link(by: "id", from: "testimonialSection___NODE")
  stickyProductButton: ContentfulProductLinkButton @link(by: "id", from: "stickyProductButton___NODE") 
  socialMediaIcons: [SocialMediaIcon] @link(by: "id", from: "socialMediaIcons___NODE") 

  headline: contentfulAdvertorialType2HeadlineRichTextNode @link(by: "id", from: "headline___NODE")
  body: contentfulAdvertorialType2BodyRichTextNode @link(by: "id", from: "body___NODE")
  footer: contentfulAdvertorialType2FooterRichTextNode @link(by: "id", from: "footer___NODE")

}




`
