


var express = require('express');
var bodyParser = require('body-parser');
var todoController = require('./controllers/todoController');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });



//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));


//fire controllers
todoController(app);


app.get('/', function(req, res){
    res.render('index');
});
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});


app.get('/profile/:id', function(req, res){
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.id, data: data});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});








//listen to port
app.listen(3000);
console.log('Now listening to port 3000');