const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(
        {
            id: 1,
            name: 'Harsh Patel',
            age: 20
        },
    
    )
});


app.listen(3000, () => {
    console.log('localhost:3000');
});