import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ListOffers from '../list-offers/list-offers';
import Map from '../map/map';
import SortOffers from '../sort-offers/sort-offers';
import LoadingScreen from '../loading-screen/loading-screen';
import ListOffersEmpty from '../list-offers/list-offers-empty';
import {
  getOffers,
  getOffersIsError,
  getOffersIsLoading
} from '../../store/redusers/reduser-offers/selectors-offers';
import {getCurrentCity} from '../../store/redusers/reduser-app/selectors-app';


function HomeContent(props) {

  const offers = useSelector(getOffers);
  const currentCity = useSelector(getCurrentCity);
  const isLoading = useSelector(getOffersIsLoading);
  const isError = useSelector(getOffersIsError);

  const placesToStay = offers.filter((offer) => (offer.city.name === currentCity)).length;

  const [activeOfferCardId, setActiveOfferCardId] = useState(0);

  const handleActiveOfferCard = (offerCard) => {
    setActiveOfferCardId(offerCard.id);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ListOffersEmpty currentCity={currentCity} isError={isError} />;
  }

  if (!offers.length) {
    return <ListOffersEmpty currentCity={currentCity} isError={isError} />;
  }

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
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
