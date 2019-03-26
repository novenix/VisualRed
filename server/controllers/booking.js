const Bookings=require('../models/booking')
const getbokings=(req,res)=>{
      
    Bookings.find({},(err,allBooks)=>{
        console.log("entra")
      if (err){
        return res.status(422).send(err);
      }
      return res.json(allBooks);

    })
    
    
  }
  const saveBook=(req,res)=>{
    const bookData=req.body.data;
    // console.log(bookData)
    const nearbyAssistant=req.body.nearbyAssistant
    // console.log(nearbyAssistant)
    
    // console.log(req.app.io,"io-------------")
    const io = req.app.io;
    // console.log(bookData,"lo que llega alserver")
    const booking=new Bookings(bookData);

    booking.save((err,createdBook)=>{
      if(err){
        return res.status(422).send(err);

      }
      if(nearbyAssistant.socketId){
        console.log("createdbook if soket id")
        // console.log(createdBook,"createdbook")
        // res.json(createdBook);
        console.log("pasa")
        io.emit(nearbyAssistant.socketId+"assistantRequest",createdBook)
      }
      else{
        console.log('assistant no conectado')
      }
      console.log('retorna')
      return res.json(createdBook);
    })
  }


  module.exports={
    getbokings,
    saveBook
      
  }