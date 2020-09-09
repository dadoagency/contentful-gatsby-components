import React, { Children } from "react"
import "./styledText.scss"
import styleLeafNodes from "../../utils/styleLeafNodes"
import { getFirstValue } from "../../utils/locale"

const StyledText = ({ children, fields, inline }) => {
  let colour = getFirstValue(fields?.colour)
  let backgroundColor = getFirstValue(fields?.backgroundColour)
  let isCentered = getFirstValue(fields?.centerText)
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
  return (
    <StyledTextPure
      color={colour}
      backgroundColor={backgroundColor}
      inline={inline}
      isCentered={isCentered}
      children={children}
      fontClass={fontClass}
    />
  )
}

export function StyledTextPure({
  children,
  color,
  backgroundColor,
  inline,
  isCentered,
  fontClass,
}) {
  const style = {
    color,
  }

  if (isCentered) {
    style.textAlign = "center"
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
