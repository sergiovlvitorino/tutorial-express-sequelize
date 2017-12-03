'use strict';
var DatabaseConfiguration = require('./database_configuration');

class UserRepository {
    save(user) {
        return DatabaseConfiguration.UserSequelize.create(user);
    }

    findAll(parameters) {
        return DatabaseConfiguration.UserSequelize.findAll(parameters);
    }

    count(parameters) {
        return DatabaseConfiguration.UserSequelize.count(parameters);
    }
    destroy(parameters) {
        return DatabaseConfiguration.UserSequelize.destroy(parameters);
    }
}

module.exports = UserRepository;