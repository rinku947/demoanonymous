var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://suraj:suraj1@ds155730.mlab.com:55730/demowebwing", {
    useMongoClient: true
}).then(function(dbcon){
    console.log("DB connected to MLAB server");
}).catch(function(err){
    console.log(err);
});




module.exports.user=mongoose.model('User',new Schema({
    name:String,
    handle: String,
    password: String,
    phone:String,
    email:String,
    friends:[]
},{strict: false}));
module.exports.online=mongoose.model('online',new Schema({
    handle:String,
    connection_id:String
}));
module.exports.messages=mongoose.model('message',new Schema({
    message : String,
    sender  : String,
    reciever: String,
    date    : Date
}));




