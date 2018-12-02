const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.render("contact", {
        title : "Contact Us | Wildlife",
        msg : ""
    });
});

router.post("/", function(req, res){
    res.render("contact", {
        title : "Contact Us | Wildlife",
        msg : "Thankyou "+ req.body.txtName +" For Contacting Us"
    })
})

module.exports = router;