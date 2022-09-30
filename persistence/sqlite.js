const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
console.log('1111process.env.SQLITE_DB_LOCATION', process.env.SQLITE_DB_LOCATION)
const location = process.env.SQLITE_DB_LOCATION || '/usr/src/sql_lite/sql.db';

let db, dbAll, dbRun;

function init() {
    const dirName = require('path').dirname(location);
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName, { recursive: true });
    }

    return new Promise((acc, rej) => {
        db = new sqlite3.Database(location, err => {
            if (err) return rej(err);

            if (process.env.NODE_ENV !== 'test')
                console.log(`Using sqlite database at ${location}`);

            db.run(
                'CREATE TABLE IF NOT EXISTS like_items (id varchar(36), completed boolean)',
                (err, result) => {
                    if (err) return rej(err);
                    acc();
                },
            );
        });
    });
}

async function teardown() {
    return new Promise((acc, rej) => {
        db.close(err => {
            if (err) rej(err);
            else acc();
        });
    });
}

async function getItems() {
    return new Promise((acc, rej) => {
        db.all('SELECT * FROM like_items', (err, rows) => {
            if (err) return rej(err);
            acc(
                rows.map(item =>
                    Object.assign({}, item, {
                        completed: item.completed === 1,
                    }),
                ),
            );
        });
    });
}

async function getItemCount() {
    return new Promise((acc, rej) => {
        db.all('SELECT COUNT(*) FROM like_items', (err, rows) => {
            if (err) return rej(err);
            acc(rows);
        });
    });
}

async function getItem(id) {
    return new Promise((acc, rej) => {
        db.all('SELECT * FROM like_items WHERE id=?', [id], (err, rows) => {
            if (err) return rej(err);
            acc(
                rows.map(item =>
                    Object.assign({}, item, {
                        completed: item.completed === 1,
                    }),
                )[0],
            );
        });
    });
}

async function storeItem(item) {
    return new Promise((acc, rej) => {
        db.run(
            'INSERT INTO like_items (id, completed) VALUES (?, ?)',
            [item.id, item.completed ? 1 : 0],
            err => {
                if (err) return rej(err);
                acc();
            },
        );
    });
}

async function updateItem(id, item) {
    return new Promise((acc, rej) => {
        db.run(
            'UPDATE like_items SET completed=? WHERE id = ?',
            [item.completed ? 1 : 0, id],
            err => {
                if (err) return rej(err);
                acc();
            },
        );
    });
}

module.exports = {
    init,
    teardown,
    getItems,
    getItem,
    getItemCount,
    storeItem,
    updateItem,
};
