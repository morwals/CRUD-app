require('dotenv').config();

const express=require("express");
const morgon=require("morgan");
const bodyParser=require("body-parser");
const path=require("path");

const connectDB=require("./server/database/connection");

const app=express();

const PORT=process.env.PORT || 8080;

connectDB();

//log requests using morgon
app.use(morgon("tiny"));

//body-parser
app.use(bodyParser.urlencoded({
    extended:true
}));

//set view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"));

//load assets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));

//load routes
app.use("/",require("./server/routes/router"))

app.listen(PORT,function(){
    console.log("server started");
});