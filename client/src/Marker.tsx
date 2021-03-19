// @ts-nocheck
import React from 'react'
import { Marker as ReactMarker } from 'react-map-gl'

const Marker = (props) => {
  const { place, onClick } = props
  return (
    <ReactMarker
      key={place.id}
      latitude={place.lat}
      longitude={place.long}
      onClick={() => onClick(place)}
    >
      {place.type === 'BUSINESS' ? (
        <button
          className="circular ui icon button blue"
          onClick={place.setMarker}
        >
          <i class="coffee icon"></i>

        </button>
      ) : (
        <button
          className="circular ui icon button blue"
          onClick={place.setMarker}
        ><i class="building icon"></i>
        </button>
      )}
    </ReactMarker>
  )
}

export default Marker
