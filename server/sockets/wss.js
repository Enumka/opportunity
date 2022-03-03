const WebSocket = require('ws');

const decoder = new TextDecoder('utf-8');
const webSocket = function (expressServer, sessionParser) {
  const map = new Map();
  // создание сервера
  const wss = new WebSocket.Server({
    clientTracking: false,
    noServer: true,
  });

  expressServer.on('upgrade', (request, socket, head) => {
    console.log('Parsing session from request...');

    sessionParser(request, {}, () => {
      if (!request.session.userId) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        socket.destroy();
        return;
      }

      console.log('Session is parsed!');

      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    });
  });
  wss.on('connection', (ws, request) => {
    const { userId } = request.session;

    map.set(userId, ws);

    ws.on('message', (message) => {
      const messageFrom = JSON.parse(message);
      console.log('------------------', messageFrom);
      switch (messageFrom.type) {
        case 'NEW_MESSAGE':
          for (const [user, userSocket] of map) {
            
            userSocket.send(JSON.stringify({ type: 'NEW_MESSAGE', payload: { message: messageFrom.payload.message } }));
          }
          // map.forEach((client) => {
          //   const [user] = client;
          //   console.log('-----client-->', user);
          //   client.send(JSON.stringify({ type: 'NEW_MESSAGE', payload: { message: messageFrom.payload.message } }));
          // });
          break;
        default:
          break;
      }
    });

    ws.on('close', () => {
      map.delete(userId);
    });
  });
  // expressServer.on('upgrade', (request, socket, head) => {
  //   wss.handleUpgrade(request, socket, head, (websocket) => {
  //     wss.emit('connection', websocket, request);
  //   });
  // });
  // wss.on('connection', (socket) => {
  //   console.log(socket.id, 'CONNECTION');
  //   socket.send('CONNECTION');
  //   socket.on('message', (data) => {
  //     const { type, payload } = JSON.parse(decoder.decode(new Uint8Array(data)));
  //     const { creatorId, workerId, message } = payload;
  //     // eslint-disable-next-line default-case
  //     switch (type) {
  //       case 'CONNECTION':
  //         socket.id = payload.creatorId;
  //         break;
  //       case 'NEW_MESSAGE':
  //         console.log(creatorId, workerId);
  //         console.log(wss.clients);
  //         wss.clients.forEach((client) => {
  //           console.log(client.id, creatorId, workerId);
  //           console.log(client.id === creatorId || client.id === workerId);
  //           if (client.id === creatorId || client.id === workerId) {
  //             console.log('zawel');
  //             client.send(JSON.stringify({ type: 'NEW_MESSAGE', payload: { message } }));
  //           }
  //         });
  //         break;
  //     }
  //   });
  // });
  wss.on('close', (socket, req) => {
    console.log('close');
  });

  return wss;
};

module.exports = webSocket;
