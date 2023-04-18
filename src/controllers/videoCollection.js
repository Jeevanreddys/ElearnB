const { VideoCollection } = require("../models")
const { handleResponse, handleError } = require("../utils/helpers")

exports.findAll = async (req, res) => {
    const courceVideo = await VideoCollection.find().then(data => { handleResponse(res, data, 200) }).catch(err => { handleError(err, 400, res) })
}

exports.getVideoCollectionByCourceVideo = async (req, res) => {

    await VideoCollection.findOne({ cource_video_Id: req.params.id })
        .then(data => {
            handleResponse(res, data, 200)
        }).catch(err => { handleError(err, 400, res) })
}