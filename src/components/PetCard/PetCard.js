import './PetCard.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { checkIcon, checkLinkImage } from '../../utils';

const PetCard = ({ id, name, owner, type }) => {



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