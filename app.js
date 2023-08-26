// var http = require('http');
// var fs = require('fs');




// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);

//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } 
//     else if (req.url === '/api' || req.url === '/api/') {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     var myObj = {
//         name: 'Ryu',
//         job: 'Ninja',
//         age: 29
//     };
//     res.end(JSON.stringify(myObj));
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     };
// });

// server.listen(3000, '127.0.0.1');
// console.log('Now listening to port 3000');



var express = require('express');
var app = express();



app.get('/', function(req, res){
    res.send('this is the homepage');
});
app.get('/contact', function(req, res){
    res.send('this is the contact page');
});


app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of ' + req.params.id);
});




app.listen(3000);