import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  console.log('allPets', allPets)
  const addNewPet = (newPet) => {
    setAllPets([...allPets, newPet])
  }

  useEffect(() => {
    setLoading(true)
    fetchPets()
    .then(data => {
      setAllPets(data.pets)
      setLoading(false)
    })
    .catch(error => setError(`Request failed - ${error.message}`))
    setLoading(false)
  }, [])

  console.log(allPets)

  return (
    <div className="App">
      <Header />
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<HomeView addNewPet={addNewPet} allPets={allPets} setLoading={setLoading} setError={setError}/>}/>
        <Route path="/:id" element={<PetDetails allPets={allPets} />}/>
      </Routes>
      {error && <Error error={error} />}
    </div>
  );
}

export default App;