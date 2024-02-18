const Sequelize = require('sequelize');

const databaseConfig = require('../configs/db');

class Database{
    constructor(){
        this.init();
    }
    init() {
        // Adicione o dialeto explicitamente como 'mysql'
        this.connection = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
            host: databaseConfig.host,
            dialect: 'mysql', // Defina o dialeto como 'mysql'
            // Outras configurações, se necessário
        });
    }
}

module.exports = new Database();