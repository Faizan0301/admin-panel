const userAuth=(req,res,next)=>{
    const age=req.query.age
    if(age>=18){
        next()
    }else{
      return res.send("not allow")
    }
}
module.exports=userAuth