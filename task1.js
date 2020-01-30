const express = require('express');
const app = express();
const port = 8000;

app.get('/GET/:name', (req,res) => {
    res.send(req.params.name)
});
app.listen(port,() => {
    console.log('We are line on' + port)
});