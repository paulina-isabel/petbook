import './PetDetails.css'

function PetDetails({petOwnerInfo}) {
  return petOwnerInfo.map(petAndOwner => {
     return (
      <article key={petAndOwner.id} id={petAndOwner.id}>
        <button>Back to All Pets</button>
        <section className='pet-owner-info-container'>
          <div className='owner-info'>
            <span>🐱</span>
            <p>Owner Name: {petAndOwner.ownerName} </p>
            <p>Owner Details: </p>
          </div>
          <div className='pet-info'>
            <h2>Pet Name: {petAndOwner.petName}</h2>
            <p> Type: {petAndOwner.type}</p>
            <p> Breed: {petAndOwner.breed}</p>
            <p> Nicknames: </p>
            <p> Fun Facts: </p>
          </div>
        </section>
      </article>
    )
  }

   
    )
}

export default PetDetails