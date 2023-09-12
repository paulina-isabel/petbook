import cat from './images/cat.png';
import dog from './images/dog.png';
import fish from './images/fish.png';
import bone from './images/bone.png';

const checkIcon = (petType) => {
  if (petType === 'Dog') {
    return <img className='pet-icon' src={dog} alt="Dog Icon" />
  } else if (petType === 'Cat'){
    return <img className='pet-icon' src={cat} alt="Cat Icon" />
  }
}

const checkLinkImage = (petType) => {
  if (petType === 'Dog') {
    return <img className='detail-link-icon' src={bone} alt="Dog Detail Link" />
  } else if (petType === 'Cat'){
    return <img className='detail-link-icon' src={fish} alt="Cat Detail Link" />
  }
}

export { checkIcon, checkLinkImage}