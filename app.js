const express = require('express');
const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');

const Sequelize = require('./util/database');

const app = express();

// Templating Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));

//Routing
const landingRoute = require('./routes/landingRoute');
const imamRoute = require('./routes/imamRoute');
const uskupRoute = require('./routes/uskupRoute');


//Route
app.use('/', landingRoute);
app.use('/imam', imamRoute);
app.use('/uskup', uskupRoute);



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