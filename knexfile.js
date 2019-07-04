// const { db } = require('./.env')

module.exports = {
	client: 'pg',
	connection: {
		host : 'ec2-50-19-221-38.compute-1.amazonaws.com',
		port: 5432,
		database: 'd9ae8dvvib0ioe',
		user: 'gglihibjnfbkoj',
		password: '2a84102e312937287fe6dda2247b536af4309aa2c41464a9022f637b630b72d3'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
