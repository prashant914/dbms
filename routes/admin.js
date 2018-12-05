const express = require("express");
const animalRepo = require("../repo/animalRepo");
const deleteAnimalRepo = require("../repo/deleteAnimalRepo");
const router = express.Router()
const con = require("../connection");

router.get("/", function(req, res){
    res.render("admin", {
        title : "Admin",
        message : ""
    })
});

router.post("/", function(req, res){
    if(req.body.password == "admin"){
        res.render("adminDetails", {
            title : "Admin",
            message : ""
        })
    }else{
        res.render("admin", {
            title : "Error",
            message : "Wrong Password"

        });
    }
})

router.post("/details", function (req, res) {
    res.render("adminDetails");
});


router.post("/animal/delete", function(req, res){
    deleteAnimalRepo.deleteAnimal(req.body.animal_id).then(function (animal) {
        res.render("worker", {
            title: "Worker Details | Wildlife",
            worker: worker
        });
    }).catch(error => {
        console.log(error);
    });
})

module.exports = router;