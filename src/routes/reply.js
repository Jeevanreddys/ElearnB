const { replies } = require('../controllers')

var router = require('express').Router()


module.exports = app => {

    router.post('/replies', replies.create)

    router.get('/replies', replies.findAll)



    app.use('/api', router);
}