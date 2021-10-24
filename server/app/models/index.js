const dbConfig = require("../config/db_config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.attractions = require("./attraction_model.js")(mongoose);

module.exports = db;