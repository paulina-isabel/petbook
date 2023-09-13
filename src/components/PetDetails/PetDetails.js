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
        <div className='pet'>
          {/* this used to be .owner-info */}
          {checkIcon(foundPet.type)}
          <h2>{foundPet.petName}</h2>
          <h3>{foundPet.type}</h3>
        </div>
        <div className='details'>
          {/* this used to be pet-info */}
          <p>Owner: {foundPet.petOwnersName} </p>
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
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      petName: PropTypes.string.isRequired,
      petNickname: PropTypes.string,
      petAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      petFunFact: PropTypes.string,
      petOwnersName: PropTypes.string.isRequired
    })
  )
}
