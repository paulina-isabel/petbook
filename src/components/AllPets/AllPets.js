import PetCard from "../PetCard/PetCard";

const AllPets = ({ allPets, deletePet }) => {

  const pets = allPets.map((pet) => {
    return <PetCard 
      key={pet.id}
      id={pet.id}
      name={pet.name}
      nickname={pet.nickname}
      age={pet.age}
      owner={pet.ownersName}
      funFact={pet.funFact}
      type={pet.type}
      deletePet={deletePet}
      />
  })

  return (
    <div className="all-pets-container">
      {pets}
    </div>
  )
}

export default AllPets;