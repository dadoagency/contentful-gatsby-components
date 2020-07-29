import { cloneElement } from "react"

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
        children: Element.props.children.map(child => {
          if (child.$$typeof) {
            return styleLeafNodes(child, style)
          }
          return null
        }),
      })
    } else {
      return Element
    }
  } else {
    return cloneElement(Element, { style })
  }
}
