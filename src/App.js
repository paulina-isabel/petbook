import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { fetchPets } from './api-calls';
import Form from './components/Forms/Form';
import Header from './components/Header/Header';
import Error from './components/Error/Error';

function App() {
const [ postedPet, setNewPet ] = useState([])
const [ allPets, setNewAllPets ] = useState([])
const [error, setError] = useState('')
  
function addNewPet(newPet){
  setNewPet(newPet)
  setNewAllPets([...allPets.pets, postedPet])
}

  useEffect(() => {
    fetchPets()
    .then(data => {
      setNewAllPets(data)
      console.log('all pets', allPets.pets)
    })
    .catch(error => setError(`Request failed - ${error.message}`))
  }, [])

  return (
    <div className="App">
      <Header />
      {error && <Error error={error} />}
      <Form addNewPet={ addNewPet }/>
    </div>
  );
}

export default App;
