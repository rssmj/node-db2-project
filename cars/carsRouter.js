const express = require('express');
const knex = require('knex');
const knexfile = require('../knexfile.js');
const db = knex(knexfile.development);
const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then((cars) => {
			res.status(200).json(cars);
		})
		.catch(() => {
			res.status(500).json({ BEEP: 'no cars' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	db('cars')
		.where({ id })
		.then(() => {
			car.length !== 0
				? res.status(200).json(car)
				: res.status(404).json({ HONK: `car id: ${id} is not real` });
		})
		.catch(() => {
			res.status(500).json({ BEEP: 'no cars' });
		});
});

router.post('/', (req, res) => {
	const { id } = req.params;
	const newCar = req.body;
	db('cars')
		.insert(newCar, id)
		.then((ids) => {
			res.status(201).json({NEW_CAR: ids, newCar});
		})
		.catch(() => {
			res.status(500).json({ CRASH: 'car accidents happen' });
		});
});






module.exports = router;
