const express = require('express');
const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');

const Sequelize = require('./util/database');

const app = express();

// Templating Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routing
const tempatRoute = require('./routes/tempatRoute');

//Route
app.use('/', tempatRoute);
app.use('/NamaTempat', tempatRoute);

Sequelize
    // Buat Reset Database table
    // .sync({force: true})
    // // Sync Database yg ada
    .sync()
    .then(result => {
        app.listen(process.env.PORT)
    }).catch(err => {
        console.log(err);
    });