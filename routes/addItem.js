const db = require('../backend/src/database');
const uuid = require('uuid');

module.exports = async (req, res) => {
    const item = {
        id: uuid.v4(),
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
