import React, { useContext } from "react"
import PropTypes from "prop-types"
import ProductLink from "../ProductLink/"
import "./style.scss"
import PageContext from "../../context/PageContext"
import Image from "../Image"
import { graphql } from "gatsby"
import styled from "styled-components"
import ClientOnly from "../ClientOnly"

ProductLinkButtonPure.propTypes = {
  cta: PropTypes.string.isRequired,
  cta2: PropTypes.string,
  bgColour: PropTypes.string,
  bgHoverColour: PropTypes.string,
  fontColour: PropTypes.string,
  fontHoverColour: PropTypes.string,
  borderColour: PropTypes.string,
  borderHoverColour: PropTypes.string,
  // icon: PropTypes.object,
}

ProductLinkButton.propTypes = {
  cta: PropTypes.string.isRequired,
  cta2: PropTypes.string,
  bgColour: PropTypes.string,
  bgHoverColour: PropTypes.string,
  fontColour: PropTypes.string,
  fontHoverColour: PropTypes.string,
  borderColour: PropTypes.string,
  borderHoverColour: PropTypes.string,
  // icon: PropTypes.object,
}

ProductLinkButtonPure.defaultProps = {
  cta2: null,
  bgColour: "#e70b2f",
  bgHoverColour: "#e37100",
  fontColour: "#000",
  fontHoverColour: "#fff",
  borderColour: "#e70b2fd1",
  borderHoverColour: "#e37100",
}

const Button = styled.div`
  background-color: ${props => props.bgColour};
  color: ${props => props.fontColour};
  border: 1px solid ${props => props.borderColour};
  p,
  span {
    color: ${props => props.fontColour};
  }
  &:hover {
    background-color: ${props => props.bgHoverColour};
    color: ${props => props.fontHoverColour};
    border: 1px solid ${props => props.borderHoverColour};
    p,
    span {
      color: ${props => props.fontHoverColour};
    }
  }
`

export default function ProductLinkButton({ cta, ...props }) {
  const { redirectDestination } = useContext(PageContext)

  return (
    <ClientOnly>
      <ProductLinkButtonPure
        cta={cta}
        {...props}
        redirectDestination={redirectDestination}
      />
    </ClientOnly>
  )
}

export function ProductLinkButtonPure({
  cta,
  cta2,
  icon,
  bgColour,
  bgHoverColour,
  fontColour,
  fontHoverColour,
  borderColour,
  borderHoverColour,
  children,
  redirectDestination,
  ...props
}) {
  return (
    <ProductLink redirectDestination={redirectDestination} {...props}>
      <Button
        className="page-btn"
        bgColour={bgColour}
        bgHoverColour={bgHoverColour}
        fontColour={fontColour}
        fontHoverColour={fontHoverColour}
        borderColour={borderColour}
        borderHoverColour={borderHoverColour}
      >
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
      </Button>
    </ProductLink>
  )
}

export const ProductLinkButtonFields = graphql`
  fragment ProductLinkButtonFields on ContentfulProductLinkButton {
    text
    additionalText
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
    bgColour
    bgHoverColour
    fontColour
    fontHoverColour
    borderColour
    borderHoverColour
  }
`
