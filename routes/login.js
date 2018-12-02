const express = require("express");
const con = require("../connection");
var Cryptr = require('cryptr');
const router = express.Router();

router.get("/", function (req, res) {
    res.render("login", {
        title: "Login | Wildlife",
        message: ""
    });
});

router.post("/", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    con.query('SELECT * FROM signup WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            res.render("login" , {
                title  :"Error",
                message : "Erroe with Query"
            })
        } else {

            if (results.length > 0) {
                if (password == results[0].password) {
                    res.render("homePage", {
                        title : "HomePage"
                    })
                } else {
                    res.render("login", {
                        title  :"Email Wrong",
                        message : "Password Incorrect"
                    })
                }

            } else {
                res.render("login", {
                    title  :"Email not exists",
                    message : "Email does not exist"
                })
            }
        }
    });
});

module.exports = router;