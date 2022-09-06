const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! from docker compose')
})

app.get('/node', (req, res) => {
  res.send('Hello World! from docker compose, path -> /node')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})