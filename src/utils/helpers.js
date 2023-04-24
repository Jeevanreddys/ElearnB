const nodemailer = require('nodemailer');

const Sib = require('sib-api-v3-sdk');
const client = Sib.ApiClient.instance;

const { Option, Answer, Question } = require('../models');

exports.handleResponse = (res, data, status = 200) => res.status(status).json({ data, error: false });

exports.handleError = (error, status = 400, res,) => {
    if (error.details) {
        const data = {};
        error?.details.forEach(v => {
            data[v.context?.key] = [v.message.replace(/"/g, '')];
        })

        return res.status(status).send({ error: data })
    }
    else {
        return res.status(400).send({
            message: error, error: true
        })
    }
}
