import React from "react"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import propTypes from "prop-types"

/* The header can be refactored to use classes instead of styled-components
        where it will get justify-content 'flex-start', 'center' and 'flex-end'
        classes that only consist of these values.
    e.g. 'jc-start' will have justify-content 'flex-start'

*/

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 16px;
  justify-content: ${props => {
    if (props.logoPosition === "left") {
      return "flex-start"
    } else if (props.logoPosition === "center") {
      return "center"
    } else if (props.logoPosition === "right") {
      return "flex-end"
    } else {
      return "center"
    }
  }};
  align-items: center;
`

const Overlay = styled.div`
  display: flex;
  justify-content: ${props => {
    if (props.textPosition === "left") {
      return "flex-start"
    } else if (props.textPosition === "center") {
      return "center"
    } else if (props.textPosition === "right") {
      return "flex-end"
    } else {
      return "left"
    }
  }};
  align-items: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

function Header({ logoPosition, headerText, logo, extra }) {
  let logoPos = "left"
  // Need to check that it exists before running toLowerCase() method
  if (logoPosition) {
    logoPos = logoPosition.toLowerCase()
  }
  let textPosition = ""
  if (logoPos === "left" || logoPos === "right") {
    textPosition = "center"
  } else if (logoPos === "center") {
    textPosition = "left"
  }
  return (
    <section className="site-logo-container header">
      <Wrapper logoPosition={logoPos} className="section site-logo-wrapper">
        <div className="site-logo">
          {logo && <GatsbyImage fixed={logo} alt="Logo" />}
        </div>
        {headerText && (
          <Overlay textPosition={textPosition.toLowerCase()}>
            {headerText && <div>{headerText}</div>}
          </Overlay>
        )}
        {extra && <div className="extra">{extra}</div>}
      </Wrapper>
    </section>
  )
}

Header.propTypes = {
  logoPosition: propTypes.string,
  headerText: propTypes.string,
  logo: propTypes.object,
}

Header.defaultProps = {
  logoPosition: "center",
  headerText: "",
}

export default Header
