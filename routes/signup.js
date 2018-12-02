const express = require("express");
const con = require("../connection");
const router = express.Router();

router.get("/", function(req, res){
    res.render("signup", {
        title : "Sign Up | Wildlife"
    });
});

router.post("/", function(req, res){
    var person = {
        fname : req.body.first_name,
        lname : req.body.last_name,
        email : req.body.email,
        pswd : req.body.password
    }
    var sql = "INSERT INTO signup VALUES ('"+ person.fname + "','" + person.lname + "','"+ person.email + "','"+ person.pswd + "')";
    con.query(sql, function(err, result, fields){
        if(err) console.log(err);
        else console.log("Inserted");
    });
    res.redirect("/login");
});

module.exports = router;