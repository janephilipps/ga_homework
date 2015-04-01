// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();

// Set the view engine to be "EJS"
app.set('view engine', 'ejs');

// Set up body parser
app.use(bodyParser.urlencoded({extended: false}));

// Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'))

// Let's add some routes here together:
app.get('/', function(req, res) {
   res.render('index'); // We use res.render to display an EJS file instead of res.send() 
});

app.post('/add', function(req, res) {
	console.log(JSON.stringify(req.body));
	var sum = Number(req.body.firstNumber) + Number(req.body.secondNumber);
	res.send("The sum is " + sum);
})

app.post('/subtract', function(req, res) {
	console.log(JSON.stringify(req.body));
	var diff = Number(req.body.firstNumber) - Number(req.body.secondNumber);
	res.send("The difference is " + diff);
})

app.post('/multiply', function(req, res) {
	console.log(JSON.stringify(req.body));
	var product = Number(req.body.firstNumber) * Number(req.body.secondNumber);
	res.send("The product is " + product);
})

app.post('/divide', function(req, res) {
	console.log(JSON.stringify(req.body));
	var quotient = Number(req.body.firstNumber) / Number(req.body.secondNumber);
	res.send("The quotient is " + quotient);
})

// Start the server on port 3000
app.listen(3000);