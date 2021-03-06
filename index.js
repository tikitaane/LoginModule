const express = require('express');
const app = express();
const port = 5000

const mongoose = require('mongoose');
// mongoose.Promise = Promise;
// mongoose.set('useCreateIndex', true);
// var mongooseOptions = {  useNewUrlParser: true }
mongoose.connect('mongodb://localhost:27017',
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))