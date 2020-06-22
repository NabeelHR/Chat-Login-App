const router = require('express').Router()
let User = require('../models/user.model')

console.log("checker_line")
router.route('/').get((req, res) => {
    console.log("kyuuauau")
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    User.find( {username: req.params.id} )
        .then(result => {
            res.json(result)
        })
        .catch(err => console.log(err))

})

router.route('/add').post((req,res) => {

    const { username, pwd } = req.body
    const newUser = User({username, pwd})

    newUser.save()
        .then(() => res.json(`user ${username} has been added `))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router