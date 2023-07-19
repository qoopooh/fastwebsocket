// Function to open a WebSocket connection
function openWebSocket() {
    const socket = new WebSocket('ws://localhost:8002/ws');
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };
  
    socket.onmessage = (event) => {
      const response = event.data;
      document.getElementById('outputText').value = response;
    };
  
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    return socket;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const socket = openWebSocket();
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
  
    inputText.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        const inputValue = inputText.value.trim();
  
        if (inputValue !== '') {
          socket.send(inputValue);
          outputText.value = 'Waiting for response...';
        }
      }
    });
  });
  