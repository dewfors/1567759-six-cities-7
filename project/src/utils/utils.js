import {MAX_PERSENT, MAX_STARS} from './const';

export const getStarsWidth = (rating) => rating*MAX_PERSENT/MAX_STARS;
