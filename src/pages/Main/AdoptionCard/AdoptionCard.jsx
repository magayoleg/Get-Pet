import * as endPoints from '../../../config/endPoints';
import './AdoptionCard.sass';

const AdoptionCard = ({ id, name, img }) => {
  return (
    <a href='/' className="adoptCard" id={id}>
      <img src={endPoints.getImagePet(img)} alt="image" className="adoptCard__image" />
      <p className="adoptCard__title">{name}</p>
    </a>
  );
}

export default AdoptionCard;