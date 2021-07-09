import {MAX_PERSENT, MAX_STARS} from './const';
import {offersJSON} from '../mocks/offers';
import {commentsJSON} from '../mocks/comments';

export const getStarsWidth = (rating) => rating * MAX_PERSENT / MAX_STARS;

export const getStarsList = () => new Array(MAX_STARS).fill('').map((item, i) => ({id: i + 1})).reverse();

export const getAdaptedToClientObject = (offer) => Object
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

export const getReviewsSorted = (comments) => {
  const reviews = comments.map((item) => ({...item, date: new Date(item.date)}));

  reviews.sort((obj1, obj2) => obj2.date - obj1.date);
  reviews.slice(0,10);

  return reviews;
};

export const getDateFormat = (date) => {

  let dd = date.getDate();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  let mm = date.getMonth()+1;
  if (mm < 10) {
    mm = `0${mm}`;
  }

  const yyyy = date.getFullYear();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return {
    dateTime: `${yyyy}-${mm}-${dd}`,
    dateMonth: `${monthNames[date.getMonth()]} ${yyyy}`,
  };
};

export const sortByKey = (arr, key, direction) => {
  switch (direction) {
    case 'ask':
      return arr.sort((a, b) => a[key] - b[key]);
    case 'desc':
      return arr.sort((a, b) => b[key] - a[key]);
    default:
      return arr;
  }
};
