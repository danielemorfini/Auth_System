const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({
		message: `GET request OK`,
		status: 200
	});
});

router.get('/:username', (req, res) => {
	res.send({
		message: `GET (${req.params.username}) request OK`,
		status: 200
	});
});

router.post('/', (req, res) => {
	res.send({
		message: `POST request OK`,
		status: 200
	});
});

router.put('/:username', (req, res) => {
	res.send({
		message: `PUT request OK`,
		status: 200
	});
});

router.delete('/:username', (req, res) => {
	res.send({
		message: `DELETE request OK`,
		status: 200
	});
});

module.exports = router;