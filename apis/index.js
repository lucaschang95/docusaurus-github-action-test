const express = require('express');
const app = express();
const db = require('../persistence');
const getItems = require('../routes/getItems');
const addItem = require('../routes/addItem');

const port = 3000;

app.get('/api/like', getItems);
app.post('/api/like/add', addItem);


db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
