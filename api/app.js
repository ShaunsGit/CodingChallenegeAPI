const express = require('express');
const cors = require('cors');
const app = express();
//using CORS to prevent specific errors
app.use(cors());
const morgan = require('morgan');
const bodyParser = require('body-parser');

//get path for user
const userRoute = require('./user');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//allowing all headers and Origins (just for development purposes only)
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Mehtods' , 'PUT, POST, PATCH, DELETE, GET');
    }
    next();
})

//set index.html to be the hosted webpage
app.use(express.static('public'));


//set path for user
app.use('/user', userRoute);

//error handling for bad requests
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;
