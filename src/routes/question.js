var router = require('express').Router()
const { questions } = require('../controllers')


module.exports = app => {

    router.post('/questions', questions.create)
    router.get('/questions', questions.findAll)
    
    router.delete('/questions/:id', questions.delete)

    router.get('/questions/:video_id', questions.getQuestionByVideoId)

    app.use('/api', router)
}