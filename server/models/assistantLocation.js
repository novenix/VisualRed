// schemas para ingresar a la base de datos de un portafolio
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const coordinateSchema=new Schema({
    type:String,
    coordinates:[Number]
})
const assistantLocSchema=new Schema({
    assistantId:String,
    coordinate:
        coordinateSchema
        // type:String,
        // coordinates:{type:[Number]}
    // }
    ,
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