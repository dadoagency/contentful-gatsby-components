module.exports = `
type contentfulAdvertorialType2BodyRichTextNode implements Node @derivedTypes @dontInfer {
    content: [contentfulAdvertorialType2BodyRichTextNodeContent]
    nodeType: String
    body: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContent @derivedTypes {
    data: contentfulAdvertorialType2BodyRichTextNodeContentData
    content: [contentfulAdvertorialType2BodyRichTextNodeContentContent]
    nodeType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentData @derivedTypes {
    target: contentfulAdvertorialType2BodyRichTextNodeContentDataTarget
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTarget @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSys
    fields: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFields
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSys @derivedTypes {
    space: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysContentType
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysSpace @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysSpaceSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysEnvironment @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysEnvironmentSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysContentType @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysContentTypeSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFields @derivedTypes {
    image: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImage
    content: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContent
    caption: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaption
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImage @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_US @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSys
    fields: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFields
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSys @derivedTypes {
    space: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpace @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpaceSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironment @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironmentSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFields @derivedTypes {
    title: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsTitle
    file: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFile
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFile @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_US @derivedTypes {
    url: String
    details: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails @derivedTypes {
    size: Int
    image: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContent @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_US @derivedTypes {
    nodeType: String
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContent]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContent @derivedTypes {
    nodeType: String
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContent]
    data: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentData
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContent @derivedTypes {
    nodeType: String
    value: String
    marks: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentMarks]
    data: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentData
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentContent]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentMarks {
    type: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentData @derivedTypes {
    target: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTarget
    uri: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTarget @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSys
    fields: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFields
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSys @derivedTypes {
    space: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysContentType
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysSpace @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysSpaceSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysEnvironment @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysEnvironmentSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysContentType @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysContentTypeSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFields @derivedTypes {
    text: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsText
    colour: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsColour
    backgroundColour: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsBackgroundColour
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsText @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_US @derivedTypes {
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_USContent]
    nodeType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_USContent @derivedTypes {
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_USContentContent]
    nodeType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_USContentContent @derivedTypes {
    marks: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_USContentContentMarks]
    value: String
    nodeType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsTextEn_USContentContentMarks {
    type: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsColour {
    en_US: String @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentDataTargetFieldsBackgroundColour {
    en_US: String @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentContent @derivedTypes {
    nodeType: String
    value: String
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentContentContent]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentContentContent @derivedTypes {
    nodeType: String
    value: String
    marks: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentContentContentMarks]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentContentContentContentMarks {
    type: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentData @derivedTypes {
    target: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTarget
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTarget @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSys
    fields: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFields
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSys @derivedTypes {
    space: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysContentType
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysSpace @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysSpaceSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysEnvironment @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysEnvironmentSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysContentType @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysContentTypeSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFields @derivedTypes {
    icon: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIcon
    body: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBody
    colour: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsColour
    image: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImage
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIcon @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_US @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSys
    fields: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFields
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSys @derivedTypes {
    space: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysSpace @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysSpaceSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysEnvironment @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysEnvironmentSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFields @derivedTypes {
    title: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsTitle
    file: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFile
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFile @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFileEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFileEn_US @derivedTypes {
    url: String
    details: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFileEn_USDetails @derivedTypes {
    size: Int
    image: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFileEn_USDetailsImage
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsIconEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBody @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_US @derivedTypes {
    nodeType: String
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContent]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContent @derivedTypes {
    nodeType: String
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContent]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContent @derivedTypes {
    nodeType: String
    value: String
    marks: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentMarks]
    data: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentData
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentMarks {
    type: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentData @derivedTypes {
    target: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTarget
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTarget @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSys
    fields: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFields
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSys @derivedTypes {
    space: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentType
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpace @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpaceSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironment @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironmentSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentType @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentTypeSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFields @derivedTypes {
    text: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsText
    colour: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsColour
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsText @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_US @derivedTypes {
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContent]
    nodeType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContent @derivedTypes {
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContent]
    nodeType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContent @derivedTypes {
    marks: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContentMarks]
    value: String
    nodeType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContentMarks {
    type: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsColour {
    en_US: String @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsColour {
    en_US: String @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImage @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_US @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSys
    fields: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFields
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSys @derivedTypes {
    space: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysSpace @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysSpaceSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysEnvironment @derivedTypes {
    sys: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysEnvironmentSys
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFields @derivedTypes {
    title: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsTitle
    file: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFile
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFile @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_US @derivedTypes {
    url: String
    details: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails @derivedTypes {
    size: Int
    image: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsContentEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaption @derivedTypes {
    en_US: contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_US @proxy(from: "en-US")
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_US @derivedTypes {
    nodeType: String
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContent]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContent @derivedTypes {
    nodeType: String
    content: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContentContent]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContentContent @derivedTypes {
    nodeType: String
    value: String
    marks: [contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContentContentMarks]
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContentContentMarks {
    type: String
  }
  
  type contentfulAdvertorialType2BodyRichTextNodeContentContent {
    value: String
    nodeType: String
  }
  
`
