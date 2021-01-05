//imports
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//GET request
app.get('/', (req, res) => {
    res.json({
        message: "Hello world"
    })
})

app.listen(port, () => {
    console.log("The server is running on port", port)
})