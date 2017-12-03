'use strict';
var UserRepository = require('../repository/user_repository');

class UserCore {
    count() {
        return (async () => {
            try {
                var result = await new UserRepository().count(null);
                return "Total users: " + result;
            } catch (err) {
                return "Error: " + err;
            }
        })();
    }
}

module.exports = UserCore;