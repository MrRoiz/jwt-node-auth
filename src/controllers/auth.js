const User = require("../models/User.js");

const signIn = async ({ body }, res) => {
	const user = await User.create({
		username: body.username,
		password: body.password,
	});

	res.status(201).send(user.toJSON());
};

module.exports = {
    signIn
}