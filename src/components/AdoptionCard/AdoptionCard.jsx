import './AdoptionCard.sass';

const AdoptionCard = ({ id, name, image }) => {
  return (
    <a href='/' className="adoptCard" id={id}>
      <img src={image} alt="image" className="adoptCard__image" />
      <p className="adoptCard__title">{name}</p>
    </a>
  );
}

export default AdoptionCard;