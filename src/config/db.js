const mongo = require("mongoose");
const env = require("../config/envLoader");

mongo.connect(
	`mongodb://${env.MONGO_INITDB_ROOT_USERNAME}:${env.MONGO_INITDB_ROOT_PASSWORD}@db:27017/jwt-node-auth?authSource=admin`
);

module.exports = mongo;
