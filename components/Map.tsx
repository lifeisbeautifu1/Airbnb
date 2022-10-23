import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

import { ISearchData } from '../types';

export interface MapProps {
  searchResults: ISearchData[];
}

const Map: React.FC<MapProps> = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState<
    | {
        long: string;
        lat: string;
      }
    | {}
  >({});
  const coordinates = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const center: any = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.lontitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
      mapStyle='mapbox://styles/lifeisbeautifu1/cl9kxn6vw000114rsapkkg81e'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long == result.long && (
            <Popup
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              onClose={() => setSelectedLocation({})}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
