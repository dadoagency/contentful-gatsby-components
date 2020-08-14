import React, { useState } from "react"
import PropTypes from "prop-types"
import { geoCentroid } from "d3-geo"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import "./map.scss"
import allStates from "./allstates.json"
import { navigate } from "gatsby"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

const Map = ({ clickUrl }) => {
  const [currentState, setCurrentState] = useState({ id: "ZZ", val: "-1" })

  // Magic numbers are the IDs for each state
  const offsets = {
    VT: "50", // 50
    MA: "25", // 25
    CT: "09", // 09
    DE: "10", // 10
    DC: "11", // 11
    NH: "33", // 33
    RI: "44", // 44
    NJ: "34", // 34
    MD: "24", // 24
  }

  // This is a manual hover toggle, which is used for the off-map buttons
  //    to toggle the states they are related to.
  function handleHover(id) {
    if (id === "reset") {
      setCurrentState({ id: "ZZ", val: "-1" })
    } else {
      setCurrentState(id)
    }
  }

  return (
    <div className="map-main-container">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  className="svg-state"
                  stroke="#FFF"
                  geography={geo}
                  onMouseEnter={() => {
                    // onMouseEnter
                  }}
                  onMouseLeave={() => {
                    // onMouseLeave
                  }}
                  onClick={() => {
                    if (clickUrl) {
                      navigate(clickUrl)
                    }
                  }}
                  style={
                    currentState === geo.id
                      ? {
                          default: {
                            fill: "#333333",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none",
                          },
                        }
                      : {
                          default: {
                            fill: "#db9e1d",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none",
                          },
                        }
                  }
                />
              ))}
              {geographies.map(geo => {
                const centroid = geoCentroid(geo)
                const cur = allStates.find(s => s.val === geo.id)
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur &&
                      centroid[0] > -160 &&
                      centroid[0] < -67 &&
                      (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text
                            y="2"
                            fontSize={14}
                            textAnchor="middle"
                            fill="#fff"
                            pointerEvents="none"
                          >
                            {cur.id}
                          </text>
                        </Marker>
                      ) : null)}
                  </g>
                )
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
      <div className="map-button-container">
        {Object.keys(offsets).map(key => (
          // eslint-disable-next-line
          <a
            key={`off-map-button-${key}`}
            onClick={() => {
              if (clickUrl) {
                navigate(clickUrl)
              }
            }}
            onMouseEnter={() => handleHover(offsets[key])}
            onMouseLeave={() => handleHover("reset")}
            className="map-button"
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  )
}

Map.propTypes = {
  clickUrl: PropTypes.string,
}

Map.defaultProps = {
  clickUrl: null,
}

export default Map
