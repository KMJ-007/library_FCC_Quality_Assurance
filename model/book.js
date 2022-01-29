const mongoose = require("mongoose");

const Schema=mongoose.Schema;
const URI= process.env.MONGO_URI;

mongoose.connect(URI);
const connection=mongoose.connection;

connection.on("error",()=>{console.log("connection failed")});
connection.once("open",()=>{console.log("connection success")});

const BookSchema = new Schema({
    title:{type:String ,required:true},
    comments:{
        type:[String],
        default:[]
    },
    commentcount:{
        type:Number,
        default:0,
    }

})

module.exports = mongoose.model("Book",BookSchema);