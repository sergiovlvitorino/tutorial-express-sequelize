'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'sa', '', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    storage: 'database.sqlite'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
const UserSequelize = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

const AccountSequelize = sequelize.define('account', {
    systemName: {
        type: Sequelize.STRING
    }
});

UserSequelize.hasMany(AccountSequelize);

UserSequelize.sync({ force: false });
AccountSequelize.sync({ force: false });


module.exports = { UserSequelize, AccountSequelize, sequelize };