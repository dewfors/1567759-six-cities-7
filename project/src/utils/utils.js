import {MAX_PERSENT, MAX_STARS} from './const';

export const getStarsWidth = (rating) => rating*MAX_PERSENT/MAX_STARS;

export const getStarsList = () => {
  const starsList = [];
  for (let i = MAX_STARS; i > 0; i--) {
    starsList.push({id: i});
  }
  return starsList;
};
