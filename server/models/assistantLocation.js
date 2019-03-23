// schemas para ingresar a la base de datos de un portafolio
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const assistantLocSchema=new Schema({
    assistantId:String,
    coordinate:{
        type:String,
        coordinates:[Number]
    },
   socketId:String
});
// {
// 	"assistantId":"123",
// 	"coordinate":{
// 		"type":"point",
// 		"coordinates":[4.691021, -74.05651]
// 	},
// 	"socketId":"3Sx479jOtz89u18WAAAB"
	
// }


module.exports= mongoose.model('assistantLoc',assistantLocSchema);