import './PetDetails.css'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { checkIcon } from '../../utils';

function PetDetails({ allPets }) {
  const id = useParams().id;

  const foundPet = allPets.find((pet) => {
      const petResult = pet.id === parseInt(id)
      return petResult
    }
  );

  return foundPet && (
    <article key={foundPet.id}>
      <div className='back-to-all-pets-button-container'>
        <Link to={'/'}><button className='back-to-all-pets-button'>Back to All Pets</button></Link>
      </div>
      <section className='details-container'>
        <div className='owner-info'>
          {checkIcon(foundPet.type)}
          <h2>{foundPet.petName}</h2>
          <p>Owner: {foundPet.petOwnersName} </p>
        </div>
        <div className='pet-info'>
          <h3>{foundPet.type}</h3>
          <p>Nickname: {foundPet.petNickname}</p>
          <p>Age: {foundPet.petAge}</p>
          <p>Fun Facts: {foundPet.petFunFact}</p>
        </div>
      </section>
    </article>
  );
};

export default PetDetails;

PetDetails.propTypes = {
  allPets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      petName: PropTypes.string.isRequired,
      petNickname: PropTypes.string,
      petAge: PropTypes.number,
      petFunFact: PropTypes.string,
      petOwnersName: PropTypes.string.isRequired
    })
  )
}
