const http = require('http');

const port = 8080;
const users = [{ id: 1, name: 'Aegon' }, { id: 2, name: 'Tyrion' }, { id: 3, name: 'Jamie' }];
const app = new http.Server();

app.on('request', (req, res) => {
  req.on('close', () => console.log('REQUEST CLOSE (client aborted request)'));
  req.on('end', () => console.log('REQUEST END (request was received successfully)'));

  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users.map(u => ({ ...u, timestamp: new Date() }))));
  }, 100);
});

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
