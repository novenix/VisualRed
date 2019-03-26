const express =require("express");
const router=express.Router();
const bookingsController=require('../controllers/booking')
// //enpoint para book
router.post('',bookingsController.saveBook)
  //endopoint 
  router.get('',bookingsController.getbokings)

module.exports=router;