const express = require('express')
const router = express.Router()
const queries = require('../queries')
const knex = require('knex')

router.get('/meatdecoy', (request, response) => {
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


module.exports = router
