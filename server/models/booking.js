// schemas para ingresar a la base de datos de un portafolio
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookingSchema=new Schema({
    userName:String,
    pickUp:{
        address:String,
        name:String,
        latitude:String,
        longitude:String
    },
    dropOff:{
        address:String,
		name:String,
		latitude:String,
		longitude:String
    },
    fare:String,
    status:String
   
});
// {
// 	"username":"Nicolas",
// 	"pickUp":"toberin",
// 	"dropOff":"alcala"
// }

module.exports= mongoose.model('booking',bookingSchema);
