import './PetDetails.css'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { checkIcon } from '../../utils';
import { fetchPetsById } from '../../api-calls'
import { useState, useEffect } from 'react';

function PetDetails() {
  const id = useParams().id;
  console.log(id)
  const numId = Number(id)
  const [foundPet, setFoundPet] = useState([])

  // const foundPet = allPets.find((pet) => {
      // const petResult = pet.id === parseInt(id)
      // return petResult
    // }
  // );

  useEffect((numId) => {
    fetchPetsById(numId)
    .then(data => {
      console.log(data)
      setFoundPet(data.pets)

    })
  }, [numId])

  return foundPet && (
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
