import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form';

const HomeView = ({ addNewPet, allPets }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet }/>
      <AllPets allPets={allPets}/>
    </div>
  )
}

export default HomeView;