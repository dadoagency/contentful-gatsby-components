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

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
}

const offscreenStates = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"]

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
                          <Annotation
                            subject={centroid}
                            dx={offsets[cur.id][0]}
                            dy={offsets[cur.id][1]}
                          >
                            <text
                              x={4}
                              fontSize={14}
                              alignmentBaseline="middle"
                            >
                              {cur.id}
                            </text>
                          </Annotation>
                          <rect width="40" height="20" x="100%" y="50%" />
                          <button className="map-state-button">BUTTON</button>
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
