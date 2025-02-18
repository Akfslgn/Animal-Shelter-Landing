import React from 'react';

const Card = ({ petImage, name, fullDescription, shortDescription }) => {
  return (
    <div className=" col-lg-3 col-md-4 col-sm-6">
      <div className="card col-11 mx-auto h-100 ">
        <img src={petImage} className="card-img-top h-50" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-3">{name}</h5>
          <p className="card-text  fw-medium">{shortDescription}</p> <hr />
          <p className="card-text">{fullDescription}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a href="#" className="btn btn-primary">
            Adopt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
