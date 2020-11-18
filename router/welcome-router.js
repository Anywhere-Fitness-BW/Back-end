const express = require("express")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json({
			message: `Welcome ${process.env.COHORT}`,
			desc:process.env.DESCRIBE || "No Description"
        })
        next()
	} catch (err) {
		next(err)
	}
})

module.exports = router