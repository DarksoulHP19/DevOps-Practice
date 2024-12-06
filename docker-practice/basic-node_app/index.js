const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(
      "Hello World"+
      "i am fine"
    )
});


app.listen(3000, () => {
    console.log('http:/localhost:3000');
});