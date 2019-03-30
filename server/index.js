// para poder tener urls limpias con next.js, cstom server cambian los scripts del package
const express = require('express')

// mongoose
const mongoose=require("mongoose")
const path=require('path')
const bodyParser=require('body-parser');
const socket_io=require('socket.io')
const io=socket_io();
// index.html
const index=require('./routes/index')
// // model de booking

const BookingRoutes=require('./routes/booking')
const AssistatnRoutes=require('./routes/assistant')
const AssistantLocRoutes=require('./routes/assistantLocation')
// conectar base de datos
// 'mongodb+srv://Mariana:Mari123@cluster0-1k7me.mongodb.net/test?retryWrites=true'
// 'mongodb+srv://Nicolas:Mari123@cluster0-1k7me.mongodb.net/test?retryWrites=true'
// 'mongodb+srv://novenix:Clave123@cluster0-a44vp.mongodb.net/test?retryWrites=true'
// la nueva
// mongodb+srv://Nicolas:<password>@cluster0-ikjs8.mongodb.net/test?retryWrites=true

mongoose.set('useFindAndModify', false);
 mongoose.connect('mongodb+srv://Nicolas:Clave123@cluster0-ikjs8.mongodb.net/test?retryWrites=true',{useNewUrlParser:true})
.then(()=>{console.log('Base de Datos conectada')})
.catch(err=>console.log(err))
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}))

  // midlleware body-parser;
  
var port= process.env.PORT || 3001
console.log(port)
  // io.listen

server.set("views",path.join(__dirname,"views"))
// server.set("views",path.dirname('/views'))
server.set("view enginge","ejs")
server.engine("html",require("ejs").renderFile)
//   // uso de la ruta de books sin validacion
server.use('/',index)
server.use('/api/V1/bookings',BookingRoutes)
server.use('/api/v1/assistants',AssistatnRoutes)
server.use('/api/v1/assistantsLoc',AssistantLocRoutes)
// server.use((req,res,next)=>{
//   //configurar los headers,* significa que cualquier url puede hacer peticiones
//   res.header('Access Control Allow-Origin','*')
//   //headers a llegar
//   res.header('Access Control Allow-Headers','X-API-KEY,Origin,X-Requestes-With,Content-Type,Accept,Acces-Control-Request-Method')
//   //metodos http que pueden legar
//   res.header('Access Control Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
//   //
//   res.header(' Allow','GET,POST,OPTIONS,PUT,DELETE')
//   //lanzar funcion next para que salga de la funcion
//   next()

// })3.
asd
io.listen(server.listen(port,()=>{
  console.log(`API REST FAV funcionando en localhost:${port} `)    
  }))
  
  server.io = io.on("connection", (socket)=>{
    console.log("Socket connected: " + socket.id);
  });
