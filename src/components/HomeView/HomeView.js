import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form'

const HomeView = ({ addNewPet }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet }/>
      <AllPets />
    </div>
  )
}

export default HomeView