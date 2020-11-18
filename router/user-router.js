const router = require("express").Router()
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
const db = require ("../model/user-model")
const { restrict } = require("../middleware/restricted")

const router = express.Router()

router.get("/users", restrict(), async (req, res, next) => {
	try {
        const users = await db.find()
        res.json(users)
	} catch(err) {
		next(err)
	}
})
module.exports = router