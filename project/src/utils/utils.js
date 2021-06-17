import {MAX_PERSENT, MAX_STARS} from './const';
import {offersJSON} from '../mocks/offers';

export const getStarsWidth = (rating) => rating * MAX_PERSENT / MAX_STARS;

export const getStarsList = () => new Array(MAX_STARS).fill('').map((item, i) => ({id: i + 1})).reverse();

const getAdaptedToClientOffer = (offer) => Object
  .entries(offer)
  .reduce((acc, [key, val]) => {
    const modifiedKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    return ({
      ...acc,
      ...{[modifiedKey]: (typeof val === 'object' && !Array.isArray(val) && val !== null) ? getAdaptedToClientOffer(val) : val},
    });
  }, {});

export const getAdaptedToClientOffers = () => {
  const offers = JSON.parse(offersJSON);
  return offers.map((offer) => getAdaptedToClientOffer(offer));
};
