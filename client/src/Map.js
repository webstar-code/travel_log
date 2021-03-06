import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { listlogEntries, Userinfo } from './API';
import LogEntryform from './LogEntryForm'

import {Mapoverlay, Menu, User, ProfileImg, Username, Entrypopup} from './styles/MapStyles'
import { ReactComponent as List } from './list.svg'
import { ReactComponent as Pimg } from './styles/mountains.jpg'
import mountains from './mountains.jpg'
const Map = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setshowPopup] = useState({});
  const [AddEntries, setAddEntries] = useState(null);
  const [user, setuser] = useState(null);

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 39.828175,
    longitude: -98.5795,
    zoom: 3
  });

  const getEntries = async () => {
    const logEntries = await listlogEntries();
    setLogEntries(logEntries);
  };

  const getUser = async () => {
    const userinfo = await Userinfo();
    setuser(userinfo.user);
  }
  
  useEffect(() => {
    getEntries();
  }, []);


  useEffect(() => {
    getUser();
  }, []);

  const showMapEntry = (event) => {
    // console.log(event.lngLat);
    const [longitude, latitude] = event.lngLat;
    setAddEntries({
      latitude,
      longitude,
    });
  };

  return (
    <>
      <div id="map">
        <ReactMapGL
          {...viewport}
          onDblClick={showMapEntry}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          mapboxApiAccessToken={'pk.eyJ1Ijoid2Vic3RhcjEyIiwiYSI6ImNrN3B5YmE5ODAxMW0zZ215YWJiNXh2Y3IifQ.LCGcucj735cYPZIndU8JWg'}
          onViewportChange={setViewport}
        >

          {
            logEntries.map(entry => (

              <React.Fragment key={entry._id}>
                <Marker
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                // offsetLeft={-20}
                // offsetTop={-10}
                >
                  <div onClick={() => setshowPopup({
                    // ...showPopup,
                    [entry._id]: true,
                  })}>

                    <img src="https://img.icons8.com/doodle/48/000000/marker--v1.png"
                      alt="marker"
                      style={{
                        width: `${12 * viewport.zoom}px`,
                        height: `${12 * viewport.zoom}px,`
                      }}
                      className="marker"
                    />
                  </div>

                </Marker>
                {
                  showPopup[entry._id] ?
                    <Popup
                      latitude={entry.latitude
                      }
                      longitude={entry.longitude}
                      closeButton={true}
                      closeOnClick={false}
                      onClose={() => setshowPopup(false)}
                      anchor="top" >
                      <div>
                        <h3>{entry.title}</h3>
                        <p>{entry.comments}</p>
                        <small>{entry.visitDate.toLocaleString()}</small>

                      </div>
                    </Popup> : null
                }


              </React.Fragment>

            ))}

          {AddEntries ?
            <>
              <Marker
                latitude={AddEntries.latitude}
                longitude={AddEntries.longitude}
              // offsetLeft={-20}
              // offsetTop={-10}
              >
                <div>

                  <img src="https://img.icons8.com/doodle/48/000000/marker--v1.png"
                    alt="marker"
                    style={{
                      width: `${12 * viewport.zoom}px`,
                      height: `${12 * viewport.zoom}px,`
                    }}
                    className="marker"
                  />
                </div>
              </Marker>

              <Popup
                latitude={AddEntries.latitude
                }
                longitude={AddEntries.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setAddEntries(null)}
                anchor="top-left"
              >
                <Entrypopup>
                  <LogEntryform onClose={() => {
                    setAddEntries(null);
                    getEntries();
                  }}
                    location={AddEntries} />
                </Entrypopup>

              </Popup>
            </>
            : null}

        </ReactMapGL >
      </div>
      
      <Mapoverlay>      
      <Menu>
            <List />

      </Menu>
      <User>
        <ProfileImg src={mountains}></ProfileImg>
                <Username>{user ? user.name : '...'}</Username>
      </User>
      </Mapoverlay>


    </>
  )


}

export default Map;