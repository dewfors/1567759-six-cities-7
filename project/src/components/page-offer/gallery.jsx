import React from 'react';
import PropTypes from 'prop-types';

function Gallery({images}) {
  return (
    <div className="property__gallery">
      {images.map((elem, index) => (
        <div key={elem + String(index)} className="property__image-wrapper">
          <img className="property__image" src={elem} alt="studio" />
        </div>
      ))}
    </div>

  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
