import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView/HomeView';
import Header from './components/Header/Header';
import { fetchPets } from './api-calls';
import Error from './components/Error/Error';
import PetDetails from './components/PetDetails/PetDetails';

const App = () => {
  const [ allPets, setAllPets ] = useState([])
  const [error, setError] = useState('')
  
  const addNewPet = (newPet) => {
    setAllPets([...allPets, newPet])
  }

  useEffect(() => {
    fetchPets()
    .then(data => {
      setAllPets(data.pets)
    })
    .catch(error => setError(`Request failed - ${error.message}`))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView addNewPet={addNewPet} allPets={allPets}/>}/>
        <Route path="/:id" element={<PetDetails/>}/>
      </Routes>
      {error && <Error error={error} />}
    </div>
  );
}

export default App;