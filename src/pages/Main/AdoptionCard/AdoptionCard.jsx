import * as endPoints from '../../../config/endPoints';
import './AdoptionCard.sass';
import { Link } from 'react-router-dom';

const AdoptionCard = ({ id, name, img }) => {
  return (
    <Link to={`/posts/${id}`} className="adoptCard" id={id}>
      <img src={endPoints.getImagePet(img)} alt="image" className="adoptCard__image" />
      <p className="adoptCard__title">{name}</p>
    </Link>
  );
}

export default AdoptionCard;