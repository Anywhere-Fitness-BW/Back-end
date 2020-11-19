
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


server.use("/api/auth",logger,authRouter)
server.use("/api/",logger, userRouter)
server.get("/",logger,welcomeRouter)
<<<<<<< HEAD

=======
server.get("/client",logger, userRouter)
server.get("/instructor",logger, instructorRouter)
>>>>>>> 6151a59d11a0d7750e14d57021f054eb86b0a311

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