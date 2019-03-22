var express=require('express')
var router=express.Router();
var mongojs=require('mongojs')

// objeto base de datos
var db=mongojs('mongodb+srv://Mariana:Mari123@cluster0-1k7me.mongodb.net/test?retryWrites=true',);



router.get('/bookings',function(req,res,next){
    db.bookings.find(function(err,bookings){
        if(err){
            res.send(err);

        }
        res.json(bookings);

    })
})
module.exports= router;