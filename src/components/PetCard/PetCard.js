import './PetCard.css';
import cat from '../../images/cat.png';
import dog from '../../images/dog.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PetCard = ({ id, name, age, owner, funFact, nickname, type }) => {

  const checkType = (type) => {
    if (type === 'Dog') {
      return <img src={dog} alt="Dog Image" />
    } else {
      return <img src={cat} alt="Cat Image" />
    }
  }

  console.log(type)

  return (
    <div className="pet-card">
        {type === 'Dog' ? (
          <img className='pet-icon' src={dog} alt="Dog Image" />
        ) : (
          <img className='pet-icon' src={cat} alt="Cat Image" />
        )}

      <h2>{name}</h2>
      <h3>{type}</h3>
      <p className='nickname'>Nickname: {nickname}</p>
      <p className='age'>Age: {age} y/o</p>
      <p className='owner'>Owner: {owner}</p>
      <p className='fun-fact'>Fun Fact: {funFact}</p>
      <Link to={`/${id}`}><img></img>Image here</Link>
    </div>
  )
}

export default PetCard;