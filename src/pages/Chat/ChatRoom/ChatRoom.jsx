import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './ChatRoom.sass';

const ChatRoom = ({ name, style }) => {
  return (
    <div className="chat-room" style={style}>
      <input type="checkbox" />
      <div className="chat-room__wrapper">
        <div className="chat-room__photo">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="chat-room__title">{name}</div>
      </div>
    </div>
  );
};

export default ChatRoom;