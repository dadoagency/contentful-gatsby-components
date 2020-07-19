module.exports = `
    type contentfulAdvertorialType2HeadlineRichTextNode implements Node @derivedTypes @dontInfer {
      content: [contentfulAdvertorialType2HeadlineRichTextNodeContent]
      nodeType: String
      headline: String
    }
    
    type contentfulAdvertorialType2HeadlineRichTextNodeContent @derivedTypes {
      content: [contentfulAdvertorialType2HeadlineRichTextNodeContentContent]
      nodeType: String
    }
    
    type contentfulAdvertorialType2HeadlineRichTextNodeContentContent {
      value: String
      nodeType: String
    }

    `
