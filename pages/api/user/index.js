const db = require('../../../db/db');

export default async (req, res) => {
  //const result = await users.findAll();
  //console.log('users', models.users);
  let sql = `SELECT * FROM USERS`;
  console.log('db', db);
  //const result = await db.get(sql);
  db.all(sql, (err, rows) => {
    if (err) res.status(500).json(err);

    res.status(200).json(rows);
  });
  //console.log('result2', result);
  //const users = await models.users.findAll();
};
