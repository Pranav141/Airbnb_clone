import {React,useState} from 'react'
import getCenter from 'geolib/es/getCenter'
import Map, {Marker} from 'react-map-gl';

function NewMap({searchResults}) {
  const coordinates = searchResults.map(result=>({
    longitude:result.long,
    latitude:result.lat,
  }))
  const center =getCenter(coordinates);
  const [viewport,setViewport]=useState({
    latitude:center.latitude,
    longitude:center.longitude,
    zoom:10  })
  // console.log(center);
  return (
    // <ReactMapGL 
    // mapStyle='mapbox://styles/pranav121/clb0yfdva00jn15p6tmfv2h1x'
    // mapboxAccessToken={process.env.mapbox_key}
    // {...viewport} 
    // width='100%'
    // height='100%'
    // onMove={(event) => setViewport(event.viewState)}   
    // >
    //   {searchResults.map(res=>(
    //     <div key={res.lat}>
    //     <Marker
    //     longitude={res.long}
    //     latitude={res.lat}
    //     offsetLeft={-20}
    //     offsetTop={-10}
    //     >
    //       📍 
    //     </Marker>
    //     </div>
    //   ))}
    // </ReactMapGL>
    <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 8
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/pranav121/clb0yfdva00jn15p6tmfv2h1x"
    mapboxAccessToken={process.env.mapbox_key}
  >
    <Marker longitude={-100} latitude={40} anchor="bottom" >
    📍</Marker>
  </Map>
  )
}

export default NewMap
