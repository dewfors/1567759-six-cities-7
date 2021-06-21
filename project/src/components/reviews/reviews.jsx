import React from 'react';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from './reviews-item';
import {getReviewsSorted} from '../../utils/utils';
import PropTypes from 'prop-types';
import reviewProp from './review.prop';

function Reviews(props) {
  const {comments} = props;
  const reviewsCount = comments.length;

  const reviews = getReviewsSorted(comments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => <ReviewsItem key={review.id} review={review}/>)}
      </ul>
      <ReviewsForm onReview={() => {}}/>
    </section>
  );
}

Reviews.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ).isRequired,
};


export default Reviews;
