const express = require('express');
const carsRouter = require('./cars/carsRouter.js');
const server = express().use(express.json());
const helmet = require('helmet');
const cors = require('cors');

server.use(helmet());
server.use(cors());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
	res.status(200).json({ message: ` --> --> --> [][][][] ` });
});

module.exports = server;
