import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form';
import './HomeView.css'
import PropTypes from 'prop-types'

const HomeView = ({ addNewPet, allPets, setLoading, setError }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet } setLoading={setLoading} setError={setError}/>
      <AllPets allPets={allPets}/>
    </div>
  )
}

export default HomeView;

HomeView.propTypes = {
  addNewPet: PropTypes.func.isRequired,
  allPets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      petName: PropTypes.string.isRequired,
      petNickname: PropTypes.string,
      petAge: PropTypes.number,
      petFunFact: PropTypes.string,
      petOwnersName: PropTypes.string.isRequired
    })
  ), 
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func
}