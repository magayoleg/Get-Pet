export default function socket(text) {
  const socket = new WebSocket('ws://localhost:3002');
  console.log(socket);
  
  socket.onopen = () => {
    console.log('==========');
    socket.send(JSON.stringify({ type: 'USER_CONNECTED' }));
    console.log('==========');

    socket.onmessage = (messageEvent) => {
      const {
        type,
        payload: { userName, message, ownMessage },
      } = JSON.parse(messageEvent.data);

      let str;

      console.log(ownMessage, message);

      // switch (type) {
      //   case 'USER_CONNECTED':
      //     str = `<p class="new-user">${userName} joined the chat</p>`;
      //     break;

      //   case 'NEW_MESSAGE':
      //     str = `<p ${
      //       ownMessage ? "class='own-message'" : ''
      //     }>${userName}: ${message}</p>`;
      //     break;

      //   default:
      //     break;
      // }

      // chat.insertAdjacentHTML('beforeend', str);
    };
  };

  return socket.send(
    JSON.stringify({
      type: 'NEW_MESSAGE',
      payload: text,
    })
  );
}
