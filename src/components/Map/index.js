import React, { useState } from "react"
import { geoCentroid } from "d3-geo"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
// import { useMediaQuery } from "react-responsive"

import "./map.scss"

import allStates from "./allstates.json"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

const Map = () => {
  const [currentState, setCurrentState] = useState({ id: "ZZ", val: "-1" })
  let buttonHeight = 20

  /* const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  if (isTabletOrMobile) {
    buttonHeight = 40
  } else {
    buttonHeight = 20
  } */

  const offsets = {
    NH: [728, 245 + buttonHeight * 1],
    RI: [728, 245 + buttonHeight * 2],
    NJ: [728, 245 + buttonHeight * 3],
    MD: [728, 245 + buttonHeight * 4],
    VT: [760, 235 + buttonHeight * 1],
    MA: [760, 235 + buttonHeight * 2],
    CT: [760, 235 + buttonHeight * 3],
    DE: [760, 235 + buttonHeight * 4],
    DC: [760, 235 + buttonHeight * 5],
  }

  // This is a manual hover toggle, which is used for the off-map buttons
  //    to toggle the states they are related to.
  function handleHover(currentState) {
    if (currentState === "reset") {
      setCurrentState({ id: "ZZ", val: "-1" })
    } else {
      setCurrentState(currentState)
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
                    alert("CLICKED ON" + geo)
                  }}
                  style={
                    currentState.val == geo.id
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
                          >
                            {cur.id}
                          </text>
                        </Marker>
                      ) : (
                        <>
                          <g
                            onClick={() => alert("CLICK")}
                            onMouseEnter={() => handleHover(cur)}
                            onMouseLeave={() => handleHover("reset")}
                            className="map-state-svg-group"
                          >
                            <rect
                              width="18"
                              height="14"
                              x={offsets[cur.id][0]}
                              y={offsets[cur.id][1]}
                              rx="3"
                              ry="3"
                              className="map-state-svg-button"
                              fill="darkgray"
                            ></rect>
                            <text
                              x={offsets[cur.id][0] + 9}
                              y={offsets[cur.id][1] + 8}
                              alignmentBaseline="middle"
                              textAnchor="middle"
                              className="map-state-svg-button-text"
                            >
                              {cur.id}
                            </text>
                          </g>
                        </>
                      ))}
                  </g>
                )
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
      {/* <div>Buttons container</div> */}
    </div>
  )
}

export default Map
