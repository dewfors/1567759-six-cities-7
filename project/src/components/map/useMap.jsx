import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, cityInfo) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: cityInfo.coords,
        zoom: cityInfo.zoom,
      });
      instance.setView(cityInfo.coords, cityInfo.zoom);
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    } else {
      map.flyTo(cityInfo.coords);
    }
  }, [mapRef, map, cityInfo]);

  return map;
}

export default useMap;
