const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  console.log('Request received!');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Simulate an error by trying to access a non-existent property
console.log(server.nonExistentProperty);