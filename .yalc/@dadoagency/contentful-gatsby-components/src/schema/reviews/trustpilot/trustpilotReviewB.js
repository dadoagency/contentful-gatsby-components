module.exports = `
type contentfulTrustpilotReviewBBodyRichTextNode implements Node @derivedTypes @dontInfer {
  nodeType: String
  content: [contentfulTrustpilotReviewBBodyRichTextNodeContent]
  body: String
}

type contentfulTrustpilotReviewBBodyRichTextNodeContent @derivedTypes {
  nodeType: String
  content: [contentfulTrustpilotReviewBBodyRichTextNodeContentContent]
}

type contentfulTrustpilotReviewBBodyRichTextNodeContentContent {
  nodeType: String
  value: String
}
    `
