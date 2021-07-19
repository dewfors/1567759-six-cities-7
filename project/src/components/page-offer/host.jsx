import React from 'react';
import PropTypes from 'prop-types';

function Host({ host, description }) {
  const {
    avatarUrl,
    isPro,
    name,
  } = host;

  const hostAvatarClass = `property__avatar-wrapper user__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''}`;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={hostAvatarClass}>
          <img
            className="property__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {isPro
        && (
          <span className="property__user-status">
            Pro
          </span>
        )}

      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

Host.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default Host;
