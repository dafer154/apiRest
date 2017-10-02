var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect(`mongodb://davidz:davidz@ds157624.mlab.com:57624/evercheck-test-dz`, function(err, res){
	if(err) {
		return console.log(`Error by Connected to DB: ${err}`)
	}
	console.log('Connected to Database');
});


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and Controllers
var models = require('./models/provider')(app, mongoose);
var ProviderCtrl = require('./controllers/provider');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) {
	res.send("API Restful Node.js + MongoDB + Express.js");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/providers')
.get(ProviderCtrl.findAll)
.post(ProviderCtrl.add);


api.route('/providers/:id')
.get(ProviderCtrl.findById)
.put(ProviderCtrl.update)
.delete(ProviderCtrl.delete);


 app.use('/api', api);


// Start server
app.listen(3000, function() {
	console.log("Node server running on David http://localhost:3000");
});
