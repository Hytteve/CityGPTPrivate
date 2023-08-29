var express = require('express');
var bodyParser = require('body-parser');
// var todoController = require('./controllers/todoController');
var port = process.env.PORT || 5001;
var fs = require('fs');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });



//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));

var API_TOKEN = "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"; 

async function query(filename) {
    const data = fs.readFileSync(filename);
    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
        {
            headers: { Authorization: `Bearer ${API_TOKEN}` },
            method: "POST",
            body: data,
        }
    );
    const result = await response.json();
    return result;
}

//fire controllers
// todoController(app);



app.get('/', function(req, res){
    res.render('index');
});

app.post('/upload', urlencodedParser, function(req, res){
    console.log(req.body);
    query(`public/${req.body.model}.jpg`).then((response) => {
        console.log(JSON.stringify(response));
        res.render('index-success', {data: response, model: req.body.model});
    });
});
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/contact', function(req, res){
//     res.render('contact', {qs: req.query});
// });


// app.get('/profile/:id', function(req, res){
//     var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
//     res.render('profile', {person: req.params.id, data: data});
// });

// app.post('/contact', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.render('contact-success', {data: req.body});
// });








// listen to port
app.listen(port, () => console.log(`Listening on port ${port}`));
