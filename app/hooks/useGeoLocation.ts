import { useState, useEffect } from 'react';

export interface ILocation {
  latitude?: number;
  longitude?: number;
}

export const useGeoLocation = (options = {}) => {
  const [location, setLocation] = useState<ILocation>({
    longitude: 0,
    latitude: 0,
  });
  const [error, setError] = useState('');

  // eslint-disable-next-line no-undef
  const handleSuccess = (pos: GeolocationPosition) => {
    const { longitude, latitude } = pos.coords;

    setLocation({
      longitude,
      latitude,
    });
  };

  // eslint-disable-next-line no-undef
  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.watchPosition(handleSuccess, handleError, options);
  }, [options]);

  const getLocation = () => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.watchPosition(handleSuccess, handleError, options);
  };

  return { location, getLocation, error };
};
