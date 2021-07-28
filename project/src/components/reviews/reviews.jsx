import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch, useSelector} from 'react-redux';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from './reviews-item';
import {getReviewsSorted} from '../../utils/utils';
import reviewProp from './review.prop';
import {fetchReviews} from '../../store/api-actions';
import {getAuthorizationStatus} from "../../store/redusers/reduser-user/selectors-user";
import {getComments} from "../../store/redusers/reduser-reviews/selectors-revievs";

function Reviews(props) {
  const {id} = props;

  const dispatch = useDispatch();
  const comments = useSelector(getComments);
  const getReviews = (id) => {
    dispatch(fetchReviews(id));
  }

  useEffect(() => {
    getReviews(id);
  }, [id, getReviews]);



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
  // comments: PropTypes.arrayOf(
  //   PropTypes.oneOfType([reviewProp]).isRequired,
  // ).isRequired,
  // getReviews: PropTypes.func.isRequired,
};

export default Reviews;
