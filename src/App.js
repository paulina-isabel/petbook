import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView/HomeView';
import Header from './components/Header/Header';
import { fetchPets } from './api-calls';

function App() {
const [ postedPet, setNewPet ] = useState([])
const [ allPets, setNewAllPets ] = useState([])
  
function addNewPet(newPet){
  setNewPet(newPet)
  setNewAllPets([...allPets.pets, postedPet])
}

  useEffect(() => {
    fetchPets()
    .then(data => {
      setNewAllPets(data)
      console.log(allPets.pets, 'this is allPets.pets')
    })

    // .catch(error => setError())
  }, [])

  console.log(allPets)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView addNewPet={addNewPet}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;