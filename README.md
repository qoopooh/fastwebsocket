# fastwebsocket
FastAPI with WebSocket

With the help of [gpt-engineer](https://github.com/AntonOsika/gpt-engineer), we can create an application like this.

1. `app`: This is the main FastAPI application instance. It will be used to define the routes for our application.

2. `@app.websocket("/ws")`: This is a decorator that defines a new WebSocket route at the path "/ws". It will be used to handle WebSocket connections.

3. `async def websocket_endpoint(websocket: WebSocket)`: This is the main function that will handle the WebSocket connections. It will accept the WebSocket connection, receive the text input from the user, and send back the echo message.