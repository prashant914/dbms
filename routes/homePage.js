const express = require("express");
const foodRepo = require("../repo/foodRepo");
const animalRepo = require("../repo/animalRepo");
const workerRepo = require("../repo/workerRepo");
const fieldRepo = require("../repo/fieldRepo");
const visitorRepo = require("../repo/visitorRepo");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("homePage", {
        title: "Welcome User"
    });
});

router.post("/", function (req, res) {
    res.render("homePage", {
        title: "Welcome User"
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