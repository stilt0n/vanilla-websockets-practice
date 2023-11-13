# Notes

This is a small exercise to learn about the WebSockets browser API.

WebSockets are a technology that make interact sessions between a user's browser and a server possible. They allow you to send messages and listen for responses on a continuous basis rather than having to send / respond using discrete requests for connection.

## Web API main interfaces

- WebSocket
- CloseEvent
- MessageEvent

### WebSocket object

## Node

Remember we need WebSockets open both on the server side and the client side for this to work. So for this we're going to use the ws node library.

- Above I used client side to refer to the front-end but ws refers to a "client" in the docks which is not the front-end but a back end that hs the role of a client in the WebSocket communication. In this case they're referring to communication between two servers (e.g. if instead of having a web socket between browser and server you have server-server web socket).

- In this case we're just going to use WebSocketServer from the API.