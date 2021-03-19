// @ts-nocheck
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import ReactMapGL, { Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'
import Marker from './Marker'
import PlaceDetail from './PlaceDetail'

let layer1 = require('./data/layer1.json')

const TOKEN =
  'pk.eyJ1IjoibWpoYXJha2thIiwiYSI6ImNqbjBkdDc2NTFrMDQzdnFsbG1weHU0NzMifQ.DA8foxpDUJyS9mAZ8mWXew'

const ReactMap = () => {
  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 1100,
    latitude: 60.192059,
    longitude: 24.945831,
    zoom: 12,
  })

  const [places, setPlaces] = useState([])
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [selectedLayer, setSelectedLayer] = useState(layer1)

  console.log(setSelectedLayer)
  console.log(selectedLayer)
  /*
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPlace(null)
      }
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  useEffect(() => {
    axios.get('foo').then((res) => {
        const data = res.data.filter(
          (place) =>
            (place.lat !== null || place.long !== null) &&
            place.status === 'open'
        )
      setPlaces(res.data.data)
    })
  })

  */
  return (
    <div className="ui grid">
      <div className="sixteen wide column" style={{ padding: '0px' }}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          // mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(viewport) => {
            setViewPort(viewport)
          }}
        >
          {selectedLayer.map((place) => (
            <Marker key={place.id} place={place} onClick={setSelectedPlace} />
          ))}
          {selectedPlace && (
            <Popup
              latitude={selectedPlace.lat}
              longitude={selectedPlace.long}
              onClose={() => {
                setSelectedPlace(null)
              }}
            >
              <PlaceDetail selectedPlace={selectedPlace} />
            </Popup>
          )}
        </ReactMapGL>
      </div>
    </div>
  )
}

export default ReactMap
