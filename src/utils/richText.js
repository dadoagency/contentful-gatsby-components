import React from "react"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
// import { List } from "@dadoagency/gatsby-plugin-trustpilot-widget"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { getFirstValue, getLocaleValueOrDefault } from "./locale"
import AdvertorialVideo from "../components/Video"
import ArticleImage from "../components/Image"
import ProductLinkButton from "../components/ProductLinkButton"
import StyledText from "../components/StyledText"
import Map from "../components/Map"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const url = getFirstValue(node.data.target.fields.file).url
      return (
        <img
          src={url}
          alt={
            node.data.target.fields.description
              ? getFirstValue(node.data.target.fields.description)
              : ""
          }
        />
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      try {
        switch (node.data.target.sys.contentType.sys.id) {
          case "advertorialVideo":
            const file = getFirstValue(
              getFirstValue(node.data.target.fields.video).fields.file
            )
            return <AdvertorialVideo src={file.url} />

          case "advertorialImage":
            const { url } = getFirstValue(
              getFirstValue(node.data.target.fields.image).fields.file
            )
            let width = "100%"
            let borderRadius = "0"
            if (node.data.target.fields.hasOwnProperty("maxWidth")) {
              width = getFirstValue(node.data.target.fields.maxWidth) + "px"
            }
            if (node.data.target.fields.hasOwnProperty("borderRadius")) {
              borderRadius =
                getFirstValue(node.data.target.fields.borderRadius) + "px"
            }
            let caption = null
            if (node.data.target.fields.caption) {
              caption = (
                <>
                  {documentToReactComponents(
                    getFirstValue(node.data.target.fields.caption),
                    renderOptions
                  )}
                </>
              )
            }
            let hyperlink = ""
            if (node.data.target.fields.hasOwnProperty("hyperlink")) {
              hyperlink = getFirstValue(node.data.target.fields.hyperlink)
            }
            //TODO: use child image sharp
            return (
              <center>
                <ArticleImage
                  src={url}
                  style={{ width: width, borderRadius }}
                  caption={caption}
                  hyperlink={hyperlink}
                />
              </center>
            )
          case "imageCarouselMobile":
            const images = []
            const title = getLocaleValueOrDefault(node.data.target.fields.title)
            const contentfulImages = getLocaleValueOrDefault(
              node.data.target.fields.images
            )
            for (let i = 0; i < contentfulImages.length; i += 1) {
              // Creating a node so the image can be passed through BLOCK.EMBEDDED_ENTRY again to create an
              //    advertorialImage
              const node = {
                node: {
                  content: [],
                  data: {
                    target: contentfulImages[i],
                  },
                  nodeType: "embedded-entry-block",
                },
              }
              images.push(node)
            }
            return <ImageCarouselMobile title={title} images={images} />
          case "map":
            let mapClickUrl = null
            if (Object(node.data.target.fields).hasOwnProperty("clickUrl")) {
              mapClickUrl = getLocaleValueOrDefault(
                node.data.target.fields.clickUrl
              )
            }
            return <Map clickUrl={mapClickUrl} />
          case "productLinkButton":
            const {
              text,
              additionalText,
              icon,
              bgColour,
              bgHoverColour,
              fontColour,
              fontHoverColour,
              borderColour,
              borderHoverColour,
            } = node.data.target.fields
            let cta,
              graphic = null
            if (text) {
              cta = getLocaleValueOrDefault(text)
            }

            let cta2 = null
            if (additionalText) {
              cta2 = getLocaleValueOrDefault(additionalText)
            }

            if (icon) {
              const { fields } = getLocaleValueOrDefault(icon)
              if (fields) {
                const { file } = fields
                const { url } = getFirstValue(file)
                graphic = { src: url }
              } else {
                // console.log("node has no icon", node)
              }
            }

            let buttonBgColour
            if (bgColour) {
              buttonBgColour = `${getLocaleValueOrDefault(
                bgColour
              )} !important;`
            }

            let buttonBgHoverColour
            if (bgHoverColour) {
              buttonBgHoverColour = `${getLocaleValueOrDefault(
                bgHoverColour
              )} !important;`
            }

            let buttonFontColour
            if (fontColour) {
              buttonFontColour = `${getLocaleValueOrDefault(
                fontColour
              )} !important;`
            }

            let buttonFontHoverColour
            if (fontHoverColour) {
              buttonFontHoverColour = `${getLocaleValueOrDefault(
                fontHoverColour
              )} !important;`
            }

            let buttonBorderColour
            if (borderColour) {
              buttonBorderColour = `${getLocaleValueOrDefault(
                borderColour
              )} !important;`
            } else {
              buttonBorderColour = "none"
            }

            let buttonBorderHoverColour
            if (borderHoverColour) {
              buttonBorderHoverColour = `${getLocaleValueOrDefault(
                borderHoverColour
              )} !important;`
            } else {
              buttonBorderHoverColour = "none"
            }

            return (
              <ProductLinkButton
                cta={cta}
                cta2={cta2}
                icon={graphic}
                bgColour={buttonBgColour}
                bgHoverColour={buttonBgHoverColour}
                fontColour={buttonFontColour}
                fontHoverColour={buttonFontHoverColour}
                borderColour={buttonBorderColour}
                borderHoverColour={buttonBorderHoverColour}
              />
            )

          case "styledText":
            return (
              <StyledText fields={node.data.target.fields}>
                {documentToReactComponents(
                  getLocaleValueOrDefault(node.data.target.fields.text),
                  renderOptions
                )}
              </StyledText>
            )
          case "trustpilotWidget":
            // const fields = node.data.target.fields
            // return (
            //   <List
            //     culture={getFirstValue(fields.culture)}
            //     height={`${getFirstValue(fields.height)}px`}
            //     language={getFirstValue(fields.language)}
            //     theme={getFirstValue(fields.theme)}
            //     width={`${getFirstValue(fields.width) * 100}%`}
            //   />
            // )
            console.log("not implemented yet")
            break
          case "specialReaderOffer":
            return (
              <div
                style={{
                  border: "4px dashed black",
                  padding: "5px",
                  backgroundColor: "#ffffe0",
                }}
                className="special-offer"
              >
                {documentToReactComponents(
                  getLocaleValueOrDefault(node.data.target.fields.body),
                  renderOptions
                )}
              </div>
            )
          case "section":
            return (
              <div className="section">
                {documentToReactComponents(
                  getLocaleValueOrDefault(node.data.target.fields.content),
                  renderOptions
                )}
              </div>
            )
          default:
            console.log(
              "unknown embedded block entry type. Will not render " +
                node.data.target.sys.contentType.sys.id
            )
        }
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.log("Error rendering node", node)
        }
      }
    },
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      switch (node.data.target.sys.contentType.sys.id) {
        case "styledText":
          return (
            <StyledText inline={true} fields={node.data.target.fields}>
              {documentToReactComponents(
                getLocaleValueOrDefault(node.data.target.fields.text),
                renderOptions
              )}
            </StyledText>
          )
        default:
          console.log(
            "unknown embedded inline entry type. Will not render " +
              node.data.target.sys.contentType.sys.id
          )
      }
    },
  },
  renderMark: {
    [MARKS.CODE]: (node, children) => {
      return <sup>{node}</sup>
    },
  },
}

export default renderOptions
