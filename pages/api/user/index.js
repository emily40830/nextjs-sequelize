const db = require('../../../db/db');

export default async (req, res) => {
  //const result = await users.findAll();
  //console.log('users', models.users);
  let sql = `SELECT * FROM USERS`;
  //const result = await db.get(sql);
  db.all(sql, (err, rows) => {
    if (err) throw err;

    res.status(200).json(rows);
  });
  //console.log('result2', result);
  //const users = await models.users.findAll();
};
