import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import ListNearOffers from '../list-near-offers/list-near-offers';
import Header from '../page-home/header';
import {
  fetchNearbyOffers,
  fetchOfferDetails
} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Gallery from './gallery';
import {getStarsWidth} from '../../utils/utils';
import Host from './host';
import {
  getOfferDetails,
  getOfferIsLoading,
  getOfferNearby
} from '../../store/reducers/reducer-offers/selectors-offers';
import AddFavoritesButton from '../place-card/add-favorites-button';

function PageOffer() {

  const {id} = useParams();

  const [activeOfferCardId, setActiveOfferCardId] = useState(0);

  const dispatch = useDispatch();

  const getOffersNearby = useCallback((idOffer) => {
    dispatch(fetchNearbyOffers(idOffer));
  }, [dispatch]);

  const getOfferInfo = useCallback((idOffer) => {
    dispatch(fetchOfferDetails(idOffer));
  }, [dispatch]);

  useEffect(() => {
    getOffersNearby(id);
    getOfferInfo(id);
  }, [id, getOffersNearby, getOfferInfo]);

  const offerDetails = useSelector(getOfferDetails);
  const isOfferDetailsLoading = useSelector(getOfferIsLoading);
  const offersNearby = useSelector(getOfferNearby);

  const {images, isPrime, title, rating, type, bedrooms, maxAdults,
    price, goods, host, description, city, isFavorite} = offerDetails;

  const handleActiveOfferCard = (offerCard) => {
    setActiveOfferCardId(offerCard.id);
  };

  if (isOfferDetailsLoading) {
    return (
      <LoadingScreen />
    );
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
                <AddFavoritesButton isFavorite={isFavorite} id={Number(id)} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStarsWidth(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                {/*<span className="property__rating-value rating__value">4.8</span>*/}
                <span className="property__rating-value rating__value">{rating}</span>
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

              <Reviews id={id} />
            </div>
          </div>
          <section className="property__map map">
            {offerDetails && offersNearby && city?.name && (
              <Map city={city.name} offers={offersNearby} activeOfferCardId={activeOfferCardId}/>
            )}

          </section>
        </section>
        <div className="container">
          <ListNearOffers offers={offersNearby} handleActiveOfferCard={handleActiveOfferCard}/>
        </div>
      </main>
    </div>
  );
}

PageOffer.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  }),
};

PageOffer.defaultProps = {
  offerDetails: {},
};

export default PageOffer;
