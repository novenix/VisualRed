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

  module.exports={
    getAssistantLoc,   
      saveAssistantloc
  }