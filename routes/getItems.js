const db = require('../backend/src/database');

module.exports = async (req, res) => {
    const items = await db.getItems();
    res.send(items);
};
