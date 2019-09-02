const express = require('express');
const mongose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();
mongose.connect(
  'mongodb+srv://miojo:miojo@cluster0-fjrrm.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);
