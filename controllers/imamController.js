const imam = require('../models/imam');

exports.getAddImam = (req, res, next) => {
    res.render('add-imam', {
        path: '/imam/add-imam',
        pageTitle: 'Add Imam',
        imam: imam
    })
}

exports.postAddImam = (req, res, next) => {
    const Id = req.body.ImamId;
    const NamaImam = req.body.NamaImam;
    const NomorHP = req.body.NomorHP;
    const Alamat = req.body.Alamat;    
   
    imam.create({
        Id: Id,
        NamaImam: NamaImam,
        NomorHP: NomorHP,
        Alamat: Alamat
        
    }).then(result => {
        res.redirect('/imam/add-imam');
    }).catch(err => {
        throw new Error(err);
    });
}