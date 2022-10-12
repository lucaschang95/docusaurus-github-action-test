const fs = require('fs');
const path = require('path');
if (process.env.node_env === 'development') {
    require('dotenv').config({ path: path.resolve(__dirname, '../.development.env')})
}
const db = require('./database');
const express = require('express');
const indexRouter = require('./router/index');
const app = express();
const PORT = 3000;

app.use('/', (req, res, next) => {
    console.log(req.path);
    next();
})

app.use('/api', indexRouter);

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
