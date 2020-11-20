<<<<<<< HEAD
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const inst_db = require ("../model/instructor_model")
const { restrict} = require("../middleware/restricted")
const {checkInInstructor} = require("../middleware/restricted")

const router = express.Router()

//api/instructor
// router.use(checkInInstructor);


router.get("/instructor" ,async (req, res, next) =>{
    try{
        const instructor = await inst_db.find()
        res.json(instructor)
    }catch(err){
        next(err)

    }
})

router.post("/", (req,res)=>{
	const data =req.body;
	inst_db.addClass(data)
	.then(classes =>{
		res.status(200).json({data:classes});
	})
	.catch(err=>{
		res.status(500).json({message: "can't add",error: err.message})
	})
})

router.delete('/:id', (req, res) => {
	const {id} = req.params;
=======
// const express = require("express")
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const inst_db = require ("../model/instructor_model")
// const { restrict} = require("../middleware/restricted")
// const {checkInInstructor} = require("../middleware/instructor-mware")

// // const router = express.Router()

// // //api/instructor
// // router.use(checkInInstructor);


// // router.get("/instructor" ,async (req, res, next) =>{
// //     try{
// //         const instructor = await inst_db.find()
// //         res.json(instructor)
// //     }catch(err){
// //         next(err)

// //     }
// // })

// // router.post("/", (req,res)=>{
// // 	const data =req.body;
// // 	inst_db.addClass(data)
// // 	.then(classes =>{
// // 		res.status(200).json({data:classes});
// // 	})
// // 	.catch(err=>{
// // 		res.status(500).json({message: "can't add",error: err.message})
// // 	})
// // })

// // router.delete('/:id', (req, res) => {
// // 	const {id} = req.params;
>>>>>>> 84102ffb1ad8b57b6ec7cd5ee8eaf73d92a95cb2
  
// // 	inst_db.removeClass(id)
// // 	  .then(clas => {
// // 		if (clas) {
// // 		  res.status(200).json({data: clas, message: 'class deleted'});
// // 		} else {
// // 		  res.status(404).json({error: ' incorrect id'});
// // 		}
// // 	  })
// // 	  .catch(err => {
// // 		res.status(500).json({message: 'Error'});
// // 	  });
// //   });


// // // router.post("/register", async (req, res, next) => {
// // // 	try {
// // // 		const { username, password } = req.body
// // // 		const instructor = await inst_db.findBy({username}).first()

// // // 		if (instructor) {
// // // 			return res.status(409).json({
// // // 				message: "Username is already taken",
// // // 			})
// // // 		}

// // // 		const newInstructor = await inst_db.add({
// // // 			username,
// // // 			// hash the password with a time complexity of "14"
// // // 			password: await bcrypt.hash(password, 14),
// // // 		})

// // // 		res.status(201).json(newInstructor)
// // // 	} catch(err) {
// // // 		next(err)
// // // 	}
// // // })

// // // router.post("/login", async (req, res, next) => {
// // // 	try {
// // // 		const { username, password } = req.body
// // // 		const instructor = await Users.findBy({username}).first()
		
// // // 		if (!instructor) {
// // // 			return res.status(401).json({
// // // 				message: "Invalid Credentials",
// // // 			})
// // // 		}

// // // 		// hash the password again and see if it matches what we have in the database
// // // 		const passwordValid = await bcrypt.compare(password, instructor.password)

// // // 		if (!passwordValid) {
// // // 			return res.status(401).json({
// // // 				message: "Invalid Credentials",
// // // 			})
// // //         }
// // //         const token = jwt.sign({
// // // 			instructor_id: instructor.id,
// // // 			username: instructor.username,
// // //         },process.env.jwt_SECRET)
// // //         res.cookie("token",token)
// // // 		res.json({
// // // 			message: `Welcome ${instructor.username}!`,
			
// // // 		})
// // // 	} catch(err) {
// // // 		next(err)
// // // 	}
// // // })
 
// // // router.get("/:id/classes", async (req,res, next)=> {
// // //     try{
// // //         const instructor= await inst_db.findInsClasses(req,params.id)
// // //         res.status(200).json(instructor)
// // //     }catch(err){
// // //         next(err)

// // //     }
// // // })
// // module.exports = router