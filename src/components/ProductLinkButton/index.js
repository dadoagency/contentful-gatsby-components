import React, { useContext } from "react"
import PropTypes from "prop-types"
import ProductLink from "../ProductLink/"
import "./style.scss"
import PageContext from "../../context/PageContext"
import Image from "../Image"
import { graphql } from "gatsby"

ProductLinkButton.propTypes = {
  cta: PropTypes.string.isRequired,
  // icon: PropTypes.object,
}

export default function ProductLinkButton({ cta, icon, children, ...props }) {
  const { redirectDestination } = useContext(PageContext)
  return (
    <ProductLink redirectDestination={redirectDestination} {...props}>
      <div className="page-btn">
        <div className="arrow-wrapper">
          <span>{cta}</span>
          {icon && (
            <div className="arrow-img">
              <Image {...icon} />
            </div>
          )}
        </div>
      </div>
    </ProductLink>
  )
}

export const ProductLinkButtonFields = graphql`
  fragment ProductLinkButtonFields on ContentfulProductLinkButton {
    text
    icon {
      fixed(width: 12) {
        base64
        tracedSVG
        aspectRatio
        srcWebp
        srcSetWebp
        height
        src
        srcSet
        width
      }
    }
  }
`
