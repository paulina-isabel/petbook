import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form';
import './HomeView.css'
import PropTypes from 'prop-types'

const HomeView = ({ addNewPet, deletePet, allPets, setLoading, setError }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet } setLoading={setLoading} setError={setError}/>
      <AllPets allPets={allPets} deletePet={deletePet}/>
    </div>
  )
}

export default HomeView;

HomeView.propTypes = {
  addNewPet: PropTypes.func.isRequired,
  allPets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string,
      age: PropTypes.number,
      funFact: PropTypes.string,
      ownersName: PropTypes.string.isRequired
    })
  ), 
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func
}