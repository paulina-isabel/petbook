import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form';
import './HomeView.css'

const HomeView = ({ addNewPet, deletePet, allPets, setLoading, setError }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet } setLoading={setLoading} setError={setError}/>
      <AllPets allPets={allPets} deletePet={deletePet}/>
    </div>
  )
}

export default HomeView;