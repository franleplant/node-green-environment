//http://stackoverflow.com/questions/8332333/node-js-setting-up-environment-specific-configs-to-be-used-with-everyauth

function env_spitter() {
	var e = process.env.NODE_ENV

	console.log(  e, ", its a", typeof(e)  );

	//Sometimes the env can be introduced with spaces, its better this way
	if (  e.indexOf("prod")  !== -1 ) {
		console.log("On prod")
	} else {
		console.log("Not On prod")
	}
};

module.exports = env_spitter;

//Only run this when  calling node env_spitter.js
if(require.main === module) {
	env_spitter();
};
