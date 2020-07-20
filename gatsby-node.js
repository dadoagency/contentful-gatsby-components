exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    // advertorial type 1 headline rich text
    `
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
    `,
    // advertorial type 1 body rich text
    `
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
        `,
    `
    type ContentfulAdvertorialType1 implements Node @derivedTypes {
      path: String
      facebookPixelId: String
      redirectDestinations: [ContentfulRedirectDestination] @link(by: "id", from: "redirectDestinations___NODE")
      testimonialSection: ContentfulTestimonialSection @link(by: "id", from: "testimonialSection___NODE")
      spaceId: String
      contentful_id: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      node_locale: String

      references: [ContentfulReference] @link(by: "id", from: "references___NODE")
      headline: contentfulAdvertorialType1HeadlineRichTextNode @link(by: "id", from: "headline___NODE")
      body: contentfulAdvertorialType1BodyRichTextNode @link(by: "id", from: "body___NODE")
    }
    `,
    schema.buildObjectType({
      name: "ContentfulReference",
      fields: {
        displayText: "String",
        url: "String",
      },
      interfaces: ["Node"],
    }),

    //advertorial type 2 headline rich text
    require("./src/schema/advertorialType2/headline"),
    // advertorialType2 body rich text
    require("./src/schema/advertorialType2/body"),
    // advertorialType2 footer rich text
    require("./src/schema/advertorialType2/footer"),
    schema.buildObjectType({
      name: "ContentfulAdvertorialType2",
      fields: {
        path: "String",
        facebookPixelId: "String",
        redirectDestinations: "ContentfulRedirectDestination",
        stickyProductButton: "ContentfulProductLinkButton",
        testimonialSection: "ContentfulTestimonialSection",
        socialMediaIcons: "[SocialMediaIcon]",
        headline: {
          type: "contentfulAdvertorialType2HeadlineRichTextNode",
          extensions: {
            link: { by: "id", from: "headline___NODE" },
          },
        },
        body: {
          type: "contentfulAdvertorialType2BodyRichTextNode",
          extensions: {
            link: { by: "id", from: "body___NODE" },
          },
        },
        footer: {
          type: "contentfulAdvertorialType2FooterRichTextNode",
          extensions: {
            link: { by: "id", from: "footer___NODE" },
          },
        },
      },
      interfaces: ["Node"],
      extensions: {
        infer: true,
      },
    }),
    schema.buildObjectType({
      name: "Sys",
      fields: {
        id: "String",
        spaceId: "String",
        environmentId: "String",
      },
    }),
    schema.buildObjectType({
      name: "Entry",
      fields: {
        sys: "Sys",
      },
    }),

    // ContentfulTrustpilotReview
    require("./src/schema/reviews/trustpilot/trustpilotReview"),
    schema.buildObjectType({
      name: "ContentfulTrustpilotReview",
      infer: true,
      fields: {
        productLinkButton: "ContentfulProductLinkButton",
        title: "String!",
        body: {
          type: "contentfulTrustpilotReviewBodyRichTextNode",
          extensions: {
            link: { by: "id", from: "body___NODE" },
          },
        },
      },
      interfaces: ["Node"],
    }),
    // ContentfulTrustpilotReviewB
    require("./src/schema/reviews/trustpilot/trustpilotReviewB"),
    schema.buildObjectType({
      name: "ContentfulTrustpilotReviewB",
      interfaces: ["Node"],
      fields: {
        title: "String!",
        body: {
          type: "contentfulTrustpilotReviewBBodyRichTextNode",
          extensions: {
            link: {
              by: "id",
              from: "body___NODE",
            },
          },
        },
      },
    }),
    // ContentfulFacebookReviewB
    // require("./src/schema/reviews/trustpilot/trustpilotReviewB"),
    schema.buildObjectType({
      name: "ContentfulFacebookReview",
      interfaces: ["Node"],
      fields: {
        title: "String!",
        body: {
          type: "contentfulFacebookReviewBodyRichTextNode",
          extensions: {
            link: {
              by: "id",
              from: "body___NODE",
            },
          },
        },
        productLinkButton: "ContentfulProductLinkButton",
      },
    }),

    schema.buildUnionType({
      name: "TestimonialReview",
      infer: true,
      types: [
        "ContentfulTrustpilotReview",
        "ContentfulTrustpilotReviewB",
        "ContentfulFacebookReview",
      ],
    }),
    //not using type builder syntax to use @link... try with extensions: {link}
    `
    type ContentfulTestimonialSection implements Node {
      reviews: [TestimonialReview] @link(by: "id", from: "reviews___NODE")
    }
    `,
    schema.buildObjectType({
      name: "File",
      fields: {
        sys: "Sys",
        url: "String",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "Asset",
      fields: {
        sys: "Sys",
        file: "File",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "SocialMediaIcon",
      fields: {
        link: "String",
        icon: "Asset",
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}
