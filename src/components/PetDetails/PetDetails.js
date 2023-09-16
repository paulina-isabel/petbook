import './PetDetails.css'
import spirals from '../../images/spirals.png'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { checkIcon } from '../../utils';
import { fetchPetsById } from '../../api-calls';
import { useEffect, useState } from 'react';

function PetDetails({ setError}) {
  const id = useParams().id;
  const [foundPet, setFoundPet] = useState({})

  useEffect(() => {
    fetchPetsById(id)
    .then(data => {
      setFoundPet(data)
    })
    .catch(err => setError(`${err.message}`))
  }, [id, setError])
  
  return Object.values(foundPet).length > 0 && (
    <article key={foundPet.id}>
      <div className='back-to-all-pets-button-container'>
        <Link to={'/'}><button className='back-to-all-pets-button'>Back to All Pets</button></Link>
      </div>
      <section className='details-container'>
      <div className='spirals-container'>
        <img className='spirals' src={spirals} alt='spiral styling'/>
      </div>
        <div className='pet'>
          <div className='pet-image'>{checkIcon(foundPet.type)}</div>
          <h2>{foundPet.name}</h2>
          <p>Owner: {foundPet.ownersName} </p>
        </div>
        <div className='pet-info'>
          <h2 className='pet-type'>{foundPet.type}</h2>
          <p>Nickname: {foundPet.nickname}</p>
          <p>Age: {foundPet.age}</p>
          <p>Fun Facts: {foundPet.funFact}</p>
        </div>
      </section>
    </article>
  ) 
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
