module.exports = `
type contentfulFacebookReviewBodyRichTextNode implements Node @derivedTypes @dontInfer {
  nodeType: String
  content: [contentfulFacebookReviewBodyRichTextNodeContent]
  body: String
}

type contentfulFacebookReviewBodyRichTextNodeContent @derivedTypes {
  nodeType: String
  content: [contentfulFacebookReviewBodyRichTextNodeContentContent]
}

type contentfulFacebookReviewBodyRichTextNodeContentContent {
  nodeType: String
  value: String
}
    `
