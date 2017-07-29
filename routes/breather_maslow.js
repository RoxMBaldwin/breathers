const express = require('express')
const router = express.Router()
const queries = require('../queries')
const knex = require('knex')

router.get('/meatdecoy/', (request, response) => {
  queries.getAll()
  .then(function(maslow){
    response.json(maslow)
  })
})

router.get('/meatdecoy/:id', (request, response) => {
  queries.getById(request.params.id)
  .then(data =>{
    response.json(data)
  })
})

router.post('/meatdecoy/', (request, response) => {
  var body = request.body
  queries.postNew(body)
  .then(function(message){
  response.json({message:'made new'})
  })
})

router.delete('/meatdecoy/:id', (request, response) => {
  queries.deletePost(request.params.id)
  .then(function(message) {
    response.json({message: "ANOTHER ONE BITES THE DUST"})
  })
})

router.put('/meatdecoy/:id', (request, response) => {
  queries.addPost(request.element)
  .then(function(message){
    response.json({message:"new thingy"})
  })
})

module.exports = router
