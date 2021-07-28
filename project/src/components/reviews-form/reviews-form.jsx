import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getStarsList} from '../../utils/utils';
import {AuthorizationStatus, formReviewKeyType} from '../../utils/const';
import {sendNewReview} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/redusers/reduser-user/selectors-user';


const MIN_LENGTH_COMMENT = 50;

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
  const {id} = props;
  const starsList = getStarsList();
  const [userData, setUserData] = useState({ comment: '', rating: 0 });
  const isValid = userData.rating && userData.comment.length > MIN_LENGTH_COMMENT;


  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const sendReview = (idOffer, review) => {
    dispatch(sendNewReview(idOffer, review));
  };

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return null;
  }

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    sendReview(id, userData);
    setUserData({ comment: '', rating: 0 });
  };

  const onChangeData = (key, value) => {
    switch (key) {
      case formReviewKeyType.REVIEW:
        setUserData({...userData, comment: value});
        break;
      case formReviewKeyType.STARS:
        setUserData({...userData, rating: value});
        break;
      default:
        return null;
    }
  };

  return (
    <form
      className="reviews__form form"
      action="/#"
      method="post"
      onSubmit={(evt) => onFormSubmit(evt)}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <Stars starsList={starsList} onChangeData={onChangeData} currentValue={userData.rating} />
      </div>
      <textarea
        onChange={({target}) => onChangeData(formReviewKeyType.REVIEW, target.value)}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  // sendReview: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  // authorizationStatus: PropTypes.string.isRequired,
};

export default ReviewsForm;
