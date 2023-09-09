import PetCard from "../PetCard/PetCard"

const AllPets = () => {

  const pets = [
    {
      name: "Pluton",
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
    return <PetCard />
  })

  return (
    <div>
      This is AllPets
      {allPets}
    </div>
  )
}

export default AllPets