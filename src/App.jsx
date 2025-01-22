import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import CardContainer from './components/cardContainer.jsx';

function App() {
  const petsData = [
    {
      id: 1,
      name: 'Luna',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      fullDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.',

      image:
        'https://ny-petrescue.org/files/_cache/28514df6f91bde790e69ac2d9c6fa30b.jpg',
    },
    {
      id: 2,
      name: 'Millo',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      fullDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.',
      image:
        'https://lollypop.org/wp-content/uploads/2023/05/DSC_0827_1920.jpg',
    },
    {
      id: 3,
      name: 'Willow',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      fullDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.',
      image:
        'https://www.aspca.org/sites/default/files/nyc-adoption-center-facebook.jpg',
    },
    {
      id: 4,
      name: 'Buddy',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      fullDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifTzLH0vEbks8KhiQ6h9fNd0RdtuC0mG8QA&s',
    },
    {
      id: 5,
      name: 'Rosie',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      fullDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.',
      image:
        'https://assets.nationbuilder.com/humanesocietyvc/pages/4044/meta_images/original/Adopt_a_pet.jpg?1649877658',
    },
    {
      id: 6,
      name: 'Rocky',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      fullDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_t3eZ3BhCAAilSfAmnmZpyZDvXGeix6iNA&s',
    },
  ];
  return (
    <>
      <Nav />
      <Hero />
      <CardContainer>
        {petsData.map((pet) => (
          <Card
            key={pet.id}
            name={pet.name}
            shortDescription={pet.shortDescription}
            fullDescription={pet.fullDescription}
            petImage={pet.image}
          />
        ))}
      </CardContainer>

      <Footer />
    </>
  );
}

export default App;
