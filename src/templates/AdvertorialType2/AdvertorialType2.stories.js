import React from "react"
import AdvertorialType2 from "./index"
import * as FooterStories from "../../components/Footer/Footer.stories"
import * as ProductLinkButtonStories from "../../components/ProductLinkButton/ProductLinkButton.stories"
import petlabLogo from "../../images/Petlab-logo.png"

export default {
  title: "Advertorial Type 2",
  component: AdvertorialType2,
}
const Template = args => {
  return <AdvertorialType2 {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...FooterStories.Default.args,
  stickyProductButton: ProductLinkButtonStories.Text.args,
  headline: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                '"Dogs Suffering From Scratching & Paw Licking Are Having Their Quality Of Life Transformed... Thanks To These Chews"',
              nodeType: "text",
            },
          ],
          nodeType: "heading-1",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "by ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "Michael F. (4 Minute Read)",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
  },
  body: {
    json: {
      data: {},
      content: [
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c7rCip65Df5p76BGi5AdEh7",
                type: "Entry",
                createdAt: "2020-06-18T18:23:36.815Z",
                updatedAt: "2020-06-18T18:23:36.815Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "advertorialImage",
                    contentful_id: "advertorialImage",
                  },
                },
                contentful_id: "7rCip65Df5p76BGi5AdEh7",
              },
              fields: {
                image: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "lAvvGQw1wmmbPzbmqyOst",
                      type: "Asset",
                      createdAt: "2020-06-18T18:23:21.306Z",
                      updatedAt: "2020-06-18T18:23:21.306Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 1,
                      contentful_id: "lAvvGQw1wmmbPzbmqyOst",
                    },
                    fields: {
                      title: {
                        "en-US": "lucy-image1",
                      },
                      description: {
                        "en-US":
                          "https://promo.thepetlabco.com/adv/dmx_irc_lucypresale/images/lucy-image1.jpg",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/lAvvGQw1wmmbPzbmqyOst/f0f0d1e0d0f938d8f47c8e7d8aa5aec1/lucy-image1.jpg",
                          details: {
                            size: 532731,
                            image: {
                              width: 1000,
                              height: 500,
                            },
                          },
                          fileName: "lucy-image1.jpg",
                          contentType: "image/jpeg",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value:
                "If you want to improve the quality of your dog's life, then this could be one of the most important articles you'll read.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Most owners see their dogs constantly scratching & licking their paws and think they are “just grooming” never realizing they could actually be suffering from severe allergies...",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Allergies is one of the most common problems that gets diagnosed in veterinary medicine. With 1000s of dog’s suffering from this condition every year, but their owners sadly not taking action!",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c7KzQSvyHlNuwvTkpZVppKh",
                type: "Entry",
                createdAt: "2020-06-18T18:24:34.548Z",
                updatedAt: "2020-06-18T18:24:34.548Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "advertorialImage",
                    contentful_id: "advertorialImage",
                  },
                },
                contentful_id: "7KzQSvyHlNuwvTkpZVppKh",
              },
              fields: {
                image: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c5aqAqLIefYXhYYce17kbpf",
                      type: "Asset",
                      createdAt: "2020-06-18T18:24:29.653Z",
                      updatedAt: "2020-06-18T18:24:29.653Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 1,
                      contentful_id: "5aqAqLIefYXhYYce17kbpf",
                    },
                    fields: {
                      title: {
                        "en-US": "lucy-image2",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/5aqAqLIefYXhYYce17kbpf/91aedc6da1813211fc2b137a896f4f76/lucy-image2.jpg",
                          details: {
                            size: 32656,
                            image: {
                              width: 498,
                              height: 75,
                            },
                          },
                          fileName: "lucy-image2.jpg",
                          contentType: "image/jpeg",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Lucy was one of those 1000s of dogs suffering from allergies, without her owners realizing…",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Throughout the day she would constantly lick her paws, bite and scratch. ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "Lucy was living in constant discomfort everyday…",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "These symptoms can quickly escalate into a vicious cycle where the scratching irritates their skin more and more… leading to painful wounds & sores!",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Luckily, Lucy’s owner read about allergies and spotted the symptoms...",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "yKC5kcWInVginxo0d2rQl",
                type: "Entry",
                createdAt: "2020-06-18T18:25:25.470Z",
                updatedAt: "2020-06-18T19:13:38.832Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "advertorialImage",
                    contentful_id: "advertorialImage",
                  },
                },
                contentful_id: "yKC5kcWInVginxo0d2rQl",
              },
              fields: {
                image: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c23AHJVphft8JIkB2WePZyh",
                      type: "Asset",
                      createdAt: "2020-06-18T18:25:21.040Z",
                      updatedAt: "2020-06-18T18:25:21.040Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 1,
                      contentful_id: "23AHJVphft8JIkB2WePZyh",
                    },
                    fields: {
                      title: {
                        "en-US": "lucy-image3",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/23AHJVphft8JIkB2WePZyh/7d3d8b426639b6538c2d21814124e832/lucy-image3.png",
                          details: {
                            size: 409035,
                            image: {
                              width: 720,
                              height: 360,
                            },
                          },
                          fileName: "lucy-image3.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
                caption: {
                  "en-US": {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [
                              {
                                type: "bold",
                              },
                            ],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value:
                "She was constantly licking her paws until she found these chews",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "After doing some research online, she saw these new itch relief chews had amazing reviews, and had helped 1000s of dogs across the USA! They also offered a 90 day guarantee, so she thought she had nothing to lose…",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c7q1nlXQyO6K9UZ83tIyLbh",
                type: "Entry",
                createdAt: "2020-06-18T18:26:47.878Z",
                updatedAt: "2020-06-18T18:26:47.878Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "advertorialImage",
                    contentful_id: "advertorialImage",
                  },
                },
                contentful_id: "7q1nlXQyO6K9UZ83tIyLbh",
              },
              fields: {
                image: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c1pAwsROivVyuuSdKiVQFlc",
                      type: "Asset",
                      createdAt: "2020-06-18T18:26:39.082Z",
                      updatedAt: "2020-06-18T18:26:39.082Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 1,
                      contentful_id: "1pAwsROivVyuuSdKiVQFlc",
                    },
                    fields: {
                      title: {
                        "en-US": "lucy-image4",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/1pAwsROivVyuuSdKiVQFlc/82e4e63e5f73cc7eb2371be71efe179c/lucy-image4.png",
                          details: {
                            size: 32156,
                            image: {
                              width: 500,
                              height: 158,
                            },
                          },
                          fileName: "lucy-image4.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "\"I'M NOT RICH BUT I COULDN'T AFFORD NOT TO GET THESE\"",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Costing a tiny 0.75 cents a day when you get the value pack, Lucy's owner told us \"it's a no brainer to try for any dog owner\" - especially after seeing the rave reviews and success stories...",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "In just the ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "first week",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                ", Lucy had stopped scratching excessively. She seemed much more comfortable and relaxed than she had been in a long time.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "Week 2",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " and the results of the chews were clear as day. Lucy no longer licked her paws constantly, she was able to just lie down in peace. It was heartwarming to see.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "By ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "week 3",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " Lucy was a completely different dog. Without the excessive licking her hair had started to grow back! Her coat just looked shinier & healthier. It was amazing to see.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "PRESENT DAY:",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: " Lucy is back to loving life again...",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "aDmQrPQDAsQaXEwvD8Hkc",
                type: "Entry",
                createdAt: "2020-06-18T13:22:25.619Z",
                updatedAt: "2020-08-14T08:12:58.588Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "productLinkButton",
                    contentful_id: "productLinkButton",
                  },
                },
                contentful_id: "aDmQrPQDAsQaXEwvD8Hkc",
              },
              fields: {
                text: {
                  "en-US": "See Pre-order Offers Available Now! ",
                },
                icon: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c3bS4Qyz2HKD5clkX4jjA2A",
                      type: "Asset",
                      createdAt: "2020-06-18T19:42:28.616Z",
                      updatedAt: "2020-06-18T20:00:32.556Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 2,
                      contentful_id: "3bS4Qyz2HKD5clkX4jjA2A",
                    },
                    fields: {
                      title: {
                        "en-US": "arrow",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/3bS4Qyz2HKD5clkX4jjA2A/917d7a3ad99cd33fb552b780297a8cd4/right.png",
                          details: {
                            size: 433,
                            image: {
                              width: 16,
                              height: 16,
                            },
                          },
                          fileName: "right.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
                bgColour: {
                  "en-US": "#ff0000",
                },
                bgHoverColour: {
                  "en-US": "#ff0000",
                },
                fontColour: {
                  "en-US": "#eeeeee",
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c6cXFYbJErsuldfDLXnx67v",
                type: "Entry",
                createdAt: "2020-06-18T18:28:17.214Z",
                updatedAt: "2020-06-18T18:28:17.214Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "advertorialImage",
                    contentful_id: "advertorialImage",
                  },
                },
                contentful_id: "6cXFYbJErsuldfDLXnx67v",
              },
              fields: {
                image: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c3Tm764Mtq3CVak8xkrLStV",
                      type: "Asset",
                      createdAt: "2020-06-18T18:28:04.358Z",
                      updatedAt: "2020-06-18T18:28:04.358Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 1,
                      contentful_id: "3Tm764Mtq3CVak8xkrLStV",
                    },
                    fields: {
                      title: {
                        "en-US": "lucy-image5",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/3Tm764Mtq3CVak8xkrLStV/75ff11a569524f0f8bc32e83c6a73cd2/lucy-image5.png",
                          details: {
                            size: 636879,
                            image: {
                              width: 720,
                              height: 360,
                            },
                          },
                          fileName: "lucy-image5.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
                caption: {
                  "en-US": {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value:
                              "Today, Lucy loves being outside more than ever!",
                            marks: [
                              {
                                type: "bold",
                              },
                            ],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "SO, WHAT ARE THESE AMAZING CHEWS?",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "They’re called Petlab Co Itch Relief chews and they’re changing the lives of thousands of dogs across America!",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Designed by experts, to support your dog’s immune system that helps them fight off everyday allergens. The formula, which is rich in omega 3 & 6, vitamins and minerals essential for healthy skin and coat then gets to work in no time, helping to promote a soft, silky, shiny and healthy coat for your pup.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value:
                "Petlab Co proudly manufactures the product in Denver, Colorado",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " using the perfect balance of premium, effective ingredients that are safe to use for all dogs, including:",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c6q3VWcDF9SUF2rvsEghLcq",
                type: "Entry",
                createdAt: "2020-06-19T08:38:26.693Z",
                updatedAt: "2020-06-19T08:59:01.699Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "styledText",
                    contentful_id: "styledText",
                  },
                },
                contentful_id: "6q3VWcDF9SUF2rvsEghLcq",
              },
              fields: {
                text: {
                  "en-US": {
                    nodeType: "document",
                    data: {},
                    content: [
                      {
                        nodeType: "unordered-list",
                        content: [
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "paragraph",
                                content: [
                                  {
                                    nodeType: "text",
                                    value: "Turmeric Curcumin",
                                    marks: [],
                                    data: {},
                                  },
                                ],
                                data: {},
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "paragraph",
                                content: [
                                  {
                                    nodeType: "text",
                                    value: "Flaxseed",
                                    marks: [],
                                    data: {},
                                  },
                                ],
                                data: {},
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "paragraph",
                                content: [
                                  {
                                    nodeType: "text",
                                    value: "Salmon Oil",
                                    marks: [],
                                    data: {},
                                  },
                                ],
                                data: {},
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "paragraph",
                                content: [
                                  {
                                    nodeType: "text",
                                    value: "Honey",
                                    marks: [],
                                    data: {},
                                  },
                                ],
                                data: {},
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: "list-item",
                            content: [
                              {
                                nodeType: "paragraph",
                                content: [
                                  {
                                    nodeType: "text",
                                    value: "Vitamin E",
                                    marks: [],
                                    data: {},
                                  },
                                ],
                                data: {},
                              },
                            ],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                      {
                        nodeType: "paragraph",
                        content: [
                          {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                          },
                        ],
                        data: {},
                      },
                    ],
                  },
                },
                colour: {
                  "en-US": "#019DD9",
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "It’s been in such high demand that ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "dog owners across the country are stockpiling",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " it to protect their pups this spring & summer. The company completely sold out in under 30 days, with over ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "35,375 tubs being sold in April 2020 alone!",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "Petlab Co understands that ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value:
                "April through September is the worst time of year for your dog’s allergies",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " so they are working overtime to manufacture another batch of these Itch Relief chews to ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "be delivered on 22nd June.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c3cshD9PKBLZ7VQPWiHDZfN",
                type: "Entry",
                createdAt: "2020-06-19T09:05:33.317Z",
                updatedAt: "2020-06-19T09:05:33.317Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "styledText",
                    contentful_id: "styledText",
                  },
                },
                contentful_id: "3cshD9PKBLZ7VQPWiHDZfN",
              },
              fields: {
                text: {
                  "en-US": {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: "bold",
                              },
                            ],
                            value:
                              "They expect this next batch to sell out before it is even finished manufacturing, which is why they are urging you to reserve your presale order now!",
                            nodeType: "text",
                          },
                        ],
                        nodeType: "paragraph",
                      },
                    ],
                    nodeType: "document",
                  },
                },
                backgroundColour: {
                  "en-US": "#FFFF00",
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "The best part though? Reserving your presale order now means you",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value:
                " get it 100% risk-free with Petlab Co’s 90 day money-back guarantee.",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: " PLUS they’re offering a ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value: "25% discount",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                " for all new customers, so you’d be silly not to secure it now.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "Reserve your presale order here:",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "aDmQrPQDAsQaXEwvD8Hkc",
                type: "Entry",
                createdAt: "2020-06-18T13:22:25.619Z",
                updatedAt: "2020-08-14T08:12:58.588Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "productLinkButton",
                    contentful_id: "productLinkButton",
                  },
                },
                contentful_id: "aDmQrPQDAsQaXEwvD8Hkc",
              },
              fields: {
                text: {
                  "en-US": "See Pre-order Offers Available Now! ",
                },
                icon: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c3bS4Qyz2HKD5clkX4jjA2A",
                      type: "Asset",
                      createdAt: "2020-06-18T19:42:28.616Z",
                      updatedAt: "2020-06-18T20:00:32.556Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 2,
                      contentful_id: "3bS4Qyz2HKD5clkX4jjA2A",
                    },
                    fields: {
                      title: {
                        "en-US": "arrow",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/3bS4Qyz2HKD5clkX4jjA2A/917d7a3ad99cd33fb552b780297a8cd4/right.png",
                          details: {
                            size: 433,
                            image: {
                              width: 16,
                              height: 16,
                            },
                          },
                          fileName: "right.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
                bgColour: {
                  "en-US": "#ff0000",
                },
                bgHoverColour: {
                  "en-US": "#ff0000",
                },
                fontColour: {
                  "en-US": "#eeeeee",
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "The company has had hundreds of 5* reviews of their products, and countless customers have personally messaged us to say how impressed and happy they are with their products. It's one of the reasons we do what we do - seeing the results 1st hand of the positive changes our products can make to dogs across America.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "You can see some of the positive 5* reviews below…",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c4pqrCm3CErdhHv2DjTZzyp",
                type: "Entry",
                createdAt: "2020-06-18T13:29:39.291Z",
                updatedAt: "2020-06-18T13:29:39.291Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "advertorialImage",
                    contentful_id: "advertorialImage",
                  },
                },
                contentful_id: "4pqrCm3CErdhHv2DjTZzyp",
              },
              fields: {
                image: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c7CxCfHCxdrAijwYeJXlIuP",
                      type: "Asset",
                      createdAt: "2020-06-18T13:29:31.370Z",
                      updatedAt: "2020-06-18T13:29:31.370Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 1,
                      contentful_id: "7CxCfHCxdrAijwYeJXlIuP",
                    },
                    fields: {
                      title: {
                        "en-US": "Joan Becker Trust Pilot",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/7CxCfHCxdrAijwYeJXlIuP/effa98b45fa252d8b76d74a821b1d0a0/trust.png",
                          details: {
                            size: 69649,
                            image: {
                              width: 1000,
                              height: 580,
                            },
                          },
                          fileName: "trust.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Remember, excessive itching is not always normal in dogs, and it could be a sign of nutrient deficiency that you can’t afford to ignore. Take advantage of Petlab's 90 day risk free, 100% guarantee and click the button below to ",
              nodeType: "text",
            },
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value:
                "reserve your presale order today for our Itch Relief Chews",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value:
                ". They could make a real difference to their skin and coat health.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "c3JNcYeRMbXUO4YXA0zuiA2",
                type: "Entry",
                createdAt: "2020-06-18T13:31:04.768Z",
                updatedAt: "2020-06-18T13:31:04.768Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "advertorialImage",
                    contentful_id: "advertorialImage",
                  },
                },
                contentful_id: "3JNcYeRMbXUO4YXA0zuiA2",
              },
              fields: {
                image: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c2W1mvbWBuX0WFQqYTCKeVw",
                      type: "Asset",
                      createdAt: "2020-06-18T13:30:57.279Z",
                      updatedAt: "2020-06-18T13:30:57.279Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 1,
                      contentful_id: "2W1mvbWBuX0WFQqYTCKeVw",
                    },
                    fields: {
                      title: {
                        "en-US": "Itch Relief Chews 25% off - red",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/2W1mvbWBuX0WFQqYTCKeVw/d099de0ef8b08b04b4d683c88dd6fb7a/product.png",
                          details: {
                            size: 1145051,
                            image: {
                              width: 1000,
                              height: 500,
                            },
                          },
                          fileName: "product.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "xihufpic5pn1",
                    contentful_id: "xihufpic5pn1",
                  },
                },
                id: "aDmQrPQDAsQaXEwvD8Hkc",
                type: "Entry",
                createdAt: "2020-06-18T13:22:25.619Z",
                updatedAt: "2020-08-14T08:12:58.588Z",
                environment: {
                  sys: {
                    id: "dev",
                    type: "Link",
                    linkType: "Environment",
                    contentful_id: "dev",
                  },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: "Link",
                    linkType: "ContentType",
                    id: "productLinkButton",
                    contentful_id: "productLinkButton",
                  },
                },
                contentful_id: "aDmQrPQDAsQaXEwvD8Hkc",
              },
              fields: {
                text: {
                  "en-US": "See Pre-order Offers Available Now! ",
                },
                icon: {
                  "en-US": {
                    sys: {
                      space: {
                        sys: {
                          type: "Link",
                          linkType: "Space",
                          id: "xihufpic5pn1",
                          contentful_id: "xihufpic5pn1",
                        },
                      },
                      id: "c3bS4Qyz2HKD5clkX4jjA2A",
                      type: "Asset",
                      createdAt: "2020-06-18T19:42:28.616Z",
                      updatedAt: "2020-06-18T20:00:32.556Z",
                      environment: {
                        sys: {
                          id: "dev",
                          type: "Link",
                          linkType: "Environment",
                          contentful_id: "dev",
                        },
                      },
                      revision: 2,
                      contentful_id: "3bS4Qyz2HKD5clkX4jjA2A",
                    },
                    fields: {
                      title: {
                        "en-US": "arrow",
                      },
                      file: {
                        "en-US": {
                          url:
                            "//images.ctfassets.net/xihufpic5pn1/3bS4Qyz2HKD5clkX4jjA2A/917d7a3ad99cd33fb552b780297a8cd4/right.png",
                          details: {
                            size: 433,
                            image: {
                              width: 16,
                              height: 16,
                            },
                          },
                          fileName: "right.png",
                          contentType: "image/png",
                        },
                      },
                    },
                  },
                },
                bgColour: {
                  "en-US": "#ff0000",
                },
                bgHoverColour: {
                  "en-US": "#ff0000",
                },
                fontColour: {
                  "en-US": "#eeeeee",
                },
              },
            },
          },
          content: [],
          nodeType: "embedded-entry-block",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
  },
  node_locale: "en-US",
  logoPosition: "left",
  headerText: "Advertorial",
  logo: {
    aspectRatio: 4.473684210526316,
    src: petlabLogo,
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAjUlEQVQY05WOQQoCMQxFW0VwIYpQFMZZtAgjLnQhuG1P0Nz/OL7fKYKICwOPpMnPb1ws5v6J9EP/0ecRYMR8JK/hkHLdx2xbWKZsR9jQvzZ9bprQtNkGCL3/NpxggAfs4MxQ5hfyivyEE9S+GGDq2jvcOMB/nasfVDOcKbZIpbo4116oVujyvutlJp3iBXwXJpWT4bHDAAAAAElFTkSuQmCC",
    height: 38,
    originalName: "Petlab-logo.png",
    width: 170,
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='170'%20height='38'%20viewBox='0%200%20170%2038'%20preserveAspectRatio='none'/%3e",
  },
  footer: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "*Results May Vary. Not intended for human consumption. Please consult your veterinarian regarding any change in treatment or supplementation.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "1. Fatty Acid In Dogs Study ",
              nodeType: "text",
            },
            {
              data: {
                uri:
                  "https://www.rvc.ac.uk/review/Dentistry/Shared_Media/pdfs/perio_print.pdf",
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "https://www.rvc.ac.uk/review/Dentistry/Shared_Media/pdfs/perio_print.pdf",
                  nodeType: "text",
                },
              ],
              nodeType: "hyperlink",
            },
            {
              data: {},
              marks: [],
              value: "",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "Disclaimer: This is an advertisement by Petlab Co.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
  },
  redirectDestinations: [
    {
      url: "https://promo.thepetlabco.com/jointcarechew/index.php",
      params: [
        {
          key: "utm_medium",
          value: "utmtimsval",
        },
        {
          key: "id",
          value: "tims_test",
        },
      ],
    },
    {
      url: "http://a.com",
      params: [
        {
          key: "a",
          value: "b",
        },
      ],
    },
  ],
  testimonialSection: {
    headerImage: {
      fluid: {
        aspectRatio: 0.7380073800738007,
        base64:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH5AcdDSADVQdGLQAABShJREFUSMd9VTtsHFUUPe/Nf3+2Y8eOYztZx598IErSxAUSiAIKqjSQAgkaGlpqKiRoqJEo6UBCAgkkkAWKREEQSMQJciIiSBTkTzZrZ73fmZ2ZnRnOe7tr1ggxu2/f7Pvcd+8599wnwCeKupDSXA6C4KUoiq7EcbQURfFckiSTbIU0TS3DMLhGxr1e3AHEU8dxdl3XfcB+I5/PfZ+myX3bdiFqtX04jvtJo9F8gxtFlmU8IAINQb1zDL1eD5ZlqbMRhqEed1wXjm3DZqNRuK7zuWHI6zKfy+V6veRNbhIYedSm0XZkjh8MxoaHJkn6Ko1OSkmz/7d59IDDvv/9r0eaXKANCiEwwEn3vu8jjmOEEUNMM5imqedUeOoZrlX7Dp0QQpr8rw0qnLphF0kv0YY0hvxIISENiSiOkIYp0iTVIYIAuY6LQqGg50iQctugh8IjuwknjCHwaoMCf0iO8mLooWp9Z4QmSo0rZ7g+i2PXNbvd8H0uMugtnh7UUas3sM9+d2cX9f2n6HYDbcR1PdieC5shK3Y9ejQ+PobyqXnMHJ9STogwjD4wP/t6fe3L9RvqSJjEJc9N9UYTtUoF1e0dVHYrmJqaQGl8HDGhEvTIHkRCIDE+PY1zy4twbQuXLpy9Kjfu3Te2K9U+LnqNZG6ZI+8WQzM18Lb1jzHPdVAq5BSUDNvAXq2OH36+JU0pBWYmJ3B2cQHjY0V6KRETuzMzE6jvzaLrd0iKoRNZWjYyRsK8JYERYhJk5ovwg1AfapmmFM3W3h9Bp7lM6WmgKSFNRrvTRqNRJ+sxMTS0IhQJyrhivk+Uge9u/oatSg31ZhuvX3u5Ytp0yR9J5mz4y7E/H27BMgQxbWvvV1fOaIOjK8+cmsXt3//ShK6U56QCSx4Rx8j7yRNT2NjYxNrVy3hSrWHncRXl03Mj6gEuri4i6hFvZkIh7wplUAxnsyMWMy7I4cTMFLa2K2xPcPnS+f70UdXj+asXB4pR0qOHA7kfrstGtFouz+uZkG6YhjlSHAT+LWqhtKyyYxiyArZLhfhBgDgMcPvOJmZnJrWnp4lVGMbY2qlgrFQc6LyHC+dWMOI2A88yc3hCzHSwdOL2822sWECpmEeRvVSiF9BGDxotHUVEo//CvU9KfyRjYt7BzVt30Wy20Kg+QYfFN2LBcJjErkfDlFrYS+mxpzFLuO3jD59BEtZ5UITS5PyAlMEJ55dPIc1SdDo+atXjeEzp2cySLr0yLQeG7cBy7MOyZTCa1N9G5nkM3zrEUGYDIspzMxgr5BF0fQSdU2i2zqPV6mgpqoJQZKnKBrVQVSFlEEYOadyGW1hS8pTmxt374tsbN7Ewd4Kh5Mmk0OrotltoN5uUWYRnzy3Cy+Vg0agqIEKVMapFyS0ROcjCNHFLCY8vzS/Wf5SffrWOJZYhVY1Vbeu029jb2kaVzSfzi4sn8d47r2DOfgjhPyIb+wyZcpxYZlgvwCq/SE89wmIJY/XK2rsPHm3ZEwRcFUsVii6sTJ+ix1AtlmEjwy+/buLSfAclj1Wpx5s0Y+GNa7DihzCCe4AzDdObgfnWa9fStYsXYLJMKabafoB6va5r4cFeFaFf1yHmWCc3Gw6WVhmyYWliTKeA3LFpuBOziFOOW+OpuVJe+GZqrHBdVRIF9vAebrVaR25CxeqwaWMqX1XlJu4J50OKgUGvi0aj4bFMvR0E3edoaIGbj3FTkc0joTb/m+qQwc2mfhLORTQa8L3FXDmgJLd5vf9UKhU/+hvkPafNhxZShgAAAABJRU5ErkJggg==",
        srcWebp:
          "//images.ctfassets.net/xihufpic5pn1/7qBn9PlGF0FnSbCfzwJNN6/a0041d959ecdd2e6d1b0e1fc5dcc4651/JointCareChews-200px__1_.png?w=800&q=50&fm=webp",
        srcSetWebp:
          "//images.ctfassets.net/xihufpic5pn1/7qBn9PlGF0FnSbCfzwJNN6/a0041d959ecdd2e6d1b0e1fc5dcc4651/JointCareChews-200px__1_.png?w=200&h=271&q=50&fm=webp 200w",
        sizes: "(max-width: 800px) 100vw, 800px",
        src:
          "//images.ctfassets.net/xihufpic5pn1/7qBn9PlGF0FnSbCfzwJNN6/a0041d959ecdd2e6d1b0e1fc5dcc4651/JointCareChews-200px__1_.png?w=800&q=50",
        srcSet:
          "//images.ctfassets.net/xihufpic5pn1/7qBn9PlGF0FnSbCfzwJNN6/a0041d959ecdd2e6d1b0e1fc5dcc4651/JointCareChews-200px__1_.png?w=200&h=271&q=50 200w",
      },
    },
    subtitle: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "subtitle",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
    },
    reviews: [
      {
        title: "test facebook review",
        body: {
          json: {
            nodeType: "document",
            data: {},
            content: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value: "this is a test facebook review",
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
        },
        internal: {
          type: "ContentfulFacebookReview",
        },
        productLinkButton: null,
      },
      {
        title: "Professional and Effective",
        body: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      "Amazing business. My pit was having some hip issues, she would run in the field and immediately would start limping. The limping continued for 2 or so days, and she just wasn’t herself. After giving her the Joint chews, she seems invincible. Running like her young self and enjoying every moment! Can’t thank you enough PetLab!",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "document",
          },
        },
        internal: {
          type: "ContentfulTrustpilotReview",
        },
        productLinkButton: {
          text: "See Pre-order Offers Available Now! ",
          additionalText: null,
          icon: {
            fixed: {
              base64:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AcTDRgZXyV0nwAAAH9JREFUKM+d0TEOAQEQheFBQbsuodlriOg0DrBHoHEOLqNwBqqVUEpoHWCbT0GisEbir/9M3nsTCgc3S4Nox8yTi0qvTZh7czTJBdgpc4HG2jAT4G6lnwlwMo7oxndGsVVmQkTkF84x7dR/hWxssprpUHXb1D+fVdi7WrwiffAA/VPmDiTtZFMAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC",
              aspectRatio: 1,
              srcWebp:
                "//images.ctfassets.net/xihufpic5pn1/3bS4Qyz2HKD5clkX4jjA2A/917d7a3ad99cd33fb552b780297a8cd4/right.png?w=12&q=50&fm=webp",
              srcSetWebp:
                "//images.ctfassets.net/xihufpic5pn1/3bS4Qyz2HKD5clkX4jjA2A/917d7a3ad99cd33fb552b780297a8cd4/right.png?w=12&h=12&q=50&fm=webp 1x",
              height: 12,
              src:
                "//images.ctfassets.net/xihufpic5pn1/3bS4Qyz2HKD5clkX4jjA2A/917d7a3ad99cd33fb552b780297a8cd4/right.png?w=12&q=50",
              srcSet:
                "//images.ctfassets.net/xihufpic5pn1/3bS4Qyz2HKD5clkX4jjA2A/917d7a3ad99cd33fb552b780297a8cd4/right.png?w=12&h=12&q=50 1x",
              width: 12,
            },
          },
          bgColour: "#ff0000",
          bgHoverColour: "#ff0000",
          fontColour: "#eeeeee",
          fontHoverColour: null,
          borderColour: null,
          borderHoverColour: null,
        },
      },
    ],
  },
}
