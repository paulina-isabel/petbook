import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form';

const HomeView = ({ addNewPet, allPets, setLoading }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet } setLoading={setLoading}/>
      <AllPets allPets={allPets}/>
    </div>
  )
}

export default HomeView;