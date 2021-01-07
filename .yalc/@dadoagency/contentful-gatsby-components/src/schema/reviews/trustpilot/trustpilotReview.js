module.exports = `
    type contentfulTrustpilotReviewBodyRichTextNode implements Node @derivedTypes @dontInfer {
      nodeType: String
      content: [contentfulTrustpilotReviewBodyRichTextNodeContent]
      body: String
    }
    
    type contentfulTrustpilotReviewBodyRichTextNodeContent @derivedTypes {
      nodeType: String
      content: [contentfulTrustpilotReviewBodyRichTextNodeContentContent]
    }
    
    type contentfulTrustpilotReviewBodyRichTextNodeContentContent {
      nodeType: String
      value: String
    }

    `
