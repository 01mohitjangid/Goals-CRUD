
const asynchandler = require('express-async-handler')

const goal = require('../model/goalmodel')
// @desc get goals
// @route get /api/goals
// @access Private

const getgoal= asynchandler(async(req,res) =>{
    const goals = await goal.find()
    res.status(200).json(goal)
    })
    // @desc set goals
// @route POST /api/goals
// @access Private

const setgoal=asynchandler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new error('please add a text feild')
    }
    console.log(req.body)
    const {text} = req.body
    await goal.create({
        text: text
    })
    .then((response)=>{
        res.status(200).json(response)
        console.log(response)    
    })
    .catch((err)=>{
        console.log(err)
    })

    })
    // @desc update goals
// @route put /api/goals/:id
// @access Private

const updategoal=asynchandler(async(req,res) =>{
    const goal = await goal.findbyid(req.params.id)

    if(!goal){
        res.status(400)
        throw new error('goal not found')
    }
    console.log(req.params.id)
    console.log(req.body)
    await goal.findbyidandupdate(req.params.id, req.body, {
        new : true,
    })
    .then((response)=>{
        res.status(200).json ({ message: `update goal ${req.params.id}` })
    })
    .catch((err)=>{
        console.log(err)
    })
    
})

// @desc delete goals
// @routedelete /api/goals/:id
// @access Private

const deletegoal=asynchandler(async(req,res) =>{
    const goal = await goal.findbyid(req.params.id)
    if(!goal){
        res.status(400)
        throw new error('goal not found')
    }
    await goal.remove()
    res.status(200).json    ({ id:req.params.id })
    }

)
    module.exports = {getgoal,setgoal,updategoal,deletegoal}