const express =require("express");
const router=express.Router();
const assistantController=require('../controllers/assistant')
// //enpoint para book
router.post('',assistantController.saveAssistant)
  //endopoint 
  router.get('',assistantController.getAssistant)

module.exports=router;