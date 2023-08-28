module.exports = function(app) {

    app.get('/todo', function(req, res){
        res.render('todo');
    });

    app.post('/todo', function(req, res){
        console.log(req.body);
    });

    app.delete('/todo', function(req, res){
        
    });

};