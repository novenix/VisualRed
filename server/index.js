// para poder tener urls limpias con next.js, cstom server cambian los scripts del package
const express = require('express')

// mongoose
const mongoose=require("mongoose")
const bodyParser=require('body-parser');

// // model de book
// const Booking=require('./models/booking')
// const Book=require('./models/book');

// const Port=require('./models/portfolio')
const BookingRoutes=require('./routes/booking')
const AssistatnRoutes=require('./routes/assistant')
const AssistantLocRoutes=require('./routes/assistantLocation')
// conectar base de datos
// 'mongodb+srv://Mariana:Mari123@cluster0-1k7me.mongodb.net/test?retryWrites=true'
// 'mongodb+srv://Nicolas:Mari123@cluster0-1k7me.mongodb.net/test?retryWrites=true'
// 'mongodb+srv://novenix:Clave123@cluster0-a44vp.mongodb.net/test?retryWrites=true'
// la nueva
// mongodb+srv://Nicolas:<password>@cluster0-ikjs8.mongodb.net/test?retryWrites=true

 
 mongoose.connect('mongodb+srv://Nicolas:Clave123@cluster0-ikjs8.mongodb.net/test?retryWrites=true',{useNewUrlParser:true})
.then(()=>{console.log('Base de Datos conectada')})
.catch(err=>console.log(err))
const server = express();
server.use(bodyParser.json());

  // midlleware body-parser;
  
  var port= process.env.PORT || 3001
  server.listen(port,function(){
  console.log(`API REST FAV funcionando en localhost:${port} `)
    
})
//   // uso de la ruta de books sin validacion
// server.use('/api/bookings',bookingRoutes)
server.use('/api/V1/bookings',BookingRoutes)
server.use('/api/v1/assistants',AssistatnRoutes)
server.use('/api/v1/assistantsLoc',AssistantLocRoutes)
// server.post('/api/V1/bookings',(req,res)=>{
//   const bookingData=req.body;
//   const booking= new Booking(bookingData)
//   booking.save((err,createdBooking)=>{
//     if (err){
//       return res.status(422).send(err)

//     }
//     console.log(createdBooking)
//     return res.json(createdBooking)
//   })
// })

// server.get('/api/v1/bookings',(req,res)=>{
//   // console.log(Book)
//   Booking.find({},(err,allBookings)=>{
//     if(err){
//       console.log(err)
//       return res.status(422).send(err)
//     }
//     console.log(allBookings)
//     return res.json(allBookings)
//   })
// })
