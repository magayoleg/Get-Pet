import "./usermessageinchat.css";

export function UserMessageInChat({ id, name, message, image, createdAt }) {
  return (
    <div className="usermessageinchat__container">

      <div className="usermessageinchat__avatar_and_message_block">
        <div className="usermessageinchat__avatar_and_name_block">
          <div className='usermessageinchat__avatar_image'>
            <img src={image} alt='avatar'></img>
          </div>
          <div className='usermessageinchat__avatar_name'>
            <span>{name}</span>
          </div>
        </div>
        <div className="usermessageinchat__message">
          {message}
        </div>
      </div>

      <div className='usermessageinchat__timestamp'>
        <span>{createdAt}</span>
      </div>

    </div>
  );
}
