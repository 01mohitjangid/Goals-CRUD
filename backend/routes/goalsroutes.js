const express= require('express')
const router = express.Router()
const {getgoal, setgoal,updategoal,deletegoal}=require('../controllers/goalcountroller')

router.route('/').get(getgoal).post(setgoal)  

router.route('/:id').delete(deletegoal).put(updategoal)  




 
module.exports = router  