import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router';
import {connect} from 'react-redux';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import ListNearOffers from '../list-near-offers/list-near-offers';
import placeCardProp from '../place-card/place-card.prop';
import reviewProp from '../reviews/review.prop';
import Header from '../page-home/header';
import {fetchNearbyOffers, fetchOfferDetails} from '../../store/api-actions';
import LoadingScreen from "../loading-screen/loading-screen";
import Gallery from "./gallery";
import {getStarsWidth} from "../../utils/utils";
import Host from "./host";

function PageOffer(props) {
  const {comments, offersNearby, offerDetails, getOfferDetails, getOffersNearby, isOfferDetailsLoading} = props;

  const {id} = useParams();
  // console.log(offersNearby);
  // console.log(offerDetails);

  const {images, isPrime, title, rating, type, bedrooms, maxAdults,
    price, goods, host, description, city} = offerDetails;
  // console.log(images);

  useEffect(() => {
    getOffersNearby(id);
    getOfferDetails(id);
  }, [id]);

  // console.log(id);

  if (isOfferDetailsLoading) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {images
              && (
                <div className="property__gallery-container container">
                  <Gallery images={images} />
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPrime
              && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStarsWidth(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${maxAdults > 1 ? 'adults' : 'adult'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods && goods.map((elem) => (
                    <li
                      key={elem}
                      className="property__inside-item"
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>

              {host && (
                <Host host={host} description={description} />
              )}

              <Reviews comments={comments} />
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} offers={offersNearby} />
          </section>
        </section>
        <div className="container">
          <ListNearOffers offers={offersNearby} />
        </div>
      </main>
    </div>
  );
}

// PageOffer.propTypes = {
//   offers: PropTypes.arrayOf(
//     PropTypes.oneOfType([placeCardProp]).isRequired,
//   ).isRequired,
//   city: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     lat: PropTypes.number.isRequired,
//     lng: PropTypes.number.isRequired,
//     zoom: PropTypes.number.isRequired,
//   }).isRequired,
//   comments: PropTypes.arrayOf(
//     PropTypes.oneOfType([reviewProp]).isRequired,
//   ).isRequired,
// };

const mapStateToProps = () => (state) => ({
  offerDetails: state.offer,
  isOfferDetailsLoading: state.loadOfferStatus.isLoading,
  offersNearby: state.offersNearby.data,
});

const mapDispatchToProps = (dispatch) => ({
  getOffersNearby(id) {
    dispatch(fetchNearbyOffers(id));
  },
  getOfferDetails(id) {
    dispatch(fetchOfferDetails(id));
  },
});

export {PageOffer};
export default connect(mapStateToProps, mapDispatchToProps)(PageOffer);
