import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import {getStarsList} from '../../utils/utils';

function ReviewsForm(props) {
  const {onReview} = props;
  // const starsList = getStarsList();

  const [userStars, setUserStars] = useState(0);
  const [userReview, setUserReview] = useState('');

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onReview(userStars, userReview);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {/*{starsList.map((item) =>{*/}
        {/*  const key = `${item.id}-stars`;*/}
        {/*  const keyLabel = `${item.id}-stars-label`;*/}
        {/*  return (*/}
        {/*    <>*/}
        {/*      <input key={key} className="form__rating-input visually-hidden" name="rating" value={`${item.id}`} id={`${item.id}-stars`} type="radio"*/}
        {/*        onChange={() => {*/}
        {/*          setUserStars(item.id);*/}
        {/*        }}*/}
        {/*      />*/}
        {/*      <label key={keyLabel} htmlFor={`${item.id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">*/}
        {/*        <svg className="form__star-image" width="37" height="33">*/}
        {/*          <use xlinkHref="#icon-star"> </use>*/}
        {/*        </svg>*/}
        {/*      </label>*/}
        {/*    </>*/}
        {/*  );*/}
        {/*})}*/}

        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onChange={() => {
            setUserStars(5);
          }}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"> </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={() => {
            setUserStars(4);
          }}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"> </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={() => {
            setUserStars(3);
          }}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"> </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={() => {
            setUserStars(2);
          }}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"> </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={() => {
            setUserStars(1);
          }}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"> </use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => {
          const value = target.value;
          setUserReview(value);
        }}
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
