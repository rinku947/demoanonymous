var express=require('express');
var app=express();
var http=require('http').Server(app);
var io = require('socket.io')(http);
var ip = require('ip');
const PORT=process.env.PORT || 5200;
app.use(express.static(__dirname));
var bodyParser=require('body-parser');

require("./controller/controller.js")(app,io);




app.use(express.static(__dirname));
var expressValidator=require('express-validator');
var mongoose=require('mongoose');
var crypto=require('crypto');

const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'http') {
            return res.redirect(
                ['http://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
  app.use(forceSSL());



http.listen(PORT,function(){
    console.log("Node Server is setup and it is listening on http://"+ip.address()+":"+PORT);
})