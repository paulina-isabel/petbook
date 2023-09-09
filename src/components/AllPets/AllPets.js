import PetCard from "../PetCard/PetCard"

const AllPets = () => {

  const pets = [
    {
      name: "Pluto",
      age: 6,
      owner: "Paulina"
    },
    {
      name: "Linus",
      age: 6,
      owner: "Paulina"
    }
  ]

  const allPets = pets.map((pet) => {
    return <PetCard 
      name={pet.name}
      age={pet.age}
      owner={pet.owner}
      />
  })

  return (
    <div className="all-pets-container">
      {allPets}
    </div>
  )
}

export default AllPets