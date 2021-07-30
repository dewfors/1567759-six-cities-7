import React from 'react';
import PropTypes from 'prop-types';
import placeCardProp from './place-card.prop.js';
import {getStarsWidth} from '../../utils/utils';
import {Link} from 'react-router-dom';
import AddFavoritesButton from './add-favorites-button';
import Premium from '../premium/premium';

function PlaceCardNear(props) {
  const {offer, handleActiveOfferCard} = props;
  const {price, isPremium, title, type, rating, previewImage, isFavorite, id} = offer;
  const starsWidth = getStarsWidth(rating);

  // console.log(isFavorite);

  return (
    <article
      className="near-places__card place-card"
      onMouseEnter={() => handleActiveOfferCard(offer)}
      onMouseLeave={() => handleActiveOfferCard({id: 0})}
    >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddFavoritesButton id={id} isFavorite={isFavorite}/>
          {/*<button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">*/}
          {/*  <svg className="place-card__bookmark-icon" width="18" height="19">*/}
          {/*    <use xlinkHref={"#icon-bookmark"} ></use>*/}
          {/*  </svg>*/}
          {/*  <span className="visually-hidden">In bookmarks</span>*/}
          {/*</button>*/}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starsWidth}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCardNear.propTypes = {
  offer: PropTypes.oneOfType([placeCardProp]).isRequired,
  handleActiveOfferCard: PropTypes.func,
};

export default PlaceCardNear;