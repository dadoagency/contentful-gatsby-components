module.exports = `type contentfulAdvertorialType2FooterRichTextNode implements Node @derivedTypes @dontInfer {
  content: [contentfulAdvertorialType2FooterRichTextNodeContent]
  nodeType: String
  footer: String
}

type contentfulAdvertorialType2FooterRichTextNodeContent @derivedTypes {
  content: [contentfulAdvertorialType2FooterRichTextNodeContentContent]
  nodeType: String
}

type contentfulAdvertorialType2FooterRichTextNodeContentContent @derivedTypes {
  data: contentfulAdvertorialType2FooterRichTextNodeContentContentData
  value: String
  nodeType: String
  content: [contentfulAdvertorialType2FooterRichTextNodeContentContentContent]
}

type contentfulAdvertorialType2FooterRichTextNodeContentContentData {
  uri: String
}

type contentfulAdvertorialType2FooterRichTextNodeContentContentContent {
  value: String
  nodeType: String
}
`
