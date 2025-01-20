import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import CardContainer from "./components/cardContainer.jsx";

function App() {
  const petsData = [
    {
      id: 1,
      name: "Luna",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fullDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.",
      image:
        "https://ny-petrescue.org/files/_cache/28514df6f91bde790e69ac2d9c6fa30b.jpg",
    },
    {
      id: 2,
      name: "Millo",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fullDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.",
      image:
        "https://lollypop.org/wp-content/uploads/2023/05/DSC_0827_1920.jpg",
    },
    {
      id: 3,
      name: "Willow",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fullDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      name: "Buddy",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fullDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifTzLH0vEbks8KhiQ6h9fNd0RdtuC0mG8QA&s",
    },
    {
      id: 5,
      name: "Rosie",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fullDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.",
      image:
        "https://assets.nationbuilder.com/humanesocietyvc/pages/4044/meta_images/original/Adopt_a_pet.jpg?1649877658",
    },
    {
      id: 6,
      name: "Rocky",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fullDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo est ut laborum debitis quasi atque quis officiis adipisci repellendus.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_t3eZ3BhCAAilSfAmnmZpyZDvXGeix6iNA&s",
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
            src={pet.image}
          />
        ))}
      </CardContainer>

      <Footer />
    </>
  );
}

export default App;
