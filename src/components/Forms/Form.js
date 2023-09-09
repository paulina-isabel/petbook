import './Form.css';
import { useState } from 'react';

function Form() {
  const [petName, setPetName] = useState("");
  const [petNickname, setPetNickname] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petFunFact, setPetFunFact] = useState("");
  const [petOwnersName, setPetOwnersName] = useState("");

  return (
    <form>
      <label for='pets-name'>Pets Name:</label>
        <input 
        type='text'
        id='pets-name'
        name='petsName'
        value={petName}
        onChange={event => setPetName(event.target.value)}
      />

      <input 
        type='checkbox'
        id='dog'
        name='dog'
      />
      <label for='dog'>Dog</label>  

      <input 
        type='checkbox'
        id='cat'
        name='cat'
      />
      <label for='cat'>Cat</label>
    </form>
  )
}

export default Form;