const uskup = require('../models/uskup');

exports.getAddUskup = (req, res, next) => {
    res.render('add-uskup', {
        path: '/uskup/add-uskup',
        pageTitle: 'Add Uskup',
        uskup: uskup
    })
}
