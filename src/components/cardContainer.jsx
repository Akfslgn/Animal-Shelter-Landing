import React from 'react';

function CardContainer({ children }) {
  return (
    <div
      className="d-flex flex-wrap  justify-content-center mx-auto gap-3 "
      style={{ maxWidth: '1300px' }}
    >
      {children}
    </div>
  );
}

export default CardContainer;
