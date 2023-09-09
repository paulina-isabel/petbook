import './Header.css'
import logo from '../../Assets/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img className='petbook-logo' src={logo} alt='phone book'/>
            </div>
            <div className='title-container'>
                <h1>PetB🐾k</h1>
                <h2>Your Pet's Perfect Page</h2>
            </div>
        </header>
    )
}