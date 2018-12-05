const express = require("express");
const foodRepo = require("../repo/foodRepo");
const animalRepo = require("../repo/animalRepo");
const workerRepo = require("../repo/workerRepo");
const fieldRepo = require("../repo/fieldRepo");
const visitorRepo = require("../repo/visitorRepo");
const con = require("../connection");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("homePage", {
        title: "Welcome User",
        message : ""
    });
});

router.post("/", function (req, res) {
    res.render("homePage", {
        title: "Welcome User",
        message : "Welcome " + req.body.email
    });
});

router.get("/food", function (req, res, next) {
    var food = foodRepo
      .getFoodDetails()
      .then(food => {
        res.render("food", {
          title: "Food Details | Wildlife",
          food : food
        });
      })
      .catch(error => {
        console.log(error);
      });
  });

router.get("/animal", function (req, res) {
    var animal = animalRepo.animal().then(function (animal) {
        res.render("animal", {
            title: "Animal Details | Wildlife",
            animal: animal
        });
    }).catch(error => {
        console.log(error);
    });
});

router.get("/animal/insertAnimals", function(req, res){
    res.render("insertAnimal", {
        title : "Insert Animals",
        message : ""
    });
});

router.post("/animal/insertAnimals", function(req, res){
    var person = {
        id : req.body.animal_id,
        life : req.body.lifespan,
        name : req.body.name,
        type : req.body.type,
        wid : req.body.worker_id
    }
    var sql = "INSERT INTO animal (`animal_id`, `lifespan`, `name`, `type`, `worker_id`)  VALUES ('"+ person.id + "','" + person.life + "','"+ person.name + "','"+ person.type + "','"+ person.wid +"')";
    con.query(sql, function(err, result, fields){
        if(err) console.log(err);
        else console.log("Inserted");
    });
    res.render("insertAnimal", {
        title : "Inserted",
        message : "Inserted Successfully"
    })
});

router.get("/worker", function (req, res) {
    var worker = workerRepo.getWorkerDetails().then(function (animal) {
        res.render("worker", {
            title: "Worker Details | Wildlife",
            worker: worker
        });
    }).catch(error => {
        console.log(error);
    });
});

router.get("/field", function (req, res) {
    var field = fieldRepo.getFieldDetails().then(function (field) {
        res.render("field", {
            title: "Field Details | Wildlife",
            field: field
        });
    }).catch(error => {
        console.log(error);
    });
});

router.get("/visitor", function (req, res) {
    var visitor = visitorRepo.getVisitorDetails().then(function (visitor) {
        res.render("visitor", {
            title: "Visitor Details | Wildlife",
            visitor: visitor
        });
    }).catch(error => {
        console.log(error);
    });
});

module.exports = router;