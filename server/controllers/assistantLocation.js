const AssistantLoc=require('../models/assistantLocation')
const getAssistantLoc=(req,res)=>{
      
    AssistantLoc.find({},(err,allBooks)=>{
        console.log("entra")
      if (err){
        return res.status(422).send(err);
      }
      return res.json(allBooks);

    })
    
    
  }
  const saveAssistantloc=(req,res)=>{
    const assistantLocData =req.body;
    console.log(assistantLocData,"lo que llega alserver")
    const assistantLoc=new AssistantLoc(assistantLocData);

    assistantLoc.save((err,createdAssistant)=>{
      if(err){
        return res.status(422).send(err);

      }
      return res.json(createdAssistant);
    })
  }
 const updateAssistantSocket=(req,res)=>{
   const socketId=req.params.id
  //  console.log(socketId)
   const update=req.body
  //  console.log(update)
   AssistantLoc.findOneAndUpdate(socketId,update,(err,socketUpdated)=>{
     if(err){
       res.status(500).send({message:'error al actualizar socket'})
     }
     else{
       res.status(200).send({assistantLocation:socketUpdated})
     }
   })
 }
const getNearbyDriver=(req,res,next)=>{
  console.log('quien llama?')
  AssistantLoc.createIndex({"coordinate":"2dsphere"})
  AssistantLoc.find({
    "coordinate":{
      "$near":{
        "$geometry":{
          "type":"point",
          "coordinates":[parseFloat(req.query.longitude),parseFloat(req.query.latitude)],
        },
        // $maxDistance:100000
      }
    },
  },(err,location)=>{
    if (err){res.status(500).send({message:'error al devolver ubicacion de asistente'})}
    else{
        if (!location){
            res.status(404).send({message:'no hay asistentes'})
        }
        else{console.log(location,"locatiooonn______"); res.status(200).send({location})}
    }
}
  )
}

  module.exports={
    getAssistantLoc,   
      saveAssistantloc,
      updateAssistantSocket,
      getNearbyDriver
  }