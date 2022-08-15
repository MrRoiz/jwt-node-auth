const express = require("express");
const applyRoutes = require("./src/routes/index.js");
const env = require('./src/config/envLoader');

const app = express();

app.use(express.json());
applyRoutes(app);

app.listen(env.NODE_PORT, () => {
	console.log(`Listening on port ${env.NODE_PORT}`);
});
