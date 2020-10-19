const burger = require("../models/burger");

const express = require("express");
const { request } = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const viewData = {
            burgers: data
        };
        res.render("index", viewData);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name"], [req.body.name], (data) => {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers:id", (req, res) => {

    burger.updateOne({devoured: request.body.devoured}, {id: request.params.id}, (res) => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
        }
        response.status(200).end();
    });
});

module.exports = router;