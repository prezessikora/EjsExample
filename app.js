var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs")

var friends = ["Sandra","Hugo","Borys","Yuki"]

app.get("/", function(req,res) {
 res.send("Welcome to the homepage!") 
})

app.get("/friends",function(req,res) {
	
	res.render("friends",{friends: friends})
})

app.post("/addFriend", function(req,res) {
	console.log(req.body)	
	friends.push(req.body.newfriend)
	res.redirect("/friends")

})

app.listen(8080,function() {
	console.log("Server started.")
});