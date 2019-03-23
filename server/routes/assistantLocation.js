const express =require("express");
const router=express.Router();
const assistantLocController=require('../controllers/assistantLocation')
// //enpoint para book
router.post('',assistantLocController.saveAssistantloc)
  //endopoint 
  router.get('',assistantLocController.getAssistantLoc)

module.exports=router;