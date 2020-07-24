import React from "react"
import { geoCentroid } from "d3-geo"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps"

import "./map.scss"

import allStates from "./allstates.json"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

const buttonHeight = 20

const offsets = {
  VT: [728, 245 + buttonHeight * 1],
  NH: [728, 245 + buttonHeight * 2],
  MA: [728, 245 + buttonHeight * 3],
  RI: [728, 245 + buttonHeight * 4],
  CT: [760, 235 + buttonHeight * 1],
  NJ: [760, 235 + buttonHeight * 2],
  DE: [760, 235 + buttonHeight * 3],
  MD: [760, 235 + buttonHeight * 4],
  DC: [760, 235 + buttonHeight * 5],
}

const Map = () => {
  return (
    <div className="map-main-container">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
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
                  style={{
                    default: {
                      fill: "#db9e1d",
                      outline: "none",
                    },
                    hover: {
                      fill: "#333333",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))}
              {geographies.map((geo, index) => {
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
                          <g onClick={() => alert("CLICK")}>
                            <rect
                              width="18"
                              height="14"
                              x={offsets[cur.id][0]}
                              y={offsets[cur.id][1]}
                              rx="3"
                              ry="3"
                              fill="darkgray"
                            >
                              adasd
                            </rect>
                            <text
                              x={offsets[cur.id][0] + 3}
                              y={offsets[cur.id][1] + 10}
                              alignmentBaseline="middle"
                              className="map-state-button-text"

                              // height="100%"
                              // width="100%"
                            >
                              {cur.id}
                              {console.log(index)}
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
      {/* <div className="map-button-container">
        {offscreenStates.map(state => (
          <button key={`offscreen-state-${state}`} className="map-state-button">
            {state}
          </button>
        ))}
      </div> */}
    </div>
  )
}

export default Map
