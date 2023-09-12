import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form';

const HomeView = ({ addNewPet, allPets, setLoading, setError }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet } setLoading={setLoading} setError={setError}/>
      <AllPets allPets={allPets}/>
    </div>
  )
}

export default HomeView;