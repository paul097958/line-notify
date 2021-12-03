const express = require('express');
const app = express();
const axios = require('axios');
const Formdata = require('form-data');

app.get('/', (req, res) => {
    try {
        res.sendFile('C:/Users/paul/Desktop/line/src/index.html');
    } catch (e) {
        console.error('sever error', e);
        res.sendStatus(500)

    }
})

app.get('/index.js', (req, res) => {
    try {
        res.sendFile('C:/Users/paul/Desktop/line/src/js/index.js');
    } catch (e) {
        console.error('sever error', e);
        res.sendStatus(500)

    }
})

app.get('/readform', (req, res) => {
    try {
        res.sendFile('C:/Users/paul/Desktop/line/src/index.html');
        let message = req.query.message;
        let stickerPackageId = req.query.stickerPackageId;
        let stickerId = req.query.stickerId;

        let formdata = new Formdata()
        formdata.append("message", message);
        formdata.append("stickerPackageId", stickerPackageId);
        formdata.append("stickerId", stickerId);
        let head = Object.assign({
            'Authorization': 'Bearer CciBEJrsGnIqydiovzi5G2fiuJfi2mtHb0xMZppnsLx'
        }, formdata.getHeaders())


        axios({
            method: "post",
            url: 'https://notify-api.line.me/api/notify',
            headers: head,
            data: formdata

        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (e) {
        console.error('sever error', e);
        res.sendStatus(500)
    }
})

app.listen(3000);

