const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('HI, NODE Express!!!');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 기다리는중입니다.');
})