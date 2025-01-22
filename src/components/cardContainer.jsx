import React from 'react';

function cardContainer({ children }) {
  return (
    <div className="d-flex flex-wrap justify-content-center mx-5">
      {children}
    </div>
  );
}

export default cardContainer;
