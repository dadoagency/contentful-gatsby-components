import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import ProductLink from "../ProductLink/"
import "./style.scss"
import PageContext from "../../context/PageContext"
import Image from "../Image"

ProductLinkButton.propTypes = {
  cta: PropTypes.string.isRequired,
  icon: PropTypes.object,
}

export default function ProductLinkButton({ cta, icon, children, ...props }) {
  // const { redirectDestination } = useContext(PageContext)
  const redirectDestination = "/"
  // let x = useState()
  console.log(icon)
  return (
    <ProductLink redirectDestination={redirectDestination} {...props}>
      <div className="page-btn">
        <div className="arrow-wrapper">
          <span>{cta}</span>
          {icon && (
            <div className="arrow-img">
              {/* <img src={icon} alt="icon" /> */}
              <Image {...icon} />
            </div>
          )}
        </div>
      </div>
    </ProductLink>
  )
}
