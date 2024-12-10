const express=require('express')
const app=express()

app.listen(3000,()=>{
    console.log("running..")
});

app.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("helol")
})