import './PetCard.css';
import cat from '../../images/cat.png';
import dog from '../../images/dog.png';
import fish from '../../images/fish.png';
import bone from '../../images/bone.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PetCard = ({ id, name, owner, type }) => {

  const checkIcon = (petType) => {
    if (petType === 'Dog') {
      return <img className='pet-icon' src={dog} alt="Dog Icon" />
    } else if (petType === 'Cat'){
      return <img className='pet-icon' src={cat} alt="Cat Icon" />
    }
  }

  const checkLinkImage = (petType) => {
    if (petType === 'Dog') {
      return <img className='detail-link-icon' src={bone} alt="Dog Detail Link" />
    } else if (petType === 'Cat'){
      return <img className='detail-link-icon' src={fish} alt="Cat Detail Link" />
    }
  }

  return (
    <div className="pet-card">
      {checkIcon(type)}
      <h2>{name}</h2>
      <h3>{type}</h3>
      <p className='owner'>Owner: {owner}</p>
      <Link to={`/${id}`}>{checkLinkImage(type)}</Link>
    </div>
  )
}

export default PetCard;