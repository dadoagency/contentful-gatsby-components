import React from "react"
import PropTypes from "prop-types"
import Pixel from "./Pixel"

const Tracking = ({ pixelId }) => {
  return <div>{pixelId ? <Pixel pixelId={pixelId} /> : null}</div>
}

Tracking.propTypes = {
  pixelId: PropTypes.string,
}

export default Tracking
