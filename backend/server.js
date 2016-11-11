const express = require("express");


const app = express();


app.use("*", (req,res)=>{
	res.send("hello world")
})

app.listen(4444, ()=>{
	console.log("listening to 4444")
})