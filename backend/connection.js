const mongoose = require('mongoose');
const url=process.env.Mongo_url;

mongoose.connect(url).then((result) => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});


module.exports=mongoose;