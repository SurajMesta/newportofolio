const express=require('express')
const app=express()
const path=require('path')
const PORT=process.env.PORT || 5000

app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","porto.html"))
})


app.listen(()=>{
    console.log(`Server started at PORT ${PORT}`)
})