const router = require("express").Router()
let User = require("../models/user.model")

console.log("checker_line")
router
	.route("/")
	.get((req, res) => {
		console.log("kyuuauau")
		User.find()
			.then((users) => res.json(users))
			.catch((err) => res.status(400).json("Error: " + err))
	})
	.post((req, res) => {
		console.log(`REquest received boyss for ${req.username} ladd!`)
		const { username, pwd, name } = req.body
        const newUser = User({ username, pwd, name })
        if (!(username && pwd)) {
            res.status(400).json("Error, incomplete details")
            res.end("not gonna work")
		}
	

		newUser
			.save()
			.then(() => res.json(`user ${username} has been added `))
			.catch((err) => {
				console.log("something bad happend", err)
				res.status(400).json("Error: " + err)
			})
	})

router.route("/:id").get((req, res) => {
	User.find({ username: req.params.id })
		.then((result) => {
			console.log(result)
			res.json(result)
		})
		.catch((err) => console.log(err))
})

module.exports = router
