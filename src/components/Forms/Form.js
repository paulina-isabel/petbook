import './Form.css';
import { useState } from 'react';
import { postPet } from '../../api-calls'

import paws from '../../images/paws.png'

const Form = ({ addNewPet, setLoading, setError }) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [funFact, setFunFact] = useState("");
  const [ownersName, setOwnersName] = useState("");
  const [type, setType] = useState("");

  const submitNewPets = (e) => {
    e.preventDefault();

    const newPet = {
      name,
      nickname,
      age,
      funFact,
      ownersName,
      type
    };

    if (!newPet.name || !newPet.nickname || !newPet.age || !newPet.funFact || !newPet.ownersName) {
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
  };

  const clearInputs = () => {
    setName("");
    setNickname("");
    setAge("");
    setFunFact("");
    setOwnersName("");
    setType("");
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
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
          </div>

          <div className='pets-type-checkbox sec'>
            <input
              type='checkbox'
              checked={type === 'Dog'}
              onChange={() => setType('Dog')}
              value='dog'
              id='Dog'
              name='Dog'
            />
            <label htmlFor='Dog'>Dog</label>
            <input
              type='checkbox'
              checked={type === 'Cat'}
              onChange={() => setType('Cat')}
              value='cat'
              id='Cat'
              name='Cat'
            />
            <label htmlFor='Cat'>Cat</label>
          </div>
          <div className='pets-nickname-section sec'>
            <label htmlFor='pets-nickname'>Pets Nickname:</label>
            <input
              type='text'
              id='pets-nickname'
              name='petsNickname'
              value={nickname}
              onChange={event => setNickname(event.target.value)}
              required
            />
          </div>
          <div className='pets-age-section sec'>
            <label htmlFor='pets-age'>Pets Age:</label>
            <input
              type='text'
              id='pets-age'
              name='petsAge'
              value={age}
              onChange={event => setAge(event.target.value)}
              required
            />
          </div>
          <div className='pets-fun-fact-section sec'>
            <label htmlFor='pets-fun-fact'>Pets Fun Fact:</label>
            <input
              type='text'
              id='pets-fun-fact'
              name='petsFunFact'
              value={funFact}
              onChange={event => setFunFact(event.target.value)}
              required
            />
          </div>
          <div className='pet-owners-name-section sec'>
            <label htmlFor='pet-owners-name'>Pet Owners Name:</label>
            <input
              type='text'
              id='pet-owners-name'
              name='ownersName'
              value={ownersName}
              onChange={event => setOwnersName(event.target.value)}
              required
            />
          </div>
          <button className='button' onClick={event => submitNewPets(event)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
