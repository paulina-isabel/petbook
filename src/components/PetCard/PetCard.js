import './PetCard.css';
import { Link } from 'react-router-dom';
import { checkIcon, checkLinkImage } from '../../utils';
import deleteIcon from '../../images/delete.png';

const PetCard = ({ id, name, owner, type }) => {

  return (
    <div className="pet-card">
      <div className='icon-container'>
        <img className='delete-icon' src={deleteIcon} alt='delete icon'/>
      </div>
      {checkIcon(type)}
      <h2>{name}</h2>
      <h3>{type}</h3>
      <p className='owner'>Owner: {owner}</p>
      <Link to={`/${id}`}>{checkLinkImage(type)}</Link>
    </div>
  )
}

export default PetCard;