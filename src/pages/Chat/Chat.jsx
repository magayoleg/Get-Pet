import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ChatRoom from './ChatRoom/ChatRoom';

import './Chat.sass';

export function Chat({style, changeStyle, postData, messagesData}) {
  console.log('-------------postData ChatPage--------------', postData);
  // const [activeRoom, setActiveRoom] = useState({});
  const [message, setMessage] = useState({});
  const [messages, setMessages] = useState([]);
  // const [messages, setMessages] = useState(messagesData);
  const webSocket = useRef(null);

  const handleSendMessage = async () => {
    webSocket.current.send(JSON.stringify({
      type: 'NEW_MESSAGE',
      payload: {
        message,
        receiver: postData.userId,
      }
    }));
  };

  useEffect(() => {
    webSocket.current = new WebSocket("ws://localhost:3000");
    return () => webSocket.current.close();
  }, []);

  useEffect(() => {
    webSocket.current.onmessage = (messageData) => {
      const {type, payload: {owner, message}} = JSON.parse(messageData.data);
    
      setMessages(prev => [...prev, message]);
    };
  }, [webSocket]);

  useEffect(async () => {
    const url = `http://localhost:3000/messages?receiverId=${postData.userId}`;
    const r = await fetch(url, {credentials: 'include'});
    const result = await r.json();
    console.log('-----result------', result)
  }, []);

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
          <ChatRoom name={postData.userName} style={{ margin: '0px', boxShadow: 'none', boxShadow: '0 5px 5px -5px rgba(5, 4, 4, 0.2)' }} />
          <button className='chat-form__close' onClick={changeStyle}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <ul className='messages-area__list'>
            {
            message.owner 
            ? messages.map(el => <p key={postData.id} className='messages-area__right'>{el.message}</p>)
            : messages.map(el => <p key={postData.id} className='messages-area__left'>{el.message}</p>)
            }
          </ul>
        </div>
        <div className="chat-form">
          <input
            value={message.message}
            className="chat-form__input"
            placeholder="Сообщение"
            onChange={(e) => setMessage({message: e.target.value})}
          />
          <button className='chat-form__submit' onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}