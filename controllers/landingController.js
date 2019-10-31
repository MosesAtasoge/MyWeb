exports.get_landing = (req, res, next) => {
    res.render('landing', {
        path: '/landing',
        pageTitle: 'Admin Dashboard'
    });
}