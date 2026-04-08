
module.exports = {
	'url': process.env.MONGODB_URI || 'mongodb+srv://ganhgame:ganhgame@ganhgame.fcxnrgx.mongodb.net/?appName=ganhgame',
	'dbName': process.env.MONGODB_DBNAME || 'server',
	'options': {
		//'user':   'root',
		//'pass':   '',
		'dbName': process.env.MONGODB_DBNAME || 'server',
		'useNewUrlParser': true,
		'useUnifiedTopology': true,
		//'autoIndex':       false,
	},
};
