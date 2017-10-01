var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providerSchema = new Schema({ 

 
	_id : { _id: false },
	firstName : { type: String },
	lastName : { type: String },
	middleName : { type: String },
	email : { type: String },
	specialty : {
		_id : {type: Schema.ObjectId},
		name : { type: String },
		createdBy : { type: Number },
		createdAt : {type: Date, default: Date.now()},
		updatedBy : { type: Number },
		updatedAt : {type: Date, default: Date.now()}
	},
	projectedStartDate : {type: Date, default: Date.now()},
	employerId : { type: Number },
	providerType : { type: String },
	staffStatus : { type: String },
	assignedTo : { type: Number },
	status : { type: String },
	createdBy : { type: Number },
	createdAt : {type: Date, default: Date.now()},
	updatedBy : { type: Number },
	updatedAt : {type: Date, default: Date.now()}
}

);

module.exports = mongoose.model('Provider', providerSchema);