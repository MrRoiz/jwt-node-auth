const User = require("../models/User");
const { signJWT } = require("../utils/jwt");

// TODO: Pending password encryption

const signIn = async ({ body }, res) => {
	const user = await User.create({
		username: body.username,
		password: body.password,
	});

	res.status(201).send(user.toJSON());
};

const login = async ({ body }, res) => {
	const user = await User.findOne({
		username: body.username,
		password: body.password
	})

	if(!user){
		return res.status(400).send({
			errors: 'username or password is invalid'
		})
	}

	res.status(200).send({
		token: signJWT(user.toJSON())
	})
};

module.exports = {
	signIn,
	login
};
