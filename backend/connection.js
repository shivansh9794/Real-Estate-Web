const mongoose = require('mongoose');

const url="mongodb+srv://Shivansh9794:Shivansh9794@shivansh.uehy1.mongodb.net/ShivanshProject?retryWrites=true&w=majority&appName=Shivansh"


mongoose.connect(url).then((result) => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});

module.exports=mongoose;