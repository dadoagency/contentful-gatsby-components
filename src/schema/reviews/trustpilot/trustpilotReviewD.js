module.exports = `
    type contentfulTrustpilotReviewDBodyRichTextNode implements Node @derivedTypes @dontInfer {
      nodeType: String
      content: [contentfulTrustpilotReviewDBodyRichTextNodeContent]
      body: String
    }

    type contentfulTrustpilotReviewDBodyRichTextNodeContent @derivedTypes {
      nodeType: String
      content: [contentfulTrustpilotReviewDBodyRichTextNodeContentContent]
    }

    type contentfulTrustpilotReviewDBodyRichTextNodeContentContent {
      nodeType: String
      value: String
    }

    `
