import './PetDetails.css'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { checkIcon } from '../../utils';
import { fetchPetsById } from '../../api-calls';
import { useEffect, useState } from 'react';

function PetDetails({ setError}) {
  const id = useParams().id;
  const [foundPet, setFoundPet] = useState({})

  // console.log(error)
  // const foundPet = allPets.find((pet) => {
  //     const petResult = pet.id === parseInt(id)
  //     console.log('petResult', petResult)
  //     return petResult
  //   }
  // );

  useEffect(() => {
    fetchPetsById(id)
    .then(data => {
      setFoundPet(data)
    })
    .catch(err => setError(`${err.message}`))
  }, [])
  
  return Object.values(foundPet).length > 0 && (
    <article key={foundPet.id}>
      <div className='back-to-all-pets-button-container'>
        <Link to={'/'}><button className='back-to-all-pets-button'>Back to All Pets</button></Link>
      </div>
      <section className='details-container'>
        <div className='owner-info'>
          {checkIcon(foundPet.type)}
          <h2>{foundPet.name}</h2>
          <p>Owner: {foundPet.ownersName} </p>
        </div>
        <div className='pet-info'>
          <h3>{foundPet.type}</h3>
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
