const { JWT_KEY } = require("../config/envLoader");
const jwt = require("jsonwebtoken");

const signJWT = (user) => {
	const modificableUser = { ...user };
	delete modificableUser.password;

	return jwt.sign(modificableUser, JWT_KEY);
};

const verifyJWT = (givenJwt) => {
    try{
        cleanJwt = givenJwt;

        if(givenJwt.includes('Bearer')){
            cleanJwt = givenJwt.replace('Bearer ','')
        }

        return jwt.verify(cleanJwt, JWT_KEY);
    }catch(error){
        return null
    }
};

module.exports = {
	signJWT,
    verifyJWT
};
