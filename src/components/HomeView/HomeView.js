import AllPets from "../AllPets/AllPets";
import Form from '../Forms/Form'

const HomeView = () => {
  return (
    <div className="home-view">
      <Form />
      <AllPets />
    </div>
  )
}

export default HomeView