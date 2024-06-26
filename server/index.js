const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use('/', require('./routes/users'));


mongoose
	.connect(process.env.APP_MONGO_URL)
	.then(() => console.log(`MongoDB connected!`))
	.catch((error) => console.log(`Error in MongoDB connection! ${error}`));

app.listen(process.env.APP_PORT, () => {
	console.log(`Listening on port ${process.env.APP_PORT}`);
});
