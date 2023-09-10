import './PetCard.css'
import cat from '../../images/cat.png'
import dog from '../../images/dog.png'

const PetCard = ({ name, age, owner, funFact, nickname }) => {

  const petIcon = () => {

  }

  return (
    <div className="pet-card">
      <img className='pet-icon' src={cat} alt='pet icon'/>
      <h2>{name}</h2>
      <p className='nickname'>Nickname: {nickname}</p>
      <p className='age'>Age: {age} y/o</p>
      <p className='owner'>Owner: {owner}</p>
      <p className='fun-fact'>Fun Fact: {funFact}</p>
    </div>
  )
}

export default PetCard