const mongo = require("../config/db.js");

const User = mongo.model("User", {
	username: String,
	password: String,
});

module.exports = User;
