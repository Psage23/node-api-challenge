const express = require('express');
const db = require('../data/helpers/actionModel');
const router = express.Router();

//use CRUD here
router.get('/', (req, res) => {
    db.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json({message: "error retreiving actions."})
        })
})

router.get('/:id', (req, res) => {
    db.get(req.params.id).then(action => {
        res.status(200).json(action);
    })
    .catch(error => {
        res.status(500).json({message: "Error getting action id"})
    })
})





module.exports = router;