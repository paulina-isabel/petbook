import './App.css';
import Form from './components/Forms/Form';
import Header from './components/Header/Header';
import PetDetails from './components/PetDetails/PetDetails';
import { useState } from 'react';



function App() {
  const petInfo = [
    { id: '1', ownerName: 'Judy', petName: 'Oreo', type: 'cat', breed: 'domesticShorthair'},
    { id: '2', ownerName: 'Alex', petName: 'Duke', type: 'dog', breed: 'schnoodle'},
    { id: '3', ownerName: 'Paulina', petName: 'Pluto', type: 'cat', breed: 'Bombay'},
    { id: '4', ownerName: 'Alice', petName: 'Rocco', type: 'dog', breed:'pitbull'},
  ];

  const [petOwnerInfo, setPetOwnerInfo] = useState(petInfo)

  return (
    <div className="App">
      <Header />
      <Form />
      <PetDetails petOwnerInfo={petOwnerInfo} />
    </div>
  );
}

export default App;
