import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { visible } from 'jest-matcher-utils/node_modules/chalk';

// Instruction
// 	: https://react-google-maps-api-docs.netlify.app/#usejsapiloader



const containerStyle = {
  width: '100%',
  height: '100%',
  overflow: 'visible'
};

const center = {
  lat: 38.636752,
  lng: 139.602052
};

const onLoad = (streetViewService) => {
  streetViewService.getPanorama({
    location: center, 
    radius: 50
  }, (data, status) => console.log(
    "StreetViewService results",
    { data, status }
  ))
};

export default class HomeAccessGoogleMap extends Component {
  render() {
    
    
    return (
      //  <div className="home-access__google-map">
      //   <a href="https://www.google.com/maps/dir/?api=1&destination=38.727197,139.826742">詳細</a>

        <LoadScript
          googleMapsApiKey={`${process.env.REACT_APP_MAP_JAVASCRIPT_API_KEY}`}
          loadingElement="マップを読み込み中です..."
        >
          <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          >
          { /* Child components, such as markers, info windows, etc. */ }          
            <div className="info-window">            
              <div className="info-window__description">
                <div className="info-window__title_main">温海</div>
                <div className="info-window__title_sub">山形県鶴岡市</div>
              </div>            
                <a className="info-window__route" href="https://www.google.com/maps/dir/?api=1&destination=38.636752,139.602052" target="_blank">
                  <div className="info-window__route-icon"></div>
                  <div className="info-window__route-text">ルート</div>
                  <div className="info-window__route-annotation">(Google Map公式サイトへ)</div>
                </a>
            </div>                                  
            <Marker          
            position={center}
            />            
             
          </GoogleMap>
        </LoadScript>
      //  </div> 
    )
  }
}

