const express = require("express");
const con = require("../connection");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("login", {
        title: "Login | Wildlife",
        message : ""
    });
});

router.post("/", function (req, res) {
    var Cryptr = require('cryptr');
    cryptr = new Cryptr('myTotalySecretKey');
    var email = req.body.email;
    var password = req.body.password;
    con.query('SELECT * FROM signup WHERE email = ?', [email], function (error, results, fields) {
        console.log(email);
        if (error) {
            res.render("login",{
                title : "Error",
                message: 'Something Went Wrong'
            })
        } else {

            if (results.length > 0) {
                if (password == results[0].password) {
                    res.redirect("/homePage");
                } else {
                    res.render("login", {
                        title : "Failed",
                        message: "Email and password does not match"
                    });
                }

            } else {
                res.render("login",{
                    title : "Email Wrong",
                    message: "Email does not exits"
                });
            }
        }
    });
})

module.exports = router;