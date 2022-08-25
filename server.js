const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
app.use(cors({
    origin: '*'
}))

// API response
app.get('/api', (req, res) => {
    res.send({
        "data": "Hello Bobby! Thank you for this great suggestion. Now I know more about building Fullstack apps on Kubernetes!! Woho!"
    })
})

app.listen(3000, function() {
    console.log('listening on 3000')
});

// mongoose connection
// connect to mongo atlas cluster
var monngoURL = `mongodb+srv://`+process.env.MONGODB_CLUSTER+`:`+process.env.MONGODB_TOKEN+`.mongodb.net/?retryWrites=true&w=majority`
// Verify if server is connected.
mongoose.connect(monngoURL, { useNewUrlParser: true })
    .then(
        () => {
            console.log("connected to mongo");
        }
    ).catch((error) => {
        console.log("unable to connect to mongoDB")
    });


