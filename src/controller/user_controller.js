'use strict';
var UserCore = require('../core/user_core');

class UserController {
    constructor(express) {
        express.get('/user/count', (request, response) => {
            (async () => {
                response.send(await new UserCore().count());
            })();
        });
    }
}

module.exports = UserController;