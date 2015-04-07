var express = require('express');
var bodyParser = require('body-parser');
var pg = require("pg");

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Refactor connection and query code
var db = require("./models");

app.get('/articles', function(req,res) {
  console.log("GET /articles");
  db.Article.findAll(
    {include: [db.Author]}
    ).then(function (articles) {
  	res.render("articles/index", {articlesList: articles});
  });
});

app.get('/articles/new', function(req,res) {
  res.render('articles/new');
});

app.post('/articles', function(req,res) {
	console.log(req.body);
	var title = req.body.title;
	var author = req.body.author;
	var content = req.body.content;
	var fiction = req.body.fiction;

	db.Article.create({title: title, author: author, content: content, fiction: fiction})
  .then( function(article) {
		res.redirect('/articles/');
	})

});

app.get('/articles/:id', function(req, res) {
  console.log(req.body);
  db.Article.find({where: {id: req.params.id}})
  .then(function (articles) {
  	res.render("articles/article", {article: articles});
  });
});

app.get('/articles/:id/edit', function(req, res) {

});

app.get('/authors', function(req, res) {

});

app.get('/authors/new', function(req, res) {

});

app.post('/authors', function(req, res) {

});

app.get('/authors/:id', function(req, res) {

});

app.get('/', function(req,res) {
  res.render('site/index.ejs');
});

app.get('/about', function(req,res) {
  res.render('site/about');
});

app.get('/contact', function(req,res) {
  res.render('site/contact');
});

db.sequelize.sync().then(function() {
  var server = app.listen(3000, function() {
    // This part just adds a snazzy listening message:
    console.log(new Array(51).join("*"));
    console.log("\t LISTENING ON: \n\t\t localhost:3000");
    console.log(new Array(51).join("*")); 
  });
});

// app.listen(3000, function() {
//   console.log('Listening');
// });