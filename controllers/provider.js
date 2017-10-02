var mongoose = require('mongoose');
var Provider = mongoose.model('Provider');

//GET - Return all registers
exports.findAll = function(req, res) {
	Provider.find(function(err, providers) {
		if(err) res.send(500, err.message);
		console.log('GET /providers')
		res.status(200).jsonp(providers);
	});
};

//Return Object with ID
exports.findById = function(req, res) {
	Provider.findById(req.params.id, function(err, provider) {
		if(err) return res.send(500, err.message);
		console.log('GET /providers/' + req.params.id);
		res.status(200).jsonp(provider);
	});
};




//POST - Insert a new register
exports.add = function(req, res) {
	console.log('POST');
	console.log(req.body);
	var provider = new Provider({

		_id : req.body._id,
		firstName : req.body.firstName,
		lastName : req.body.lastName,
		middleName : req.body.middleName,
		email : req.body.email,
		specialty : {
			_id : req.body.id,
			name : req.body.name,
			createdBy : req.body.createdBy,
			createdAt : req.body.createdAt,
			updatedBy : req.body.updateBy,
			updatedAt : req.body.updatedAt
		},
		projectedStartDate : req.body.projectedStartDate,
		employerId : req.body.employerId,
		providerType : req.body.providerType,
		staffStatus : req.body.staffStatus,
		assignedTo : req.body.assignedTo,
		status : req.body.status,
		createdBy : req.body.createdBy,
		createdAt : req.body.createdAt,
		updatedBy : req.body.updatedBy,
		updatedAt : req.body.updatedAt

	});
	provider.save(function(err, provider) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(provider);
	});
};



//PUT - Update a register already exists
exports.update = function(req, res) {

 Provider.findById(req.params.id, function(err, provider) {

 provider._id = req.body._id;
 provider.firstName = req.body.firstName;
 provider.lastName = req.body.lastName;
 provider.middleName = req.body.middleName;
 provider.email = req.body.email;
 
 provider.projectedStartDate = req.body.projectedStartDate;
 provider.employerId = req.body.employerId;
 provider.providerType = req.body.providerType;
 provider.staffStatus = req.body.staffStatus;
 provider.assignedTo = req.body.assignedTo;
 provider.status = req.body.status;
 provider.createdBy = req.body.createdBy;
 provider.createdAt = req.body.createdAt;
 provider.updatedBy = req.body.updatedBy;
 provider.updatedAt = req.body.updatedAt;

 provider.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(provider);
 });
 });
};



//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
	Provider.findById(req.params.id, function(err, provider) {
		provider.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.json({ message: 'Successfully deleted' });
		});
	});
};
