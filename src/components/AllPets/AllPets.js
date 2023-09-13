import PetCard from "../PetCard/PetCard";
import PropTypes from 'prop-types'

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

AllPets.propTypes = {
  allPets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      petName: PropTypes.string.isRequired,
      petNickname: PropTypes.string,
      petAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      petFunFact: PropTypes.string,
      petOwnersName: PropTypes.string.isRequired
    })
  )
}