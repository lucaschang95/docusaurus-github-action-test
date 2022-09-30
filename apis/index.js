const fs = require('fs');
const path = require('path');
if (process.env.node_env === 'development') {
    require('dotenv').config({ path: path.resolve(__dirname, '../.development.env')})
}
const express = require('express');
const app = express();
const getItems = require('../routes/getItems');
const getItemCount = require('../routes/getItemCount');
const addItem = require('../routes/addItem');
const db = require('../persistence');

const PORT = 3000;

app.get('/api/like', getItems);
app.get('/api/like/count', getItemCount);
app.post('/api/like/add', addItem);


db.init().then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
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
