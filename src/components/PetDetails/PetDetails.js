import { useState } from 'react'
import './PetDetails.css'
import { useParams } from 'react-router-dom'
import cat from '../../images/cat.png'

function PetDetails({allPets}) {
  const { id } = useParams()

  const foundPet = allPets.find(pet => pet.id === id)

    return foundPet && (
      <article key={foundPet.id}>
        <div className='back-to-all-pets-button-container'>
        

          <button className='back-to-all-pets-button'>Back to All Pets</button>
         
        </div>
        <section className='pet-owner-info-container'>
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
