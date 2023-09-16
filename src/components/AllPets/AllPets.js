import PetCard from "../PetCard/PetCard";
import PropTypes from 'prop-types'

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

AllPets.propTypes = {
  allPets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string,
      age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      funFact: PropTypes.string,
      ownersName: PropTypes.string.isRequired
    })
  )
}