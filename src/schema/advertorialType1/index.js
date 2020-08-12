module.exports = `
type ContentfulAdvertorialType1 implements Node @infer {
  path: String
  facebookPixelId: String
  redirectDestinations: [ContentfulRedirectDestination] @link(by: "id", from: "redirectDestinations___NODE")
  logoPosition: String
  headerText: String
  testimonialSection: ContentfulTestimonialSection @link(by: "id", from: "testimonialSection___NODE")
  spaceId: String
  contentful_id: String
  createdAt: Date @dateformat
  updatedAt: Date @dateformat
  node_locale: String

  headline: contentfulAdvertorialType1HeadlineRichTextNode @link(by: "id", from: "headline___NODE")
  body: contentfulAdvertorialType1BodyRichTextNode @link(by: "id", from: "body___NODE")
  footer: contentfulAdvertorialType1FooterRichTextNode @link(by: "id", from: "footer___NODE")
}


type contentfulAdvertorialType1HeadlineRichTextNode implements Node @derivedTypes @dontInfer {
    content: [contentfulAdvertorialType1HeadlineRichTextNodeContent]
    nodeType: String
    headline: String
}

type contentfulAdvertorialType1HeadlineRichTextNodeContent @derivedTypes {
    content: [contentfulAdvertorialType1HeadlineRichTextNodeContentContent]
    nodeType: String
}

type contentfulAdvertorialType1HeadlineRichTextNodeContentContent @derivedTypes {
    marks: [contentfulAdvertorialType1HeadlineRichTextNodeContentContentMarks]
    value: String
    nodeType: String
}

type contentfulAdvertorialType1HeadlineRichTextNodeContentContentMarks {
    type: String
}

type contentfulAdvertorialType1BodyRichTextNode implements Node @derivedTypes @dontInfer {
    content: [contentfulAdvertorialType1BodyRichTextNodeContent]
    nodeType: String
    headline: String
}

type contentfulAdvertorialType1BodyRichTextNodeContent @derivedTypes {
    content: [contentfulAdvertorialType1BodyRichTextNodeContentContent]
    nodeType: String
}

type contentfulAdvertorialType1BodyRichTextNodeContentContent @derivedTypes {
    marks: [contentfulAdvertorialType1BodyRichTextNodeContentContentMarks]
    value: String
    nodeType: String
}

type contentfulAdvertorialType1BodyRichTextNodeContentContentMarks {
    type: String
}



type contentfulAdvertorialType1FooterRichTextNode implements Node @derivedTypes @dontInfer {
    nodeType: String
    content: [contentfulAdvertorialType1FooterRichTextNodeContent]
    footer: String
  }

  type contentfulAdvertorialType1FooterRichTextNodeContent @derivedTypes {
    nodeType: String
    content: [contentfulAdvertorialType1FooterRichTextNodeContentContent]
  }

  type contentfulAdvertorialType1FooterRichTextNodeContentContent @derivedTypes {
    nodeType: String
    value: String
    data: contentfulAdvertorialType1FooterRichTextNodeContentContentData
    content: [contentfulAdvertorialType1FooterRichTextNodeContentContentContent]
  }

  type contentfulAdvertorialType1FooterRichTextNodeContentContentData {
    uri: String
  }

  type contentfulAdvertorialType1FooterRichTextNodeContentContentContent {
    nodeType: String
    value: String
  }

`
