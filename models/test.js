var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
	name: {
		type:'String',
		required: true,
	},
	description:{
		type: 'String'
	},
	createdOn:{
		type: 'Number',
		required: true
	},
	updatedOn: {
		type: 'Number'
	},
	status: {
		type: 'Boolean',
		required: true
	}
});

module.exports = mongoose.model('test', testSchema);