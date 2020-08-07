module.exports = `type ContentfulProductLinkButton implements Node @derivedTypes  @infer {
  text: String
  additionalText: String
  icon: ContentfulAsset @link(by: "id", from: "icon___NODE")
  bgColour: String
  bgHoverColour: String
  fontColour: String
  fontHoverColour: String
  borderColour: String
  borderHoverColour: String
  trustpilot_review: [ContentfulTrustpilotReview] @link(by: "id", from: "trustpilot review___NODE") @proxy(from: "trustpilot review___NODE")
  spaceId: String
  contentful_id: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  node_locale: String
  advertorial_type_2: [ContentfulAdvertorialType2] @link(by: "id", from: "advertorial type 2___NODE") @proxy(from: "advertorial type 2___NODE")
  additionalText: String
}`
