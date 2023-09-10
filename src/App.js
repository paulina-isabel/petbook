import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView/HomeView';
import Header from './components/Header/Header';
import { fetchPets } from './api-calls';

function App() {
  const [ newPet, setNewPet ] = useState([])
  const [ allPets, setAllPets ] = useState([])
    
  function addNewPet(newPet){
    setNewPet(newPet)
    setAllPets([...allPets.pets, newPet])
  }

  useEffect(() => {
    fetchPets()
    .then(data => {
      setAllPets(data.pets)
      console.log(data, 'this is data in fetch call')
    })

    // .catch(error => setError())
  }, [])

  console.log(allPets, 'this is allPets')

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView addNewPet={addNewPet} allPets={allPets}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;