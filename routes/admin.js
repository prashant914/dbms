const express = require("express");
const animalRepo = require("../repo/animalRepo");
const deleteAnimalRepo = require("../repo/deleteAnimalRepo");
const workerRepo = require("../repo/workerRepo");
const deleteWorkerRepo = require("../repo/deleteWorkerRepo");
const router = express.Router()
const con = require("../connection");

router.get("/", function (req, res) {
    res.render("admin", {
        title: "Admin",
        message: ""
    })
});

router.post("/", function (req, res) {
    var animal = animalRepo.animal().then(function (animal) {
        res.render("adminDetails", {
            title: "Admin Details | Wildlife",
            animal: animal
        });
    }).catch(error => {
        console.log(error);
    });
});


router.get("/workers", function (req, res) {
    var worker = workerRepo.getWorkerDetails().then(function (worker) {
        res.render("worker", {
            title: "Worker Details | Wildlife",
            worker: worker
        });
    }).catch(error => {
        console.log(error);
    });
});

router.get("/workerdetails", function (req, res) {
    var worker = workerRepo.getWorkerDetails().then(function (worker) {
        res.render("workerDetails", {
            title: "Worker Details | Wildlife",
            message :  "",
            worker: worker
        });
    }).catch(error => {
        console.log(error);
    });
});

router.post("/workerdetails", function (req, res) {
    var worker = deleteWorkerRepo.deleteWorker(req.body.worker_id).then(function (worker) {
        res.render("workerDetails", {
            title: "Worker Details | Wildlife",
            message : "Deleted Record of Name " + req.body.name,
            worker: worker
        });
    }).catch(error => {
        console.log(error);
    });
});

router.post("/details", function (req, res) {
    res.render("adminDetails");
});


router.post("/animal/delete", function (req, res) {
    deleteAnimalRepo.deleteAnimal(req.body.animal_id).then(function (animal) {
        res.render("adminDetails", {
            title: "Animal Details | Wildlife",
            animal: animal
        });
    }).catch(error => {
        console.log(error);
    });
});

router.get("/insertWorkers", function (req, res) {
    res.render("insertWorkers", {
        title: "Insert Workers",
        message: ""
    })
});

router.post("/insertWorkers", function (req, res) {
    var worker = {
        id: req.body.worker_id,
        name: req.body.name,
        d_o_b: req.body.d_o_b,
        field_id: req.body.field_id,
        supervisor_id: req.body.supervisor_id,
        salary: req.body.salary
    }
    var sql = "INSERT INTO workers (`worker_id`, `name`, `d_o_b`, `field_id`, `supervisor_id`, `salary`)  VALUES ('" + worker.id + "','" + worker.name + "','" + worker.d_o_b + "','" + worker.field_id + "','" + worker.supervisor_id + "','" + worker.salary + "')";
    con.query(sql, function (err, result, fields) {
        if (err) console.log(err);
        else console.log("Inserted");
    });
    res.render("insertWorkers", {
        title: "Inserted",
        message: "Inserted Successfully"
    })

})

module.exports = router;