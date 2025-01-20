import React from 'react';

function Hero() {
  return (
    <div className="bg-light text-dark py-5 ">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap w-75 mx-auto">
        <div className="text-body-secondary">
          <h1 className="display-4 fw-bold">
            Find Your Perfect <p className="text-primary fw-bold">Companion</p>
          </h1>
          <p className="lead">
            Every pet in our shelter has a story and is waiting for a loving
            forever home. Start your journey of pet adoption today.
          </p>
          <button className="btn btn-primary me-2 rounded-pill ">
            Adopt a Pet
          </button>
          <button className="btn border border-primary rounded-pill btn-outline-primary">
            Learn More
          </button>
          <div className="d-flex justify-content-start mt-3">
            <div className="me-3 ">
              <h3 className="fw-bolder">50+</h3>
              <p>Pets Available</p>
            </div>
            <div className="me-3">
              <h3 className="fw-bolder">200+</h3>
              <p>Happy Adoptions</p>
            </div>
            <div>
              <h3 className="fw-bolder">15+</h3>
              <p>Years of Service</p>
            </div>
          </div>
        </div>

        <div className="wave">
          <img
            className="rounded-4 m-5"
            src="https://img.freepik.com/premium-photo/group-cats-dogs-sitting-ledge_662214-439171.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
