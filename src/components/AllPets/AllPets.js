import PetCard from "../PetCard/PetCard";

const AllPets = ({ allPets }) => {
console.log(allPets)
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
      />
  })

  return (
    <div className="all-pets-container">
      {pets}
    </div>
  )
}

export default AllPets;