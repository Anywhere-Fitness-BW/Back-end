
const express=require('express')
const helmet = require("helmet") 
const cors=require('cors')

const restricted=require('./middleware/restricted')

//--------------------------------------------------------
//routers
const welcomeRouter=require("./router/welcome-router")
const authRouter=require("./router/auth-router")
const userRouter=require("./router/client-router")
const instructorRouter =require("./router/instructors-routers")


//--------------------------------------------------------
const server=express()

// server.use(helmet());
 server.use(cors());
server.use(express.json())
server.use(logger)
server.use(cors())
server.use(helmet())

// server.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.JWT_SECRET || "Secret word",
//   })
// );
// server.use(logger)
// server.use(helmet())


server.use("/api/auth",logger,authRouter)

server.get("/",logger,welcomeRouter)
server.get("/client",logger, userRouter)
server.get("/instructor",logger, instructorRouter)

// server.use((err, req, res, next) => {
// 	console.log(err)
// 	res.status(500).json({
// 		message: "Something went wrong",
// 	})
// })
module.exports=server


// logger middleware
function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
        'Origin'
      )}`
    );
  
    next();
  }