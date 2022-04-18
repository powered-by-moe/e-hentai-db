const mysql = require('mysql');
const config = require('../config/config');

class ConnectDB {
	constructor() {
		this.connection = mysql.createConnection({
			host: config.dbHost,
			port: config.dbPort,
			user: config.dbUser,
			password: config.dbPass,
			database: config.dbName,
			timeout: 10e3,
		});

		this.connect = this.connect.bind(this);
		this.query = this.query.bind(this);
		this.destroy = this.destroy.bind(this);
	}

	connect() {
		return new Promise((resolve, reject) => {
			this.connection.connect((err) => {
				if (err) {
					reject(err);
				}
				resolve(this);
			});
		});
	}

	format(...args) {
		return this.connection.format(...args);
	}

	query(...args) {
		return new Promise((resolve, reject) => {
			try {
				this.connection.query(...args, (error, results) => {
					if (error) {
						reject(error);
						return;
					}
					resolve(results);
				});
			} catch (err) {
				reject(err);
			}
		});
	}

	destroy() {
		this.connection.destroy();
	}
}

module.exports = ConnectDB;