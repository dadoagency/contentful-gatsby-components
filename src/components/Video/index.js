import React from "react"
import PropTypes from "prop-types"

const Video = ({ src }) => {
  return (
    <div
      style={{
        maxWidth: "100%",
      }}
    >
      <video
        style={{ maxWidth: "100%" }}
        src={src}
        autoPlay={true}
        controls={true}
      />
    </div>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Video
