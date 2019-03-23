const express =require("express");
const router=express.Router();
const bookingsController=require('../controllers/booking')
// //enpoint para book
router.post('',bookingsController.saveBook)
  //endopoint 
  router.get('',bookingsController.getbokings)
//   //endpoint actualizar libro
//   router.patch('/:id',bookingsController.updateBook)

// //endpoint borrar
// router.delete('/:id',bookingsController.deleteBook)
module.exports=router;