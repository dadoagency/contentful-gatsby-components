import React, { Children } from "react"
import "./styledText .scss"
import styleLeafNodes from "../../utils/styleLeafNodes"
import { getFirstValue } from "../../utils/locale"

const StyledText = ({ children, fields, inline }) => {
  let color = null
  if (fields.colour) {
    color = getFirstValue(fields.colour)
  }
  let backgroundColor = null
  if (fields.backgroundColour) {
    backgroundColor = getFirstValue(fields.backgroundColour)
  }
  const style = {
    color,
  }
  const Wrapper = ({ children, ...props }) => {
    if (inline) {
      return <span {...props}>{children}</span>
    } else {
      return <div {...props}>{children}</div>
    }
  }

  return (
    <Wrapper className="styledText" style={style}>
      {Children.map(children, child => {
        return styleLeafNodes(child, { backgroundColor })
      })}
    </Wrapper>
  )
}

export default StyledText
