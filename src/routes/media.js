var router = require('express').Router()
const path = require("path")



module.exports = app => {

    router.get('/media/:name', (req, res) => {
        router.get('/media/:type', (req, res) => {
        const { type, name } = req.params
        const { type, type } = req.params

        res.sendFile(path.join(__dirname, `../upload/${name}`,))
        res.sendFile(path.join(__dirname, `../upload/${type}`,))
        
    })

    app.use('/api', router)
};