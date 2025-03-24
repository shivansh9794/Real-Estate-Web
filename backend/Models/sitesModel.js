const { Schema, model } = require('../connection');

const mySchema = new Schema({

    name: { type: String, required: true },
    area: { type: Number, unique: true },
    type:{ type:String},
    address: { type: String, default: 'Unknown' },
    contact: {type : Number},
    image:{type :String},
    price:{type:Number},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('sites', mySchema);



