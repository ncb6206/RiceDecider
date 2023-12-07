import { getDistance } from 'geolib';
import { ILocation } from '@/app/hooks/useGeoLocation';

function formatNumber(num: number) {
  const str = num.toString();
  return parseFloat(str.slice(0, -7) + '.' + str.slice(-7));
}

const getDis = (firstPlace: ILocation, secondPlace: ILocation) => {
  return (
    getDistance(
      {
        latitude: Number(firstPlace.latitude),
        longitude: Number(firstPlace.longitude),
      },
      {
        latitude: formatNumber(Number(secondPlace.latitude)),
        longitude: formatNumber(Number(secondPlace.longitude)),
      },
    ) / 1000
  );
};

export default getDis;
