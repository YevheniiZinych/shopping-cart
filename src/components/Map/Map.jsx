import { useCallback, useRef, useState, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import axios from 'axios';
import { Marker } from 'components/Marker/Marker';
import { Autocomplete } from 'components/Autocomplete/Autocomplete';
import { CurrentLocationMarker } from 'components/CurrentLocationMarker/CurrentLocationMarker';
import { defaultOptions } from 'settings/mapOptions';
import { Container, MapBtn, MapBtnWrapper } from './Map.styled';

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

export const Map = ({ center, isLoaded, onPlaceSelect, onPlace, setPlace }) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(undefined);

  const mediaSizeMap = () => {
    if (screenSize.width < 769) {
      const containerStyle = {
        width: '330px',
        height: '250px',
      };
      return containerStyle;
    } else {
      const containerStyle = {
        width: '500px',
        height: '255px',
      };
      return containerStyle;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onMarkerAdd = useCallback(
    async coor => {
      const {
        data: { results },
      } = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coor.lat},${coor.lng}&key=AIzaSyCjULUkbtnZbvUl5uRewGZ5HKqq79v2-AU`
      );

      setPlace(results[0]?.formatted_address);

      setMarkers([coor]);
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
    <Container>
      <div
        style={{
          display: 'flex',
          zIndex: 10,
        }}
      >
        <Autocomplete
          isLoaded={isLoaded}
          onPlaceSelect={onPlaceSelect}
          onPlace={onPlace}
        />
        <MapBtnWrapper>
          <MapBtn onClick={toggleMode}>Set marker</MapBtn>
          <MapBtn onClick={removeMarker}>Remove marker</MapBtn>
        </MapBtnWrapper>
      </div>
      {isLoaded && (
        <GoogleMap
          onClick={onChangeLoc}
          mapContainerStyle={mediaSizeMap()}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
        >
          {markers.length > 0 &&
            markers?.map(pos => {
              return <Marker key={pos.lng} position={pos} />;
            })}
          <CurrentLocationMarker position={center} />
        </GoogleMap>
      )}
    </Container>
  );
};
