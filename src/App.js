import { useEffect } from 'react';
import './App.css';
import { fetchPets } from './api-calls';
import Form from './components/Forms/Form';
import Header from './components/Header/Header';

function App() {
  
  useEffect(() => {
    fetchPets()
    .then(data => console.log(data))
    // .catch(error => setError())
  })

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
