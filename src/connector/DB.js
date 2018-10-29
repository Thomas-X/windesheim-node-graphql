import Sequelize from 'sequelize';
const {DB_HOST, DB_DIALECT, DB_PORT, DB_USER, DB_PASSWORD} = process.env;
const db = new Sequelize(DB_DIALECT, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: DB_DIALECT,
	operatorsAliases: false,
	port: DB_PORT,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
});
db
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});


export default db;