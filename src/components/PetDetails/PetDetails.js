import { useState } from 'react'
import './PetDetails.css'
import { Link, useParams } from 'react-router-dom'
import cat from '../../images/cat.png'

function PetDetails({allPets}) {
  const { id } = useParams()

  const foundPet = allPets.find(pet => pet.id === id)

    return foundPet && (
      <article key={foundPet.id}>
        <div className='back-to-all-pets-button-container'>
          <Link to={'/'}><button className='back-to-all-pets-button'>Back to All Pets</button></Link>
        </div>
        <section className='pet-owner-info-container'>
          <div className='owner-info'>
            <img className='pet-image'src={cat} alt='cat' />
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
  )
}

export default PetDetails

