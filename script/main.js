const express = require('express');
const app = express();
const axios = require('axios');
const Formdata = require('form-data');
const path = require('path');
const port = 3000 || process.env.EXPRESS_PORT
require('dotenv').config();
const pathDir = path.resolve('./src');
console.log('the src dir:', pathDir);

// send the index file
app.get('/', (req, res) => {
    try {
        res.sendFile(pathDir+'/index.html');
    } catch (e) {
        console.error('sever error', e);
        res.sendStatus(500)

    }
})
// load js file
app.get('/index.js', (req, res) => {
    try {
        res.sendFile(pathDir+'/js/index.js');
    } catch (e) {
        console.error('sever error', e);
        res.sendStatus(500)

    }
})
//  send axios req
app.get('/readform', (req, res) => {
    try {
        //  send index file
        res.sendFile(pathDir+'/index.html');
        //  get get req
        let message = req.query.message;
        let stickerPackageId = req.query.stickerPackageId;
        let stickerId = req.query.stickerId;
        //  make data
        let formdata = new Formdata()
        formdata.append("message", message);
        formdata.append("stickerPackageId", stickerPackageId);
        formdata.append("stickerId", stickerId);
        //  make header
        let head = Object.assign({
            'Authorization': `Bearer ${process.env.LINE_TOKEN}`
        }, formdata.getHeaders())
        //  make axios server
        axios({
            method: "post",
            url: 'https://notify-api.line.me/api/notify',
            headers: head,
            data: formdata

        })
            .then(function (res) {
                console.log('axios res data:',res.data);
            })
            .catch(function (e) {
                console.log('axios err:',e);
            });
    } catch (e) {
        console.error('axios sever error:', e);
        res.sendStatus(500)
    }
})

app.listen(port);

