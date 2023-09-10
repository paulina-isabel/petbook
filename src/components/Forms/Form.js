import './Form.css';
import { useState } from 'react';
import { postPet } from '../../api-calls'


function Form({ addNewPet }) {
  const [petName, setPetName] = useState("");
  const [petNickname, setPetNickname] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petFunFact, setPetFunFact] = useState("");
  const [petOwnersName, setPetOwnersName] = useState("");
  const [petType, setPetType] = useState("")

  function submitNewPets(e) {
    e.preventDefault()

    const newPet = {
      id: Date.now(),
      petName,
      petNickname,
      petAge,
      petFunFact,
      petOwnersName,
    }
    if (!newPet.petName || !newPet.petNickname || !newPet.petAge || !newPet.petFunFact || !newPet.petOwnersName) {
      return alert('Fill all inputs!')
    } else {
    postPet(newPet)
    .then(data => {
      addNewPet(data)
    })
    
    clearInputs()
    }
  }

  function clearInputs() {
    setPetName("");
    setPetNickname("");
    setPetAge("");
    setPetFunFact("");
    setPetOwnersName("");
  }

  return (
    <form>
      <label htmlFor='pets-name'>Pets Name:</label>
        <input 
        type='text'
        id='pets-name'
        name='petsName'
        value={petName}
        onChange={event => setPetName(event.target.value)}
      />

      <input 
        type='checkbox'
        checked={petType === 'dog'}
        onChange={() => setPetType('dog')}
        id='dog'
        name='dog'
      />
      <label htmlFor='dog'>Dog</label>  

      <input 
        type='checkbox'
        checked={petType === 'cat'}
        onChange={() => setPetType('cat')}
        id='cat'
        name='cat'
      />
      <label htmlFor='cat'>Cat</label>

      <label htmlFor='pets-nickname'>Pets Nickname:</label>
      <input 
        type='text'
        id='pets-nickname'
        name='petsNickname'
        value={petNickname}
        onChange={event => setPetNickname(event.target.value)}
      />

      <label htmlFor='pets-age'>Pets Age:</label>
      <input 
        type='text'
        id='pets-age'
        name='petsAge'
        value={petAge}
        onChange={event => setPetAge(event.target.value)}
      />

      <label htmlFor='pets-fun-fact'>Pets Fun Fact:</label>
      <input 
        type='text'
        id='pets-fun-fact'
        name='petsFunFact'
        value={petFunFact}
        onChange={event => setPetFunFact(event.target.value)}
      />

      <label htmlFor='pet-owners-name'>Pet Owners Name:</label>
      <input 
        type='text'
        id='pet-owners-name'
        name='petOwnersName'
        value={petOwnersName}
        onChange={event => setPetOwnersName(event.target.value)}
      />    
    <button onClick={event => submitNewPets(event)}>Submit</button>  
    </form>
  )
}

export default Form;