import * as endPoints from '../../../config/endPoints';
import './AdoptionCard.sass';

const AdoptionCard = ({ id, name, image }) => {
  console.log('http://localhost:3002/img/22.png');
  return (
    <a href='/' className="adoptCard" id={id}>
      <img src='http://localhost:3002/img/22.png' alt="image" className="adoptCard__image" />
      <p className="adoptCard__title">{name}</p>
    </a>
  );
}

export default AdoptionCard;