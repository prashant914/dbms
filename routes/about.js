const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.render("about", {
        title : "About | Wildlife"
    });
});

module.exports = router;