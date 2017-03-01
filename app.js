var express = require('express'), 
app = express();
//app.use(express.logger());
app.get('/', function(req, res){
    res.send('Ola Mundo');
});
module.exports = app;