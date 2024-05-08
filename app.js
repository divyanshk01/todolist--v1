const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

let items = ["Buy food", "Cook Food", "Eat Food"];
let Workitems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

app.get("/", function(req,res){
    
    let day = date.getDate();
    res.render("list", {listTitle : day, newListItem : items});
});


app.post("/", function(req,res){
    let item = req.body.newItem;
    if(req.body.list === "Work"){
        Workitems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req,res){
    res.render("list", {listTitle : "Work List", newListItem : Workitems});
});

app.get("/about", function(req,res){
    res.render("about");
});

app.listen(3000, function(req,res){
    console.log("Server is listening to 3000");
})