const {Schema, model} = require('../connection'); //here ../ is used to go out form the current folder

const mySchema = new Schema({
    cartid:{type: String, required: true},
    createdAt:{type:Date, default:Date.now}
});

module.exports = model('cart',mySchema);