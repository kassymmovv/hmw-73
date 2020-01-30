const express = require('express');
const app = express();
const port = 8080;
const Vigenere = require('caesar-salad').Vigenere;
const password = 12342344;


app.get('/GET/encode/:name',(req,res) => {

    res.send(Vigenere.Cipher(password).crypt(req.params.name))
    //
});
app.get('/GET/decode/:name', (req,res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.name))
});
app.listen(port, () => {
    console.log(port)
});