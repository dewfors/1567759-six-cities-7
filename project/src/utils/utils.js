import {MAX_PERSENT, MAX_STARS} from './const';
import {offersJSON} from '../mocks/offers';
import {commentsJSON} from '../mocks/comments';

export const getStarsWidth = (rating) => rating * MAX_PERSENT / MAX_STARS;

export const getStarsList = () => new Array(MAX_STARS).fill('').map((item, i) => ({id: i + 1})).reverse();

const getAdaptedToClientObject = (offer) => Object
  .entries(offer)
  .reduce((acc, [key, val]) => {
    const modifiedKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    return ({
      ...acc,
      ...{[modifiedKey]: (typeof val === 'object' && !Array.isArray(val) && val !== null) ? getAdaptedToClientObject(val) : val},
    });
  }, {});

export const getAdaptedToClientOffers = () => {
  const offers = JSON.parse(offersJSON);
  return offers.map((offer) => getAdaptedToClientObject(offer));
};

export const getAdaptedToClientComments = () => {
  const comments = JSON.parse(commentsJSON);
  return comments.map((comment) => getAdaptedToClientObject(comment));
};
