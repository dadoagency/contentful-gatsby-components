module.exports = `
    type contentfulTrustpilotReviewCBodyRichTextNode implements Node @derivedTypes @dontInfer {
      nodeType: String
      content: [contentfulTrustpilotReviewCBodyRichTextNodeContent]
      body: String
    }

    type contentfulTrustpilotReviewCBodyRichTextNodeContent @derivedTypes {
      nodeType: String
      content: [contentfulTrustpilotReviewCBodyRichTextNodeContentContent]
    }

    type contentfulTrustpilotReviewCBodyRichTextNodeContentContent {
      nodeType: String
      value: String
    }

    `
