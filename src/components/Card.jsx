import React from 'react';

function Card({ name, shortDescription, fullDescription, src }) {
  return (
    <div className="col-sm-12 col-md-3 m-2 mt-3">
      <div className="card h-100">
        <img className="card-img-top h-50 img-fluid" src={src} alt="image" />
        <div className="card-body h-50 overflow-hidden">
          <h5 className="card-title fw-bold fs-3 text-center">{name}</h5>
          <p className="card-header p-0 mb-2 fw-medium fs-5">
            {shortDescription}
          </p>
          <p className="card-body p-0">{fullDescription}</p>
        </div>
        <div className="btn btn-primary mx-auto mb-3 text-center">Adopt</div>
      </div>
    </div>
  );
}

export default Card;
