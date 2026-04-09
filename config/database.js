
module.exports = {
	'url': process.env.MONGODB_URI || 'mongodb://ganhgame:ganhgame@ac-lzebtnz-shard-00-00.fcxnrgx.mongodb.net:27017,ac-lzebtnz-shard-00-01.fcxnrgx.mongodb.net:27017,ac-lzebtnz-shard-00-02.fcxnrgx.mongodb.net:27017/server?ssl=true&authSource=admin&replicaSet=atlas-2kcfq0-shard-0&retryWrites=true&w=majority',
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
