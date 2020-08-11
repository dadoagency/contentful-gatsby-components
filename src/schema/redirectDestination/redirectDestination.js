module.exports = `
type ContentfulRedirectDestination implements Node @derivedTypes  {
    url: String
    params: [contentfulRedirectDestinationParamsJsonNode] @link(by: "id", from: "params___NODE")
    spaceId: String
    contentful_id: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    node_locale: String
    advertorial_type_2: [ContentfulAdvertorialType2] @link(by: "id", from: "advertorial type 2___NODE") @proxy(from: "advertorial type 2___NODE")
    advertorial_type_1: [ContentfulAdvertorialType1] @link(by: "id", from: "advertorial type 1___NODE") @proxy(from: "advertorial type 1___NODE")
  }
  
  type contentfulRedirectDestinationParamsJsonNode implements Node  {
    key: String
    value: String
  }`
