import React, { cloneElement } from "react"

export default function styleLeafNodes(Element, style) {
  if (
    Element.$$typeof &&
    Array.isArray(Element.props.children) &&
    Element.props.children.length >= 1
  ) {
    const hasReactChildren = Element.props.children.some(
      child => child && child.$$typeof
    )

    if (hasReactChildren) {
      return cloneElement(Element, {
        children: Element.props.children.map((child, index) => {
          if (child.$$typeof) {
            return (
              <React.Fragment key={index}>
                {styleLeafNodes(child, style)}
              </React.Fragment>
            )
          }
          return child
        }),
      })
    } else {
      return Element
    }
  } else {
    return cloneElement(Element, { style })
  }
}
