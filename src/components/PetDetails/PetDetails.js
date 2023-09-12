import './PetDetails.css'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import cat from '../../images/cat.png'

function PetDetails({allPets}) {
  const { id } = useParams()

const foundPet = allPets.find(pet => pet.id === Number(id))
 
    return foundPet && (
      <article key={foundPet.id}>
        <div className='back-to-all-pets-button-container'>
          <Link to={'/'}><button className='back-to-all-pets-button'>Back to All Pets</button></Link>
        </div>
        <section className='details-container'>
          <div className='owner-info'>
            <img className='pet-image'src={cat} alt='cat' />
            <p>Owner Name: {foundPet.petOwnersName} </p>
            <p>Owner Details: </p>
          </div>
          <div className='pet-info'>
            <h2>Pet Name: {foundPet.petName}</h2>
            <p>Nickname: {foundPet.petNickname}</p>
            <p>Pet Age: {foundPet.petAge}</p>
            <p>Fun Facts: {foundPet.petFunFact}</p>
          </div>
        </section>
      </article>
  )
}

export default PetDetails

PetDetails.propTypes = {
  allPets: PropTypes.array.isRequired
}
