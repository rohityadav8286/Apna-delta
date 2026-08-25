const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let passportLocalMongoose = require("passport-local-mongoose");

if (typeof passportLocalMongoose !== "function") {
    passportLocalMongoose = passportLocalMongoose.default || passportLocalMongoose.passportLocalMongoose;
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
