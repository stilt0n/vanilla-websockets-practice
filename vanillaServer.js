const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
  res.end("Connected!");
});

// websocket piggybacks on server we passed
const wss = new websocket.WebSocketServer({ server });

/*
Callback here gets headers which is an array and request which
is type http.IncomingMessage

This is emitted before response headers are writter as part of the handshake.
So it can be used to modify headers before they are sent.
*/
wss.on('headers', (headers, req) => {
  /* 
    This returns 101 code (vs 200, 400, 404, etc.) which is the
    'Switching Protocols' code
  */
  console.log(headers);
});

// Callback here gets a websocket object and a request object
wss.on('connection', (ws, req) => {
  ws.send('Welcome to the websocket server.');
  ws.on('message', (data) => {
    // Note data comes back as a binary buffer. So we'll need
    // to convert it if we don't want that.
    console.log(data.toString());
  })
});

server.listen(8000);