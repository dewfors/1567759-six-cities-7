import React from 'react';

function Main(props) {
  return (
    <div className={`page__main ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Main;
