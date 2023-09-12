import './Form.css';
import { useState } from 'react';
import { postPet } from '../../api-calls'

import paws from '../../images/paws.png'

const Form = ({ addNewPet, setLoading, setError }) => {
  const [petName, setPetName] = useState("");
  const [petNickname, setPetNickname] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petFunFact, setPetFunFact] = useState("");
  const [petOwnersName, setPetOwnersName] = useState("");
  const [petType, setPetType] = useState("")

  const submitNewPets = (e) => {
    e.preventDefault()

    const newPet = {
      id: Date.now(),
      petName,
      petNickname,
      petAge,
      petFunFact,
      petOwnersName,
    };

    if (!newPet.petName || !newPet.petNickname || !newPet.petAge || !newPet.petFunFact || !newPet.petOwnersName) {
      return alert('Fill all inputs!')
    } else {
    setLoading(true)
    postPet(newPet)
    .then(data => {
      setLoading(false)
      addNewPet(data)
      clearInputs()
    })
    .catch(error => setError(`Post Failed - ${error.message}`))
    setLoading(false)
    }
  }

  const clearInputs = () => {
    setPetName("");
    setPetNickname("");
    setPetAge("");
    setPetFunFact("");
    setPetOwnersName("");
  }

  return (
    <div className='form-section'>
      <p className='new-pet'>Add New Pet!</p>
      <img className='paws-image' src={paws} alt='paws'/>
      <div className='form-wrapper'>
        <form>
          <div className='pets-name-section sec'>
            <label htmlFor='pets-name'>Pets Name:</label>
            <input
              type='text'
              id='pets-name'
              name='petsName'
              value={petName}
              onChange={event => setPetName(event.target.value)}
            />
          </div>
          <div className='pets-type-checkbox sec'>
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
          </div>
          <div className='pets-nickname-section sec'>
            <label htmlFor='pets-nickname'>Pets Nickname:</label>
            <input
              type='text'
              id='pets-nickname'
              name='petsNickname'
              value={petNickname}
              onChange={event => setPetNickname(event.target.value)}
            />
          </div>
          <div className='pets-age-section sec'>
            <label htmlFor='pets-age'>Pets Age:</label>
            <input
              type='text'
              id='pets-age'
              name='petsAge'
              value={petAge}
              onChange={event => setPetAge(event.target.value)}
            />
          </div>

          <div className='pets-fun-fact-section sec'>
            <label htmlFor='pets-fun-fact'>Pets Fun Fact:</label>
            <input
              type='text'
              id='pets-fun-fact'
              name='petsFunFact'
              value={petFunFact}
              onChange={event => setPetFunFact(event.target.value)}
            />
          </div>

          <div className='pet-owners-name-section sec'>
            <label htmlFor='pet-owners-name'>Pet Owners Name:</label>
            <input
              type='text'
              id='pet-owners-name'
              name='petOwnersName'
              value={petOwnersName}
              onChange={event => setPetOwnersName(event.target.value)}
            />
          </div>
          <button className='button' onClick={event => submitNewPets(event)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
