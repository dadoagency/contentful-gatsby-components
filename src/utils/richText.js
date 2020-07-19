import React from "react"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
// import { List } from "@dadoagency/gatsby-plugin-trustpilot-widget"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { getFirstValue, getLocaleValueOrDefault } from "./locale"
import AdvertorialVideo from "../components/Video"
import ArticleImage from "../components/Image"
import ProductLinkButton from "../components/ProductLinkButton"
import StyledText from "../components/StyledText"

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
            if (node.data.target.fields.hasOwnProperty("width")) {
              width = getFirstValue(node.data.target.fields.width) + "px"
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
            //TODO: use child image sharp
            return (
              <center>
                <ArticleImage
                  src={url}
                  style={{ width: width, borderRadius }}
                  caption={caption}
                />
              </center>
            )
          case "productLinkButton":
            const { text, icon } = node.data.target.fields
            let cta,
              graphic = null
            if (text) {
              cta = getLocaleValueOrDefault(text)
            }

            const { fields } = getLocaleValueOrDefault(icon)

            if (fields) {
              const { file } = fields
              const { url } = getFirstValue(file)
              graphic = { src: url }
            } else {
              // console.log("node has no icon", node)
            }

            return <ProductLinkButton cta={cta} icon={graphic} />
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
        console.log("Error rendering node", node)
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
  renderMark: {},
}

export default renderOptions
