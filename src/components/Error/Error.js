import './Error.css';
import shockedCat from '../../images/hang-niu-Tn8DLxwuDMA-unsplash.jpg';
import { Link } from 'react-router-dom';

const Error = ({error}) => {
  return (
    <section className='error'>
      <h2>{error}</h2>
      <img src={shockedCat} alt='shocked error cat'/>
      <Link to='/'><button className='error-button'>Retry</button></Link>
    </section>
  )
}

export default Error;