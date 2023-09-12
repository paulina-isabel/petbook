import PetCard from "../PetCard/PetCard";

const AllPets = ({ allPets }) => {

  const pets = allPets.map((pet) => {
    return <PetCard 
      key={pet.id}
      id={pet.id}
      name={pet.petName}
      nickname={pet.petNickname}
      age={pet.petAge}
      owner={pet.petOwnersName}
      funFact={pet.petFunFact}
      type={pet.type}
      />
  })

  return (
    <div className="all-pets-container">
      {pets}
    </div>
  )
}

export default AllPets;