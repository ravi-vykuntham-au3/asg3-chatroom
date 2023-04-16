// const ws = new WebSocket('ws://localhost:8080');

// ws.addEventListener('open', () => {
//   const name = prompt('Enter your name:');
//   const key = prompt('Enter the key:');

//   ws.send(`${name}-${key}`);
// });

// ws.addEventListener('message', event => {
//   const data = JSON.parse(event.data);
//   const { name, message, connected } = data;

//   const color = connected ? 'green' : 'red';

//   const messageElem = document.createElement('div');
//   messageElem.style.color = color;
//   messageElem.innerHTML = `<strong>${name}</strong>: ${message}`;

//   document.getElementById('messages').appendChild(messageElem);
// });

// document.getElementById('chat-form').addEventListener('submit', event => {
//   event.preventDefault();

//   const inputElem = document.getElementById('chat-input');
//   const message = inputElem.value.trim();

//   if (message === '') {
//     return;
//   }

//   ws.send(message);

//   inputElem.value = '';
// });


// const ws = new WebSocket('ws://localhost:8080');

// ws.addEventListener('open', () => {
//   const name = prompt('Enter your name:');
//   const key = prompt('Enter the key:');

//   ws.send(`${name}-${key}`);
// });

// ws.addEventListener('message', event => {
//   const data = JSON.parse(event.data);
//   console.log('Received data:', data);

//   const { name, message, connected } = data;

//   const color = connected ? 'green' : 'red';

//   const messageElem = document.createElement('div');
//   messageElem.style.color = color;
//   messageElem.innerHTML = `<strong>${name}</strong>: ${message}`;
//   console.log('Created message element:', messageElem);

//   document.getElementById('messages').appendChild(messageElem);
// });

// document.getElementById('chat-form').addEventListener('submit', event => {
//   event.preventDefault();

//   const inputElem = document.getElementById('chat-input');
//   const message = inputElem.value.trim();

//   if (message === '') {
//     return;
//   }

//   ws.send(message);

//   inputElem.value = '';
// });


const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', () => {
  const name = prompt('Enter your name:');
  const key = prompt('Enter the key:');

  ws.send(`${name}-${key}`);
});

ws.addEventListener('message', event => {
  const data = JSON.parse(event.data);
  const { name, message, connected } = data;

  const color = connected ? 'green' : 'red';

  const messageElem = document.createElement('div');
  messageElem.style.color = color;
  messageElem.innerHTML = `<strong>${name}</strong>: ${message}`;

  document.getElementById('messages').appendChild(messageElem);
});

document.getElementById('chat-form').addEventListener('submit', event => {
  event.preventDefault();

  const inputElem = document.getElementById('chat-input');
  const message = inputElem.value.trim();

  if (message === '') {
    return;
  }

  const messageElem = document.createElement('div');
  messageElem.style.color = 'blue';
  messageElem.innerHTML = `<strong>You</strong>: ${message}`;

  document.getElementById('messages').appendChild(messageElem);

  ws.send(message);

  inputElem.value = '';
});


