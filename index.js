const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('We have created a server using expressjs');
})


app.listen(3001, () => console.log('listen on port 3001'))