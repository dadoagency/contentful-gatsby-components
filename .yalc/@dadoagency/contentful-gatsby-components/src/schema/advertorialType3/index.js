module.exports = `
  type ContentfulAdvertorialType3 implements Node @dontInfer {
    path: String
    pageTitle: String
    facebookPixelId: String
    redirectDestinations: [ContentfulRedirectDestination] @link(by: "id", from: "redirectDestinations___NODE")
    heroImage: ContentfulAdvertorialImage @link(by: "id", from: "heroImage___NODE")
    headerContentRight: contentfulAdvertorialType3HeaderContentRightRichTextNode @link(by: "id", from: "headerContentRight___NODE")
    heroSection: contentfulAdvertorialType3HeroSectionRichTextNode @link(by: "id", from: "heroSection___NODE")
    body: contentfulAdvertorialType3BodyRichTextNode @link(by: "id", from: "body___NODE")
    spaceId: String
    contentful_id: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulAdvertorialType3Sys
    node_locale: String
    heading: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNode implements Node @dontInfer {
    content: [contentfulAdvertorialType3HeaderContentRightRichTextNodeContent]
    nodeType: String
    headerContentRight: String
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeSys
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContent {
    data: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentData
    content: [contentfulAdvertorialType3HeaderContentRightRichTextNodeContentContent]
    nodeType: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentData {
    target: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTarget
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTarget {
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSys
    fields: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFields
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSys {
    space: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysContentType
    contentful_id: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysSpace {
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysSpaceSys
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysEnvironment {
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysEnvironmentSys
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysContentType {
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysContentTypeSys
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFields {
    text: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsText
    icon: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIcon
    bgColour: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsBgColour
    bgHoverColour: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsBgHoverColour
    fontColour: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsFontColour
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsText {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIcon {
    en_US: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_US {
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSys
    fields: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFields
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSys {
    space: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysSpace {
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysSpaceSys
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironment {
    sys: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironmentSys
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFields {
    title: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsTitle
    file: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFile
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFile {
    en_US: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_US {
    url: String
    details: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetails {
    size: Int
    image: contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetailsImage
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsBgColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsBgHoverColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentDataTargetFieldsFontColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeContentContent {
    value: String
    nodeType: String
  }

  type contentfulAdvertorialType3HeaderContentRightRichTextNodeSys {
    type: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNode implements Node @dontInfer {
    nodeType: String
    content: [contentfulAdvertorialType3HeroSectionRichTextNodeContent]
    heroSection: String
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContent {
    nodeType: String
    content: [contentfulAdvertorialType3HeroSectionRichTextNodeContentContent]
    data: contentfulAdvertorialType3HeroSectionRichTextNodeContentData
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentContent {
    nodeType: String
    value: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentData {
    target: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTarget
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTarget {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSys
    fields: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFields
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSys {
    space: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysContentType
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysSpace {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysSpaceSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysEnvironment {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysEnvironmentSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysContentType {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysContentTypeSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFields {
    title: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsTitle
    images: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImages
    image: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImage
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImages {
    en_US: [contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_US] @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_US {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSys
    fields: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFields
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSys {
    space: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysContentType
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysSpace {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysSpaceSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysEnvironment {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysEnvironmentSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysContentType {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysContentTypeSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFields {
    image: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImage
    maxWidth: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsMaxWidth
    hyperlink: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsHyperlink
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImage {
    en_US: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_US {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSys
    fields: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFields
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSys {
    space: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysSpace {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysSpaceSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysEnvironment {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysEnvironmentSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFields {
    title: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsTitle
    file: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFile
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFile {
    en_US: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFileEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFileEn_US {
    url: String
    details: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFileEn_USDetails {
    size: Int
    image: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFileEn_USDetailsImage
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsImageEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsMaxWidth {
    en_US: Int @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImagesEn_USFieldsHyperlink {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImage {
    en_US: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_US {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSys
    fields: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFields
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSys {
    space: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysSpace {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysSpaceSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironment {
    sys: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironmentSys
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFields {
    title: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsTitle
    file: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFile
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFile {
    en_US: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_US {
    url: String
    details: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails {
    size: Int
    image: contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }

  type contentfulAdvertorialType3HeroSectionRichTextNodeSys {
    type: String
  }

  type contentfulAdvertorialType3BodyRichTextNode implements Node @dontInfer {
    content: [contentfulAdvertorialType3BodyRichTextNodeContent]
    nodeType: String
    body: String
    sys: contentfulAdvertorialType3BodyRichTextNodeSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContent {
    data: contentfulAdvertorialType3BodyRichTextNodeContentData
    content: [contentfulAdvertorialType3BodyRichTextNodeContentContent]
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentData {
    target: contentfulAdvertorialType3BodyRichTextNodeContentDataTarget
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTarget {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSys
    fields: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFields
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSys {
    space: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysContentType
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysSpace {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysSpaceSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysEnvironment {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysEnvironmentSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysContentType {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysContentTypeSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFields {
    image: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImage
    caption: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaption
    text: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsText
    icon: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIcon
    bgColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBgColour
    fontColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsFontColour
    fontHoverColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsFontHoverColour
    borderColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBorderColour
    bgHoverColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBgHoverColour
    title: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsTitle
    body: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBody
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImage {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_US {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSys
    fields: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFields
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSys {
    space: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpace {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpaceSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironment {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironmentSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFields {
    title: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsTitle
    file: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFile
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFile {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_US {
    url: String
    details: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails {
    size: Int
    image: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaption {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaptionEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaptionEn_US {
    nodeType: String
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContent]
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContent {
    nodeType: String
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContentContent]
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsCaptionEn_USContentContent {
    nodeType: String
    value: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsText {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIcon {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_US {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSys
    fields: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFields
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSys {
    space: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysSpace {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysSpaceSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironment {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironmentSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFields {
    title: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsTitle
    file: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFile
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFile {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_US {
    url: String
    details: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetails {
    size: Int
    image: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetailsImage
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsIconEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBgColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsFontColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsFontHoverColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBorderColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBgHoverColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBody {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_US {
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContent]
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContent {
    data: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentData
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContent]
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentData {
    target: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTarget
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTarget {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSys
    fields: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFields
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSys {
    space: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysContentType
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysSpace {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysSpaceSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysEnvironment {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysEnvironmentSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysContentType {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysContentTypeSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFields {
    text: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsText
    bgColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsBgColour
    bgHoverColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsBgHoverColour
    fontColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsFontColour
    image: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImage
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsText {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsBgColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsBgHoverColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsFontColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImage {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_US {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSys
    fields: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFields
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSys {
    space: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysEnvironment
    revision: Int
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysSpace {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysSpaceSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysEnvironment {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysEnvironmentSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFields {
    title: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsTitle
    file: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFile
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsTitle {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFile {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_US {
    url: String
    details: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails
    fileName: String
    contentType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetails {
    size: Int
    image: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentDataTargetFieldsImageEn_USFieldsFileEn_USDetailsImage {
    width: Int
    height: Int
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContent {
    data: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentData
    marks: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentMarks]
    value: String
    nodeType: String
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentContent]
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentData {
    target: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTarget
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTarget {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSys
    fields: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFields
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSys {
    space: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpace
    id: String
    type: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    environment: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironment
    revision: Int
    contentType: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentType
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpace {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpaceSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysSpaceSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironment {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironmentSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysEnvironmentSys {
    id: String
    type: String
    linkType: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentType {
    sys: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentTypeSys
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetSysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFields {
    text: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsText
    backgroundColour: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsBackgroundColour
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsText {
    en_US: contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_US @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_US {
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContent]
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContent {
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContent]
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContent {
    marks: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContentMarks]
    value: String
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsTextEn_USContentContentMarks {
    type: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentDataTargetFieldsBackgroundColour {
    en_US: String @proxy(from: "en-US", fromNode: false)
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentMarks {
    type: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentContent {
    nodeType: String
    content: [contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentContentContent]
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentDataTargetFieldsBodyEn_USContentContentContentContent {
    nodeType: String
    value: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentContent {
    marks: [contentfulAdvertorialType3BodyRichTextNodeContentContentMarks]
    value: String
    nodeType: String
    content: [contentfulAdvertorialType3BodyRichTextNodeContentContentContent]
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentContentMarks {
    type: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentContentContent {
    content: [contentfulAdvertorialType3BodyRichTextNodeContentContentContentContent]
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeContentContentContentContent {
    value: String
    nodeType: String
  }

  type contentfulAdvertorialType3BodyRichTextNodeSys {
    type: String
  }

  type ContentfulAdvertorialType3Sys {
    type: String
    revision: Int
    contentType: ContentfulAdvertorialType3SysContentType
  }

  type ContentfulAdvertorialType3SysContentType {
    sys: ContentfulAdvertorialType3SysContentTypeSys
  }

  type ContentfulAdvertorialType3SysContentTypeSys {
    type: String
    linkType: String
    id: String
    contentful_id: String
  }
`
