const express=require('express')
// const db= require('./data')
// const bodyParser=require('body-parser')

const welcomeRouter=require("./router/welcome-router")


const port = 3333

const server=express()
server.use(welcomeRouter)

server.use(express.json())


// server.listen(port,()=>{
//     console.log(`Server listening@port:${port}`)
// })
module.exports=server