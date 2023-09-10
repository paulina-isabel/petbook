import PetCard from "../PetCard/PetCard";
import { useParams } from 'react-router-dom'

const AllPets = ({ allPets }) => {
  // console.log('ahh', useParams().id)
 
  const pets = allPets.map((pet) => {
    return <PetCard 
      key={pet.id}
      id={pet.id}
      name={pet.petName}
      nickname={pet.petNickname}
      age={pet.petAge}
      owner={pet.petOwnersName}
      funFact={pet.petFunFact}
      
      />
  })

  return (
    <div className="all-pets-container">
      {pets}
    </div>
  )
}

export default AllPets;