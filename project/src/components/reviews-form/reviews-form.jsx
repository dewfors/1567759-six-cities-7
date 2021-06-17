import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {getStarsList} from '../../utils/utils';
import {formReviewKeyType} from '../../utils/const';

function Stars(props) {
  const {starsList, onChangeData} = props;

  return (
    starsList.map((item) => (
      <React.Fragment key={item.id}>
        <input  className="form__rating-input visually-hidden" name="rating" value={`${item.id}`} id={`${item.id}-stars`} type="radio"
          onChange={() => onChangeData(formReviewKeyType.STARS, item.id)}
        />
        <label htmlFor={`${item.id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"> </use>
          </svg>
        </label>
      </React.Fragment>
    ))
  );
}

function ReviewsForm(props) {
  const {onReview} = props;
  const starsList = getStarsList();
  const [userData, setUserData] = useState({ review: '', stars: 0 });

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onReview(userData);
  };

  const onChangeData = (key, value) => {
    switch (key) {
      case formReviewKeyType.REVIEW:
        setUserData({...userData, review: value});
        break;
      case formReviewKeyType.STARS:
        setUserData({...userData, stars: value});
        break;
      default:
        return null;
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => onFormSubmit(evt)}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <Stars starsList={starsList} onChangeData={onChangeData} />
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => onChangeData(formReviewKeyType.REVIEW, target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  onReview: PropTypes.func.isRequired,
};

export default ReviewsForm;
