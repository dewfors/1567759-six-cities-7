import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ListOffers from '../list-offers/list-offers';
import Map from '../map/map';
import placeCardProp from '../place-card/place-card.prop';
import SortOffers from '../sort-offers/sort-offers';

function HomeContent(props) {
  const {placesToStay, offers, currentCity} = props;

  const [activeOfferCardId, setActiveOfferCardId] = useState(0);

  const handleActiveOfferCard = (offerCard) => {
    setActiveOfferCardId(offerCard.id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesToStay} places to stay in {currentCity}</b>

          <SortOffers />
          <ListOffers handleActiveOfferCard={handleActiveOfferCard}/>

        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={currentCity} offers={offers} activeOfferCardId={activeOfferCardId}/>
            {/*<Map city={currentCity} offers={offers}/>*/}
          </section>
        </div>
      </div>
    </div>
  );
}

HomeContent.propTypes = {
  placesToStay: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default HomeContent;
