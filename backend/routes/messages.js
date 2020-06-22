const router = require('express').Router()
let Message = require('../models/message.model')

router.route('/').get((req, res) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const { sender, recipient, content } = req.body
    const newMessage = Message({sender, recipient, content})

    newMessage.save()
        .then(() => res.json(`Message ${content} has been added `))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req,res) => {
    Message.find( {recipient: req.params.id} )
        .then(messages => {
            res.json(messages)
        })
        .catch(err => console.log(err))
})

module.exports = router