import { useCallback, useRef, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { Marker } from 'components/Marker/Marker';
import { Autocomplete } from 'components/Autocomplete/Autocomplete';
import { CurrentLocationMarker } from 'components/CurrentLocationMarker/CurrentLocationMarker';
import { defaultOptions } from 'settings/mapOptions';

const containerStyle = {
  width: '400px',
  height: '300px',
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export const Map = ({ center, isLoaded, onPlaceSelect, onPlace, setPlace }) => {
  const mapRef = useRef(undefined);
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);

  Geocode.setApiKey(API_KEY);
  Geocode.setLanguage('en');

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onMarkerAdd = useCallback(
    coordinates => {
      Geocode.fromLatLng(`${coordinates.lat}`, `${coordinates.lng}`).then(
        response => {
          const address = response.results[0].formatted_address;
          setPlace(address);
        },
        error => {
          console.error(error);
        }
      );

      setMarkers([coordinates]);
    },
    [setPlace]
  );

  const onChangeLoc = loc => {
    if (mode === MODES.SET_MARKER) {
      const lat = loc.latLng.lat();
      const lng = loc.latLng.lng();
      onMarkerAdd({ lat, lng });
    }
  };

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
  }, [mode]);

  const removeMarker = () => {
    setMarkers([]);
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          zIndex: 10,
        }}
      >
        <Autocomplete
          isLoaded={isLoaded}
          onPlaceSelect={onPlaceSelect}
          onPlace={onPlace}
        />
        <button onClick={toggleMode}>Set marker</button>
        <button onClick={removeMarker}>Remove marker</button>
      </div>
      <GoogleMap
        onClick={onChangeLoc}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {markers?.map(pos => {
          return <Marker key={pos.lng} position={pos} />;
        })}
        <CurrentLocationMarker position={center} />
      </GoogleMap>
    </div>
  );
};
