exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    //productLinkButton
    require("./src/schema/productLinkButton/productLinkButton"),

    require("./src/schema/advertorialType1"),

    require("./src/schema/redirectDestination/redirectDestination"),

    //advertorial type 2 headline rich text
    require("./src/schema/advertorialType2/headline"),
    // advertorialType2 body rich text
    require("./src/schema/advertorialType2/body"),
    // advertorialType2 footer rich text
    require("./src/schema/advertorialType2/footer"),
    require("./src/schema/advertorialType2"),

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
        productLinkButton: {
          type: "ContentfulProductLinkButton",
          extensions: {
            infer: true,
            link: { by: "id", from: "productLinkButton___NODE" },
          },
        },
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
    // ContentfulTrustpilotReviewC
    require("./src/schema/reviews/trustpilot/trustpilotReviewC"),
    schema.buildObjectType({
      name: "ContentfulTrustpilotReviewC",
      infer: true,
      fields: {
        productLinkButton: {
          type: "ContentfulProductLinkButton",
          extensions: {
            infer: true,
            link: { by: "id", from: "productLinkButton___NODE" },
          },
        },
        title: "String!",
        body: {
          type: "contentfulTrustpilotReviewCBodyRichTextNode",
          extensions: {
            link: { by: "id", from: "body___NODE" },
          },
        },
      },
      interfaces: ["Node"],
    }),
    // ContentfulTrustpilotReviewD
    require("./src/schema/reviews/trustpilot/trustpilotReviewD"),
    schema.buildObjectType({
      name: "ContentfulTrustpilotReviewD",
      infer: true,
      fields: {
        productLinkButton: {
          type: "ContentfulProductLinkButton",
          extensions: {
            infer: true,
            link: { by: "id", from: "productLinkButton___NODE" },
          },
        },
        title: "String!",
        body: {
          type: "contentfulTrustpilotReviewDBodyRichTextNode",
          extensions: {
            link: { by: "id", from: "body___NODE" },
          },
        },
      },
      interfaces: ["Node"],
    }),
    // ContentfulFacebookReview
    require("./src/schema/reviews/facebook/facebookReview"),
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
        // ContentfulFacebookReviewD
    require("./src/schema/reviews/facebook/facebookReviewD"),
    schema.buildObjectType({
      name: "ContentfulFacebookReviewD",
      interfaces: ["Node"],
      fields: {
        title: "String!",
        body: {
          type: "contentfulFacebookReviewDBodyRichTextNode",
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
        "ContentfulFacebookReview",
        "ContentfulFacebookReviewD",
        "ContentfulTrustpilotReview",
        "ContentfulTrustpilotReviewB",
        "ContentfulTrustpilotReviewC",
        "ContentfulTrustpilotReviewD",
      ],
    }),
    //not using type builder syntax to use @link... try with extensions: {link}
    `
    type ContentfulTestimonialSection implements Node {
      reviews: [TestimonialReview] @link(by: "id", from: "reviews___NODE")
    }
    `,
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
