import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { getAllMessagesThunk } from '../../redux/thunks/getAllMessagesThunk';
import * as endPoints from '../../config/endPoints';
import ChatRoom from './ChatRoom/ChatRoom';
import './Chat.sass';

export function Chat({
  userInfo,
  style,
  switchChat,
  getNewAllMessage,
  allMessages,
}) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const webSocket = useRef(null);

  const handleSendMessage = async () => {
    webSocket.current.send(
      JSON.stringify({
        type: 'NEW_MESSAGE',
        payload: {
          message: { message },
          receiver: userInfo.userId,
        },
      })
    );
  };

  useEffect(() => {
    webSocket.current = new WebSocket(endPoints.ws());
    // webSocket.current.close();
    // return () => webSocket.current.close();
  }, []);

  useEffect(() => {
    webSocket.current.onmessage = (messageData) => {
      const {
        type,
        payload: { owner, message },
      } = JSON.parse(messageData.data);
      setMessages((prev) => [...prev, message]);
    };
  }, [webSocket]);

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
          <div className='chat-info'>
            <ChatRoom
              name={userInfo.userName}
              style={{
                margin: '0px',
                boxShadow: 'none',
                boxShadow: '0 5px 5px -5px rgba(5, 4, 4, 0.2)',
              }}
            />
            <button className="chat-info__close" onClick={switchChat}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          <ul className="messages-area__list">
            {allMessages?.map((el, index) => {
              if (el.owner) {
                return (
                  <li key={`message-${index}`} className="messages-area__right">
                    {el.message}
                  </li>
                );
              } else {
                return (
                  <li key={`message-${index}`} className="messages-area__left">
                    {el.message}
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="chat-form">
          <input
            value={message}
            className="chat-form__input"
            placeholder="Сообщение"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="chat-form__submit"
            onClick={() => {
              handleSendMessage();
              getNewAllMessage();
              setMessage('');
            }}
          >
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
