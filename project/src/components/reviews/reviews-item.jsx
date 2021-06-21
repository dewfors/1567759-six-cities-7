import React from 'react';
import {getDateFormat, getStarsWidth} from '../../utils/utils';
import PropTypes from 'prop-types';
import reviewProp from './review.prop';

function ReviewsItem(props) {

  const {review} = props;
  const {comment, rating, user, date} = review;
  const {name: username} = user;
  const starsWidth = getStarsWidth(rating);

  const dateFormated = getDateFormat(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{username}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${starsWidth}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={`${dateFormated.dateTime}`}>{dateFormated.dateMonth}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: PropTypes.oneOfType([reviewProp]).isRequired,
};


export default ReviewsItem;
