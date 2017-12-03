var express = require('express');
var app = express();

var UserController = require('./src/controller/user_controller');
new UserController(app);

app.listen(3000, () => {
    console.log('Tutorial Express and Sequelize');
});