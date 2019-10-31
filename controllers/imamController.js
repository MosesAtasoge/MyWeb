const imam = require('../models/imam');

exports.getAddImam = (req, res, next) => {
    res.render('add-imam', {
        path: '/imam/add-imam',
        pageTitle: 'Add Imam',
        imam: imam
    })
}