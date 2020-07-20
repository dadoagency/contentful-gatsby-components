module.exports = `type ContentfulProductLinkButton implements Node @derivedTypes  {
  text: String
  icon: ContentfulAsset @link(by: "id", from: "icon___NODE")
  trustpilot_review: [ContentfulTrustpilotReview] @link(by: "id", from: "trustpilot review___NODE") @proxy(from: "trustpilot review___NODE")
  spaceId: String
  contentful_id: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  node_locale: String
  advertorial_type_2: [ContentfulAdvertorialType2] @link(by: "id", from: "advertorial type 2___NODE") @proxy(from: "advertorial type 2___NODE")
}`
