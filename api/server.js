const express = require('express');

const Actors = require('../actors/actorsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/actors', (req, res) => {
    Actors.getAll()
      .then(actors => {
          res.status(200).json(actors);
      })
      .catch(error => {
          res.status(500).json(error);
      });
});







module.exports = server;