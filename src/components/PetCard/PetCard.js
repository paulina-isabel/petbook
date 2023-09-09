const PetCard = ({ name, age, owner }) => {
  return (
    <div className="pet-card">
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>Owner: {owner}</p>
    </div>
  )
}

export default PetCard