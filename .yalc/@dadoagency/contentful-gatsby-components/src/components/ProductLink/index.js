import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

ProductLink.propTypes = {
  redirectDestination: PropTypes.string.isRequired,
}

export default function ProductLink({
  className,
  redirectDestination,
  children,
  ...otherProps
}) {
  return (
    <a
      className={`productLink ${className ? className : ""}`}
      href={redirectDestination}
      {...otherProps}
    >
      {children}
    </a>
  )
}
