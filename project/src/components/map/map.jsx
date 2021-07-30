import React, {useEffect, useRef} from 'react';
import {useRouteMatch} from 'react-router';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from './useMap';
import placeCardProp from '../place-card/place-card.prop';
import {AppRoute, Settings} from '../../utils/const';
import {useSelector} from 'react-redux';
import {getOfferDetails} from '../../store/reducers/reducer-offers/selectors-offers';

function Map(props) {
  const {path} = useRouteMatch();
  const offerCurrent = useSelector(getOfferDetails);
  const offerCurrentLatitude = 1 || offerCurrent.location.latitude;
  const offerCurrentLongitude = 1 || offerCurrent.location.longitude;

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
      if (path === AppRoute.OFFER) {
        leaflet
          .marker({
            lat: offerCurrentLatitude,
            lng: offerCurrentLongitude,
          }, {
            icon: iconCurrent,
          })
          .addTo(map);
      }

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
  }, [map, offers, icon, iconCurrent, activeOfferCardId, path, offerCurrentLatitude, offerCurrentLongitude]);

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
  activeOfferCardId: PropTypes.number,
};

export default Map;
