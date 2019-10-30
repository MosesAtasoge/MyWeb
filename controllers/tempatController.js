const NamaTempat = require('../models/NamaTempat');

exports.getAddNamaTempat = (req, res, next) => {
    res.render('create-NamaTempat', {
        path: 'create-NamaTempat',
        pageTitle: 'Add Nama Tempat',
        NamaTempat: NamaTempat
    })
    .catch(err => {
        console.log(err);
    });
}

exports.get_landing = (req, res, next) => {
    res.render('landing', {title: 'Data Umat'})
}