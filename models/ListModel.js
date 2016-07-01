var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ListSchema = new Schema({	"name" : String,	"items" : [{			type: Schema.Types.ObjectId,	 		ref: 'Item'	}]});

module.exports = mongoose.model('List', ListSchema);
