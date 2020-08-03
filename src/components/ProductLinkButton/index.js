import React, { useContext } from "react"
import PropTypes from "prop-types"
import ProductLink from "../ProductLink/"
import "./style.scss"
import PageContext from "../../context/PageContext"
import Image from "../Image"
import { graphql } from "gatsby"

ProductLinkButton.propTypes = {
  cta: PropTypes.string.isRequired,
  cta2: PropTypes.string,
  // icon: PropTypes.object,
}

ProductLinkButton.defaultProps = {
  cta2: null,
}

export default function ProductLinkButton({
  cta,
  cta2,
  icon,
  children,
  ...props
}) {
  const { redirectDestination } = useContext(PageContext)
  return (
    <ProductLink redirectDestination={redirectDestination} {...props}>
      <div className="page-btn">
        <div className="arrow-wrapper">
          {cta2 ? (
            <>
              <p>{cta}</p>
              <span>{cta2}</span>
              {icon && (
                <div className="arrow-img">
                  <Image {...icon} />
                </div>
              )}
            </>
          ) : (
            <>
              <span>{cta}</span>
              {icon && (
                <div className="arrow-img">
                  <Image {...icon} />
                </div>
              )}
            </>
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
        aspectRatio
        srcWebp
        srcSetWebp
        height
        src
        srcSet
        width
      }
    }
    additionalText
  }
`
