const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  console.log('Request received!');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;

//Use try...catch to handle potential errors
try {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
} catch (error) {
  console.error('Error starting server:', error);
}

//Simulate an error by trying to access a non-existent property -  this will now be caught
try {
  console.log(server.nonExistentProperty);
} catch (error) {
  console.error('Error accessing non-existent property:', error);
}