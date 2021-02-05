const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class SiteController {
    // [GET] /
    index(req, res, next) {
        
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();