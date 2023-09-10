import { useState } from 'react'
import './PetDetails.css'

function PetDetails({petOwnerInfo}) {
  const [selectedPetAndOwner, setSeclectedPetAndOwner] = useState(petOwnerInfo)
  console.log('ey', selectedPetAndOwner)
  
    return (
      <article key={selectedPetAndOwner.id} id={selectedPetAndOwner.id}>
        <button>Back to All Pets</button>
        <section className='pet-owner-info-container'>
          <div className='owner-info'>
            <span>🐱</span>
            <p>Owner Name: {selectedPetAndOwner.petOwnersName} </p>
            <p>Owner Details: </p>
          </div>
          <div className='pet-info'>
            <h2>Pet Name: {selectedPetAndOwner.petName}</h2>
            <p>Nickname: {selectedPetAndOwner.petNickname}</p>
            <p>Pet Age: {selectedPetAndOwner.petAge}</p>
            <p>Fun Facts: {selectedPetAndOwner.petFunFact}</p>
          </div>
        </section>
      </article>
  )
}

export default PetDetails

