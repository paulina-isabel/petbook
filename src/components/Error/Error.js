import './Error.css';
import shockedCat from '../../images/hang-niu-Tn8DLxwuDMA-unsplash.jpg';

const Error = ({error}) => {
  return (
    <section className='error'>
      <h2>{error}</h2>
      <img src={shockedCat}/>
      <button className='error-button'>Back to Home</button>
    </section>
  )
}

export default Error;