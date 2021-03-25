// @ts-nocheck
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import ReactMapGL, { Layer, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'
import Marker from './Marker'
import PlaceDetail from './PlaceDetail'
import LayerButton from './components/LayerButton'
import layerService from './services/layers'

const layer1 = require('./data/layer1.json')

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

  const [selectedPlace, setSelectedPlace] = useState(null)
  const [selectedLayer, setSelectedLayer] = useState(layer1)
  const [layerData, setLayerData] = useState(null)

  useEffect(() => {
    layerService.getAll().then((response) => {
      setLayerData(response.data)
    })
  }, [])

  return (
    <div className="ui grid">
      <div className="sixteen wide column" style={{ padding: '0px' }}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => {
            setViewPort(viewport)
          }}
        >
          {selectedLayer.map((place) => (
            <Marker key={place.id} place={place} onClick={setSelectedPlace} />
          ))}
          <div>
            <i className="bars icon"></i>
          </div>
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
        <LayerButton />
      </div>
    </div>
  )
}

export default ReactMap
