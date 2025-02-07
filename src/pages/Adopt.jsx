import { useParams, Link } from 'react-router';
import { pets } from '../data/data.js';

function Adopt() {
  const { petId } = useParams();

  const pet = pets.find((pet) => pet.id == petId);

  return (
    <>
      <div className="">
        <div className="d-flex flex-column align-items-center">
          <div className="col-6 col-lg-5">
            <h2 className="text-center mt-5">Profile Page</h2>

            <div className="card">
              <img className="card-img-top" src={pet.image} alt="" />
              <div className="card-body text-center">
                <div className="card-title fw-bold"> {pet.name} </div>
                <div className="card-text">{pet.fullDescription}</div>
              </div>
            </div>
          </div>
          <Link to={'/home'}>Back to Home Page</Link>
        </div>
      </div>
    </>
  );
}

export default Adopt;
