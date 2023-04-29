var router = require('express').Router()
const { helpDesks } = require('../controllers')


module.exports = app => {

    router.post('/help-desks', helpDesks.create)


    app.use('/api', router)
}