import React from 'react';
import PropTypes from 'prop-types';
import placeCardProp from './place-card.prop.js';
import {getStarsWidth} from '../../utils/utils';
import {Link} from 'react-router-dom';

function Premium(props) {
  if (props.isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  return '';
}

function PlaceCard(props) {
  const {offer} = props;
  const {price, isPremium, title, type, rating, previewImage} = offer;
  const starsWidth = getStarsWidth(rating);

  return (
    <article className="cities__place-card place-card" >
      <Premium isPremium={isPremium} />

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"> </use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starsWidth}%`}}> </span>
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

PlaceCard.propTypes = {
  offer: PropTypes.oneOfType([placeCardProp]).isRequired,
};

Premium.propTypes = {
  isPremium: PropTypes.bool.isRequired,
};


export default PlaceCard;
