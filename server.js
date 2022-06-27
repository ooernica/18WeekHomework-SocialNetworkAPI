const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect('mongodb://localhost:27017/todoMongoDB')
    .then(async () => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extendeed: true })); 
app.use(routes);

app.listen(PORT, () => console.log('server is on'));