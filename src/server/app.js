var path = require('path')
var express = require('express');
var app = express();
const mockAPIResponse = require('./mockAPI.js');
var cors = require('cors');
var bodyParser = require('body-parser')
var requestPost = require('./handleRequest')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'));

app.get('/', function(req, res){
    //res.sendFile('/views/index.html', { root:path.join(__dirname, '../client') });
    res.sendFile(path.resolve('dist/index.html'));
    
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
app.post('/article', requestPost.validateRequest, requestPost.registerPostHandler);


module.exports = app;

