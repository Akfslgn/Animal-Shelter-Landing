import React from 'react';

function Card({ name, shortDescription, fullDescription, src }) {
  return (
    <div className="col-sm-6 col-md-3 m-2">
      <div className="card h-100">
        <img className="card-img-top" src={src} alt="image" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-header p-0 mb-2">{shortDescription}</p>
          <p className="card-body p-0">{fullDescription}</p>
        </div>
        <a href="#" className="btn btn-primary w-25 mx-auto mb-2 text-center">
          Adopt
        </a>
      </div>
    </div>
  );
}

export default Card;
