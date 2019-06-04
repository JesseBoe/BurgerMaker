var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    console.log(req.body.name);
    console.log(req.body.eaten);
    burger.create([
        "name", "eaten"
    ], [
            req.body.name, req.body.eaten
        ], function (result) {
            res.sendStatus(200);
        });
});

router.put("/", function(req, res) {
    console.log(req.body.id);

    burger.update({eaten: 1}, "id = " + req.body.id, function(result) {
        res.sendStatus(200);
    })
})

module.exports = router;
