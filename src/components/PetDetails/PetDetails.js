import './PetDetails.css'

function PetDetails({petOwnerInfo}) {
  return petOwnerInfo.map(petAndOwner => {
     return (
      <article key={petAndOwner.id} id={petAndOwner.id}>
        <button>Back to All Pets</button>
        <div>
          <img></img>
          <p>Owner Name: {petAndOwner.ownerName} </p>
          <p>Owner Details: </p>
        </div>
        <div>
          <h2>Pet Name: {petAndOwner.petName}</h2>
          <p> Type: {petAndOwner.type}</p>
          <p> Type: {petAndOwner.breed}</p>
          <p> Nicknames: </p>
          <p> Fun Facts: </p>
        </div>
      </article>
    )
  }

   
    )
}

export default PetDetails