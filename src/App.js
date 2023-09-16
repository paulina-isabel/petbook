import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { fetchPets } from './api-calls';
import HomeView from './components/HomeView/HomeView';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import PetDetails from './components/PetDetails/PetDetails';
import Loading from './components/Loading/Loading';

const App = () => {
  const [allPets, setAllPets] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const location = useLocation().pathname
  
  useEffect(() => {
    setError('')
  }, [location])

  const addNewPet = (newPet) => {
    setAllPets([...allPets, newPet])
  }

  const deletePet = async (petId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/pets/${petId}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        const updatedPets = allPets.filter(pet => pet.id !== petId);
        setAllPets(updatedPets);
      } else {
        console.log('fail', response.status);
      }
    } catch (error) {
      // console.error('Error:', error);
      setError(`Request failed - ${error.message}`)
    }
  };

  useEffect(() => {
    setLoading(true)
    fetchPets()
    .then(data => {
      setAllPets(data.pets)
      setLoading(false)
    })
    .catch(error => {
      setError(`Request failed - ${error.message}`)
      setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      {loading && <Loading loading={loading}/>}
      <Routes>
        <Route path="/" element={!error && !loading && <HomeView addNewPet={addNewPet} deletePet={deletePet} allPets={allPets} setLoading={setLoading} setError={setError}/>}/>
        <Route path="/:id" element={<PetDetails allPets={allPets} setError={setError}/>}/>
        <Route path='*' element={<Error error={error}/>}/>
      </Routes>
      {error && <Error error={error} />}
    </div>
  );
}

export default App;