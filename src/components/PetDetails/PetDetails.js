import { useState } from 'react'
import './PetDetails.css'
import { useParams } from 'react-router-dom'

function PetDetails({allPets}) {
  // const [selectedPetAndOwner, setSeclectedPetAndOwner] = useState(petOwnerInfo)
  const { id } = useParams()
  console.log('id', id)
  console.log('pet', allPets)

  const foundPet = allPets.find(pet => pet.id === id)

    return foundPet && (
      <article key={foundPet.id}>
        <button>Back to All Pets</button>
        <section className='pet-owner-info-container'>
          <div className='owner-info'>
            <span>🐱</span>
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

