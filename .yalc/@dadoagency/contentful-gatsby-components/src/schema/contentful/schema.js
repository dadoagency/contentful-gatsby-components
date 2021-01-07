module.exports = `
type ContentfulAsset implements Node @derivedTypes @dontInfer {
    contentful_id: String
    file: ContentfulAssetFile
    title: String
    description: String
    node_locale: String
    localFile: File @link(by: "id", from: "localFile___NODE")
  }

  type ContentfulAssetFile @derivedTypes {
    url: String
    details: ContentfulAssetFileDetails
    fileName: String
    contentType: String
  }
  
  type ContentfulAssetFileDetails @derivedTypes {
    size: Int
    image: ContentfulAssetFileDetailsImage
  }
  
  type ContentfulAssetFileDetailsImage {
    width: Int
    height: Int
  }
`
