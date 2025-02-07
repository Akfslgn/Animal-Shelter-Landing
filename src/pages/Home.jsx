import { pets } from '../data/data.js';
import { Link } from 'react-router';

function Home() {
  return (
    <>
      <div className="containe d-flex justify-content-center">
        <div className="row" style={{ maxWidth: '1000px' }}>
          {pets.map((pet) => (
            <div
              className="col-lg-4 col-md-5 col-sm-8 mb-4 col-11 mx-auto"
              key={pet.id}
            >
              <div className="card h-100">
                <img
                  src={pet.image}
                  className="card-img-top h-50"
                  alt={pet.name}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-3">{pet.name}</h5>
                  <p className="card-text fw-medium">{pet.shortDescription}</p>
                  <hr />
                  <p className="card-text">Age: {pet.age}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <Link to={'/adopt/' + pet.id} className="btn btn-primary">
                    Adopt
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
