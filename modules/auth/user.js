const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	userName: String,
	userEmail: String,
	userPassword: String,
	userPhone: String,
	userAddress: String,
	userAvt: String,
	userRole: String,
	}
)

var User = mongoose.model('user', userSchema);

module.exports = User;