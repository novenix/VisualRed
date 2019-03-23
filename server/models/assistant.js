// schemas para ingresar a la base de datos de un portafolio
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const assistantSchema=new Schema({
    firstName:String,
    lastName:String,
    dob:String,
    nationalID:String,
    profilePic:String,
    rating:String,
    address:{
        addressLine:String,
        addressLine2:String,
        city:String,
        state:String,
        
    },
    
    // {
    //     "firstName":"Mariana",
    //     "lastName":"Cifuentes",
    //     "dob":"08/08/1997",
    //     "nationalID":"1235645",
    //     "profilePic":"https://emblemsbf.com/img/59870.jpg",
    //     "rating":4,
    //     "address":{
    //         "addressLine":"calle 1",
    //         "addressLine2":"cra 2",
    //         "city":"chia",
    //         "state":"cundinamarca"
            
    //     }
    // }
});


module.exports= mongoose.model('assistant',assistantSchema);
