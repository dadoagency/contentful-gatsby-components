module.exports = `
type contentfulFacebookReviewDBodyRichTextNode implements Node @derivedTypes @dontInfer {
  nodeType: String
  content: [contentfulFacebookReviewDBodyRichTextNodeContent]
  body: String
}

type contentfulFacebookReviewDBodyRichTextNodeContent @derivedTypes {
  nodeType: String
  content: [contentfulFacebookReviewDBodyRichTextNodeContentContent]
}

type contentfulFacebookReviewDBodyRichTextNodeContentContent {
  nodeType: String
  value: String
}
    `
