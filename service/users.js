var db = require('../database/db');
var users = {
  findAll: function (req, res, next) {
    db.query('SELECT * FROM users', function (err, results) {
      next(err, results);
    });
  },
  findById: function (req, res, next) {
    db.query('SELECT * FROM users WHERE id=?', [req.params.id], function (
      err,
      results
    ) {
      next(err, results.length > 0 ? results[0] : null);
    });
  },
  save: function (req, res, next) {
    const { username, password, firstname, lastname } = req.body;
    db.query(
      'INSERT INTO users values(null, ?, ?, ?, ?)',
      [username, password, firstname, lastname],
      function (err, results) {
        next(err, results);
      }
    );
  },
  update: function (req, res, next) {
    const { username, firstname, lastname } = req.body;
    db.query(
      'UPDATE users SET username=?,firstname=?, lastname=? WHERE id=?',
      [username, firstname, lastname, req.params.id],
      function (err, results) {
        next(err, results);
      }
    );
  },
  delete: function (req, res, next) {
    db.query('DELETE FROM users WHERE id=?', [req.params.id], function (
      err,
      results
    ) {
      next(err, results);
    });
  },
};

module.exports = users;
