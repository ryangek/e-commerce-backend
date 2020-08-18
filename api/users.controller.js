'use strict';

var users = require('../service/users');

var controllers = {
  findAll: function (req, res) {
    users.findAll(req, res, function (err, results) {
      if (err) res.json({ data: null, error: err, message: err.toString() });
      res.json({ data: results, message: '...' });
    });
  },
  findById: function (req, res) {
    users.findById(req, res, function (err, results) {
      if (err) res.json({ data: null, error: err, message: err.toString() });
      res.json({ data: results, message: '...' });
    });
  },
  save: function (req, res) {
    users.save(req, res, function (err, results) {
      if (err) res.json({ data: null, error: err, message: err.toString() });
      res.json({ data: results, message: '...' });
    });
  },
  update: function (req, res) {
    users.update(req, res, function (err, results) {
      if (err) res.json({ data: null, error: err, message: err.toString() });
      res.json({ data: results, message: '...' });
    });
  },
  delete: function (req, res) {
    users.delete(req, res, function (err, results) {
      if (err) res.json({ data: null, error: err, message: err.toString() });
      res.json({ data: results, message: '...' });
    });
  },
};

module.exports = controllers;
