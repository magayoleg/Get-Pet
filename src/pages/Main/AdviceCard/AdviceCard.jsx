import './AdviceCard.sass';

const AdviceCard = ({ id, title, content, link }) => {
  return (
    <div className="advice-card">
      <span className="advice-card__title" id={id}>
        {title}
      </span>
      <p className="advice-card__content">{content}</p>
      <a id={id} href={link} className="advice-card__link" target="_blank">
        ПОДРОБНЕЕ
      </a>
    </div>
  );
};

export default AdviceCard;
