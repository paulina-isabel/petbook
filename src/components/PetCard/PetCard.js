import './PetCard.css';
import { Link } from 'react-router-dom';
import { checkIcon, checkLinkImage } from '../../utils';
import PropTypes from 'prop-types'

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

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}