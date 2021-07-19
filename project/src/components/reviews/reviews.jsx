import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from './reviews-item';
import {getReviewsSorted} from '../../utils/utils';
import reviewProp from './review.prop';
import {fetchReviews} from "../../store/api-actions";

function Reviews(props) {
  const {id, comments, getReviews} = props;

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
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(fetchReviews(id));
  },
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
