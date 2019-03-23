const Assistant=require('../models/assistant')
const getAssistant=(req,res)=>{
      
  Assistant.find({},(err,allBooks)=>{
        console.log("entra")
      if (err){
        return res.status(422).send(err);
      }
      return res.json(allBooks);

    })
    
    
  }
  const saveAssistant=(req,res)=>{
    const assistantData =req.body;
    console.log(assistantData,"lo que llega alserver")
    const assistant=new Assistant(assistantData);

    assistant.save((err,createdAssistant)=>{
      if(err){
        return res.status(422).send(err);

      }
      return res.json(createdAssistant);
    })
  }

  module.exports={
    getAssistant,   
      saveAssistant
  }