// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react'

const contentBlock = {
  maxWidth: 400
}

const imgStyle = {
  maxWidth: 200,
}

const PlaceDetail = (props) => {
  {
    return (
      <div>
        <div className="ui-cards" style={contentBlock}>
         
          <div className="content">
            <div className="meta">
              <span className="date">
                {props.selectedPlace.requested_datetime}
              </span>
            </div>
            <div className="description">{props.selectedPlace.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaceDetail
