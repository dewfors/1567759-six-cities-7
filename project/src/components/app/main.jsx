import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  return (
    <div className={`page__main ${props.className}`}>
      {props.children}
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
