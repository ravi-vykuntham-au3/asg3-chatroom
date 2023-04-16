const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Map to store clients and their names
const clients = new Map();

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    message = message.toString(); // convert buffer to string
    const [name, key] = message.split('-');

    // Check if key is valid
    if (key !== '1234') {
      ws.send('Invalid key');
      return;
    }

    clients.set(ws, { name });
    console.log(`Client ${name} joined`);

    // Broadcast message to all clients
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          name,
          message: 'joined the chat',
          connected: true
        }));
      }
    });
  });

  ws.on('close', () => {
    const client = clients.get(ws);
    if (client) {
      const { name } = client;
      clients.delete(ws);
      console.log(`Client ${name} left`);

      // Broadcast message to all clients
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            name,
            message: 'left the chat',
            connected: false
          }));
        }
      });
    }
  });
});

console.log('Server started on port 8080');
