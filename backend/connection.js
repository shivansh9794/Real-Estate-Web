const mongoose = require('mongoose');
require('dotenv').config();
const url=process.env.Mongo_url;


mongoose.connect(url).then((result) => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});


module.exports=mongoose;