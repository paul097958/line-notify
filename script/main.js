const express = require('express');
const app = express();

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

app.listen(3000)