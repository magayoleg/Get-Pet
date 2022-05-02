import { UserChat } from "../../components/UserChat";
import { UserMessageInChat } from "../../components/UserMessageInChat";
import { Button } from '../../components/Button';

import "./chat.css";

export function Chat() {
  return (
    <div className="chat__container">

      <div className='chat__chats_group'>
        <div className='chat__chats'>
          <UserChat className='chat__chats' name={'Ivanov I.W.'}/>
        </div>
        <div className='chat__chats_buttons'>
          <Button name={'Выйти'} />
        </div>
      </div>

      <div className='chat__messages_area'>
        <div className='chat__messages'>
          <UserMessageInChat id={1} name={'Max'} message={'Hello'} image={'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'} createdAt={'17:05:21, 02.05.22'} />
        </div>
        <div className='chat__messages_input_container'>
          <input className='chat__messages_input' placeholder='Enter your message here ...' />
        </div>
        <div className='chat__messages_buttons'>
          <Button name={'Очистить'} />
          <Button name={'Отправить'} />
        </div>
          
      </div>
    </div>
  );
}
