let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./nextjs-sequelize.db');

module.exports = db;
