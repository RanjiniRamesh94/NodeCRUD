var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Book'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Author: {
    
      type: String,
      required: 'Kindly enter the author name'
  }
});

module.exports = mongoose.model('Books', BookSchema);