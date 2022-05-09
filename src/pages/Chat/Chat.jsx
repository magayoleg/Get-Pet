import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import ChatRoom from './ChatRoom/ChatRoom';
import socket from './socket';

import './Chat.sass';

export function Chat({ style, changeStyle }) {

  const webSocket = () => {
    socket('text');
  };

  // const [activeRoom, setActiveRoom] = useState({});
  return (
    <div className={style}>
      {/* <ul className="chat__rooms">
        <li>
          <ChatRoom name="Иванов Дмитрий" />
        </li>
        <li>
          <ChatRoom name="Смирнов Максим" />
        </li>
        <li>
          <ChatRoom name="Кузнецов Олег" />
        </li>
      </ul> */}

      <div className="chat__area">
        <div className="chat__messages messages-area">
          <ChatRoom
            name="Иванов Дмитрий"
            style={{
              margin: '0px',
              boxShadow: 'none',
              boxShadow: '0 5px 5px -5px rgba(5, 4, 4, 0.2)',
            }}
          />
          <button className="chat-form__close" onClick={changeStyle}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <ul className="messages-area__list">
            <li className="messages-area__left">Привет</li>
            <li className="messages-area__right">Привет!</li>
          </ul>
        </div>
        <div name="chat" className="chat-form" >
          <input className="chat-form__input" placeholder="Сообщение" />
          <button className="chat-form__submit" onClick={webSocket}>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
