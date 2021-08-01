import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from './useMap';
import placeCardProp from '../place-card/place-card.prop';
import {Settings} from '../../utils/const';
import {useSelector} from 'react-redux';
import {getOfferDetails} from '../../store/reducers/reducer-offers/selectors-offers';

function MapOffer(props) {
  const offerCurrent = useSelector(getOfferDetails);

  const offerCurrentLatitude = offerCurrent ? offerCurrent.location.latitude : 1;
  const offerCurrentLongitude = offerCurrent ? offerCurrent.location.longitude : 1;

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
      leaflet
        .marker({
          lat: offerCurrentLatitude,
          lng: offerCurrentLongitude,
        }, {
          icon: iconCurrent,
        })
        .addTo(map);

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
  }, [map, offers, icon, iconCurrent, activeOfferCardId, offerCurrentLatitude, offerCurrentLongitude]);

  return (
    <div
      id="map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

MapOffer.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  city: PropTypes.string.isRequired,
  activeOfferCardId: PropTypes.number,
};

export default MapOffer;
