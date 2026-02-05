const express= require('express')

const router = require.Router()

//GET all workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET all workouts'})
})


// GET a single workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single workout'})
}



router.get('/', (req,res) => {})
module.exports = router







