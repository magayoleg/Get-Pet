import './AdviceCard.sass';

const AdviceCard = ({ id, title, content }) => {
  return (
    <div className="advice-card">
      <span className="advice-card__title" id={id}>
        {title}
      </span>
      <p className="advice-card__content">{content}</p>
      <a href="/" className="advice-card__link" id={id}>
        LEARN MORE
      </a>
    </div>
  );
};

export default AdviceCard;
