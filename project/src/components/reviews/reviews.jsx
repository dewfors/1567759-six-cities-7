import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from './reviews-item';
import {getReviewsSorted} from '../../utils/utils';
import {fetchReviews} from '../../store/api-actions';
import {getComments} from '../../store/reducers/reducer-reviews/selectors-reviews';

function Reviews(props) {
  const {id} = props;

  const dispatch = useDispatch();
  const comments = useSelector(getComments);
  const getReviews = (idOffer) => {
    dispatch(fetchReviews(idOffer));
  };

  useEffect(() => {
    getReviews(id);
  }, [id]);

  const reviewsCount = comments.length;

  const reviews = getReviewsSorted(comments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => <ReviewsItem key={review.id} review={review}/>)}
      </ul>
      <ReviewsForm id={id} />
    </section>
  );
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
