import React, { Children } from "react"
import "./styledText .scss"
import styleLeafNodes from "../../utils/styleLeafNodes"
import { getFirstValue } from "../../utils/locale"

const StyledText = ({ children, fields, inline }) => {
  console.log(fields)
  let colour = getFirstValue(fields?.colour)
  let backgroundColor = getFirstValue(fields?.backgroundColor)

  return (
    <StyledTextPure
      color={colour}
      backgroundColor={backgroundColor}
      inline={inline}
    />
  )
}

export function StyledTextPure({ children, color, backgroundColor, inline }) {
  const Wrapper = ({ children, ...props }) => {
    if (inline) {
      return <span {...props}>{children}</span>
    } else {
      return <div {...props}>{children}</div>
    }
  }

  return (
    <Wrapper className="styledText" style={{ color: color }}>
      {Children.map(children, child => {
        return styleLeafNodes(child, { backgroundColor })
      })}
    </Wrapper>
  )
}

export default StyledText
