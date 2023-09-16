import './Loading.css'

const Loading = () => {
  return (
    <div className='spinner' role='status'>
      <span className='sr-only'>Loading</span>
      {/* <img aria-hidden='true' alt="spinning cat" src="https://media.giphy.com/media/3o7TKtbdY5oZuiyucg/giphy.gif" /> */}
    </div>
  )
}

export default Loading