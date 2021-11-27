const express = require('express');
const app = express();

app.get('/', (req, res) => {
    try {
        res.sendFile('C:/Users/paul/Desktop/line/src/index.html')
    } catch (e) {
        console.error('sever error', e);
        res.sendStatus(500)

    }
})