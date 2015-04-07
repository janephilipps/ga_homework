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
	var content = req.body.content;
	var fiction = req.body.fiction;
  var authorId = req.body.AuthorId

	db.Article.create({title: title, AuthorId: authorId, content: content, fiction: fiction})
  .then( function(article) {
		res.redirect('/articles/');
	})

});

app.get('/articles/:id', function(req, res) {
  console.log(req.body);
  db.Article.find({include: [db.Author]}, {where: {id: req.params.id}})
  .then(function (articles) {
  	res.render("articles/article", {article: articles});
  });
});

app.get('/articles/:id/edit', function(req, res) {

});

app.get('/authors', function(req, res) {
  db.Author.findAll().then(function (authors) {
    res.render("authors/index", {authorsList: authors});
  });
});

app.get('/authors/new', function(req, res) {
  res.render('authors/new');
});

app.post('/authors', function(req, res) {
  console.log(req.body);
  var firstName = req.body.first_name;
  var lastName = req.body.last_name;

  db.Author.create({first_name: firstName, last_name: lastName})
  .then( function(author) {
    res.redirect('/authors/');
  })
});

app.get('/authors/:id', function(req, res) {
  console.log(req.body);
  db.Author.find({where: {id: req.params.id}})
  .then(function (authors) {
    res.render("authors/author", {author: authors});
  });
});

app.get('/', function(req,res) {
  res.render('site/index');
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