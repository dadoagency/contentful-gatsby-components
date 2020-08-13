import React, { Children } from "react"
import "./styledText.scss"
import styleLeafNodes from "../../utils/styleLeafNodes"
import { getFirstValue } from "../../utils/locale"

const StyledText = ({ children, fields, inline }) => {
  // Colour:
  let color = null
  if (fields.colour) {
    color = getFirstValue(fields.colour)
  }

  // Background
  let backgroundColor = null
  if (fields.backgroundColour) {
    backgroundColor = getFirstValue(fields.backgroundColour)
  }

  // Centered text
  let isCentered = null
  if (fields.centerText) {
    isCentered = getFirstValue(fields.centerText)
  }

  const style = {
    color,
  }

  if (isCentered) {
    style.textAlign = "center"
  }

  let fontClass = ""
  if (fields.baseFontSize) {
    const baseFontSize = getFirstValue(fields.baseFontSize).toLowerCase()
    switch (baseFontSize) {
      case "small":
        fontClass = "font-size-s"
        break
      case "medium":
        fontClass = "font-size-m"
        break
      case "large":
        fontClass = "font-size-l"
        break
      default:
        fontClass = "font-size-m"
    }
  }

  const Wrapper = ({ children, ...props }) => {
    if (inline) {
      return <span {...props}>{children}</span>
    } else {
      return <div {...props}>{children}</div>
    }
  }

  return (
    <Wrapper className={`styledText ${fontClass}`} style={style}>
      {Children.map(children, child => {
        return styleLeafNodes(child, { backgroundColor })
      })}
    </Wrapper>
  )
}

export default StyledText
