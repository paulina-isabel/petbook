const PetCard = ({ name, age, owner, funFact }) => {
  return (
    <div className="pet-card">
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>Owner: {owner}</p>
      <p>Fun Fact: {funFact}</p>
    </div>
  )
}

export default PetCard