const express = require('express');
const db = require('../data/helpers/projectModel');
const router = express.Router();

//use CRUD here
router.get('/', (req, res) => {
    res.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        res.status(500).json({message: "error retreiving projects"})
    })
})



module.exports = router;