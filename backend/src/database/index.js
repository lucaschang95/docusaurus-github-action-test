const fs = require('fs');
const waitPort = require('wait-port');
const mysql = require('mysql2');

// const {
//     MYSQL_HOST: host,
//     MYSQL_USER: user,
//     MYSQL_PASSWORD: password,
//     MYSQL_DB: db,
// } = process.env;

let pool;

async function init() {
    await waitPort({ host: '81.70.59.149', port : 3306});
    console.log('port exist!');
    pool = mysql.createPool({
        connectionLimit: 10,
        host: '81.70.59.149',
        port: 3306,
        user: 'root',
        password: 'my-secret-pw',
        database: 'docusaurus'
    });
}

async function teardown() {
    return new Promise((acc, rej) => {
        pool.end(err => {
            if (err) rej(err);
            else acc();
        });
    });
}

async function getLikeStatus(id) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT user_id FROM webpage_like WHERE user_id = ?', [id], (err, rows) => {
            if (err) return reject(err);
            resolve(rows.length ? true : false);
        })
    })
}
// create table webpage_like (
//   user_id varchar(32) not null,
//   create_time timestamp not null default current_timestamp,
//   primary key (user_id)
// );
// INSERT INTO table_name
// VALUES (value1, value2, value3, ...);
// (id, name, completed) VALUES (?, ?, ?)

async function likeWebsite(id) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO webpage_like (user_id) VALUES (?)', [id], (err, rows) => {
            if (err) return reject(err);
            resolve();
        })
    })
}

async function getLikeCount() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT COUNT(*) FROM webpage_like', (err, rows) => {
            if (err) return reject(err);
            console.log('row', rows, rows?.[0], rows?.[0]?.['COUNT(*)']);
            Object.values(rows)
            resolve(rows?.[0]?.['COUNT(*)']);
        })
    })
}

module.exports = {
    init,
    teardown,
    getLikeStatus,
    likeWebsite,
    getLikeCount
};
