import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from './useMap';
import placeCardProp from '../place-card/place-card.prop';
import {Settings} from '../../utils/const';

function Map(props) {
  const {city, offers, activeOfferCardId} = props;
  const mapRef = useRef(null);
  const cityInfo = Settings.CITIES_INFO.filter((cityItem) => city === cityItem.name)[0] || Settings.CITIES_INFO[0];
  const map = useMap(mapRef, cityInfo);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const iconCurrent = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeOfferCardId)
              ? iconCurrent
              : icon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, icon, iconCurrent, activeOfferCardId]);

  return (
    <div
      id="map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  city: PropTypes.string.isRequired,
  activeOfferCardId: PropTypes.number.isRequired,
};

export default Map;
